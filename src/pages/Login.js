
import { Footer } from "../components/Footer";
import "./Login.css";
import logo from "../img/logo.svg";
import { useEffect, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  const [sendPostad, setSendPostad] = useState(false);
  const [sendGetad, setSendGetad] = useState(false);
  
   //Login
  useEffect(() => {
    if(sendRequest){
      setIsLoading(true);
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          "email": `${email}`,
          "password": `${password}`
        })
    };
      console.log(requestOptions);
    fetch("http://127.0.0.1:8000/login",{
      method: 'POST', 
      body: JSON.stringify(requestOptions),  
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
      });
       setSendRequest(false);
    }
  },[sendRequest]);
  //post
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        user: 'admin@email.com',
        category: 'Painting',
        title: 'painting house',
        description: 'lorem ipsum',
        image: 'image'
      } )
  };

    console.log(requestOptions);
    if(sendPostad){
      setIsLoading(true);
    fetch("http://127.0.0.1:8000/ad/new",requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
      });
       setSendPostad(false);
    }
  },[sendPostad]);
  //GET ad
  useEffect(() => {
    if(sendGetad){
      setIsLoading(true);
   
  
    fetch("http://127.0.0.1:8000/ad",{
      method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
      });
       setSendGetad(false);
    }
  },
  [sendGetad]);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (

    <section>
      
      <div className="logbox">
      <a href="http://localhost:3000/"><img className="logo" src={logo} alt="logo" /></a>
      <h1>Login</h1>
      <form onSubmit="">
        <div>
        <label htmlFor="email" >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        </div>
        <div>
         <label htmlFor="password" >
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        </div>
        <div>
        <button className="loginbtn" disabled={sendRequest} onClick={() => setSendRequest(true)}>Iniciar sesión</button>
        </div>
        
      </form>
      <a href="http://localhost:3000/register">you are not registered yet?</a>
      </div>
      <button  disabled={sendPostad} onClick={() => setSendPostad(true)}>Post-ad</button>
      <button  disabled={sendGetad} onClick={() => setSendGetad(true)}>Get ads</button>

      <Footer/>
    </section>
 
  );
};
