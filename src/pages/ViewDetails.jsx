import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {

    const crafts = useLoaderData();



    return (
        <div>
            <div className="hero mt-8">
                <div className="hero-content gap-5 flex-col lg:flex-row">
                    <img src={crafts.photo} className="rounded-lg shadow-xl bg-base-300 h-[80vh] w-full md:w-1/2" />
                    <div className="space-y-2 py-2">
                        <h1 className="text-2xl font-bold">{crafts.item}</h1>
                        <p className="text-xl"> <span className="font-bold">Description: </span> {crafts.description}</p>
                        <hr />
                        <p><span className="font-bold">Subcategory: </span>{crafts.sub}</p>
                        <p><span className="font-bold">Price: </span>{crafts.price}</p>
                        <p><span className="font-bold">Rating: </span>{crafts.rating}</p>
                        <p><span className="font-bold">Stock: </span>{crafts.stock}</p>
                        <p><span className="font-bold">Processing Time: </span>{crafts.processing}</p>
                        <hr />
                        
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;