import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCraft = () => {
    const [crafts, setCrafts] = useState(null)

    const { user } = useContext(AuthContext);

    console.log(crafts)

    useEffect(() => {
        fetch(`https://crafters-cove-server.vercel.app/craftsMail/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCrafts(data);
            })
    }, [user]);


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://crafters-cove-server.vercel.app/crafts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = crafts.filter(itm => itm._id !== id);
                            setCrafts(remaining);
                        }
                    })
            }
        });
    }

    //for sort by customize
    const handleSort = () => {
        fetch(`https://crafters-cove-server.vercel.app/craftsMails/${user?.email}?sort=customize`)
            .then(res => res.json())
            .then(data => {
                setCrafts(data);
            })
            .catch(error => {
                console.error('Error fetching sorted crafts:', error);
            });
    };

    


    return (
        <div>
            <h2 className="text-white p-5 bg-orange-400 rounded-lg font-bold text-2xl text-center w-full mb-10">Crafts Added From My Side</h2>
            <div className="mb-7">
                <details className="dropdown">
                <summary className="m-1 btn bg-yellow-200">Sort Here</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><button onClick={handleSort}><a>Customize By: YES</a></button></li>
                    
                </ul>
            </details>
            </div>
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
                                <p className=""><span className="font-bold">Customize:</span> {craft.customize}</p>
                                <div className="text-center space-x-5">
                                    <Link to={`/update/${craft._id}`}><button className="btn bg-orange-600 text-white">Update</button></Link>
                                    <button onClick={() => handleDelete(craft._id)} className="btn bg-red-500 text-white">Delete</button>
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