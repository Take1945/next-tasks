'use client'
import {FaTrashAlt} from 'react-icons/fa';
import { deleteTask,FormState } from '@/app/src/actions/Task';
import { TaskDocument,} from '@/app/src/models/task';
import { useActionState } from 'react';
interface TaskDeleteButton{
    id:string;
}

const TaskDeleteButton:React.FC<TaskDeleteButton> = ({id}) => {
    const initialState:FormState ={error:''} 
  const[_message,formAction] = useActionState( deleteTask.bind(null, id),initialState)
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