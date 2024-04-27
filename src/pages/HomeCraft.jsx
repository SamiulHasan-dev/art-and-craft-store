import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const HomeCraft = () => {
    const [crafts, setCrafts] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/crafts')
            .then(res => res.json())
            .then(data => setCrafts(data))
    }, [])

    console.log(crafts);

    return (
        <div>

            <div className="my-10 space-y-2">
            <h2 className="text-3xl font-bold text-center">Our Crafts</h2>
            <p className="text-center w-[70%] mx-auto text-slate-600">Our craft collection of DIY projects a community where crafters of all levels can come together to share ideas, tips, and inspiration, a creative outlet, or simply some inspiration, we invite you to dive into our craft section and unleash your imagination.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    crafts?.slice(0, 6).map(craft => <div key={craft._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={craft.photo} alt="Shoes" className="rounded-xl w-full h-[230px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold">{craft.item}</h2>
                                <p className="text-slate-700 my-2">{craft.description}</p>
                                <div className="flex justify-between md:gap-20 ">
                                <p><span className="font-bold">Price:</span> {craft.price}</p>
                                <p className="flex items-center gap-1"><span className="font-bold"><FaStar></FaStar></span> {craft.rating}</p>
                                </div>
                                <div className="w-full mt-3">
                                    <Link to={`/viewDetails/${craft._id}`}><button className="btn w-full bg-orange-600 text-white">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeCraft;