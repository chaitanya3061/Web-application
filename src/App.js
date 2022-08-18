import './App.css'
import { useState } from 'react'

function App() {
  const [users, setUser] = useState([])
  const loadUsers = async () => {
    const apiResponse = await fetch("https://reqres.in/api/users?page=1")
    const jsonResponse = await apiResponse.json()
    setUser(jsonResponse.data)
   
  }
  
  return (
    <div className="App">
      <div className="header">
        <h2 id="header">Google</h2>
        <button className="button" onClick={loadUsers}>
          Get Users
        </button>
      </div>
      <div className="container">
        <ul>
          {users.map(({ id, first_name,last_name ,avatar, email }) => (
            <li key={id}>
              <div className="list-div">
                <div className="card">
                  <img className='image' alt="" src={avatar}></img>
                    <div className="container1">
                    <p><b>First Name : </b> {first_name}</p>
                    <p><b>Last Name : </b> {last_name}</p>
                    <p><b>Email : </b>{email}</p>
                    <p><b>avatar URL : </b> {avatar}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        
        
      </div>
    </div>
  )
}

export default App