import React from "react"
import { useState } from 'react';


const Appointment = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        service: '',
        date: '',
        time: ''
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform further actions like sending the form data to the backend
        console.log(formData);
        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            service: '',
            date: '',
            time: ''
        });
    };


    return (
        <>
            <div className="form-container">
                <h2>Book an Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                    <label>Service:</label>
                    <input
                        type="text"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    />
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    <label>Time:</label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Book Appointment</button>
                </form>
            </div>
        </>
    )
};

export default Appointment