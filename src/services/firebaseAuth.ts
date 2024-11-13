import { auth } from "../firebase-config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, signOut } from 'firebase/auth'

export const loginUser = async (email: string, password: string): Promise<UserCredential |null> => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log('User logged-in: ', userCredential.user)
        return userCredential
    }catch(error){
        console.error('Error when login: ', error)
        return null
    }
}

export const registerUser = async (email: string, password: string): Promise<UserCredential | null> => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log('Registered user: ', userCredential)
        return userCredential
    }catch(error){
        console.error('Error when register ', error)
        return null
    }
}
