import { useState, useEffect } from "react";
import { WelcomeSection } from "@/features/dashboard/components/WelcomeSection";
import { Card } from "@/components/ui/Card";
import TaskList from "@/features/dashboard/components/TaskList";
import type { Task } from "@/features/dashboard/types";
import { MenuItem, Select } from "@mui/material";
import { ProjectCard } from "../../projects/ProjectCard";
import type { Project } from "@/features/projects/types";
import projectData from "@/features/projects/ProjectData";
export default function DashboardPage() {

type TaskFilter = "all" | "completed" | "pending";

const [filter, setFilter] = useState<TaskFilter>("all");

const mockTasks: Task[] = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
];

const mockProjects: Project[] = projectData;


const [tasks, setTasks] = useState<Task[]>(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : mockTasks;
});

const filteredTasks = tasks.filter((task) => {
  if (filter === "completed") return task.completed;
  if (filter === "pending") return !task.completed;
  return true;
});

const handleTaskClick = (id: number) => {
  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    ),
  );
};

const handleEditTask = (id: number, title: string) => {
   setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === id ? { ...task, title } : task,
    ),
  );
};

const handleAddTask = (title: string) => {
  setTasks((currentTasks) => [
    ...currentTasks,
    { id: Date.now(), title, completed: false },
  ]);
  setFilter("all");
};

const handleDeleteTask = (id: number) => {
  setTasks((currentTasks) =>
    currentTasks.filter((task) => task.id !== id),
  );
};

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  return (
     
      <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12">
        <WelcomeSection name="Nikola" />

        {/* Ovde ćemo dodati ostale dashboard komponente */}

       <Select value={filter} onChange={(event) => setFilter(event.target.value as TaskFilter)}>
            <MenuItem value="all">All Tasks</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
        </Select>
        <Card title="My Tasks" className="mb-6">
           {/* traka napretka zadataka */}
            <div className="mb-4 h-2 w-full rounded-full bg-gray-200">
                <div
                    className="h-full rounded-full bg-[#6553C7]"
                    role="progressbar"
                    style={{ width: `${tasks.length === 0 ? 0 : (tasks.filter(task => task.completed).length / tasks.length) * 100}%` }}
                ></div>
            </div>
            <p className="mb-4 text-sm text-gray-600">
                {tasks.filter(task => task.completed).length} of {tasks.length} tasks completed
            </p>

            <TaskList tasks={filteredTasks} onTaskClick={handleTaskClick} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask}/>
        </Card>
        <Card title="My Projects">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mockProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Card>
        
        
      </main>

  );
}