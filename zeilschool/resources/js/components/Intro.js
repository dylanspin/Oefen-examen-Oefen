import { divide } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function Intro() {
    return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="cOverlay anton d-lg-block d-md-none d-sm-none d-none">
                    Zeil School <br/> De Waai
                    </div>
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                            <div className="Cimage first-slide">
                                <img className="first-slide fullImage" src="/images/stock4.jpg" alt="First slide"/>
                            </div>
                    </div>
                    <div className="carousel-item">
                            <div className="Cimage first-slide">
                                <img className="first-slide fullImage" src="/images/stock1.jpg" alt="First slide"/>
                            </div>
                    </div>
                    <div className="carousel-item">
                            <div className="Cimage">
                                <img className="first-slide fullImage" src="/images/stock3.jpg" alt="First slide"/>
                            </div>
                    </div>
                </div>
                <div className="Corners">
                    <div className="triangle-left"></div>
                    <div className="triangle-right"></div>
                </div>
                
            </div>
    );
}

export default Intro;

if (document.getElementById('intro')) {
    ReactDOM.render(<Intro />, document.getElementById('intro'));
}
