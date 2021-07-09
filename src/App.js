import React,{useState} from 'react'
import Form from './components/Form'
import Result from './components/Result'
import './App.css';

function App() {
  const [user,setUser] = useState({})
  return (
    <div className="App container">
      <Form user = {user} setUser = {setUser}/>
      <div className="card-text">
        <h3> User Forms Data</h3>
          <Result user = {user}/>
      </div>
    </div>
  );
}

export default App;
