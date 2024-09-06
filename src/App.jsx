import React from 'react'
import Chat from './Components/Chat/Chat'
import Detail from './Components/Detail/Detail'
import List from './Components/List/List'
import Login from './Components/Login/Login'

const App = () => {

  const user = false;

  return (
    <div className='container'>
      {
        user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
      )
      }
    </div>
  )
}

export default App
