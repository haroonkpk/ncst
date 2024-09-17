import React from 'react'
import "./Courses.css"
export default function Box(props) {
  return (
    <div  style={{ background:"lightblue",border:'2px solid gray',borderRadius:'10px'}} className='box-c'>
      <div style={{width:'100%',height:'250px', background:'yellow', position:"relative"}}>
      <img style={{width:props.imgw,marginBottom:"13px",height:props.imgh}} src={props.img} alt="" />
      <h1 style={{color:'darkslateblue'}}>{props.h1}</h1>
      <p style={{color:'darkslateblue',lineHeight:'21px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa reiciendis dondis quos amet optio magni voluptatum eos est, eligendi ad cum eveniet. Doloribus, voluptatum!</p>

      </div>
    </div>
  )
}
