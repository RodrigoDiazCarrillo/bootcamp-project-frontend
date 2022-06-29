import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import {useContext, useEffect,useState } from "react";
import {Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faPen} from '@fortawesome/free-solid-svg-icons'

import "./User.css";
export const User = () => {
    const { token,fname,lname,role,email } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState("");

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
    }
    //Update user
    function handleUpdate (e){
      const update ={
        "email": "abc@email.com",
        "password": "4321"
        }
      fetch(`http://127.0.0.1:8000/members/update/${e.target.name}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify(update),
    })
      .then((response) => response.json())
      .then((data) => {

          console.log(data);    
      });
    }
    //Admin dashboard
    const admin=(
        <div className="main-admin">
        <h2>{fname}</h2>
        <p>email: {email}</p>
        <div className="users-table">
        {!isLoading && users.map(function (user,index) {
        //console.log(filters.find(element => element === ad.category))
        return (
          <div className="user-list" key={index}>
            <p>{user.first_name} {user.last_name}</p>
            <button name={user._id} onClick={handleDelete}>Delete User <i><FontAwesomeIcon icon={faBan}/></i></button>
            <button name={user._id} onClick={handleUpdate}>Modify<i><FontAwesomeIcon icon={faPen}/></i></button>
          </div>
     
        );
      })}
      </div>
        </div>
    )
    //User dashboard
    const dashboard=(
        role===1 ?
        <div className="main">
        <h2>{fname} {lname}</h2>
        <p>email: {email}</p>
        

        </div>
        : admin
    );
    

  return (
    <section className="my-user">
        <Menu/>
        {/* If the user is not logged in, it returns to the home page. */}
        {token ? dashboard : <Navigate to="/" replace />}
        
        <Footer />
    </section>
  );
};
