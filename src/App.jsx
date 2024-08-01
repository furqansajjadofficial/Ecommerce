import { useEffect } from "react"
import { Header } from "./components"
import { Outlet } from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { logout } from "./features/authSlice"


function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
