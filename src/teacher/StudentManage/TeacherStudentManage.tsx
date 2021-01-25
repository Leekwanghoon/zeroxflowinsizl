import React, { useEffect, useState } from 'react';
import styles from './TeacherStudentManage.module.css';
import Navigation from '../../components/Navigation';
import Button1 from '../../utils/Button1';
import InputWithImage from '../../utils/InputWithImage/InputWithImage';
import TeacherTableModule from '../TeacherUtils/Table/TeacherTableModule';
import { getStudentList } from '../../utils/Function/AsyncFunction';


interface Props {
    cookieValue: Array<string>;
}

interface DataProps {
    email:string
}

const TeacherStudentManage = ({cookieValue}:Props) => {

    const [page,setPage] = useState<number>(1);
    const [tab, setTab] = useState<number>(0); // 0전체 //과제별보기
    const [Sort, setSort] = useState<number>(0); // 0전체 //과제별보기
    const [KeyWord, setKeyWord] = useState<string>(""); // 0전체 //과제별보기
    const [IsClick, setIsClick] = useState<boolean>(false); // 0전체 //과제별보기

    const [DummyData1, setDummyData] = useState<DataProps[]>([]);
    let cookie = cookieValue[1];
   
    useEffect(() => {
        getStudentList(cookie,tab,page,Sort,KeyWord).then(function(data) {
            if(data.status === 200) {
                setDummyData(data.data.students);
            }
        })
    },[Sort,page,tab,cookie,IsClick])

    const SearchHandler = () => {
        setIsClick(!IsClick);
    }

    const SortChange = (sort:number) => {
        setSort(sort);
    }

    const ChangeTab = (tab:number) => {
        setTab(tab);
    }
    
    const ChangekeyWord = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyWord(e.target.value);
    }

    //enter
    const EnterHandleKeyPress = (e:any) => {
        if (e.key === "Enter") {
            SearchHandler();
          }
    }

    if(tab === 0) {
        return(
            <>
                <Navigation />
                <div className={styles.Wrapper}>
                    <div className={styles.Title}>
                        <div className={styles.TitleFont}>학생관리</div>
                        <div className={styles.HeaderTitle}>
                            <span onClick={() => ChangeTab(0)}>전체</span>
                            <span onClick={() => ChangeTab(1)}>과제별보기</span>
                        </div>
                    </div>
                    <div className={styles.SearchSection}>
                        <InputWithImage onKeyPress={EnterHandleKeyPress} Keyword={KeyWord} onChange={ChangekeyWord} />
                        <Button1 borderRadius="5px" size="70pt" heightSize="35pt" color="rgb(112, 112, 112)" text="검색" onClick={SearchHandler} />
                    </div>
                    <div className={styles.TableRegion}>
                        <TeacherTableModule SortChange={SortChange} setPage={setPage} data={DummyData1} />
                    </div>
                </div>
            </>
        );
    } else if(tab === 1) {
        return(<div>과제별보기</div>)
    } else {
        return(<div>Error</div>)
    }
}

export default TeacherStudentManage;