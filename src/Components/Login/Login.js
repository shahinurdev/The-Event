import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    const history= useHistory();
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    const {displayName,email} = result.user;
    const signInUser ={name:displayName,email}
    setLoggedInUser(signInUser);
    storeAuthToken();
    history.replace(from)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log('error',errorCode,errorMessage,email,credential);
  });
    }
    const storeAuthToken =()=>{
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('authToken',idToken)
      }).catch(function(error) {
        // Handle error
      });

    }
    return (
        <div className='container text-center'>
          <div className="row">
            <div style={{marginTop:'25%'}}  className="col">
           <p> <Link to='/home'>THE EVENT</Link></p>
           <p>Login with</p>
              <button className="btn btn-primary  "onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            </div>
           
        </div>
    );
};

export default Login;