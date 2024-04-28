import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const { user } = useContext(AuthContext);

    const craft = useLoaderData();

    const handleUpdateCraft = event => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const item = form.item.value;
        const sub = form.sub.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customize = form.customize.value;
        const processing = form.processing.value;
        const stock = form.stock.value;
        const description = form.description.value;



        const newCraft = { photo, item, sub, price, rating, customize, processing, stock, description }
        console.log(newCraft);

        //send data to the server
        fetch(`http://localhost:5000/crafts/${craft._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Updated'
                    })

                }
            })
    }


    return (
        <div>

            <h2 className="text-white p-5 bg-orange-400 rounded-lg font-bold text-2xl text-center w-full ">Update Craft Here</h2>
            <div className="card shrink-0 w-full bg-base-100">

                <form onSubmit={handleUpdateCraft} className="card-body">
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 1 image Url and item name */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input defaultValue={craft.photo} name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Item Name</span>
                            </label>
                            <input defaultValue={craft.item} name="item" type="text" placeholder="Item Name" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 2 subcategory_Name and price */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Subcategory Name</span>
                            </label>
                            <input defaultValue={craft.sub} name="sub" type="text" placeholder="Subcategory Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Price</span>
                            </label>
                            <input defaultValue={craft.price} name="price" type="text" placeholder="Price" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 3 rating and customization */}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Rating</span>
                            </label>
                            <input defaultValue={craft.rating} name="rating" type="text" placeholder="Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Customization</span>
                            </label>
                            <select defaultValue={craft.customize} name="customize" type="text" className="select select-bordered join-item input " required>
                                <option disabled selected >Customization</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 4 processing_time and stockStatus*/}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Processing Time</span>
                            </label>
                            <input defaultValue={craft.processing} name="processing" type="text" placeholder="Processing Time" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">Stock Status</span>
                            </label>
                            <select defaultValue={craft.stock} name="stock" type="text" className="select select-bordered join-item input " required>
                                <option disabled selected >Stock Status</option>
                                <option>In stock</option>
                                <option>Made to Order</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* row 4 User Email and User Name*/}
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">User Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required value={user?.email} />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text font-semibold">User Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required value={user?.displayName} />
                        </div>
                    </div>

                    {/* short description */}
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text font-semibold">Short Description</span>
                        </label>
                        <input defaultValue={craft.description} name="description" type="text" placeholder="Short Description" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn text-white bg-orange-600" value="UPDATE CRAFT" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;