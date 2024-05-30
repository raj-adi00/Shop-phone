import React from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer';
function Contact() {
   const email='mobileworld@gmail.com';
    return (
        <div>
            <Header />
            <div className='flex flex-col m-5 justify-between gap-20'>
                <div className='w-4/5 m-auto overflow-auto border-2 border-black p-3 rounded-xl shadow-xl text-blue-900 font-serif font-semibold'>
                    At Mobile World, our customers are at the heart of everything we do. We are deeply committed to providing you with the best mobile shopping experience, because we believe you deserve nothing less. Your trust in us motivates us to continuously strive for excellence, offering only the highest quality smartphones at competitive prices. We understand that choosing the right phone is a significant decision, and we are here to support you every step of the way with our 24/7 customer service. We value your feedback and use it to improve our services, ensuring your satisfaction and happiness. Thank you for choosing us as your trusted mobile retailer; we are honored to serve you and look forward to building a lasting relationship.
                </div>
                <div className='flex justify-around'>
                    <p className='text-xl font-thin font-serif'>Contact us at:</p>
                    <p><FontAwesomeIcon icon={faEnvelope} size='lg' className='mx-3'/><span className='text-xl font-thin font-serif'>{email}</span></p>
                    <p><FontAwesomeIcon icon={faPhone} size='lg' className='mx-3' /><span className='text-xl font-thin font-serif'>12345</span></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact