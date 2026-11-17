import { useState } from "react";
import TextField from "@mui/material/TextField";
import type { Task } from "@/features/dashboard/types";
import Button from "@mui/material/Button";
import type { FormEvent } from "react";

interface TaskItemProps {
    task: Task;
    onClick: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, title: string) => void;
}

export default function TaskItem({ task, onClick, onDelete, onEdit }: TaskItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [draftTitle, setDraftTitle] = useState(task.title);

    const handleSave = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const title = draftTitle.trim();
        if (!title) return;

        onEdit(task.id, title);
        setIsEditing(false);
    }
    const handleCancel = () => {
        setDraftTitle(task.title);
        setIsEditing(false);
    }

    return (
        <li className="flex items-center justify-between mb-2">
           {isEditing ? (
                <form onSubmit={handleSave} className="flex items-center gap-2">
                    <TextField
                        autoFocus
                        size="small"
                        value={draftTitle}
                        onChange={(e) => setDraftTitle(e.target.value)}
                        label="Edit task title"
                    />
                    <Button type="submit" variant="contained" color="primary" size="small">
                        Save
                    </Button>
                    <Button type="button" onClick={handleCancel} variant="outlined" color="secondary" size="small">
                        Cancel
                    </Button>
                </form>
            ) : (
                 <>
                    <Button
                        type="button"
                        aria-pressed={task.completed}
                        onClick={() => onClick(task.id)}
                        className={task.completed ? "line-through text-gray-500" : ""}
                    >
                        {task.title}
                    </Button>
                    <Button
                        type="button"
                        onClick={() => {
                        setDraftTitle(task.title);
                        setIsEditing(true);
                        }}
                    >
                        Edit
                    </Button>
                    <Button type="button" onClick={() => onDelete(task.id)}>
                        Delete
                    </Button>
                </>
           )}
        </li>
    );
}
             