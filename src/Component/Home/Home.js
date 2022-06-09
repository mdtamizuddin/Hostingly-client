import React from 'react'
import Banner from './Banner'
// Importing Logos 
import logo1 from '../assets/images/logo/Logo-1.png'
import logo2 from '../assets/images/logo/Logo-2.png'
import logo3 from '../assets/images/logo/Logo3.png'
import logo4 from '../assets/images/logo/Logo-4.png'
import ServiceCard from './ServiceCard'

// Importing Icons 
// Importing Icons 
import icon1 from '../assets/images/icon/ssl.png'
import icon2 from '../assets/images/icon/affort.png'
import icon3 from '../assets/images/icon/guarenty.png'
import icon4 from '../assets/images/icon/support.png'

import hosted from '../assets/images/icon/hosted.png'
import hosted2 from '../assets/images/icon/hosted-2.png'
import people from '../assets/images/people.png'
import sll from '../assets/images/ssl-img.jpg'
import TestCard from './TestCard'
const Home = () => {
    return (
        <div>
            <Banner />
            <section className='container mx-auto'>
                <SocialProof />
            </section>
            <FindDoamin />
            <Service />
            <Proficiant />
            <SSl />
            <Testimonials />
        </div>
    )
}

export default Home


const SocialProof = () => {
    return (
        <div className='flex-col flex lg:flex-row items-center my-20 w-full justify-end'>
            <div className='flex w-mb max-w-md items-center mr-5'>
                <h1 className='text-6xl font-bold text-accent'>2000+</h1>
                <p className='ml-4'>
                    ORGANIZATION IN AROUND THE WORLD TRUST HOSTINGLY
                </p>
            </div>
            <div className='grid grid-cols-4  gap-5 w-full'>
                <div className='flex justify-center items center'>
                    <img src={logo1} alt="" />
                </div>
                <div className='flex justify-center items center'>
                    <img src={logo2} alt="" />
                </div>
                <div className='flex justify-center items center'>
                    <img src={logo3} alt="" />
                </div>
                <div className='flex justify-center items center'>
                    <img src={logo4} alt="" />
                </div>
            </div>
        </div>
    )
}

const FindDoamin = () => {
    return (
        <div className='py-20 container mx-auto'>
            <h1 className='text-5xl font-bold text-center text-accent'>Find You Dream Domain Name</h1>
            <p className='text-center text-neutral mt-3'>Get your perfect domain name with a special price. This offer will end in a few days. </p>
            <div className='flex items-center justify-center mt-10'>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xl" />
                <button class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary ml-5">Check Domain</button>
            </div>
            <div className='text-center mt-7 flex justify-center'>
                <p className='mx-3'>.com
                    <span className='line-through ml-2 text-neutral'>$25.00</span>
                    <span className='ml-2'>$19.00</span>
                </p>
                |
                <p className='mx-3'>.co
                    <span className='line-through ml-2 text-neutral'>$20.00</span>
                    <span className='ml-2'>$15.00</span>
                </p>
                |
                <p className='mx-3'>.net
                    <span className='line-through ml-2 text-neutral'>$22.00</span>
                    <span className='ml-2'>$16.00</span>
                </p>
                |
                <p className='mx-3' s>.store
                    <span className='line-through ml-2 text-neutral'>$28.00</span>
                    <span className='ml-2'>$18.00</span>
                </p>
            </div>
        </div>
    )
}

const Service = () => {
    return (
        <div className='container mx-auto my-20'>
            <div className='flex justify-between items-center'>
                <h1 className='text-5xl font-bold flex '>The Best Service For You
                    <br />
                    Who Are Growth</h1>
                <p className='text-neutral'>Our powerful web hosting tools get the job done right, and are designed so that as you grow,<br /> your site can grow with you too.</p>
            </div>
            <div className='grid grid-cols-4 mt-20 gap-5'>
                <ServiceCard
                    title="SSL Certificate"
                    desc="Enter the domain name you want (extensions .com, .id, .online, .live, .store, .info and many more)"
                    img={icon1}
                />
                <ServiceCard
                    title="Affordable"
                    desc="You make use of cutting-edge technology and dependable and robust servers"
                    img={icon2}
                />
                <ServiceCard
                    title="Guareantee"
                    desc="We have a service guarantee for the first 30 days for your convenience"
                    img={icon3}
                />
                <ServiceCard
                    title="24/7/365 Support"
                    desc="We work when you work. Whenever that happens we will always be there"
                    img={icon4}
                />
            </div>
        </div>
    )
}

function Proficiant() {
    return (
        <section className='container mx-auto py-20'>
            <div className='flex justify-between items-center'> 
                <div className='w-2/5'>
                    <h1 className='text-5xl font-bold mb-5'>Proficiant People</h1>
                    <p className='text-neutral'>
                        Many things have happened since our establishment in 2001 and have been trusted by millions of users spread all over the world, both domestically and abroad.
                    </p>
                    <div className='mt-10 flex justify-between'>
                        <div className='flex'>
                            <img src={hosted} alt="" />
                            <div className='ml-5'>
                                <h1 className='text-3xl font-bold'>1000K ++</h1>
                                <p className='text-neutral'>Hosted Website</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <img src={hosted2} alt="" />
                            <div className='ml-5'>
                                <h1 className='text-3xl font-bold'>60%</h1>
                                <p className='text-neutral'>Web props customer</p>
                            </div>
                        </div>
                    </div>
                </div>
               
                    <img className='rounded-2xl' src={people} alt="" />
               
            </div>
        </section>
    )
}

function SSl() {
    return (
        <section className='container mx-auto py-20'>
            <div className='flex justify-between items-start'> 
            <img className='w-lg max-w-2xl rounded-2xl' src={sll} alt="" />
                <div className='w-3/6 p-5'>
                    <h1 className='text-5xl font-bold mb-5'>SSL Certificate</h1>
                    <p className='text-neutral'>
                    Our SSL service already uses 2,048 bit tokens accompanied by 256 encryption, this is the highest level of SSL security for your customers. Our SSL also uses "Point-to-verify" technology which shows real-time and accurate verification data.
                    </p>
                <div className='mt-10 pl-2'>
                    <p className='flex mb-3 items-center'>
                    <i class="fa-solid mr-3 text-success text-xl fa-check"></i>
                    More Safer
                    </p>

                    <p className='flex mb-3 items-center'>
                    <i class="fa-solid text-success mr-3 text-xl fa-check"></i>
                    Inprove search egine marketing 
                    </p>
                    <p className='flex items-center'>
                    <i class="fa-solid text-success mr-3 text-xl fa-check"></i>
                    Website's requtation improving
                    </p>
                </div>
                </div>
               
                    
               
            </div>
        </section>
    )
}

function Testimonials() {
    return(
        <section className='my-20 container mx-auto'>
            <h1 className='text-center text-5xl font-bold'>
                Customer's personal experience
            </h1>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-14 mt-20">
                <TestCard 
                name="Michelle Denki"
                />
                <TestCard 
                name="Meke Shilaturahmu"
                />
                <TestCard 
                name="Masimo Phowsyesyif"
                />
                <TestCard 
                name="Adam Broddband"
                />
                 <TestCard 
                name="Michelle Denki"
                />
                <TestCard 
                name="Meke Shilaturahmu"
                />
                <TestCard 
                name="Masimo Phowsyesyif"
                />
                <TestCard 
                name="Adam Broddband"
                />
            </div>
        </section>
    )
}