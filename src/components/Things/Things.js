import React from 'react';
import './Things.css';

const Things = (props) => {
    const{name,description,age,time_required,img}=props.zym;
    
    return (
        <div >
            <div className='things'>
                <img src={img} alt="" />
                <div className='things-info'> 
                    <h3 className='things-name'>{name}</h3>
                    <p>{description}</p>
                    <h5>For Age: {age}</h5>
                    <h5>Time Required: {time_required}</h5>
                </div>
                <button onClick={()=>props.handleList(props.zym)} className='btn-list'>
                    <p>Add to list</p>
                </button>
            </div>
            
        </div>
        
    );
};

export default Things;