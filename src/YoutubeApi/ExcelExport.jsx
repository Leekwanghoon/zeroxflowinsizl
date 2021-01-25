import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;




export default function ExcelTest({data}) {
    return(
            <ExcelFile hideElement={true}>
                <ExcelSheet data={data} name="zeroXflow">
                    <ExcelColumn label="eng" value="eng"/>
                    <ExcelColumn label="kor" value="kor"/>
                </ExcelSheet>
            </ExcelFile>
    );
}