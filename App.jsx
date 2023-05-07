import { useState } from 'react';
import './App.css';
import AddStudentsForm from './components/AddStudentsForm';
import Grades from './components/Grades';

function App() {
 
  const [data, setData] = useState([]);

  function getData(data) {
    setData((prev) => [data, ...prev])
    console.log(data)
  }

  function deleteStudent(id) {
    setData((prev) => prev.filter((item) => item.id !== id));
  }


  return (
  <>
  <div className='container'>
    <AddStudentsForm studentsDataUp = {(data) => getData(data)} />
    <Grades studentsDataDown = {data} deleteStudent={deleteStudent}/>
  </div>
  </>
  );   
}

export default App
   