import React, {Component} from 'react';
import './main.css';
import Carousel from "./Carousel";

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact">
                    {/*<h3 className="desc3">*/}
                        {/*تماس با ما*/}
                    {/*</h3>*/}
                    <br/>
                    <h1>

                        <span className="contactHeader">:تلفن تماس </span>

                        {/*0912-1160743*/}
                        {/*0912-5256158*/}
                    </h1>
                    <h1 className="contactHeader2">
                        09125256158
                        <br/>
                        09121160743
                    </h1>
                </div>
                <Carousel/>
            </div>
        );
    }
}

export default Contact;