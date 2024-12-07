import React, { useRef, useState } from 'react';
import GetInTouch from '../assets/GetInTouch.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Sending email using EmailJS
        emailjs.send(
            'service_8a50hin',         // Service ID
            'template_u1feyox',        // Template ID
            {
                from_name: form.name,
                to_name: 'Hemant Sharma',
                from_email: form.email,
                to_email: 'hemantsharma805303@gmail.com',
                message: form.message,
            },
            'bzUlLD-vZ7771eOhb'       // User ID (Public key)
        )
        .then(() => {
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setForm({
                name: '',
                email: '',
                message: '',
            });
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong.');
        });
    };

    return (
        <div className='bg-black w-full h-[699px] flex items-center justify-center'>
            <div className='text-white w-[500px] h-[650px] backdrop-blur-lg pl-7 pt-4 pr-20'>
                <h6 className='text-5xl font-semibold text-[#0FFF50]'>Get In Touch</h6><br />
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label htmlFor="name" className='font-semibold text-2xl'>Name:</label><br /><br />
                    <input
                        type="text"
                        placeholder='Type your name here..'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-gray-900 h-12 rounded-2xl pl-3"
                    /><br /><br />
                    <label htmlFor="email" className='font-semibold text-2xl '>Email:</label><br /><br />
                    <input
                        type="email"
                        name='email'
                        placeholder='Type your email here..'
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-gray-900 h-12 rounded-2xl pl-3"
                    /><br /><br />
                    <label htmlFor="message" className='font-semibold text-2xl'>Message:</label><br /><br />
                    <textarea
                        name="message"
                        placeholder='Type your message here..'
                        value={form.message}
                        onChange={handleChange}
                        id="message"
                        className="w-full bg-gray-900 h-32 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    /><br /><br />
                    <button type="submit" className='w-24 h-9 rounded-lg bg-[#0FFF50] text-black font-semibold'>
                        {loading ? "Loading..." : "Send"}
                    </button>
                </form>

                <p className='mt-3'>Or you can directly reach me at <br />hemantsharma805303@gmail.com</p>
            </div>
            <img src={GetInTouch} alt="" className='hidden xl:block xl:w-[500px] xl:h-[500px] xl:mr-4' />
        </div>
    );
};

export default Contact;
