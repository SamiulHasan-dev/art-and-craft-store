import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Landscape = () => {

    const [crafts, setCraft] = useState(null)


    useEffect(()=>{
        fetch('https://crafters-cove-server.vercel.app/landscape')
        .then(res => res.json())
        .then(data=>setCraft(data))
    },[])



    return (
        <div>
            <h2 className="text-3xl text-center font-bold py-5 bg-orange-400 rounded-lg mb-5 text-white">Landscape Painting</h2>
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

                                
                                

                                <div className="flex justify-between gap-5 md:gap-20 ">
                                <p><span className="font-bold">Price:</span> {craft.price}</p>
                                <p className="flex items-center gap-1"><span className="font-bold"><FaStar></FaStar></span> {craft.rating}</p>
                                </div>

                                <p><span className="font-bold">Process Time:</span> {craft.processing}</p>
                                <hr />
                                <p className="flex items-center gap-1"><span className="font-bold">SubCategory:</span> {craft.sub}</p>
                                
                                <div className="w-full mt-3">
                                    <Link to={`/viewCategory/${craft._id}`}><button className="btn w-full bg-orange-600 text-white">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Landscape;