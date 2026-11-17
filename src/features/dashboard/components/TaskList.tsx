import type { Task } from "@/features/dashboard/types";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    onTaskClick: (id: number) => void;
    onAddTask: (title: string) => void;
    onDeleteTask: (id: number) => void;
    onEditTask: (id: number, title: string) => void;
}

export default function TaskList({ tasks, onTaskClick, onAddTask, onDeleteTask, onEditTask }: TaskListProps) {
   
    return (
        <>
            <div>
               <TaskForm onAddTask={onAddTask} />
            </div>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
            <ul>
                {tasks.map((task) => (
                     <TaskItem key={task.id} task={task} onClick={onTaskClick} onDelete={onDeleteTask} onEdit={onEditTask} />
                ))}
            </ul> 
            )}
        </>
    );
}