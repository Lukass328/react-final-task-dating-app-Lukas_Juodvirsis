import MainContext from './context/MainContext'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import io from "socket.io-client"
import './App.css';
import MainPage from './pages/MainPage';
import Register from './components/Register';
import Profile from './components/Profile'
import Home from './components/Home'
import Login from './components/Login';
import InvalidUser from './components/InvalidUser';
import { useEffect, useState } from 'react';
import { get } from './plugins/http';
import Filter from './components/Filter';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userLogged, setUserLogged] = useState('')
  const [user, setUser] = useState([])
  useEffect(() => {
    get("auth").then(res => {

      console.log(res)
      setIsLoggedIn(res.message)
      setUserLogged(res.user)


    })

  },)
  useEffect(() => {
    get("user").then(res => {
      console.log(res)
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


  }
  return (
    <div className="App">
      <MainContext.Provider value={states}>
        <BrowserRouter>



          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/filter' element={<Filter />} />



          </Routes>
        </BrowserRouter>

      </MainContext.Provider>
    </div>
  );
}

export default App;
