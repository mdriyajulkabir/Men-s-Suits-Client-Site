import initializetionAuthentication from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged , signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword , updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
initializetionAuthentication()



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singinUsingGoogle = (location, history)=>{
      // saveUser(user.email, user.displayName, 'PUT')
       signInWithPopup(auth, googleProvider)   
       .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setError('');
        const destination = location?.state?.from || '/';
                history.replace(destination);
    }).catch((error) =>{
        setError(error.message);
    })
    }

    const registerUser = (email,password, name) =>{
        setLoading(true)
        createUserWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
            setError('')
            const newUser = {email, displayName: name};
            setUser(newUser)
            // save user to the database
            saveUser(email, name, 'POST')
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
               
              }).catch((error) => {
               
              });
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          })
          .finally(()=> setLoading(false));
    }
    const loginUser = (email, password)=>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              setError('')
              alert('Log In Successfully')
            })
            .catch((error) => {
            //   const errorCode = error.code;
              const errorMessage = error.message;
              setError(errorMessage)
            })
            .finally(()=> setLoading(false));

    }

    const logOut = ()=>{
            setLoading(true)
            signOut(auth).then(() => {
                setUser({})
              }).catch((error) => {
                // An error happened.
              })
              .finally(()=> setLoading(false));
        }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else{
                setUser({})
            }
            setLoading(false)
          });
          return () => unsubscribe;
    }, [])

    useEffect(() =>{
      fetch(`https://vast-gorge-26267.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data => setAdmin(data.admin))
    },[user.email])

    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName}
        fetch('https://vast-gorge-26267.herokuapp.com/users', {
          method: method,
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
    }

    return{
        user,
        admin,
        singinUsingGoogle,
        registerUser,
        loginUser,
        logOut,
        loading,
        error,
        
    }
};

export default useFirebase;