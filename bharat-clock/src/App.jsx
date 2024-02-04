import './App.css'
import AppName from './components/AppName'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'

function App() {
  return (
    <center className='content'>
     <AppName/>
     <ClockSlogan/>
     <CurrentTime/>
    </center>
  )
}

export default App
