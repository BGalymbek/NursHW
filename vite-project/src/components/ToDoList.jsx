import React, { useState } from 'react'

export default function ToDoList() {
    const [task,setTask] = useState()
    const [tasks,setTasks] = useState([
        {taskName: "Гүл суару", completed:true},
        {taskName: "Күнделікті үй тапсырмасын орындау", completed:false}
    ])
        
    function handleSubmit(e){
        e.preventDefault()
        setTasks([...tasks, {taskName: task, completed:false}])
        setTask('')
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={task} type="text" onChange={(e)=>setTask(e.target.value)}/>
            <button type='submit'>Qosu</button>
        </form>
        <ul>
            {tasks.map((tapsyrma, index)=>{
                return <li key={index}>
                            <div>{tapsyrma.taskName}</div> 
                            <div className='btn-box'>
                                {tapsyrma.completed ? <button style={{color:"green"}}>✔ </button>: <button>❌</button>}
                            </div> 
                        </li>
            })}
        </ul>
    </div> 
  )
}
