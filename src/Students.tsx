// @flow


type StudentsTypes = {
    students: StudentsTypes[]
};

export const Students = ({students}: StudentsTypes) => {
    return (
        <ul>
            {students.map((student, index) => {
                // debugger
                return (
                    <li key={index}>{props.students}</li>
                )})}
        </ul>
        )
};

// TODO correct errors for students