import {useContext, useEffect,useState } from "react";
import { AuthContext } from "./AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faPen} from '@fortawesome/free-solid-svg-icons'
import "./Admindashboard.css";



export const Admindashboard = () => {
    const [edit, setEdit] = useState();
    const { token,fname,lname,role,email } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState("");
    const [roleadmin, setRoleadmin] = useState("");

    useEffect(() => {
      fetch("http://127.0.0.1:8000/members", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
            console.log(data); 
            setIsLoading(false);   
        });
    }, [isLoading]);

   
    //Delete user
    function handleDelete (e){
      fetch(`http://127.0.0.1:8000/members/delete/${e.target.name}`, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      //   //Authorization: `Bearer ${token.token}`,
      // },
    })
      .then((response) => response.json())
      .then((data) => {

          console.log(data);    
      });
      window.location.href = window.location.href;
    }
    //Update user
    function submit (e){
      console.log("abc");
      console.log("name"+e.target.name);
    
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

        <div className="main-admin">
        <h2>{fname}</h2>
        <p>email: {email}</p>
        <div className="users-table">
        {!isLoading && users.map(function (user,index) { 
        return (
          <div className="user-list" key={index}>
            <p>{user.first_name} {user.last_name}</p>
            <button className="deletebtn" name={user._id} onClick={handleDelete}>Delete User <i><FontAwesomeIcon icon={faBan}/></i></button>
            <div class="dropdown">
              <button class="dropbtn">Edit<i><FontAwesomeIcon icon={faPen}/></i></button>
              <div class="dropdown-content">
                <form name={user._id}  onSubmit={submit}>
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
                     <input
                    autoComplete="off"
                    placeholder="Role"
                      type="text"
                      name="role"
                      onChange={(e) => setEdit({ ...edit, role: e.target.value })}
                    />
                    <button type="submit" class="updatebtn">Update</button>
                  </form>
              </div>
            </div>
          </div>
      
        );
      })}
      
      </div>
        </div>
    )
   
    


};
