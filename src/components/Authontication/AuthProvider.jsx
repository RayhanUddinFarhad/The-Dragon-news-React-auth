import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';




export const AuthContext = createContext(null)

const auth = getAuth(app)







const AuthProvider = ({children}) => {



    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const register = (email, password) => {
        setLoading(true)

       return createUserWithEmailAndPassword(auth,  email, password)
       



    }

    const profileUpdate = (name, photo) => {
        

        return updateProfile (auth.currentUser)



    }

    const login = (email, password) => { 
        setLoading(true)


        return signInWithEmailAndPassword (auth, email, password)
    }

    const logOut = () => {
        setLoading(true)

        return signOut (auth)
    }


    useEffect (() => {


        const unsubscribe = onAuthStateChanged (auth, loggedUser => {

            setUser (loggedUser)
            setLoading(false)


        })

        return () => {


            return unsubscribe()
        }
    }, [])


    const authInfo = {


        user,
        register,
        login,
        profileUpdate,
        logOut,
        loading
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;