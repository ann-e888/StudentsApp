/* eslint-disable react/prop-types */
function Grades (props) {
    console.log(props.studentsDataDown)
    return (
        <div className="grades">
            <h1>Students</h1>
            <ul>
                {props.studentsDataDown.length !== 0 && props.studentsDataDown.map((item) => (
                    <li key={item.id}>
                        <p>{`${item.studentsName} ${item.studentsSurname}`}</p>
                        <div>{item.studentsGrades}</div>
                        <button className="delete" onClick={() => props.deleteStudent(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Grades;