import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";


const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    console.log(tasks)
    return (
        <div className='max-w-7xl mx-16'>
            <h2>This is task list {tasks.length}</h2>
        </div>
    );
};

export default Tasks;