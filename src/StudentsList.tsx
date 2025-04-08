import {StudentsTypes} from "./Tasks.tsx";


type StudentsListTypes = {
    students: StudentsTypes[]
};

export const StudentsList = ({students}: StudentsListTypes) => {
    return (
        <ul>
            {students.map((student, index) => {
                return (
                    <li key={index}>{student}</li>
                )
            })}
        </ul>
    )
}