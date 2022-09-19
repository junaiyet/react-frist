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
  let [show,setShow] = useState(false);
  let handleShow=()=>{
    setShow(!show)
    
  }

  return (
    <>
    {/* <Navber/>
    <Banner/>
    <About/>
    <Skill/>
    <Service/>
    <Portfolio/>
    <Testimonial/>
    <Blog/>
    <Footer/> */}
    { show ? <div style={box}></div> :<div style={box}>lorem</div>}
   
    {/* <h1>{number}</h1>
    <button onClick={handkeClick}>Click</button> */}
    <button onClick={handleShow}>Click</button>
    </>
    

  );
}
let box={
  background:"red",
  width:"300px",
  height:"300px",
  marginTop:"20px",
}
//24minit part 2
export default App;
