import { Fade } from "react-awesome-reveal";
import { BsHearts } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { MdFamilyRestroom } from "react-icons/md";
import { SlCalender } from "react-icons/sl";


const FamilySection = () => {
    return (
        <div>
            <div className=" py-4 rounded-lg mt-7 mb-1">
                <h2 className="text-3xl font-bold text-center">About Family</h2>
            </div>
            <Fade>
            <p className="mb-7 text-center w-3/4 mx-auto text-slate-600"> Featuring modern amenities and plush furnishings to ensure a restful Crafts. </p>
            </Fade>

            <div className="flex flex-col md:flex-row gap-10">
                {/* card 1 */}
                <div className="card bg-base-100  flex-1" data-aos="fade-right"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                        <SlCalender className="text-4xl font-extrabold"></SlCalender>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-extrabold">20+</h2>
                        <p className="text-lg ">Years</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-base-100  flex-1" data-aos="fade-down"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                        
                        <MdFamilyRestroom className="text-4xl font-extrabold"></MdFamilyRestroom>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-extrabold">4+</h2>
                        <p className="text-lg ">Generations</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 flex-1" data-aos="fade-down"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                        <HiOutlineUsers className="text-4xl font-extrabold"></HiOutlineUsers>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-extrabold">35k+</h2>
                        <p className="text-lg">Users</p>
                    </div>
                </div>
                {/* card 4 */}
                <div className="card bg-base-100 flex-1" data-aos="fade-left"  data-aos-duration="1000" >
                    <figure className="px-10 pt-10">
                        
                        
                        <BsHearts className="text-4xl font-extrabold" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl font-extrabold">7.5k</h2>
                        <p className="text-lg">Reviews</p>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default FamilySection;