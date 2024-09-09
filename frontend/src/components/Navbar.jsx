// import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LogOut, Menu, Search } from 'lucide-react';
import { useAuthStorage } from '../storage/authenticatedUser';
import { useContentStore } from '../storage/content';
import { useState } from 'react';

const Navbar = () => {
    
    // State for mobile menu open/close
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuthStorage();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    // const { contentType, setContentType } = useContentStore()
    const { setContentType } = useContentStore();
    // console.log("contentTypr:", contentType);

    return (
    <div className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
        <div className='flex items-center gap-10 z-50'>
            <Link to="/">
            <img src="/myLogoWhite.png" alt="Logo" className='w-32 sm:w-40' />
            </Link>

            {/* Navbar items for desktop devices only */}
            <div className='hidden sm:flex gap-2 items-center'>
                <Link to="/" className='hover:underline' onClick={()=>setContentType("movie")}>Movies</Link>
                <Link to="/" className='hover:underline' onClick={()=>setContentType("tv")}>Tv Shows</Link>
                <Link to="/history" className='hover:underline'>Search History</Link>
            </div>
        </div>

        <div className='flex gap-2 items-center z-50'>
            <Link to={"/search"}>
            <Search className="size-6 cursor-pointer" />
            </Link>
            <img src={user.image} alt="User Image" className='h-8 rounded cursor-pointer' />
            <LogOut className="size-6 cursor-pointer" onClick={logout} />
            {/* HAMBURGER MENU */}
            <div className='sm:hidden'>
                <Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu} />
            </div>
        </div>

        {/* Navbar items for mobile devices only */}
        {isMobileMenuOpen && (
            <div className='w-full sm:hidden mt-4 z-50 bg-blue-800 border rounded border-none'>
                <Link to={"/"} 
                className='block hover:underline p-2'
                onClick={toggleMobileMenu}
                >
                    Movies
                </Link>

                <Link to={"/"} 
                className='block hover:underline p-2'
                onClick={toggleMobileMenu}
                >
                    Tv Shows
                </Link>

                <Link to={"/history"} 
                className='block hover:underline p-2'
                onClick={toggleMobileMenu}
                >
                    Search History
                </Link>
            </div>
        )}
    </div>
  )
}

export default Navbar;