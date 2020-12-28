import React,{useState} from 'react';


const useInput = (defalutValue: any) => {
    const [value, setValue] = useState<any>(defalutValue);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return {value, setValue, onChange};
}
export default useInput;
