import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import $ from 'jquery';

// import BearIsland from '../svg/bear-island-fall.svg';
// import BearFrame from '../svg/bear-frame.svg';
import BearPlatform from '../svg/bear-platform.svg';
// import BottomLeftCloud from '../svg/cloud-bottom-left.svg';
// import BottomRightCloud from '../svg/cloud-bottom-right.svg';

class Hero extends React.Component {
    scrollAnimation() {
        $('html, body').animate(
            {
                scrollTop: $('#about').offset().top,
            },
            800
        );
    }

    render() {
        return (
            <section className="eotg-hero">
                <div className="text-center eotg-hero__container">
                    <Row className="justify-content-center eotg-hero__row">
                        <Col md={6} className="d-flex flex-column justify-content-end">
                            <img
                                src={BearPlatform}
                                alt=""
                                className="eotg-hero__graphic"
                            />
                        </Col>
                        <Col
                            md="6"
                            className="d-flex align-items-center justify-content-center"
                        >
                            <div>
                                <div className="eotg-hero__title pb-2">
                                    <b> Engineers on the Green </b>
                                </div>
                                <div className="eotg-hero__detail">
                                    October 1st, 2024<br></br> 
                                    11 AM - 3 PM <br></br>
                                    Warren Mall
                                </div>
                                {/* FOR FACEBOOK BUTTON:
                                <div className="eotg-hero__button_div mb-5">
                                    <a
                                        className="eotg-hero__button"
                                        href="https://fb.me/e/3z3trhAN8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook Event Page
                                    </a>
                                </div>
                                */}
                                {/* FOR DISCORD BUTTON:
                                <div className="eotg-hero__button_div">
                                    <a
                                        className="eotg-hero__button"
                                        href="https://discord.gg/gRcekSrk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Discord
                                    </a>
                                </div>
                                */}
                            </div>
                        </Col>
                    </Row>
                    {/* <Row className="floating justify-content-center">
                        <Col>
                        <img
                                src={BottomLeftCloud}
                                alt=""
                                className="eotg-hero__graphic"
                            />
                        </Col>
                        <Col>
                        <img 
                                src={BottomRightCloud}
                                alt=""
                                className="eotg-hero__graphic"
                            />
                        </Col>
                    </Row> */}
                </div>
            </section>
        );
    }
}

export default Hero;
