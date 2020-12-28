import React,{useState, useEffect} from 'react';
import axios from 'axios';


interface SchoolName {
    pk: number,
    name: string
}

interface Register {
    name: string,
    authority: number,
    organization: string,
    email?:string,
    password?:string,
    grade?:number,
    classroom?:number,
    tag?:number
}



// interfaca in {
//     value:string,
//     onClick:function => void
// }

// const Register:React.FC<in> = ({onClick, value}) => {

// }



const Register = (props:any) => {
    let a = {
        pk:0,
        name:""
    }
    let body:Register = {
        name:"",
        authority: 0,
        organization: "",
        email:"",
        password:"",
    }
    
    const [name, setName] = useState<string>("");
    const [authority, setAuthority] = useState<number>(0);
    const [organization, setOrganization] = useState<string>("");
    const [Next, setNext] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [View, setView] = useState<SchoolName[]>([a]);
    const [members, setMembers] = useState<Register[]>([body]);

    console.log(View,"하나");
    console.log(members,"멤버");

    useEffect(() => {
        axios.get(`https://1hour.school/search?keyword=${organization}`).then(response => {
            if(response.data.status) {
                console.log(response.data.data);
                setView(response.data.data);
            }
        })
    },[organization])


    //학생
    const onRegisterNext = (e: React.FormEvent<HTMLFormElement> & React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log("눌림");
        let body = {
            name,
            authority,
            organization,
            email:"",
            password:""
        }
        setMembers([body]);
        setNext(false);

    }
    const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onClickTeacher = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("안눌리냐");
        console.log(authority,"뭐냐너");
        setAuthority(1);
        console.log(authority,"아래거");
    }

    const onClickStudent = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAuthority(2);
    }
    const onChangeOrganization = (e:React.ChangeEvent<HTMLInputElement>) => {
        setOrganization(e.target.value);
    }

    const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }


    //선생
    const RegisterSubmit = (e: React.FormEvent<HTMLFormElement> & React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        let authority = 1;
        let body = {
            name,
            authority,
            organization,
            email,
            password
            
        }
        setMembers([body]);
        console.log("누름");
        axios.post(`https://1hour.school/user/register`, body)
            .then(response => {console.log(response.data)});
    }

    return(
        <>
        {Next ? 
            <div style={{ height: '100vh', display:'flex', justifyContent:'center', flexDirection: 'column', alignItems:'center'}}>
            <label>가입하기-프로필 정보</label>
            <form>
                <label>이름*</label>
                <br />
                <input
                    onChange={onChangeName}
                    value={name}
                />
                <br />
                <label>회원구분*</label>
                <br />
                <button type="button" onClick={()=>{
                    console.log("asdasd");
                }}>선생님</button>
                <button type="button" onClick={onClickStudent}>학생</button>
                <br />
                <label >학교 또는 학원 이름 입력하기*</label>
                <br />
                <input 
                    onChange={onChangeOrganization}
                    value={organization} 
                />
                {View && View.map((view) => (
                    <div key={view.pk}>{view.name}</div>
                ))}
                <br />
                <button onClick={onRegisterNext}>다음</button>
            </form>
        </div>
            :
            <div style={{ height: '100vh', display:'flex', justifyContent:'center', flexDirection: 'column', alignItems:'center'}}>
            <label>가입하기-로그인 정보</label>
            <form onSubmit={RegisterSubmit}>
                <label>이메일 주소*</label>
                <br />
                <input
                    type="email"
                    onChange={onChangeEmail}
                    value={email} 
                />
                <br />
                <br />
                <label>비밀번호*</label>
                <input
                    type="password"
                    onChange={onChangePassword}
                    value={password} 
                />
                <button onClick={RegisterSubmit}>가입하기</button>
            </form>
        </div>
        }
        </>
    );
}

export default Register;