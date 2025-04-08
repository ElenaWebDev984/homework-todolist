import {Title} from "./Title.tsx";
import {TasksList} from "./TasksList.tsx";
import {StudentsList} from "./StudentsList.tsx";



type TasksTypes = {
    title: string
    tasks: TasksListTypes[]
    students: StudentsTypes[]
}

export type TasksListTypes = {
    taskId: number
    title: string
    isDone: boolean
};

export type StudentsTypes = {
    student: string
}


export const Tasks = (props: TasksTypes) => {
    return (
        <div>
            <Title title={props.title}/>
            <TasksList tasks={props.tasks} />
            <StudentsList students={props.students} />
        </div>
    );
};