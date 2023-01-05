import React from "react";
// import data from "./peopleData";
// import { useParams, Link } from "react-router-dom";
import "./App.css";

const People = () => {
  // const { id } = useParams()
  // const [user, setUser] = useState(null)
 
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(Data)
  //       const data = await response.json()
  //       const user = data.find(item => item.id === id)
  //       setUser(user)
  //       console.log(user)
  //     } catch (error) {
  //       console.log("error")
  //     }
  //   }
  //   fetchData()
  // }, [id])

  return (
    <>
      <div className="d-flex">
        <div className="d-flex flex-column justify-content-center px-3 my-5 mx-5 col-lg-2 text-light profile fs-4">
          <p className="">Profile</p>
          <hr className="bg-light"></hr>
          <p className="">Posts</p>
          <hr className="bg-light"></hr>
          <p className="">Gallery</p>
          <hr className="bg-light"></hr>
          <p className="">ToDo</p>
        </div>
        <div>
            <div className="Navbar d-flex flex-row ">
                <p className="fs-5 text-left text-dark">Profile</p>
                <div className="d-flex end justify-content-end">
                <img
              className="rounded-circle float-right col-lg-1"
              src="/image2.jpg"
              alt="girl"
            />
            <p className="text-dark text-right fs-5 m-2">Melinda Thomas</p>
            </div>
            
            </div>
            <hr className='bg-dark'></hr>
            <div className="d-flex ">
          <div className="text-dark  d-flex col-lg-5 flex-column align-items-center">
            <img
              className="rounded-circle float-left col-lg-4"
              src="/image2.jpg"
              alt="girl"
            />
            <p className="text-dark fs-4">Melinda Thomas</p>
          <p className="fs-5">Username:</p>
          <p className="fs-5">Email: xyz</p>
          <p className="fs-5">Phone: xyz</p>
          <p className="fs-5">Website: xyz</p>
          <div className="line"></div>
          <p className="text-secondary fs-4">Company</p>
          <p className="fs-5">Name: xyz</p>
          <p className="fs-5">Catchphrase: xyz</p>
          <p className="fs-5">bs: xyz</p>
          </div>
          <div className="lines"></div>
          
          <div className="text-dark d-flex col-lg-8 flex-column  p-3">
          <p className="text-secondary text-left fs-4">Address:</p>
          <div className="d-flex flex-column mx-5 px-5 align-items-start">
          <p className="fs-5 ">Street: xyz</p>
          <p className="fs-5">Suite: xyz</p>
          <p className="fs-5">City: xyz</p>
          <p className="fs-5">Zipcode: xyz</p>
          </div>
<img src="/map.png" alt="map" className="map m-0 p-3"/>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default People;
