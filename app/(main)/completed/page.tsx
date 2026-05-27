import TaskCard from "@/app/components/TaskCard/TaskCard"
import { TaskDocument, TaskModel } from "@/app/src/models/task"
import { connectDb } from "@/app/src/units/database"
import { cookies } from "next/headers"
import { adminAuth } from "@/app/lib/firebase-admin"
import { redirect } from "next/navigation"
 
const getUserId = async (): Promise<string> => {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get("session")?.value
  if (!sessionCookie) redirect("/")
  const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true)
  return decodedClaims.uid
}
 
const getAllTasks = async (): Promise<TaskDocument[]> => {
  await connectDb()
  const userId = await getUserId()
  const allTasks = await TaskModel.find({ userId })
  return allTasks
}
 
const CompletedTaskPage = async () => {
  const allTask = await getAllTasks()
  const filterAlltask = allTask.filter((task) => task.isCompleted === true)
 
  return (
    <div className='text-gray-800 p-8 h-full overflow-y-auto pb-24'>
      <header className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold flex items-center'>Completed Tasks</h1>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        {filterAlltask?.map((task) => task &&
          <TaskCard key={task._id.toString()} task={task} />
        )}
      </div>
    </div>
  )
}
 
export default CompletedTaskPage