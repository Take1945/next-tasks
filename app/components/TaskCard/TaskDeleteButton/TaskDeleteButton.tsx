'use client'
import {FaTrashAlt} from 'react-icons/fa';
import { deleteTask,FormState } from '@/app/src/actions/Task';
import { TaskDocument,} from '@/app/src/models/task';
import { useActionState } from 'react';
interface TaskDeleteButton{
    task:TaskDocument
}

const TaskDeleteButton:React.FC<TaskDeleteButton> = ({task}) => {
  const id = task._id.toString()
    const initialState:FormState ={error:''} 
      const deleteTaskWithId = deleteTask.bind(null, id)
  const[message,formAction,isPending] = useActionState( deleteTask.bind(null, id),initialState)
  return (
    <form action={formAction}>
        <button type="submit" className="hover:text-gray-700 text-la 
        cursor-pointer" name='id' value='id'>
<FaTrashAlt/>
        </button>
    </form>
  )
}

export default TaskDeleteButton