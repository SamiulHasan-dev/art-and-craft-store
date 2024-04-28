import { Link, useLoaderData } from "react-router-dom";


const AllCraft = () => {

    const crafts = useLoaderData();

    return (
        <div>
            <h2 className="text-white p-5 bg-orange-400 rounded-lg font-bold text-2xl text-center w-full mb-5">All Crafts</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Customization</th>
                            <th>Stock Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            crafts?.map((craft, index) => <tr key={craft._id}>
                                <th>{index+1}</th>
                                <td>{craft.item}</td>
                                <td>{craft.price}</td>
                                <td>{craft.customize}</td>
                                <td>{craft.stock}</td>
                                <td><Link  to={`/viewDetails/${craft._id}`}><button className="btn bg-orange-600 text-white">View Details</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCraft;