import React from 'react';
import AnimatedBlock from "../animation/AnimatedBlock";


const homeText = 'Home page'

const Home = () => {
    return (
        <div>
            <h2 className="text-lg-start ms-5 mt-4 me-auto">
                {homeText}
            </h2>
            <div>
                <AnimatedBlock/>
            </div>

            <div>
                <h3 className="text-lg-start ms-5 mt-4 me-auto">
                    Happy to introduce you our App - CRM to count your clients, services and profit.
                </h3>
                <h3 className="text-lg-start ms-5 mt-4 me-auto">
                    If you need help, let us know by email or phone call.
                </h3>
                <h3 className="text-lg-start ms-5 mt-4 me-auto">
                    Have a nice experience with this App.
                </h3>
            </div>
        </div>
    );
};

export default Home;