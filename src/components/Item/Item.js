
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../storage code/fakedb';
import List from '../List/List';
import Things from '../Things/Things';
import './Item.css'

const Item = () => {
     const [ zyms,setZym] = useState([]);
     const [ list,setList] = useState([]);
    
     useEffect( () => {
        fetch('zyms.json')
        .then(res=> res.json())
        .then(data=>setZym(data))
      },[]);

      useEffect(()=>{
        const storedList=getStoredCart();
        const savedList=[];
         for(const id in storedList){
            const addedList=zyms.find(zym=>zym.id===id);
            if(addedList){

                const quantity=storedList[id];
                addedList.quantity=quantity;
                savedList.push(addedList);
            }

         }
         setList(savedList);


      },[zyms])
    const handleList = (selectItem) =>{
        let newList=[];
        const exits=list.find(zym=>zym.id === selectItem.id);
        if(!exits){
            selectItem.quantity=1;
            newList=[...list,selectItem];
        }
        else{
            const rest=list.filter(zym=>zym.id !== selectItem.id);
            exits.quantity = exits.quantity +1;
            newList=[...rest,exits]

        }
        setList(newList);
        addToDb(selectItem.id);
        
    }
    
    return (
         
             <div className='full-container'>
                
                <div className='pro-container'>
                
                    {
                        zyms.map( zym=> <Things
                        key={zym.id}
                        zym={zym}
                        handleList={handleList}
                        ></Things>
                        
                        )

                    }     

                </div>
                <div className='list-container'>
                    <List list={list}></List>
                </div>
            </div>
            
            
         
        
    );
};

export default Item;