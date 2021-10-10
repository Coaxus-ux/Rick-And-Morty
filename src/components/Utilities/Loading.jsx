import React from 'react';
import LoadImg from '../../img/loadImg.png'
const Loading = () => {
    return ( 
        <div className="containerLoad">
            <img className="loadingImg" src={LoadImg} alt="load"/>
        </div>
     );
}
 
export default Loading;