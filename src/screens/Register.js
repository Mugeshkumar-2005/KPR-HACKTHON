import React, { useState } from 'react';
import undrawImage from '../assets/undraw.png'; // Ensure correct path

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Registering User: ${name} with Email: ${email}`);
  };

  return (
    <div style={styles.container}>
      {/* Left: Form | Right: Image */}
      <div style={styles.content}>
        {/* Left Side: Registration Form */}
        <div style={styles.registerBox}>
          <h2 style={styles.heading}>User Registration</h2>
          <form onSubmit={handleRegister} autoComplete="off">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>REGISTER</button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div style={styles.imageContainer}>
          <img src={undrawImage} alt="Register Illustration" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

// Styles (same as LoginScreen.js)
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
    height: '450px',
    maxWidth: '90%',
    gap: '20px',
  },
  registerBox: {
    flex: 1, // Takes half of the space
    textAlign: 'center',
  },
  heading: {
    color: '#d13b89',
    marginBottom: '40px',
    marginTop: '20px',
  },
  input: {
    width: '90%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '30px',
    fontSize: '16px',
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
  },
  imageContainer: {
    flex: 1, // Image takes half of the space
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default RegisterScreen;
