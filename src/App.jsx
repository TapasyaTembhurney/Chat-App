import React from 'react'
import Chat from './Components/Chat/Chat'
import Detail from './Components/Detail/Detail'
import List from './Components/List/List'
const App = () => {

  const user = false

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
        <login />
      )
      }
    </div>
  )
}

export default App
