'use client'

import { FormState, updateTask } from "@/app/src/actions/Task";
import { TaskDocument } from "@/app/src/models/task";
import{useState} from 'react'
import {  useFormStatus } from "react-dom";
import { useActionState } from "react";
interface EditTaskFormProps {
  task: TaskDocument;
}

const EidtTaskForm: React.FC<EditTaskFormProps> = ({task}) => {
  const[title,setTitle] =useState(task.title);
  const[descripton,setDescription]=useState(task.description);
  const[dueDate,setDueDate] =useState(task.dueDate);
  const[isCompleted,setIsCompleted]=useState(task.isCompleted)
  const inputClass = "block mt-1 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300";
  const labelClass = "block text-sm font-medium";

  const updateTaskWithId =updateTask.bind(null,task._id.toString());
  const initialState:FormState ={error:''} 
  const [state,formAction] =useActionState(updateTaskWithId,initialState)

  
  const SubmitButton = () => {
   const{pending}=useFormStatus();
   return(
    <button type='submit'disabled={pending} className="mt-2 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-black text-sm font-semibold shadow-sm transition disabled:bg-gray-400">
          Create
        </button>
   )
  }
  


  return (
    <div className='mt-10 mx-auto w-full max-w-sm'>
      <h2 className='mb-6 font-bold text-center'>New Task</h2>
      <form action={formAction} className="space-y-4">
        {/* タイトル */}
        <div>
          <label htmlFor="title" className={labelClass}>タイトル</label>
          <input type="text" id='title' name='title' required className={inputClass} value={title}
          onChange={(e)=>setTitle(e.target.value)} />
        </div>

        {/* 説明 */}
        <div>
          <label htmlFor="description" className={labelClass}>説明</label>
          <input type="text" id='description' name='description' required className={inputClass} value={descripton}
           onChange={(e)=>setDescription(e.target.value)}/>
        </div>

        {/* 期限 */}
        <div>
          <label htmlFor="dueDate" className={labelClass}>期限</label>
          <input type="date" id='dueDate' name='dueDate' min="2020-01-01" max="2999-12-31" required className={inputClass}
          value={dueDate}
          onChange={(e)=>setDueDate(e.target.value)} />
        </div>
        <div>
          <div className="mt-6 flex items-center">
            <input type="checkbox" id='isCompleted' name='isCompleted'
            className='mr-2 w-4 h-4'
            checked={isCompleted}
          onChange={(e)=>setIsCompleted(e.target.checked)}/>
            <label htmlFor="isCompleted" className='text-sm'>タスクを完了にする </label>
          </div>
        </div>
     <SubmitButton/>
     {state.error!==''&&(
      <p className='mt-2 text-red-500 text-sm'>{state.error}</p>
     )}
      </form>
    </div>
  )
}

export default EidtTaskForm