import React, { useState } from 'react';
import undrawImage from '../assets/undraw.png'; // Ensure correct path

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    alert(`Logging in with Email: ${email} and Password: ${password}`);
  };

  return (
    <div style={styles.container}>
      {/* Left: Form | Right: Image (Inside the same container) */}
      <div style={styles.content}>
        {/* Left Side: Login Form */}
        <div style={styles.loginBox}>
          <h2 style={styles.heading}>User Login</h2>
          <form onSubmit={handleLogin} autoComplete="off">
            <input
              type="email"
              name="email"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <div style={styles.options}>
              <label>
                <input type="checkbox" /> Remember
              </label>
              <a href="#" style={styles.link}>Forgot Password?</a>
            </div>
            <a href="#" style={styles.register}>New ? Register</a>
            <button type="submit" style={styles.button}>SUBMIT</button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div style={styles.imageContainer}>
          <img src={undrawImage} alt="Login Illustration" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100vh",
    width: "100vw",
  },
  content: {
    display: 'flex',
    flexDirection: 'row', // Left-right layout
    alignItems: 'center',
    background: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    width: '700px',
    height:'400px', // Adjust width
    maxWidth: '90%',
    gap: '20px', // Space between form and image
  },
  loginBox: {
    flex: 1, // Makes the form take half of the space
    textAlign: 'center',
  },
  heading: {
    color: '#d13b89',
    marginBottom: '60px',
    marginTop:'40px'
  },
  input: {
    width: '90%',
    padding: '12px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '30px',
    fontSize: '16px',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px'
  },
  link: {
    textDecoration: 'none',
    color: '#3b2f9d',
  },
  button: {
    width: '100%',
    padding: '12px',
    background: '#ff4f4f',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop:'10px'
  },
  imageContainer: {
    flex: 1, // Makes the image take half of the space
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  register: {
    textDecoration:'none',
    color:'black',
    fontSize:'14px'
  }
};

export default LoginScreen;
