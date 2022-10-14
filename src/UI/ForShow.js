import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Remove,Edit} from "../component/slider/TodoSlider";

const ForShow = () => {
    const {todo} = useSelector(state => state)
    const dispatch = useDispatch()
    const handleDelete = (id)=>{
        // Remove(dispatch , {id})
        dispatch(Remove({id}))
    }
    const handleEdit = (id)=>{
        const editData = {
            name :prompt("enter the name"),
            phone:prompt('Phone Number')
        }
        dispatch(Edit({id, editData}))
    }

    return (
        <div className='space-y-2'>
            {
                todo.map(e=>{
                    return(
                        <div key={e.id}>
                            <p> Name is {e.name}</p>
                            <p>Phone is {e.phone}</p>
                            <button onClick={()=>handleDelete(e.id)} type="button"
                                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">del</button>
                            <button onClick={()=>handleEdit(e.id)} type="button"
                                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">edit</button>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default ForShow;