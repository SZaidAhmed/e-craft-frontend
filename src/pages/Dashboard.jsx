import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { socket } from '../socket'

const Dashboard = () => {

  const user = useSelector((state) => state.user.data.data.userProfile);
  useEffect(() => {
    socket.connect();

    socket.on("notification", (data) =>{
      console.log(data)
    })

    return () =>{
      socket.disconnect();
    }

  }, [])

  useEffect(() => {
    socket.emit("online", user.userId)

  }, [user])


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard