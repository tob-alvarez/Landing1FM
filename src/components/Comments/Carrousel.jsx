/* eslint-disable react/no-unescaped-entities */
import ani from "../../assets/avatar-anisha.png";
import ali from "../../assets/avatar-ali.png";
import rich from "../../assets/avatar-richard.png";
import shan from "../../assets/avatar-shanai.png";
import { useEffect, useState } from "react";

const Carrousel = () => {
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setDeviceWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isMobile = deviceWidth >= 1000;

    return (
        <>
            <div className="d-flex align-items-center justify-content-center gap-3 mt-5 carrousel">
                <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                    <img src={ani} alt="Anisha" />
                    <h2>Anisha Lee</h2>
                    <p className="parrafo mb-5">
                        "We have been able to cancel so many other subscriptions since using
                        Manage. There is no more cross-channel confusion and everyone is much
                        more focused"
                    </p>
                </div>
                {isMobile && (
                    <>
                        <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                            <img src={ali} alt="Ali" />
                            <h2>Ali Bravo</h2>
                            <p className="parrafo mb-5">
                                "We have been able to cancel so many other subscriptions since using
                                Manage. There is no more cross-channel confusion and everyone is much
                                more focused"
                            </p>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                            <img src={rich} alt="Richard" />
                            <h2>Richard Watts</h2>
                            <p className="parrafo mb-5">
                                "We have been able to cancel so many other subscriptions since using
                                Manage. There is no more cross-channel confusion and everyone is much
                                more focused"
                            </p>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                            <img src={shan} alt="Shanai" />
                            <h2>Shanai Gough</h2>
                            <p className="parrafo mb-5">
                                "We have been able to cancel so many other subscriptions since using
                                Manage. There is no more cross-channel confusion and everyone is much
                                more focused"
                            </p>
                        </div>
                    </>
                )}
            </div>
            <div className="container d-flex justify-content-center">
                <button className="boton my-5">Get Started</button>
            </div>
        </>
    );
};

export default Carrousel;
