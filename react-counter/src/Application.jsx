import logo from './logo.svg'
import './App.css'
import About from './Components/About'
import Counter from './Components/Counter'

function Application() {
  const aboutText = <>Edit <code>Application.jsx</code> and save to test HMR updates.</>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Counter/>
        <About text={aboutText}/>
      </header>
    </div>
  )
}

export default Application
