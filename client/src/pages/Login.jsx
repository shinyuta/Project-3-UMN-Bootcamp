import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '@/components/graphql/mutations';
import Auth from '@/utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className = "wrapper">
      <h1>Login</h1>
      <h4>to save your results!</h4>
      <form onSubmit={handleFormSubmit} id="login-form"> 
        <div className="text-field">
            <input 
              type="text" 
              id="email" 
              onChange={handleChange}
              required
            />
            <span></span>
            <label htmlFor='email'>Email</label>
        </div>
        <div className="text-field">
            <input 
              type="password" 
              id="password" 
              onChange={handleChange}
              required
            />
            <span></span>
            <label htmlFor='password'>Password</label>
        </div>
        {error ? (
          <div>
            <p classNameName="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="forgot">Forgot Password?</div>
        <input type="submit" value="Login"></input>
        <div className="signup">
            Not a Member? <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
