import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
    return (
        <div>
            <div className="navbar my-10">
                <div className="navbar-start space-x-4">
                    <div role="button" className=" lg:hidden">
                        <RxHamburgerMenu></RxHamburgerMenu>
                    </div>
                    <a className="text-3xl md:inline-block hidden font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex text-gray-500">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <div className="bg-[#F3F3F4] py-2 px-6 flex gap-3 items-center rounded-full">
                        <CiSearch className="text-xl text-black"></CiSearch>
                        <input type="text" className=" bg-transparent w-[140px] md:w-auto outline-none" placeholder="Search" />
                    </div>
                    <div className="bg-primary-color p-2 rounded-full">
                        <FaRegCircleUser className="text-2xl"></FaRegCircleUser>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;