import { ChevronRight } from 'lucide-react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Testimonial from '../../components/Testimonial';

const AuthenticationScreen = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate("/signup?email=" + email);
    }        

  return (
    <div className='hero-bg relative'>
        {/* Navigation Section */}
        <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
            <img src="/myLogoWhite.png" alt="Brand Logo" className='w-32 md:w-52' />
            <Link to={"/login"} className='text-white bg-blue-600 py-1 px-2 rounded'>
                Sign In
            </Link>
        </header>

        {/* Hero Section */}
        <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                Stream your Favorite Tv shows, Movies and lots more
            </h1>
            <p className='text-lg mb-4'>24/7 Anytime, Anywhere</p>
            <p className='mb-4'>Enter your Email to get started</p>
            <form className='flex flex-col md:flex-row gap-4 w-1/2 mt-8' onSubmit={handleFormSubmit}>
                <input 
                    type="email" 
                    placeholder='Enter your email' 
                    className='p-2 rounded flex-1 bg-black/80 border text-black border-gray-700' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className='bg-blue-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
                    Get Started
                    <ChevronRight className='size-8 md:size-10' />
                </button>
            </form>
        </div>

        {/* Seperator Div */}
        <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

        {/* 1st Section */}
        <div className='py-10 bg-white text-blue'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                {/* LEFT DIV */}
                <div className='flex-1 text-center md:text-left'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
                        Discover Your Favorite Shows
                    </h2>
                    <p className='text-lg md:text-xl'>
                        {/* Stream from various devices and discover your favorite shows */}
                        Enjoy your favorite shows anytime, anywhere, with Stream.
                    </p>
                </div>
                {/* RIGHT DIV */}
                <div className='flex-1 relative'>
                    <img src="/tv.png" alt="TV Image" className='mt-4 z-20 relative' />
                    <video className='absolute top-1/4 left-12 -translate-x-1/2 -translate-y-1/2 h-2/2 z-10'
                        playsInline
                        autoPlay={true}
                        muted
                        loop
                    >
                        <source src='/hero-vid.m4v' type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
        
        {/* Seperator Div */}
        <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />
    
        {/* 2nd Section */}
        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
                {/* LEFT SIDE */}
                <div className='flex-1'>
                    <div className='relative'>
                        <img src="/phone1.png" alt="stranger image" className='mt-4 w-96' />
                        <div className='flex items-center gap-2 absolute bottom-5 left-11 translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md p-2'>
                            <img src="/stranger-things-sm.png" alt="image" className='h-full' />
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex flex-col gap-0'>
                                    <span className='text-md lg:text-lg font-bold'>Stranger Things</span>
                                    <span className='text-sm text-blue-500'>Downloading...</span>
                                </div>
                                <img src="/download-icon.gif" alt="gif" className='h-12' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className='flex-1 md:text-left text-center'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-balance'>
                        Download online, Watch offline
                    </h2>
                    <p className='text-lg md:text-xl'>
                        Save favorite tv shows and watch when offline
                    </p>
                </div>
            </div>
        </div>

          
        {/* Seperator Div */}
        <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />
    
        {/* 3rd Section */}
        <div className='py-10 bg-white text-blue'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                {/* LEFT DIV */}
                <div className='flex-1 text-center md:text-left'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
                        Stream from anywhere
                    </h2>
                    <p className='text-lg md:text-xl'>
                        Stream unlimited movie series and Tv Shows from all devices
                    </p>
                </div>
                {/* RIGHT DIV */}
                <div className='flex-1 relative overflow-hidden'>
                    <img src="/device-pile.png" alt="Device Image" className='mt-4 z-20 relative' />
                    <video className='absolute top-3 h-4/6 z-10 max-w-[63%]'
                        style={{ left: '280px', transform: 'translateX(-50%)' }}
                        playsInline
                        autoPlay={true}
                        muted
                        loop
                        width={350}
                    >
                        <source src='/video-devices.m4v' type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
        
        {/* Seperator Div */}
        <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />
        
        {/* 4th Section */}
        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row'>
                {/* LEFT DIV */}
                <div className='flex-1 relative'>
                    <img src="/kids.png" alt="Kids" className='mt-4' />
                </div>
                {/* RIGHT DIV */}
                <div className='flex-1 text-center md:text-left'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
                        Create kids profile
                    </h2>
                    <p className='text-lg md:text-2xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus saepe velit officia ex! Consectetur harum error non veniam repellendus unde autem sit velit amet eveniet aliquam, nam consequatur repellat quaerat!
                    </p>
                </div>
            </div>
        </div>
        <Testimonial />
    </div>
  )
}

export default AuthenticationScreen