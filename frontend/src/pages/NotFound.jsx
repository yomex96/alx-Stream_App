// import React from 'react'

import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div 
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-red-600"
        style={{backgroundImage: `url("/tv.png")`}}
    >
        <header className="absolute top-0 left-0 p-4 bg-gray-900 w-full">
            <Link to={"/"}>
                <img src={"/myLogoWhite.png"} alt="Stream Logo" />
            </Link>
        </header>
        <main className="text-center z-10">
            <h1 className="text-7xl font-semibold mb-4">Mis-Typed the url?</h1>
            <p className="mb-6 text-xl">
                Sorry, we are unable to locate the page you are looking for. <br /> 
                Kindly click on the Stream button below or the Logo above to return back to the home page
            </p>
            <Link to={"/"} className="bg-red-600 text-white py-2 px-4 rounded">
                Stream Home
            </Link>
        </main>
    </div>
  )
}

export default NotFound