/* eslint-disable react/prop-types */
import { useState } from "react";

function AddStudentsForm(props) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [grades, setGrades] = useState("");



    function dataHandler(event) {
        event.preventDefault ();
        const studentsData = {
            studentsName: name, 
            studentsSurname: surname, 
            studentsGrades: grades,
            id: Math.floor(Math.random() * 1000),
        };

        props.studentsDataUp(studentsData);
        console.log(studentsData);

        setName("");
        setSurname("");
        setGrades("");
    }

    return <form onSubmit={dataHandler}>
        <label>Add Student</label>
        <input onChange={(event) => setName(event.target.value)} 
            value = {name}
            type="text" 
            placeholder="Name" 
            required= {true}
        ></input>
        <input onChange={(event) => setSurname(event.target.value)} 
            value = {surname}
            type="text" 
            placeholder="Surname" 
            required= {true}
        ></input>
        <input onChange={(event) => setGrades(event.target.value)} 
            value = {grades}
            type="text" 
            placeholder="Grades" 
            required= {true}
        ></input>
        <button type="submit">Add</button>
    </form>
}

export default AddStudentsForm; 