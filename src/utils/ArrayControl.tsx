import React,{useState} from 'react';


const Bigdata = [
    {
        kor:'테스트',
        eng:'test',
    },
    {
        kor:'테스트',
        eng:'test',
    },
    {
        kor:'테스트',
        eng:'test',
    },
]

const ArrayControl = () => {
    const [ArrayData,setArrayData] = useState(Bigdata);

    console.log(ArrayData,"ArrayData");


    // function updateArray(myArray:any, oldValue:any, newValue:any) {
    //     if(myArray instanceof Array) return;

    //     const index = myArray.indexOf(oldValue); //index값을 조회
    //     if( index !== -1) { // 없으면 -1
    //         myArray[index] == newValue;
    //     }
    // }




    const onChageData = (e:any,index:any) => {
        console.log(e.target.value,index,"번째누름");
        console.log(ArrayData);
    
        ArrayData.splice(index,1,{kor:e.target.value, eng:ArrayData[index].eng});
        
    }
    return(
        <>
        {ArrayData.map((data,index) => {
            return(
                <div key={index}>
                    <textarea onChange={(e) => onChageData(e,index)} defaultValue={data.kor}></textarea>
                </div>
            );
        })}
        </>
    );
}

export default ArrayControl;