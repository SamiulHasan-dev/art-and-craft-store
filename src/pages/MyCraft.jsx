import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const MyCraft = () => {
    const [crafts, setCrafts] = useState(null)

    const { user } = useContext(AuthContext);

    console.log(crafts)

    useEffect(() => {
        fetch(`http://localhost:5000/craftsMail/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCrafts(data);
            })
    }, [user]);

    return (
        <div>
            <h2 className="text-white p-5 bg-orange-400 rounded-lg font-bold text-2xl text-center w-full mb-10">Crafts Added From My Side</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    crafts?.map(craft => <div key={craft._id}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={craft.photo} className="w-full h-[230px]" alt="Shoes" /></figure>
                            <div className="card-body space-y-1">
                                <h2 className="text-xl font-bold ">{craft.item}</h2>
                                <hr />
                                <p className="">{craft.description}</p>
                                <div className="flex">
                                    <p className="flex-1"><span className="font-bold">Processing Time:</span> {craft.processing}</p>
                                    
                                    <p className="flex-1"><span className="font-bold">Price:</span> {craft.price}</p>
                                </div>
                                <div className="flex">
                                <p className="flex-1"><span className="font-bold">Stock:</span> {craft.stock}</p>
                                    <p className="flex-1"><span className="font-bold">Rating:</span> {craft.rating}</p>
                                </div>
                                <p className=""><span className="font-bold">Subcategory Name:</span> {craft.sub}</p>
                                <div className="text-center space-x-5">
                                    <Link to='/update'><button className="btn bg-orange-600 text-white">Update</button></Link>
                                    <button className="btn bg-red-500 text-white">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCraft;