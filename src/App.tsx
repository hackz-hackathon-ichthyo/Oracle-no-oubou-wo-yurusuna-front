import { useEffect, useState } from 'react'
import './App.css'
import LoginButton from './components/auth/login'
import LogoutButton from './components/auth/logout'
import Profile from './components/auth/profile'
import Header from './layouts/header'
import logo from './logo.svg'

import UserRepositoryImpl from './repository/user/userRepositoryImpl'

function App() {
  const [user, setUser] = useState(UserRepositoryImpl().getUser())
  const [count, setCount] = useState(0)

  useEffect(() => {
    setUser(UserRepositoryImpl().getUser())
  }, [])

  return (
    <div className="App">
      <Header user={user} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <LoginButton />
        <LogoutButton />
        <Profile />
        <p>I'm from CloudFront!</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
