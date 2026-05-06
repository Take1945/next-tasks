'use client';
import { FormState,createTask } from "@/app/src/actions/Task";
import {  useFormStatus } from "react-dom";
import { useActionState } from "react";

const NewTaskForm = () => {
  const inputClass = "block mt-1 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300";
  const labelClass = "block text-sm font-medium";
  const initialState:FormState={error:''};
  const[state,formAction]= useActionState(createTask,initialState)
  const {pending}=useFormStatus()
return (
    <div className='mt-10 mx-auto w-full max-w-sm'>
      <h2 className='mb-6 font-bold text-center'>New Task</h2>
      <form action={formAction} className="space-y-4">
        {/* タイトル */}
        <div>
          <label htmlFor="title" className={labelClass}>タイトル</label>
          <input type="text" id='title' name='title' required className={inputClass} />
        </div>

        {/* 説明 */}
        <div>
          <label htmlFor="description" className={labelClass}>説明</label>
          <input type="text" id='description' name='description' required className={inputClass} />
        </div>

        {/* 期限 */}
        <div>
          <label htmlFor="dueDate" className={labelClass}>期限</label>
          <input type="date" id='dueDate' name='dueDate' min="2020-01-01" max="2999-12-31" required className={inputClass} />
        </div>

 
       <button type='submit'disabled={pending} className="mt-2 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-black text-sm font-semibold shadow-sm transition">
          {pending? "Loading...":"Create"}
        </button>
      </form>
    </div>
  );
};

export default NewTaskForm;
