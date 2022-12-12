import MainContext from './context/MainContext'
import { BrowserRouter, Routes, Route, useParams, Redirect, Navigate, useNavigate, redirect } from 'react-router-dom'
import io from "socket.io-client"
import './App.css';
import MainPage from './pages/MainPage';
import Register from './components/Register';
import Profile from './components/Profile'
import Home from './components/Home'
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { get } from './plugins/http';
import Filter from './components/Filter';
import InvalidUser from './components/LinkToLogin';
import Toolbar from './components/Toolbar';
const socket = io.connect('http://localhost:5000');
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userLogged, setUserLogged] = useState('')
  const [user, setUser] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [users, setUsers] = useState([])
  // console.log('sadasd', user[0].photos.length)

  console.log('filteredUsers ===', filteredUsers);

  useEffect(() => {
    socket.on("allusers", (data) => {


      setUsers(data)
    })

    socket.on("filteredUsers", (data) => {

      setFilteredUsers(data)


    })
  }, [])
  useEffect(() => {
    get("auth").then(res => {

      console.log('response', res)
      setIsLoggedIn(res.loggedIn
      )
      setUserLogged(res.user)


    })

  },)
  useEffect(() => {
    get("user").then(res => {
      // console.log(res)
      setUser(res.data)
    })

  }, [])



  const states = {
    isLoggedIn,
    setIsLoggedIn,
    userLogged,
    setUserLogged,
    user,
    setUser,
    users,
    setUsers,
    filteredUsers,




  }
  return (
    <div className="App">
      <MainContext.Provider value={states}>
        <BrowserRouter>

          <Toolbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />

            <Route exact path='/main' element={<MainPage />} />

            <Route path='/login' element={<Login />} />
            <Route path='/tologin' element={<InvalidUser />} />

            <Route path='/profile' element={<Profile />} />
            <Route path='/filter' element={<Filter />} />



          </Routes>
        </BrowserRouter>

      </MainContext.Provider>
    </div>
  );
}

export default App;
