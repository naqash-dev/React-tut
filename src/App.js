import logo from "./logo.svg";
import "./App.css";
import Userfuncomp from "./Userfuncomp";
import Userclasscomp from "./Userclasscomp";
// let data = "Naqash Ali"
// import React, { useState } from "react";
import Stuprops from "./Stuprops";
import Profile from "./Profile";
import Passfunprops from "./Passfunprops";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link, Route} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";


function App() {
  //we can use second component inside component
  // function Apple(){
  //   return(
  //     <div>Apple component in similar componentt</div>
  //   )
  // }

  //Define apple function for onClick event
  // function Apple(){
  //   data = "Naqash"
  //   alert(data)
  // }

  //we are using state to update data in component
  // // const [data,setData]=useState("Naqash")
  // const [data,setData]=useState(0)
  // function updateData(){
  //   // setData("Ali")
  //   setData(data+1)
  // }

  //we are using props in state to update value
  // const [name,setName]=useState("Talha")

  // we make function get input box value
  // const [data,setData]=useState(null)
  // const [print,setPrint]=useState(false)
  // function getData(val){
  //   setData(val.target.value)
  //   setPrint(false)
  // }

  //we can toggle button hide and show
  // const [status,setStatus]=React.useState(true)

  //Basic form
  // const [name,setName]=useState("");
  // const [tnc,setTnc]=useState(false);
  // const [interest,setInterest]=useState("");
  // function getFormData(e){
  //   console.warn(name,tnc,interest)
  //   e.preventDefault()
  // }

  //pass function as props
  // function getData(){
  //   alert("Hello from App")
  // }

  //use Hooks useEffect
  // const[count,setCount]=useState(0)
  // React.useEffect(()=>{
  //   console.warn("useEffect")
  // })

  //useEffect with specific state and Props
  // const[data,setData]=useState(100)
  // const[count,setCount]=useState(10)
  // useEffect(()=>{
  //   console.warn("Called with data state")
  // },[data])
  // useEffect(()=>{
  //   alert("count is"+ count)
  // },[count])

  //Handle array with list
  // const students = ['Naqash','Ali','Talha','Hamza'];
  // students.map((item)=>{
  //   console.warn("My name is:",item)
  // })

  // for(let i=0;i<students.length;i++)
  // {
  //   console.warn("In for loop My name is:",students[i])
  // }
  // const students = [
  //   { name: "Naqash", email: "naqash@gmail.com", contact: "123" },
  //   { name: "Ali", email: "ali@gmail.com", contact: "123" },
  //   { name: "talha", email: "talha@gmail.com", contact: "124" },
  // ];

  return (
    <div className="App">
      <h1>Hello world</h1>
      {/* <Userfuncomp /> */}
      {/* <Apple /> */}
      {/* <Userclasscomp /> */}

      {/* <button onClick={Apple}>Click Me</button> */}
      {/* <button onClick={()=>alert("Hello")}>Click Me</button>   */}
      {/* <button onClick={()=>Apple()}>Click Me</button> */}
      {/* <h1>{data}</h1> */}

      {/* <h1>{data}</h1>
       <button onClick={updateData}>Click to updateData in state</button> */}

      {/* <Stuprops name={name} /> */}
      {/* <Stuprops name={"Hamza"} email={"hamza@gmail.com"} others={{ address:'Satellite',mobile:'111' }}/> */}
      {/* <button onClick={()=>setName("Ali")}>Update Name</button> */}

      {/* <h1>Get Input Box Value!Below data is our state name</h1> 
      {
        print?
        <h2>{data}</h2>
        :null
      }           
      <input type="text" onChange={getData}/>
      <button onClick={()=>setPrint(true)}>Print Data</button>  */}

      {/* {
        status? <h1>Naqash</h1>:null
      }
      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>show</button>
      <button onClick={()=>setStatus(!status)}>Toggle</button> */}

      {/* <h1>Handle Form in React</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Option</option>
          <option>MCS</option>
          <option>BBA</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept Terms and Conditions to continue</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form> */}

      {/* <Profile/> */}

      {/* <Passfunprops data={getData} /> */}

      {/* <h1>useEffect in React {count}</h1>
      <button onClick={()=>setCount(count+1)}>Update Count</button> */}

      {/* <h1>Data:{data}</h1>
      <h1>Count:{count}</h1>
      <button onClick={()=>setData(data+1)}>Update Data</button>
      <button onClick={()=>setCount(count+1)}>Update Count</button> */}

      {/* <h1>Install Bootstrap Button</h1>
      <Button variant="primary" onClick={()=>alert("Hello Bootstrap")}>Click Me</Button>{' '} */}

      <h1>Handle Array with list Alwas use Map function in return not loop</h1>
      {/* {
        students.map((students)=>
            <h1>{students}</h1>
        )
      } */}

      {/* <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map((students, i) => 
           students.contact === '123'?
           (
            <tr key={i}>
              <td>{i}</td>
              <td>{students.name}</td>
              <td>{students.email}</td>
              <td>{students.contact}</td>
            </tr>
          ):null
          )}
        </tbody>
      </Table> */}

     
        {/* <Nav/>
        <Route path="/about"><About /></Route>
        <Route path="/" exact={true}><Home /></Route> */}
      
     
    </div>
  );
}

//Routing basics



//Below one is used when you make component in the same file
// function Userfuncomp(){
//   return(
//       <div>
//            <h1>Hello my first function component</h1>
//            <h2>we must have to wrap in one tag</h2>
//       </div>

//   )
// }

export default App;
