import React,{useState} from 'react';

//https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67
const PrototypeTest = () => {
    

    // function Person() {}
    // Person.prototype.eyes = 2;
    // var personObject = new Person();

    // console.log(Person.prototype);

    // console.log(personObject.eyes);
    // console.log(personObject);
    


    // var test = new Object();
    // console.log(Object.prototype);



    //spread연산자

    const [data,setData] = useState({
        a:1,
        b:2,
        newArray:[1,2,3,{In:false}],
        d:4
    })



    console.log(data);
    const ChangeHandler = () => {
        setData({...data,a:3,b:4,newArray:[0,...data]}); 
    }

    return(
        <div onClick={ChangeHandler}>얍</div>
    );
}

export default PrototypeTest;