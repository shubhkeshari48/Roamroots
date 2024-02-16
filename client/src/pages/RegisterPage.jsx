import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function RegisterPage(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [redirect,setRedirect]=useState(null)
    if(redirect){
        return <Navigate to={redirect}/>
    }
    async function resgisterUser(e){
        e.preventDefault()
        try {
            await axios.post('/register',{
                name,
                email,
                password
            });
            setRedirect('/login')
            toast.success('Registration succesful. Now you can login')
        } catch (error) {
            toast.error('Registration failed. Please try again')
        }
        
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className=" text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto" onSubmit={resgisterUser}>
                <input type="text" placeholder='john Doe' value={name} onChange={(e)=>{
                    setName(e.target.value)
                }} />
                <input type='email' placeholder='your@email.com' value={email} onChange={(e)=>{
                    setEmail(e.target.value)}}/>
                <input type='password' placeholder='password' value={password} onChange={(e)=>{
                    setPassword(e.target.value)}}/>
                <button className="primary">Register</button>
                <div className="text-center py-2 text-gray-500">Already a member? <Link className="underline text-black" to='/login'> Login</Link>
                </div>
            </form>
            </div>
            
        </div>
    )
}