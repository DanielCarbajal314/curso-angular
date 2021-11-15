import { NewTask } from "./new-task.model";

export interface Task extends NewTask{
    id: string;
}