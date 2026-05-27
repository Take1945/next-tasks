import EditTaskForm from "@/app/components/EditTaskForm/EditTaskForm"
import { TaskDocument } from "@/app/src/models/task";
import { cookies } from "next/headers";
type Params= {
    params:Promise<{id:string}>;
}
const getTask = async(id:string):Promise<TaskDocument>=>{
  const cookieStore =await cookies()
const response =await fetch(`${process.env.API_URL}/tasks/${id}`,{
     headers:{
     Cookie: cookieStore.getAll().map(c => `${c.name}=${c.value}`).join('; ')
  },
})
const data =await response.json();
return data.task as TaskDocument;
}

const EditTaskPage = async ({params}:Params) => {
    const {id}=await params
    const task = await getTask(id);
  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className='text-center text-2xl font-bold'>Edit New Task</h2>
    <EditTaskForm task={task}/>  </div>
  )


  
}

export default EditTaskPage