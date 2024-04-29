import { Link } from "react-router-dom";


const Category = () => {
    return (
        <div>
            <div className="my-10 space-y-2">
                <h2 className="text-3xl font-bold text-center">Crafts Category</h2>
                <p className="text-center w-[70%] mx-auto text-slate-600">Our craft collection of DIY projects a community where crafters of all levels can come together to share ideas, tips, and inspiration, a creative outlet, or simply some inspiration, we invite you to dive into our craft section and unleash your imagination.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                <div>
                    {/* Landscape Painting */}
                    <Link>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[230px]" src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Landscape Painting</h2>
                            <p>Landscape Painting chews  whose paint does it choose</p>
                            <div className="card-actions justify-end">
                                <button className="btn  bg-orange-600 text-white">View Crafts</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>

                <div>
                    {/* Portrait Drawing */}
                   <Link>
                   <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[230px]" src="https://blogger.googleusercontent.com/img/a/AVvXsEjChrqxMhhrKt50M0jQyLt5vgTVkVekdpwCMbxmLVRzXcDFHpA7-ElNnzh2sLnHwxZFuR4MWoUOqP2B6EueAsJg5HDRXQ3w3sVzqCcxi72sVXKdMkcoV0uEBgJwFkdZXROOXRmIucjevs7pCOpUPBGRF6d6908KANuGSyZRh9-Nyaft6Rx3nc27HsLyxg=w400-h321" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Portrait Drawing</h2>
                            <p>A portrait painting or drawing the image of particular</p>
                            <div className="card-actions justify-end">
                                <button className="btn  bg-orange-600 text-white">View Crafts</button>
                            </div>
                        </div>
                    </div>
                   </Link>
                </div>

                <div>
                    {/* Watercolour Painting */}
                    <Link>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[230px]" src="https://nenearts.in/cdn/shop/files/CityReflectionsOriginalWatercolorPaintingForSaleByMilindMulick_864x.jpg?v=1690215243" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Watercolor Painting</h2>
                            <p>A paint that is mixed with water and used to create pictures</p>
                            <div className="card-actions justify-end">
                                <button className="btn  bg-orange-600 text-white">View Crafts</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>

                <div>
                    {/* Oil Painting */}
                    <Link>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[230px]" src="https://i2.wp.com/zet.gallery/blog/wp-content/uploads/2016/02/Vicent-Van-Gogh-Starry-Night-Famous-Oil-Paintings-www.shairart.com_.jpg?fit=1280%2C1014" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Oil Painting</h2>
                            <p>Traditional oil painting often begin with  artist sketching</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-orange-600 text-white">View Crafts</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>

                <div>
                    {/* Cartoon Drawing */}
                    <Link>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[230px]" src="https://helloartsy.com/wp-content/uploads/kids/places/how-to-draw-cartoon-house/how-to-draw-cartoon-house-step-9.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Cartoon Drawing</h2>
                            <p>Cartoon in art comically drawing likeness with purpose </p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-orange-600 text-white">View Crafts</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>

                <div>
                    {/* Charcoal Sketching */}
                    <Link>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[230px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNe1Ye3gY4MviM5MgJV8r-7yR7x6ZMjcjDCY1RB4ulXbmMXus53ZAvio5R6AFUXS5OKCw&usqp=CAU" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Charcoal Sketching</h2>
                            <p>Charcoal has remained a popular medium for drawing since</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-orange-600 text-white">View Crafts</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Category;