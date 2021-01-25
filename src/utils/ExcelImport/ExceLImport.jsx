import React, { Component } from 'react';
import XLSX from 'xlsx';
import { make_cols } from './MakeColumn';
import { SheetJSFT } from './Types';
 
class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: []
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  };
 
  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    console.log(reader.onload,"reader.onload");
    console.log(rABS,"rABS");
    reader.onload = (e) => {
      /* Parse data */
      console.log("실행");
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      console.log(data,"data",ws,"ws");
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
        console.log(JSON.stringify(this.state.data, null, 2));
      });
      // this.setState(
      //   {
      //     data:data,
      //     cols:make_cols(ws['!ref'])
      //   }
      // );
      console.log(this.state,"this.state");
    };
 
    if (rABS) {
      console.log(this.state.file,"this.state.file");
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    };
  }
 
  render() {
    return (
      <div>
        <label htmlFor="file">Upload an excel to Process Triggers</label>
        <br />
        <input type="file" className="form-control" id="file" accept={SheetJSFT} onChange={this.handleChange} />
        <br />
        <input type='submit' 
          value="Process Triggers"
          onClick={this.handleFile} />
          </div>
    )
  }
}
 
export default ExcelReader;