import React, { Component } from "react";
import "./About.css";

class About extends Component {
    render() {
        return (
            <span>
                <h4 className="aboutHeader">About</h4>
                <div className="about">

                    {/* ABOUT - INTRO */}
                    <div className="aboutSection aboutIntro">
                        Congo is a project created to sell my extensive collection of self-help books.

                        Over the years I've collected upwards of 470 books, most of them self-help books.
                        I haven't read many but not all of them. A good number have been partially read, and others haven't even been opened.

                        Now the books serve only to impress visitors to my apartment as they sit piled on the floor collecting dust.

                        I'm done helping myself; now I'd like to help you get your hands on some books...at a discount.
                    </div>

                    {/* ABOUT - BUSINESS */}
                    <div className="aboutSection aboutBusiness">

                    </div>

                    {/* ABOUT - TECHNICAL */}
                    <div className="aboutSection aboutTechnical">
                        Everything on this site was created from scratch, including all graphics, logos, page headers, button icons, and scripts.
                        Nothing but inspiration was taken from Amazon's website.

                        The site was built using Node.js, Express.js, and ReactJS.

                        <ul>Dependencies:
                            <li>axios</li>
                            <li>bcrypt</li>
                            <li>express</li>
                            <li>nodemailer</li>
                            <li>paypal-rest-sdk</li>
                            <li>react-dom</li>
                            <li>react-responsive-modal</li>
                            <li>react-router</li>
                            <li>reactjs-popup</li>
                            <li>sequelize</li>
                        </ul>
                    </div>

                </div>
            </span>
        )
    }
}

export default About;