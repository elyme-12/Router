import { useNavigate } from 'react-router-dom';
import homeimg from '../Image/homeimg.jpg' // Correct path

function Home() {

    const navigate = useNavigate();

    return (
            <div className="home-container">        
                <img src={homeimg} alt="logo"  className="circle-image1" /> 
                    <h1 className="name-container">Hi, I'm Elysalyn Barlan</h1>
                    <p className="text-content">Dedicated to utilizing technology as a means to create intuitive and forward-thinking digital products, 
                        I thrive on learning new programming languages and refining my problem-solving abilities.</p>
                     <button className="about-button" onClick={() => navigate('/about')}>
                           
                    See More
                </button>

            </div>

     
    );
};

export default Home;