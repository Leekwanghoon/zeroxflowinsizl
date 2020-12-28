import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../_reducers';
import { categoryData, SearchByCategory } from '../../_actions/user_action';

const CategoryHead = styled.select`
    width: 10%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
    font-family: "Helvetica Neue";
    margin-left: 5px;
    margin-right: 1em;
    cursor: pointer;
    border-radius: 10px;
`;

const Text = styled.option`
    font-size:1em;
`;



const CategoryModule = (props:any) => {

    const dispatch = useDispatch();
    const data = useSelector((state:RootState) => state?.user?.category?.data);
    const cookieValue = document.cookie.split('=');

    useEffect(() => {
        dispatch(categoryData(cookieValue[1]));
    },[])


    const [pk,setcategorypk] = useState("");
    const [categoryname, setcategoryName] = useState("");

    const selected = 0;
    
    

    const onClickSomething = (e:any) => {
        setcategorypk(e.target.value);
        setcategoryName(data[e.target.value-1].name);
        const pknum = e.target.value; //pk
        const categoryname = data[e.target.value-1].name;
        dispatch(SearchByCategory(cookieValue[1],selected,pknum));
        props.history.push(`/CourseMoreViewPage?categoriespk=${pknum}&categoriesname=${categoryname}&keyword=&type=CATEGORY`);
    }


    return(
        <>
            <CategoryHead onChange={onClickSomething} value={pk}> 
                <Text>카테고리</Text>
                {data && data.map((item:any, index:any) => {
                    return(
                        <Text value={item.category} key={index}>{item.name}</Text>
                    );
                })}
            </CategoryHead>    
        </>
    );
}

export default withRouter(CategoryModule);