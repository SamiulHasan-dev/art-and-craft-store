
import { FaHandsAslInterpreting } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="footer p-10 bg-orange-500 text-white">
                <div className="footer max-w-5xl mx-auto">
                    <aside>
                        <FaHandsAslInterpreting  className="text-3xl ml-2" />
                        <p><span className="text-xl font-bold">Crafts-Cove Ltd.</span><br /><small>Providing reliable art & craft service since 2004</small></p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Art</a>
                        <a className="link link-hover">Craft</a>
                        <a className="link link-hover">Painting</a>
                        <a className="link link-hover">Drawing</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">Sell</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Craft</a>
                        <a className="link link-hover">Landscape</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;