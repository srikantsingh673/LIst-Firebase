import React from 'react'
import '../App.css'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const Field = () => {

    const [inputData, setinputData] = useState(' ');
    const [items, setItems] = useState([]);

    const addItem = async (e) => {
        e.preventDefault()
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setinputData('')
        }
        const res = await fetch('https://list-68d28-default-rtdb.firebaseio.com/list_data.json',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                items,
            })
        }
        );

    }

    const deleteItem = (id) => {
        const updateditems = items.filter((elem, ind) => {
            return ind !== id;
        })
        setItems(updateditems);
    }
    return (
        <div className='Main'>

            <div className='ShowItem'>
                {
                    items.map((elem, ind) => {
                        return (
                            <div className='EachItem' key={ind}>
                                {elem}
                                <i id='Arrow' class="fa-solid fa-angle-up"></i>
                                <i id='Arrow' class="fa-solid fa-angle-down"></i>
                                <i className='Del' class="fa-solid fa-xmark" onClick={() => deleteItem(ind)}></i>
                                
                                
                            </div>

                        )

                    })
                }

            </div>
            <br />

            <div className='Child'>
                <form>
                    <input className='Input' type='text' placeholder='Type Here'
                        value={inputData}
                        onChange={(e) => setinputData(e.target.value)} />
                    <Button type='submit' className='Button' onClick={addItem}>Add</Button>
                </form>
            </div>
        </div>

    )
}

export default Field