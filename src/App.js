import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [ cricketers,setCricketers ] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setCricketers(data));
  }, [])
//   const cricketers = [{name: 'Mashrafee', age: 34},
//   {name: 'Sakib', age: 30},
//   {name: 'Mahmudullah', age: 32},
//   {name: 'Mushfiq', age: 33}
// ];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
     {
       cricketers.map(cricketer => <Cricketers name={cricketer.name} key={cricketer.id} email={cricketer.email}></Cricketers> )
     }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(10);
  const increaseCount = () =>{
    setCount(count + 1);
  }
  const decreaseCount = () =>{
    setCount(count -1);
  }
  return(
    <div>
      <button onClick={increaseCount}>Add Movie</button>
      <button onClick={decreaseCount}>Delete Movie</button>
      <h3>Total Movie: {count}</h3>
      <Movie movies = {count}></Movie>
    </div>
  )
}
function Movie(props){
  return(
    <h3>I have Acted {props.movies} Movie </h3>
  )
}
function Cricketers(props) {
  console.log(props);
  const cricketerStyle = {
    border: '2px solid purple',
    width: '400px',
    height: '200px',
    padding: '10px',
    margin:'20px',
    float: 'left',
    borderRadius: '5px'
    
  }
  return <div style={cricketerStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Job: Cricketer</h3>
    <h4>Email: {props.email}</h4>
  </div>
}
export default App;
