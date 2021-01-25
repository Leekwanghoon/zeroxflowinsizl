import React,{ useState } from 'react';

const TimeControl = () => {
    const dummySentence = [
        {
            pk:1, // [dummySentence[0]: {start:"004"}, ...dummySentence]
            start:"00:00:00.000", //=> start:"00:00:04.000" [...dummySentence,dummySentence[0]: {start:"00:00:04.000"}]
            end:"00:00:00.000",
            eng:"one"
        },
        {
            pk:2,
            start:"00:00:00.000",
            end:"00:00:00.000",
            eng:"Test"
        },
    ]

    
    //[0,0]
    const length = dummySentence.length;
    const newArray = Array(length);
    
    
    // const [inputValue, setInputValue] = useState<any>(0);
    const [inputValue, setInputValue] = useState<number[]>(newArray.fill(0,0,length));


    console.log(inputValue);


    const ValueChange = (e:any,index:number) => {
        console.log(e.target.value);
        
        
        //[0,0]
        inputValue[index] = e.target.value;

        setInputValue([...inputValue]);

    }

    const arr1 = [1,2,3,4];

    console.log(arr1[0],"?1");
    return(
        <>
            {dummySentence.map((dummyData:any,index:any) => {
                return(
                    <div key={index}>
                        <div>{dummyData.eng}</div>
                        <input type="number" value={inputValue[index]} onChange={(e) => ValueChange(e,index)} />
                    </div>
                );
            })}
        </>
    );
}

export default TimeControl;