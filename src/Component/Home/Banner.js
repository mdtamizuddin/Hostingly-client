import React from 'react'
import bannerBg from '../assets/images/banner-bg.png'
const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"

    }
    return (
        <header className='h-screen w-screen' style={bannerStyle}>
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div className='w-full lg:max-w-4xl'>
                        <h1 class="text-6xl text-accent">Affordable Hosting Solution Website</h1>
                        <p class="py-6 mt-3">
                            <span className='mx-5 lg:mx-14'>Free SSL Service</span> |
                            <span className='mx-5 lg:mx-14'>5000 User</span> |
                            <span className='mx-5 lg:mx-14'>10 GB SSD Storage</span>
                        </p>
                        <button class="btn mt-3 btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started 
                        <i class="fa-solid text-2xl fa-right-long ml-5"></i>
                        </button>

                        <p className='mt-7 text-neutral'>Only With</p>
                        <h2 className='text-4xl text-secondary mt-3'>2,5/Month</h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner