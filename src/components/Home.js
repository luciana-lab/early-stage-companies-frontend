import React from 'react';
import '../style/Home.css';
import Footer from './Footer';

const Home = ({ routerProps }) => {
    return (
        <div>
            <div id="displayhome">
                <div className="home-container">
                    <div className="home-card">
                        <div className="home-video-responsive">
                            <iframe src={`https://www.youtube.com/embed/UiscWISgJgw?autoplay=1&mute=1`} title="video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="home-text-overlay">
                            <h2 id="home-h2">CAFFEINATING</h2>
                            <p id="home-p">Entrepreneurs Nationwide Every Wednesday</p>
                            <button onClick={() => routerProps.history.push("/companies")} id="home-btn">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;