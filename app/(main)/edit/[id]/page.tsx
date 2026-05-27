import EditTaskForm from "@/app/components/EditTaskForm/EditTaskForm"
import { TaskDocument, TaskModel } from "@/app/src/models/task"
import { connectDb } from "@/app/src/units/database"
import { cookies } from "next/headers"
import { adminAuth } from "@/app/lib/firebase-admin"
import { redirect } from "next/navigation"

type Params = {
  params: Promise<{ id: string }>
}

const getUserId = async (): Promise<string> => {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get("session")?.value
  if (!sessionCookie) redirect("/")
  const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true)
  return decodedClaims.uid
}

const getTask = async (id: string): Promise<TaskDocument> => {
  await connectDb()
  const userId = await getUserId()
  const task = await TaskModel.findOne({ _id: id, userId })
  if (!task) redirect("/all")
  return task
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