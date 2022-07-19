import React from 'react'
import { deleteTask } from '../Redax/action'
import { useDispatch } from 'react-redux/es/exports'

const TaskCard = ({task}) => {
    const dispath =useDispatch()
  return (
    <div>
        <h2>{task.action}</h2>
        <button onClick={()=>dispath(deleteTask(task.id))}    >Delete</button>
    </div>
  )
}

export default TaskCard