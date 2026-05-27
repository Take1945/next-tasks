import TaskCard from "@/app/components/TaskCard/TaskCard"
import { TaskDocument, TaskModel } from "@/app/src/models/task"
import { connectDb } from "@/app/src/units/database"

const getAllTasks = async (): Promise<TaskDocument[]> => {
  await connectDb()
  const allTasks = await TaskModel.find()
  return allTasks
}

const CompletedTaskPage = async () => {
  const allTask = await getAllTasks()
  const filterAlltask = allTask.filter((task) => task.isCompleted === true)

  return (
    <div className='text-gray-800 p-8 h-full overflow-y-auto pb-24'>
      <header className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Completed Tasks</h1>
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
