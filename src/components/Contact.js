import React, {Component} from 'react';
import './main.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact">
                    {/*<h3 className="desc3">*/}
                        {/*تماس با ما*/}
                    {/*</h3>*/}
                    <br/>
                    <h1 className="desc4">

                        <span className="contactHeader">:تلفن تماس </span>
                        <br/>
                        09125256158
                        <br/>
                        09121160743
                        {/*0912-1160743*/}
                        {/*0912-5256158*/}
                    </h1>
                </div>
            </div>
        );
    }
}

export default Contact;