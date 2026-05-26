import TaskCard from '@/app/components/TaskCard/TaskCard';
import { TaskDocument } from '@/app/src/models/task';
import { cookies } from 'next/headers';

const getAllTasks = async():Promise<TaskDocument[]>=>{
  const cookieStore = await cookies
const response =await fetch(`${process.env.API_URL}/tasks`,{
  cache:'no-store',
   headers:{
     Cookie: cookieStore.toString(), 
  },
});
if(response.status!== 200){
  throw new Error()
}
const data = await response.json();
return data.tasks as TaskDocument[];
}



const ExpiredTaskPage = async() => {
  const allTask =await getAllTasks()

  const filterAlltask = allTask.filter((task)=>{
const now =new Date() 
  const dueDate = new Date(task.dueDate)
return (
  now >dueDate && task.isCompleted===false
)
  })
  return (
   <div className='text-gray-800 p-8 h-full overflow-y-auto pb-24'>
  <header className='flex justify-between items-center'>
    <h1 className='text-2xl font-bold flex items-center'>Expired Tasks</h1>
    
  </header>
  <div className='mt-8 flex flex-wrap gap-4'>
    {filterAlltask?.map((task)=>task&&<TaskCard key={task._id.toString()} task={task} />)}
  </div>
</div>
  )
}

export default ExpiredTaskPage
