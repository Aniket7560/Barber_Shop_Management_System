import React from "react"

const Home = () => {

    const redirectToAppointmentPage = () => {
        window.location.href = '/appointment'; 
    };


    return (
        <>
            <div className="home-container">
                <div className="background-image"></div>
                <div className="description-container">
                    <div className="description-box">
                        <h1>WELCOME TO YES BOSS SALON</h1>
                        <p>Experience the best haircuts and grooming services in town.</p>
                        <Button onClick={redirectToAppointmentPage} />
                    </div>
                </div>
            </div>

            <div className="additional-container">
                <div className="image-info">
                    <img src="https://media.istockphoto.com/id/1153438285/photo/woman-at-hair-salon.jpg?s=612x612&w=0&k=20&c=FyHTWvInPUeuMgNMBdDG1765edXLx9eoUKF_iaptvaU=" alt="Image 1" />
                    <div className="info">
                        <h1>Meet Our Stylist</h1>
                        <p>our stylists are hair wizards who can transform your look with a flick of their shears. With years of experience and a passion for creativity, they'll make sure you leave feeling like a superstar.</p>
                        <p>Come in for a trim, leave with a whole new attitude!</p>
                    </div>
                </div>
            </div>


        </>

    )
}


const Button = ({ onClick }) => {
    return (
        <button className="appointment-button" onClick={onClick}>
            Book Appointment
        </button>
    );
};



export default Home