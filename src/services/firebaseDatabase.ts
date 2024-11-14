import { firestore } from "../firebase-config"
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { UserRole } from "../types/UserRole"

// this is to save user data to firestore database when user register
export const saveUserData = async (uid: string, name: string, email: string, role: UserRole): Promise<void> => {
    //uid is user id that firebase gives when user register
    try{
        await setDoc(doc(firestore, "users", uid), {
            name, 
            email, 
            role: UserRole[role] //this role will be string data type   
        })
        console.log('User added to firestore')
    }catch(error){
        console.error('Error when add user: ', error)
    }
}

// this is to navigate user according to user's role
export const fetchUserData = async (uid: string): 
Promise<{
    name: string,
    email: string,
    role: UserRole
} | null> => {
    try{
        const userDoc = await getDoc(doc(firestore, "users", uid))
        if(userDoc.exists()){
            return userDoc.data() as { name: string, email: string, role: UserRole}
        }else{
            console.log('No such user document')
            return null
        }
    }catch(error){
        console.error(`Error when fetching user data with id:${uid} with error: ${error}`)
        return null
    }
}