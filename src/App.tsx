
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Title'
import Count from './Count'
import Text2 from './Text2'
import Text from './Text'


function App() {


  

  return (
    < >
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div>
          <Title />
        </div>
      <div className="card">
        {/* <button onClick={() => setCount( (count) => count + 1 )}> */}
      
        <Count />
      </div>
      <div>
        <Text />
      </div>
      <div>
      <p className="read-the-docs">
      <Text2 />
      </p>
        </div>
      </div>

      
    </>
  )
}

export default App
