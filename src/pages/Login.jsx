import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="my-10">
            <h2 className="text-3xl text-center font-bold py-10 bg-orange-400 rounded-lg mb-5 text-white">Login Now!</h2>



            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow  card  rounded-box place-items-center">

                    <form className="card-body w-full mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 text-white">Login</button>
                        </div>
                    </form>
                    <p className="text-center">Do not have an account <Link className="text-orange-600 font-bold" to="/register">Register</Link></p>

                </div>
                <div className="divider lg:divider-horizontal">OR</div>

                <div className="grid flex-grow card rounded-box place-items-center">
                    <div className="card-body mx-auto w-full">



                        <button  className="btn bg-orange-600 text-white "><AiFillGoogleCircle className="text-lg"></AiFillGoogleCircle > Login With Google</button>



                        <button  className="btn bg-orange-600 text-white"><FaGithub className="text-lg"></FaGithub> Login With GitHub</button>


                    </div>

                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Login;