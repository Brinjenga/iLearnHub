import React, {useCallback} from 'react'
import { withRouter, Link } from 'react-router-dom'
import app from '../base'

const  Signup = ({ history }) => {
    const handleSignUp = useCallback(async event =>{
        event.preventDefault();
        const { email, password} = event.target.elements;
        try{
            await app 
             .auth()
             .createUserWithEmailAndPassword(email.value, password.value);
             history.push('/');
        }catch( error){
          alert(error)
        }
    },[history]);
    return (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignUp}>
              <label>
                  Email
                  <input name="email" type="email" placeholder="Email"/>
              </label>
              <label>
                password
                <input name="password" type="password" placeholder="Password"/>
              </label>
              <button type="submit">Sign Up</button>
          </form>
          <Link to="/login">
            <button >Login </button>
          </Link>
        </div>
    );
};

export default withRouter(Signup);
