import Stream from '@/views/stream'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '@/components/auth/login'

function App() {
  const { user } = useAuth0()

  if (!user) {
    return <LoginButton />
  }

  console.log('app')

  return (
    <div className="App">
      <Stream user={user} />
    </div>
  )
}

export default App
