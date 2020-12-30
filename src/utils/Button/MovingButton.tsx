import React from 'react';
import './MovingButton.scss';

type Props = {
    hidden?: boolean
}


const MovingButton:React.FC<Props> = ({hidden}) => {
    console.log(hidden,"hidden");
    return(
        <>
            <label className="chkbx">
                <input type="checkbox" />
                <span className="x"></span>
            </label> 
        </>
    );
}


export default MovingButton;