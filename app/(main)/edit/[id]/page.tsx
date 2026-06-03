import EditTaskForm from "@/app/components/EditTaskForm/EditTaskForm"
import { TaskDocument, TaskModel } from "@/app/src/models/task"
import { connectDb } from "@/app/src/units/database"
import { redirect } from "next/navigation"
import getUserId from "@/app/lib/auth"
type Params = {
  params: Promise<{ id: string }>
}

const getTask = async (id: string): Promise<any> => {
  await connectDb()
  const userId = await getUserId()
  const task = await TaskModel.findOne({ _id: id, userId }).lean()
  
  if (!task) redirect("/all")
  
  
  return {
    ...task,
    _id: task._id.toString(),
    userId: task.userId?.toString(), 
   
    createdAt: task.createdAt ? new Date(task.createdAt).toISOString() : undefined,
    updatedAt: task.updatedAt ? new Date(task.updatedAt).toISOString() : undefined,
    dueDate: task.dueDate ? new Date(task.dueDate).toISOString() : undefined,
  }
}
const EditTaskPage = async ({ params }: Params) => {
  const { id } = await params
  const task = await getTask(id)
  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className='text-center text-2xl font-bold'>Edit Task</h2>
    
      <EditTaskForm task={task} />
    </div>
  )
}
export default EditTaskPage