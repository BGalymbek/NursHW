
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import Comments from './components/Comments'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/posts/:id' element={<PostDetail/>}>
              <Route path='comments' element={<Comments/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

// import { useState, useEffect } from "react";
// import "./App.css"

// function App() {
//   const [user, setUser] = useState(null);
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [isAuthenticator, setAuthenticator] = useState(false)
//   const [isLogin, setIsLogin] = useState(false)
//   const [isGuest, setIsGuest] = useState(false)

//   useEffect(() => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (savedUser) {
//       setUser(savedUser);
//     }
//   }, []);

//   const handleRegister = (name, email, password) => {
//     const newUser = { name, email, password };
//     if(newUser){
//       localStorage.setItem("user", JSON.stringify(newUser));
//       setUser(newUser);
//       setIsRegistered(true);
//       setIsLogin(true)
//     }
//   };

//   const handleLogin = (email, password) => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (savedUser && savedUser.email === email && savedUser.password === password) {
//       setUser(savedUser);
//       setIsLogin(true)
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   const handleGuestLogin = () => {
//     setUser({ name: "Guest" })
//     setIsGuest(true)
//   };

//   const handleDelete = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     setIsRegistered(false);
//     setAuthenticator(false)
//     setIsLogin(false)
//     alert("Account was deleted!")
//   };
//   // console.log("isAuthenticator", isAuthenticator);
//   // console.log("isRegistered", isRegistered);
//   // console.log("isLogin", isLogin);
//   // console.log("isGuest", isGuest);
//   const handleLogout = ()=>{
//     setIsLogin(false)
//     setIsRegistered(false)
//     setAuthenticator(false)
//     setIsGuest(false)
//   }
  

//   return (
//     <>
//       {!isAuthenticator ? (
//           isGuest ? (
//               <Home user={user} onLogout = {handleLogout} isGuest={isGuest}/>
//           ):(
//             <div className="auth-container">
//               <button onClick={()=>setAuthenticator(true)}>Login</button>
//               <button type="button" onClick={handleGuestLogin}>Login as Guest</button>
//             </div>
//           )
//       ):(
//             !isLogin ? (
//               !isRegistered ?(
//                 <Login onLogin={handleLogin} onRegister = {setIsRegistered}/>
//               ):( 
//                 <Register onRegister={handleRegister}/>
//               )
//             ):(
//               <Home user={user} onDelete={handleDelete} onLogout = {handleLogout}/>
//             ) 
//       )}
//     </>
//   );
// }

// function Register({ onRegister }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onRegister(name, email, password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// function Login({ onLogin ,onRegister }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(email, password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       <button type="submit">Login</button>
//       <button onClick={()=>onRegister(true)}>Register</button>
//     </form>
//   );
// }

// function Home({ user, onDelete, onLogout, isGuest }) {
//   return (
//     <>
//       <h2>Welcome, {user.name}!</h2>
//       {user.email && <p>Email: {user.email}</p>}
//       <div className="btn-container">
//         {!isGuest && <button onClick={onDelete}>Remove</button>}
//         <button onClick={onLogout}>Logout</button>
//       </div>
//     </>
//   );
// }

// export default App;

