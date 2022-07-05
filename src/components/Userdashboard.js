import {useContext, useEffect,useState } from "react";
import { AuthContext } from "./AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faPen} from '@fortawesome/free-solid-svg-icons'
import "./Userdashboard.css";



export const Userdashboard = () => {
    const [edit, setEdit] = useState();
    const { token,fname,lname,role,email,id } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [myuser, setMyuser] = useState("");

    // useEffect(() => {
    //   fetch(`http://127.0.0.1:8000/members/getOne/${id}`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setMyuser(data);
    //         console.log(data); 
    //         setIsLoading(false);   
    //     });
    // }, [isLoading]);

    //Update user
    function submit (e){
      e.preventDefault()
      console.log(edit);
    
      fetch(`http://127.0.0.1:8000/members/update/${e.target.name}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify(edit),
    })
      .then((response) => response.json())
      .then((data) => {

          console.log(data);    
      });
      setEdit();
    }
    //Dashboard
    return(

        <div className="main-user">
        <h2>My user</h2>
        <div className="users-table">

          <div className="userboard" >
            <p>First name: {fname}</p>
            <p>Last name: {lname}</p>
            <p>Email: {email}</p>

            <div class="dropdown">
              <button className="dropbtn">Edit<i><FontAwesomeIcon icon={faPen}/></i></button>
              <div class="dropdown-content">
                <form name={id}  onSubmit={submit}>
                    <input
                    autoComplete="off"
                    placeholder="First Name"
                      type="text"
                      name="first_name"
                      onChange={(e) => setEdit({ ...edit, first_name: e.target.value })}
                    />
                  <input
                    autoComplete="off"
                    placeholder="Last Name"
                      type="text"
                      name="last_name"
                      onChange={(e) => setEdit({ ...edit, last_name: e.target.value })}
                    />
                    <input
                    autoComplete="off"
                    placeholder="Password"
                      type="password"
                      name="password"
                      onChange={(e) => setEdit({ ...edit, password: e.target.value })}
                    />
                    <input
                    autoComplete="off"
                    placeholder="Email"
                      type="email"
                      name="email"
                      onChange={(e) => setEdit({ ...edit, email: e.target.value })}
                    />
                    <button type="submit" class="updatebtn">Update</button>
                  </form>
              </div>
            </div>
          </div>
      </div> 
        </div>
    )
};
