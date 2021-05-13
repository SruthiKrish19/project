import React, {useState } from 'react'; 
import './App.css';
import Axios from 'axios';

function App() {

  const [name,setName]  = useState('');
  const [dob,setDob] =  useState('');
  const [email,setEmail] = useState('');
  const [aadhar,setAadhar]  = useState('');
  const [contact,setContact]  = useState('');

const submitDetails = () => {
Axios.post("http://localhost:3001/api/insert",
{name: name, dob: dob, email: email, aadhar: aadhar ,contact: contact}).then(() =>{ 
  alert("successful inserted");
});

};

  return (
    <div className="App">
      <h1>Blood Donation</h1>

      <div className='form'>
        <label> Name:</label>
          <input type="text"  name="name" onChange={(d) =>
          setName(d.target.value)} />
          <label>Dob:</label>
          <input type="text" name="dob" onChange={(e) => setDob(e.target.value)} />
          <label>Email:</label>
          <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
          <label>Aadhar no:</label>
          <input type="text" name="aadhar" onChange={(e) => setAadhar(e.target.value)}/>
          <label>Contact:</label>
          <input type="text" name="contact" onChange={(e) => setContact(e.target.value)}/>

          <button onClick={submitDetails}>Submit</button>
      </div>
   </div>
  );
}

export default App;
