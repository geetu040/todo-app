import React, {useState} from 'react'


export const AddTodo = ({addTodo}) => {

	const [title, setTitle] = useState("")
	const [desc, setDesc] = useState("")
	const submit = (e) => {
		e.preventDefault()
		if (!title || !desc) {
			alert("Title or Description cannot be empty")
		} else {
			addTodo(title, desc)
			setTitle("")
			setDesc("")
		}
	}
	return (
		<div className='container mt-4'>
			<form onSubmit={submit}>
				<h3>Add a Todo</h3>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">Title</label>
					<input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
				</div>
				<div className="mb-3">
					<label htmlFor="desc" className="form-label">Description</label>
					<input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
				</div>
				<button type="submit" className="btn btn-primary">Add Todo</button>
			</form>
		</div>
	)
}