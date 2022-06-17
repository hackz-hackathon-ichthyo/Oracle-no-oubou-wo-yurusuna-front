import { Fragment, useEffect, useState } from 'react'
import './App.css'
import User from './entity/User'
import Header from './layouts/header'

import UserRepositoryImpl from './repository/user/userRepositoryImpl'

function App() {
  const [user, setUser] = useState<User | null>(null)
  const userRepository = new UserRepositoryImpl()

  useEffect(() => {
    setUser(userRepository.getUser())
  }, [])

  if (!user) {
    return <Fragment></Fragment>
  }

  return (
    <div className="App">
      <Header user={user} />
    </div>
  )
}

export default App
