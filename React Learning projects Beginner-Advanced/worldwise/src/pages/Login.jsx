import { useNavigate } from "react-router";
import PageNav from "../components/PageNav";
import { AuthContext } from "../context/AuthContext";
import styles from "./Login.module.css";
import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const {login, isAuthenticated} =useContext(AuthContext)
  const navigate=useNavigate()

 const handleSubmit = (e) =>{
  e.preventDefault()
  if(email && password){
    login(email,password)
  }
 }

  useEffect(()=>{
    if(isAuthenticated){
      navigate("/app",{replace: true})
    }
  },[isAuthenticated, navigate])
  return (
    <main className={styles.login}>
      <PageNav />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
