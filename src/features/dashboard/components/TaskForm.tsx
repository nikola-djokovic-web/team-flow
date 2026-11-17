import { useState, useRef, type FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function TaskForm({ onAddTask }: { onAddTask: (title: string) => void } ) {
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const focusRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);

const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        
        const title = newTaskTitle.trim();
        if (!title) {
        setError("Please enter a task title.");
        return;
        }

        if (title.length < 3) {
        setError("Task title must be at least 3 characters long.");
        return;
        }

        onAddTask(title);
        setNewTaskTitle("");
        focusRef.current?.focus();
    };

    return (
         <form onSubmit={handleAddTask} className="mb-4 flex items-start gap-2">
                   <TextField
                    inputRef={focusRef}
                    id="new-task-title"
                    label="Task title"
                    placeholder="Enter a task title"
                    value={newTaskTitle}
                    onChange={(event) => {
                        setNewTaskTitle(event.target.value);
                        setError(null);
                    }}
                    error={Boolean(error)}
                    helperText={error ?? " "}
                    size="small"
                    />
                  
                    <Button type="submit" variant="contained" color="primary">
                        Add Task
                    </Button>
                    
                </form>
    );
}
