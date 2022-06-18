import '@/App.css'
import User from '@/entity/User'
import UserRepositoryImpl from '@/repository/user/userRepositoryImpl'
import Stream from '@/views/stream'
import { Fragment, useEffect, useState } from 'react'
import './App.css'
import { Chat } from '@/layouts/Chat'

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
      <Stream user={user} />
    </div>
  )
}

export default App
