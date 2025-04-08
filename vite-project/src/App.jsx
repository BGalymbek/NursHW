import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <Router>
      <div className="app">
        <h1>Movie Search App</h1>
        <Search onSearch={setMovies} />
        
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// import React, { useState } from 'react'
// import './App.css'

// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Posts from './pages/Posts'
// import PostDetail from './pages/PostDetail'
// import Comments from './pages/Comments'
// import Login from './pages/Login'
// // import Dashboard from './pages/Dashboard'
// import ProtectedRoute from './components/ProtectedRoute'
// import LoginForm from './pages/LoginForm'
// import ApiAxios from './pages/ApiAxios'

// export default function App() {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   // const [isAuthenticated, setIsAuthenticated] = useState(false)
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<LoginForm/>}/>
//           {/* <Route path='/' element={<Login isNurs = {setIsAuthenticated}/>}/> */}
//           {/* <Route element={<ProtectedRoute isAuth={isAuthenticated}/>}>
//             <Route path='/home' element={<Home/>}/>
//             <Route path='/posts' element={<Posts/>}/>
//           </Route>
//           <Route path='/posts/:id' element={<PostDetail/>}> 
//               <Route path='comments' element={<Comments/>}/> 
//           </Route> */}
//       </Routes>
//     </BrowserRouter>
//   )
// }















// {/* <Route path='/' element={<Login isNurs = {setIsAuthenticated}/>}/>
//         <Route path='/dashboard' element={
//           <ProtectedRoute isAuth = {isAuthenticated}>
//               <Dashboard/>
//           </ProtectedRoute>
//         }/> */}



// {/* <Route path='/' element={<Login setAuth={setIsAuthenticated}/>}/>
//         <Route path='/dashboard' element={
//           <ProtectedRoute isAuth={isAuthenticated}>
//               <Dashboard/>
//           </ProtectedRoute>
//         }/> */}






















// {/* <Route path='/' element={<Home/>}/>
//           <Route path='/posts' element={<Posts/>}/>
//           <Route path='/posts/:id' element={<PostDetail/>}>
//               <Route path='comments' element={<Comments/>}/>
//           </Route> */}