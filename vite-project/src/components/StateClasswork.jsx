import React, { useEffect, useState } from 'react'

export default function StateClasswork() {
    const [task,setTask] = useState()
    const [tasks,setTasks] = useState(()=>{
        let savedTasks = JSON.parse(localStorage.getItem('tasks'))
        return savedTasks ? savedTasks : [{taskName: "Гүл суару", completed:true},{taskName: "Күнделікті үй тапсырмасын орындау", completed:false}]
    })
    const [filter, setFilter] = useState('all')
    
    // useEffect(()=>{
    //     let savedTasks = JSON.parse(localStorage.getItem('tasks'))
    //     if(savedTasks){ 
    //         setTasks(savedTasks)
    //     }
    // },[])

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])
    
    function handleSubmit(e){
        e.preventDefault();
        if(!task || task.trim() == "") return
        setTasks([...tasks, {taskName: task, completed:false}])
        setTask('')
    }
    
    function handleChange(id){
        setTasks(tasks.map((task,index)=>
            index == id ? {taskName: task.taskName, completed: !task.completed} : {...task}
        ))
    }

    const handleRemove = (id)=>{
        setTasks(tasks.filter((task,index)=> index!=id))
    }

    const filteredTasks = tasks.filter((task,index)=>{
        if(filter == "all"){
            return true
        }else if(filter == "complete"){
            return task.completed
        }else if(filter == "incomplete"){
            return !task.completed
        }
    })

    
    
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={task} type="text" onChange={(e)=>setTask(e.target.value)}/>
            <button type='submit'>Qosu</button>
        </form>

        <div className='filter-box'>
            <button onClick={()=>setFilter('all')}>All</button>
            <button onClick={()=>setFilter('complete')}>Complete</button>
            <button onClick={()=>setFilter('incomplete')}>Incomplete</button>
        </div>
    
        <ul>
            {filteredTasks.map((tapsyrma, index)=>{
                return <li key={index}>
                            <div>{tapsyrma.taskName}</div> 
                            <div className='btn-box'>
                                {tapsyrma.completed ? 
                                <button onClick={()=>handleChange(index)} style={{color:"green"}}>✔ </button>
                                : 
                                <button onClick={()=>handleChange(index)}>❌</button>}
                                
                                {<button onClick={()=>handleRemove(index)}>🗑️</button>}
                            
                            </div> 
                        </li>
            })}
        </ul>
    </div>
  )
}
