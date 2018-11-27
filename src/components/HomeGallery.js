import React, {Component} from 'react';
import './main.css';

import pic1 from '../images/102375_1c004.jpg';
import pic2 from '../images/Corrugated.jpg';
import pic3 from '../images/image.jpg';
// import pic4 from '../images/4-small.jpg';
import pic5 from '../images/5-small.jpg';
import pic6 from '../images/6-small.jpg';


class HomeGallery extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-3 ">
                        <img className="align" src={pic1} alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-3 ">
                        <img className="align" src={pic2} alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-3 ">
                        <img className="align" src={pic3} alt=""/>
                    </div>
                    {/*<div className="col-sm-12 col-md-2 align">*/}
                        {/*<img src={pic4} alt=""/>*/}
                    {/*</div>*/}
                    <div className="col-sm-12 col-md-3 ">
                        <img className="align" src={pic5} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeGallery;