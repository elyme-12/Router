import photome from '../Image/photome.jpg';

function About() {
    return (
        <section id="about">
            <h2 className="about_heading">About Me</h2>
            <div className="about_container">
                <div className="wrapper">
                    <img src={photome} alt="My image" className="circle-image2" /> 
                    <p className="description">"Hi! I'm Elysalyn V. Barlan, As a dedicated IT student pursuing a Bachelor of 
                        Science in Information Technology at Dalubhasaan ng Lungsod ng Lucena (DLL), I am enthusiastic about learning
                         and embracing new opportunities in the digital space. In addition to my academic journey, I am also a performer,
                          a role that has sharpened my ability to understand aesthetics and visual appeal. This experience enhances my 
                          perspective as a graphic designer, allowing me to apply a keen sense of artistry and creativity to digital 
                          design projects."</p>
                </div>
            </div>
        </section>
    );
};

export default About;