// @flow

import { TasksListTypes } from "./Tasks";


type TasksListType = {
    tasks: TasksListTypes[]
};

export const TasksList = ({tasks}: TasksListType) => {

    const tasksList = tasks.length === 0
        ? <p>Your List is Empty</p>
        : <ul>
            {tasks.map(task => {
                return (
                    <li key={task.taskId}>
                        <span>{task.title}</span>
                        <input type="checkbox" checked={task.isDone}/>
                    </li>
                )
            })}
        </ul>

    return (
        <ul>
            {tasksList}
        </ul>
    );
};