import React,{useState} from 'react';
import InputModule from '../../admin/AdminContentMake/Utils/InputModule';
import PaginationModule from './PaginationModule';


const PaginationIndex = () => {

    const [TotalPage, setTotalPage] = useState<string>("0");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const onChangeTotalChange = (e:any) => {
        setTotalPage(e.target.value);
    }
    console.log(TotalPage,typeof(TotalPage));

    const PageClick = (i:number) => {
        console.log(i,"dkdk");
        setCurrentPage(i);
    }

    return(
        <>
            <PaginationModule PageClick={PageClick} currentPage={currentPage} TotalPage={TotalPage} />
            <InputModule 
                widthSize="100px"
                placeholder="Page수" 
                value={TotalPage}
                onChange={onChangeTotalChange}
            />
        </>
    );
}

export default PaginationIndex;