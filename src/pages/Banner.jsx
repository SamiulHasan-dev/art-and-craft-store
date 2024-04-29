
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.css';

import redisan from '../assets/redisan.jpg'
import water from '../assets/water.jpg'
import sea from '../assets/sea.jpg'
import sit from '../assets/sit.jpg'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Typewriter } from 'react-simple-typewriter'



const Banner = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className='rounded-lg shadow-2xl z-10'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide>
                        <div className="relative w-full h-[40vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${water})` }}>
                            <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                                <h1 className="text-white text-3xl font-bold mb-4">Welcome to <span className="text-orange-500  font-bold">
                                    <Typewriter
                                        words={['Crafter Cove']}
                                        loop={5}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span></h1>


                                <p className="text-white text-lg text-center">Crafters-Cove is a high-quality Network feature unique of amazing community</p>

                                {
                                    user ? '' : <Link to="/register"><button className="btn border-orange-400 btn-ghost mt-5  text-white border-2 hover:bg-orange-600">Register Here</button></Link>
                                }

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[40vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${redisan})` }}>
                            <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                                <h1 className="text-white text-3xl font-bold mb-4">Welcome to <span className="text-orange-500  font-bold">
                                <Typewriter
                                        words={['Crafter Cove']}
                                        loop={5}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                    </span></h1>
                                <p className="text-white text-lg text-center">Crafters-Cove is a high-quality Network feature unique of amazing community</p>

                                {
                                    user ? '' : <Link to="/register"><button className="btn border-orange-400 btn-ghost mt-5  text-white border-2 hover:bg-orange-600">Register Here</button></Link>
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[40vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sea})` }}>
                            <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                                <h1 className="text-white text-3xl font-bold mb-4">Welcome to <span className="text-orange-500  font-bold">
                                <Typewriter
                                        words={['Crafter Cove']}
                                        loop={5}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                    </span></h1>
                                <p className="text-white text-lg text-center">Crafters-Cove is a high-quality Network feature unique of amazing community</p>

                                {
                                    user ? '' : <Link to="/register"><button className="btn border-orange-400 btn-ghost mt-5  text-white border-2 hover:bg-orange-600">Register Here</button></Link>
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[40vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sit})` }}>
                            <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                                <h1 className="text-white text-3xl font-bold mb-4">Welcome to <span className="text-orange-500  font-bold">
                                    <Typewriter
                                        words={['Crafter Cove']}
                                        loop={10}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                    </span></h1>
                                <p className="text-white text-lg text-center">Crafters-Cove is a high-quality Network feature unique of amazing community</p>

                                {
                                    user ? '' : <Link to="/register"><button className="btn border-orange-400 btn-ghost mt-5  text-white border-2 hover:bg-orange-600">Register Here</button></Link>
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;