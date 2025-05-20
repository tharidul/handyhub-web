import { Analytics } from '@vercel/analytics/react'
import './App.css'

function App() {

  return (
    <div>
      <p className='text-5xl text-primary text-center'>Hello World</p>
      <p className='text-5xl text-secondary text-center'>Hello World</p>
      <p className='text-5xl text-navy text-center'>Hello World</p>
      <p className='text-5xl text-blue text-center'>Hello World</p>
      <p className='text-5xl text-darkgray text-center'>Hello World</p>
      <Analytics />
    </div>
  )
}

export default App
