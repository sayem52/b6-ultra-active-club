import React from 'react';
import profile from '../../images/photo_2023-01-18_03-18-05.jpg';
import './List.css';

const List = (props) => {
    const {list} = props;

    let time=0;
    let quantity=0;
    
    for(const zym of list){

        let change=parseInt(zym.time_required);

        quantity=quantity+zym.quantity;

        time = time + change * zym.quantity ;
    }
    const handleBreak = (id) =>{
        const lShow=document.getElementById("s1");
        lShow.innerText=id;
        
    }
    

    return (
        <div className='list'>
            <div className='profile'>
                <div>
                  <img src={profile} alt="" />
                </div>
                <div className='pro-name'>
                    <h4>SAYEM</h4>
                    <p>Bangladesh</p>
                </div>
            </div>
            <div>
                <p>75kg      6.5      25yrs</p>
                <p>Weight    Height    Age</p>
            </div>
            <div >
                <h2>Add A Break</h2>
                <button onClick={()=>handleBreak('10s')} className='btn-break'>
                     <p>10s</p>
                </button>
                <button onClick={()=>handleBreak('20s')} className='btn-break'>
                      <p>20s</p>
                </button>
                <button onClick={()=>handleBreak('30s')} className='btn-break'>
                     <p>30s</p>
                </button>
                <button onClick={()=>handleBreak('40s')} className='btn-break'>
                      <p>40s</p>
                </button>

            </div>
            <div>
               <h2>Exercise Details</h2>
               <p>Exercise time : {time}s</p>
               <p>Break time : <small id='s1'> </small></p>
               <button className='btn-break'>
                  <p>Activity Completed</p>
               </button>
            </div>
        </div>
    );
};

export default List;