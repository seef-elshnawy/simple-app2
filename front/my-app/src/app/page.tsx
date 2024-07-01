'use client'
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

   async function signUp(name: string, email:string){
    console.log(name)
    const url = 'http://localhost:8000/signUP'
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded")
    const urlencoded = new URLSearchParams();
    urlencoded.append("name", name);
    urlencoded.append("email", email);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body :urlencoded,
      redirect: "follow"
    };
   const data= await fetch(url,requestOptions as any)
    console.log(data)
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <input type="string" name="name"  onChange={(e)=> setName(e.target.value)} value={name} placeholder="Name"/>
        <input type="string" name="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Email"/>
        <button onClick={()=>signUp(name, email)}>
          <h3> SignIn</h3>
        </button>

      </div>
    </main>
  );
}
