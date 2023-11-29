import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '@/utils/auth';
import { ADD_USER } from '@/components/graphql/mutations';


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
        <h1>Sign Up</h1>
        <h4>to start saving your results!</h4>
        <br/>
        <form onSubmit={handleFormSubmit} className="signup-form"> 
            <div className="text-field-signup">
                <input 
                  type="text"
                  id="firstName"
                  onChange={handleChange}
                  required
                />
                <span></span>
                <label htmlFor='firstName'>First Name</label>
            </div>
            <div className="text-field-signup">
                <input 
                  type="text" 
                  id="lastName"
                  required
                />
                <span></span>
                <label htmlFor='lastName'>Last Name</label>
            </div>
            <div className="text-field-signup">
                <input 
                  type="text" 
                  id="username" 
                  onChange={handleChange}
                  required
                />
                <span></span>
                <label htmlFor='username'>User Name</label>
            </div>
            <div className="text-field-signup">
                <input 
                  type="password" 
                  id="password"
                  onChange={handleChange}
                  required
                />
                <span></span>
                <label htmlFor='Password'>Password</label>
            </div>
            <div className="terms-privacy-div">By clicking the Sign Up button you agree to our <a href='#' className ="terms-privacy">Terms and Conditions</a>
            and <a href='#' className ="terms-privacy">Privacy Policy</a>
            </div>
            <input type="submit" value="Sign Up"/>
            <div className="signup">
                Already a Member? <Link to="/login">Login</Link>
            </div>
        </form>
      </div>
  );
}

export default Signup;
