// import React from 'react'

import { useAuthStorage } from "../../storage/authenticatedUser";
import AuthenticationScreen from "./AuthenticationScreen"
import HomeScreen from "./HomeScreen"

const Home = () => {
const { user } = useAuthStorage();
console.log(user); // Check the value of user here

  return (
    <>
      {user ? <HomeScreen /> : <AuthenticationScreen />}
    </>
  )
};

export default Home