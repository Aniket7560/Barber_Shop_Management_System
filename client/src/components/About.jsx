const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="about-introduction">
                    <h2>About Us</h2>
                    <p>Welcome to Yes Boss Salon, where we believe in making every client feel like a superstar.</p>
                    <p>Our mission is to provide the best haircuts, styling, and grooming services in town, while creating a welcoming and relaxing atmosphere for our clients.</p>
                </div>

                <div className="about-team">
                    <h3>Meet Our Team</h3>
                    <div className="team-member">
                        <img src="https://www.salongold.co.uk/wp-content/uploads/2017/10/whatissaloninsurance-scaled-1-600x360.jpeg" alt="Stylist 1" />
                        <h4>John Doe</h4>
                        <p>Lead Stylist</p>
                    </div>
                    <div className="team-member">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/035/344/185/small_2x/ai-generated-hairdresser-cutting-hair-of-young-woman-in-beauty-salon-a-professional-hairdresser-skillfully-cutting-the-hair-of-a-young-woman-in-a-beauty-salon-ai-generated-free-photo.jpg" alt="Stylist 2" />
                        <h4>Jane Smith</h4>
                        <p>Color Specialist</p>
                    </div>

                </div>

                <div className="about-services">
                    <h3>Our Services</h3>
                    <ul>
                        <li>Haircuts</li>
                        <li>Hair Coloring</li>
                        <li>Styling</li>
                        <li>Manicures</li>
                        <li>Pedicures</li>

                    </ul>
                </div>


            </div>
        </>
    )
}


export default About