import React from 'react'
import { Link } from 'react-router-dom';
import data from "./peopleData"
import "./App.css"
function landing() {
return (
    <>    
   <div>
   <div className='wave'></div>
    <div className='section2'></div>
    </div>
    <div className="design col-lg-5 mx-auto  border border-1 landing"  >
    <div className='bg-light p-4 text-center'>
                <p className='fs-4 p-1'>Select an account</p>
            </div>
    {data.map((props)=>{
        return(
        <>
        <div className='sb'>
        <div className='mx-5 my-2 d-flex ' >
            <img  className="rounded-circle float-left col-lg-1" src={props.profilepicture} alt={props.id}/>
            {/* <p key={props.id} className='text-dark py-auto fs-5 m-2 '>{props.name}</p> */}
            <Link className='text-decoration-none text-dark py-auto fs-5 m-2 ' to={`/people/${props.id}`}>{props.name}</Link>
            {/* <Link key={props.id} className='text-dark py-auto fs-5 m-2 ' to="/people">{props.name}</Link> */}
       </div>
       <hr className='bg-dark mx-5'></hr>
       </div>
        </>
   ) })}
</div>
</>
)
}
export default landing