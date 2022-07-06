import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let style = {
        "minHeight": "80vh",
        possition: "relative",
    }
	return (<>
        <div className="container py-1 mb-5 pb-5" style={style}>
            <h3 className='text-center my-3'>Todos List</h3>
            {props.todos.length === 0? <><h5>No todos available at the moment</h5></>:
                props.todos.map((todo)=>{
                    return (
                        <TodoItem todo={todo} key={todo.sr} onDelete={props.onDelete}/>
                    )
                })
            }
        </div>
	</>)
}
