import React, { Component } from 'react';
// import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar';
import CarouselPage from "../components/Dashboard";

// import Jumbotron from '../components/Jumbotron.jsx';
// import Gallery from '../components/Gallery'




class Home extends Component {
    render() {
        return (
            <div>

                {/*<SideNavPage/>*/}
                {/*<NavbarPage/>*/}
                {/*<SideNavPage/>*/}
                {/*<CarouselPage/>*/}
                <Navbar/>
                <h4 className="desc5">
                    هدف ما تفکیک پسماند قابل بازیافت، معرفی همکاران به یکدیگر، حذف واسطه و اشتغال زایی در راستای حفظ محیط زیست می باشد.
                </h4>
                <br/>
                <h4 className="desc5">
                    بنگاه ضایعاتی ابراهیمی با بیش از بیست سال تجربه آماده به خدمت رسانی می باشد.
                </h4>

            </div>
        );
    }
}

export default Home;