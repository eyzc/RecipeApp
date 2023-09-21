import React from 'react'
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage'

const MMKV = new MMKVLoader().initialize()
 const useAuth = () => {
    const [users, setUsers] = [useMMKVStorage]('users',MMKV,[])
    const [user, setUser] = [useMMKVStorage]('user',MMKV,[])


   const Login =(username, password) =>{
    let loggedIn = false

    users.forEach(user => {
        if (user.username === username && user.password == password) {
          console.log('Login')
          setUser(user)
          loggedIn=true
          return true  
        }
    })
    if (!loggedIn) {
        console.log('Logout')
        setUser({})
        return false
    }
   } 
const Register = (username, email,password,passwordConfrim)=>{
    if (password === passwordConfrim && username.length > 0 && email.length>0 && password.length>0 ) {
        setUsers([...users, {username: username,password: password,email: email}])
        return true
    } else {
        console.log('Password and confirm not same or there are unfilled inputss')
      return false
    }
}


 }
