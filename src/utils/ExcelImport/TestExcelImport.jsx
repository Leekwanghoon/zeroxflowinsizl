import React, { useState,useEffect } from 'react';
import XLSX from 'xlsx';
import { make_cols } from './MakeColumn';
import { SheetJSFT } from './Types';

function TestExcelImport({setData,setIsClickImport,isClickImport}) {


    const [ExcelData, setExcelData] = useState([]);
    const [CompleteHandleChange, setCompleteHandleChange] = useState(false);

    console.log(ExcelData,"ExcelData");

    const [state,setState] = useState({
        file:{},
        data:[],
        cols:[]
    });

    const handleChange = (e) => {
        console.log(e,"어딧는거누");
        console.log(e.target.files);
        const files = e.target.files;
        console.log(files[0],"files[0");
        if( files && files[0]) {
            setState({file:files[0],data:[],cols:[]});
        }
        setCompleteHandleChange(true);
        
    }


    const handleFile = () => {
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;

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
            setState({...state,data: data, cols: make_cols(ws['!ref'])});
            console.log("이게먼져냥50",state);
            
            // const JSonData = JSON.stringify(state.data,null,2);
            // console.log(JSonData,"json")
        };

        if (rABS) {
            console.log(state.file,"state.file");
            reader.readAsBinaryString(state.file);
            console.log("이게먼저냐아래",state);
            // setIsClickImport(false);
        } else {
            console.log(state.file.File,"state.file");
            reader.readAsArrayBuffer(state.file);
        };
    }

    if(CompleteHandleChange) {
        handleFile();
    }

    console.log(state.data);
    
    
    if(state.data.length !== 0) {
        setData(ExcelData);
    }

    useEffect(() => {
        if(state.data.length !== 0) {
            setExcelData(state.data);
        }
        console.log("TestuseEffect");
        //만약 원상태하고싶으면 그 뭐냐 setIsClickImport빼버려
    },[state.data])


    return (
        <div style={{display:'none'}}>
          <br />
          <input type="file" className="form-control" id="excelFile" accept={SheetJSFT} onChange={handleChange} />
          <br />
          <input type='submit' 
            value="Process Triggers"
            onClick={handleFile} />
        </div>
      )
}

export default TestExcelImport;