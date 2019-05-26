import React from 'react';
import webshop from '../Images/webshop.png'
import daily from '../Images/daily.png'
import planazo from '../Images/planazo.png'


const Work = () => {

    return (
        <div className="work">
            <div className="project-wrapper">
                <div className="info-project">
                    <h3>WEBSHOP PROJECT</h3>
                    <div>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>SASS</li>
                        </ul>
                        <p>Mock-up page for a beer webshop with a functioning cart and search bar.</p>
                    </div>
                    <ul>
                        <li><a href="https://github.com/kikeanaya/webshop-project" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://kikeanaya.github.io/webshop-project/" target="_blank" rel="noopener noreferrer">Demo</a></li>
                    </ul>
                </div>

                <div className="image-project">
                    <img src={webshop} alt="webshop"/>
                </div>
            </div>

            <div className="project-wrapper">
                <div className="image-project">
                    <img src={daily} alt="daily"/>
                </div>
                <div className="info-project">
                    <h3>DAILY TOOLS</h3>
                    <div>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>SASS</li>
                        </ul>
                        <p>Website with handy tools that you might need any day of the week.</p>
                    </div>
                    <ul>
                        <li><a href="https://github.com/kikeanaya/daily-tools" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://kikeanaya.github.io/daily-tools/" target="_blank" rel="noopener noreferrer">Demo</a></li>
                    </ul>
                </div>
            </div>

            <div className="project-wrapper">
                <div className="info-project">
                    <h3>INSTAGRAM-LIKE PROJECT</h3>
                    <div>
                        <ul>
                            <li>React</li>
                            <li>Node</li>
                            <li>SASS</li>
                        </ul>
                        <p>App where you can share plans with other people and have Instagram-like interactions.</p>
                    </div>
                    <ul>
                        <li><a href="https://github.com/kikeanaya/planazo-front" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://kikeanaya.github.io/planazo-front/" target="_blank" rel="noopener noreferrer">Demo</a></li>
                    </ul>
                </div>

                <div className="image-project">
                    <img src={planazo} alt="planazo"/>
                </div>
            </div>
        </div>
    )
}

export default Work;