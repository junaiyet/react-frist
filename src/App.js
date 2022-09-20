import "./style.css"
import Navber from "./component/Navbar/Navber";
import Banner from "./component/Banner/Banner";
import About from "./component/About/About";
import Skill from "./component/Skill/Skill";
import Service from "./component/Service/Service";
import Portfolio from "./component/Portfolio/Portfolio";
import Testimonial from "./component/Testimonial/Testimonial";
import Blog from "./component/Blog/Blog";
import Footer from "./component/Footer/Footer";
import {useState,useEffect}  from 'react'
import { getDatabase, ref,push, set,onValue } from "firebase/database";

//Bootstrap
import {Button,Container,Form,Table } from 'react-bootstrap';


function App() {

  // let[number, setNumber] = useState(10)
  // let number =10;
  // let handkeClick= ()=>{
  //   number++
  //   setNumber(number)
  // }
  // useEffect(()=>{
  //   console.log("ami use homu na")
  // },[number])
  // let [show,setShow] = useState(false);
  // let handleShow=()=>{
  //   setShow(!show)
    
  // }
  const db = getDatabase();
  let [batchname,setBatchName] = useState("")
  let [classname,setClassName] = useState("")
  let [classtopic,setClassTopic] = useState("")
  let [details,setDetails] = useState([])
  let [check,setCheck] = useState(false)
  // let [present,setPresent] = useState([])
  // let [attendace,setAttendace] = useState(true)
  let handelBatchName=(e)=>{
    setBatchName(e.target.value)
  }
  let handelClassName=(e)=>{
    setClassName(e.target.value)
  }
  let handelClassTopic=(e)=>{
    setClassTopic(e.target.value)
  }
  let arr =[]
  let handelAttendace=(name)=>{
    if(arr.indexOf(name) == -1){
      arr.push(name);
    }else{
      arr.splice(arr.indexOf(name),1)
    }

    // setPresent(arr)
    // if(attendace){
    //   setAttendace(false);
    //   console.log(attendace,name);
    // }else{
    //   setAttendace(true);
    //   console.log(attendace,name);
    // }
  };
  let handleSubmit =(e)=>{
    e.preventDefault();
    let info ={
      batchname : batchname,
      classname : classname,
      classtopic : classtopic,
      present : arr,
    }
    set(push(ref(db, 'present')),info).then(()=>{
      setCheck(!check);
    });
    console.log(info)
  }
  
  useEffect(()=>{
    let attarr = []
    onValue(ref(db, 'present'), (snapshot) => {
      snapshot.forEach(item=>{
        attarr.push(item.val())
      })
      setDetails(attarr)
    });
  },[check])

  return (
  //  <>
    /* <Navber/>
    <Banner/>
    <About/>
    <Skill/>
    <Service/>
    <Portfolio/>
    <Testimonial/>
    <Blog/>
    <Footer/> */
    /* { show ? <div style={box}></div> :<div style={box}>lorem</div>} */
   
   /* <h1>{number}</h1>
    <button onClick={handkeClick}>Click</button> */
    /* <button onClick={handleShow}>Click</button> */
    // </>
    <>
      <Container>
       <Form className="mt-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Batch Name</Form.Label>
        <Form.Control onChange={handelBatchName} type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Class Number</Form.Label>
        <Form.Control onChange={handelClassName} type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Class Topic </Form.Label>
        <Form.Control onChange={handelClassTopic} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Shawon">
        <Form.Check onChange={()=>handelAttendace("Shawon")}  type="checkbox" label="Shawon" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Junaiyet">
        <Form.Check onChange={()=>handelAttendace("Junaiyet")} type="checkbox" label="Junaiyet" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Foysal">
        <Form.Check onChange={()=>handelAttendace("Foysal")}  type="checkbox" label="Foysal" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Tahmid">
        <Form.Check  onChange={()=>handelAttendace("Tahmid")}   type="checkbox" label="Tahmid" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Imran">
        <Form.Check onChange={()=>handelAttendace("Imran")} type="checkbox" label="Imran" />
      </Form.Group>
      <Button  onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Class Number</th>
          <th>Student name</th>

        </tr>
      </thead>
      <tbody>
        {details.map(item=>(
      
          <tr>
            <td>{item.classname}</td>
     {     item.present.map(att=>(
            <>
          
          <td>{att}</td>
            
            </>
       
          ))}
        </tr>


        ))}

      </tbody>
    </Table>
      </Container>
    </>

  );
}
// let box={
//   background:"red",
//   width:"300px",
//   height:"300px",
//   marginTop:"20px",
// }
//43+minit part 2
export default App;
