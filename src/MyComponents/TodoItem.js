import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
	let style = {
		"borderBottom": "1px solid gray"
	}
	return (<div className='py-4' style={style} >
		<h4>{todo.title}</h4>
		<p>{todo.desc}</p>
		<button className="btn btn-danger sm" onClick={()=>{onDelete(todo)}}>Delete</button>
	</div>)
}
