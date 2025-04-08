import React, { useState } from 'react';
import axios from 'axios';
import '../style/form.css'

export default function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null);

  let nameValidation = /^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\s'-]+$/
  let passwordValidation = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  async function registerUser() {
    if(!nameValidation.test(name)){
      setError('name should contain only alphabets!')
      return
    }
    
    if(!passwordValidation.test(password)){
      setError('Password needs to be minimum 8 characters and 1 symbol,1 uppercase')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      let response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name: name,
        email: email,
        username: username,
        phone: phone,
        password: password, 
      });

      if (response.data) {
        setResponseMessage('Successfully registered!');
        setUserData(response.data);
        setName('');
        setEmail('');
        setUsername('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setError('');
      }
    } catch (err) {
      setError(err.message || 'Registration failed');
      setUserData(null);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    registerUser()
    setResponseMessage('Registering...')
  };

  return (
    <div className="registration-container">
      <h2>Register New User</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          responseMessage && <p className="success-message">{responseMessage}</p>
        )}
        
        <button type="submit" className="submit-button">Register</button>
      </form>

      {userData && (
        <div className="user-details">
          <h3>Registered User Details</h3>
          <p><strong>ID:</strong> {userData.id}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </div>
      )}
    </div>
  );
}
















// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: { 
//       'Content-Type': 'application/json' 
//   },
//   body: JSON.stringify({
//       title: 'Жаңа пост',
//       body: 'Fetch арқылы жіберілді',
//       userId: 1
//   })
// })
// .then(response => response.json())
// .then(data => console.log('Fetch жауабы:', data))
// .catch(error => console.error('Fetch қатесі:', error));
// axios.post('https://jsonplaceholder.typicode.com/posts', {
//   title: 'Жаңа пост',
//   body: 'Бұл пост API арқылы қосылды',
//   userId: 1
// })
// .then(response => {
//   console.log('Сервер жауабы:', response.data);
// })
// .catch(error => {
//   console.error('Қате орын алды:', error);
// });

// axios.get('https://jsonplaceholder.typicode.com/invalid-url')
// .then(response => {
//   console.log('Сервер GET жауабы:', response.data);
// })
// .catch(error => {
//   console.error('Қате орын алды:', error.message);
// });