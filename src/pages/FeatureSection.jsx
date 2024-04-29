import { Fade } from "react-awesome-reveal";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { MdOutlineRecommend, MdOutlineSpatialTracking } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";


const FeatureSection = () => {
    return (
        <div className="md:mb-14">
            <div className=" py-7 rounded-lg mt-7 ">
                <h2 className="text-3xl font-bold text-center">Our Feature</h2>
            </div>
            <Fade>
            <p className="mb-7 text-center w-3/4 mx-auto text-slate-600"> Crafts prioritizes reality and convenience, providing detailed descriptions, arts, and reviews for each listed property, empowering arts to make crafts properly.</p>
            </Fade>

            <div className="flex flex-col md:flex-row gap-5 mb-5">
                {/* card 1 */}
                <div className="card bg-base-100 shadow-lg  flex-1" data-aos="fade-up-right"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                    <div className="rounded-full bg-stone-200 p-5"> 
                        <ImProfile className="text-4xl font-extrabold text-violet-500"></ImProfile>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-bold">Easily Manage Profile</h2>
                        <p className="text-lg text-slate-500">User friendly profile that give easy to control</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-base-100 shadow-lg  flex-1" data-aos="fade-down"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                        <div className="rounded-full bg-stone-200 p-5"> 
                        
                        <MdOutlineSpatialTracking  className="text-4xl font-extrabold text-sky-500"></MdOutlineSpatialTracking>
                        </div>
                        
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-bold">Track Your Service</h2>
                        <p className="text-lg text-slate-500">users track their entire service in track</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 shadow-lg flex-1" data-aos="fade-up-left"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                       
                        <div className="rounded-full bg-stone-200 p-5"> 
                        <GrSecure className="text-4xl font-extrabold text-lime-500"></GrSecure>
                        </div>

                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-bold">Secure Booking</h2>
                        <p className="text-lg text-slate-500">Book with confidence using our secure payment options.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mb-7">
                {/* card 4 */}
                <div className="card bg-base-100 shadow-lg  flex-1" data-aos="fade-up-right"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                    <div className="rounded-full bg-stone-200 p-5"> 
                        
                        <AiOutlineGlobal className="text-4xl font-extrabold text-sky-500"></AiOutlineGlobal>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xl font-bold">Global Coverage</h2>
                        <p className="text-lg text-slate-500"> Explore accommodations worldwide with our extensive database</p>
                    </div>
                </div>
                {/* card 5 */}
                <div className="card bg-base-100 shadow-lg  flex-1" data-aos="fade-up"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                        <div className="rounded-full bg-stone-200 p-5"> 
                        
                        <RiCustomerService2Fill   className="text-4xl font-extrabold text-red-400"></RiCustomerService2Fill>
                        </div>
                        
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-bold">24/7 Customer Support</h2>
                        <p className="text-lg text-slate-500">Get assistance anytime, anywhere with our dedicated support team</p>
                    </div>
                </div>
                {/* card 6 */}
                <div className="card bg-base-100 shadow-lg flex-1" data-aos="fade-up-left"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                       
                        <div className="rounded-full bg-stone-200 p-5"> 
                        <MdOutlineRecommend className="text-4xl font-extrabold text-cyan-500"></MdOutlineRecommend>
                        </div>

                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-bold">Personalized Recommendations</h2>
                        <p className="text-lg text-slate-500">Discover hotels tailored to your preferences and past bookings</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FeatureSection;