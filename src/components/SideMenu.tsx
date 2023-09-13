import logo from "../assets/Logo.png";
import home from "../assets/home.png";
import course from "../assets/course.png";
import logout from "../assets/logout.png";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/signin")
    localStorage.removeItem("invoices")
}
  return (
    <>
      <div className="bg-white w-36 h-screen border-2">
        <div className="p-4 flex justify-center items-center text-gray-500 text-2xl font-bold">
          <img src={logo} alt="logo" />
        </div>

        <ul className="py-4">
          <li className="mb-2">
            <a
              href="/"
              className="px-4 py-2 flex justify-center items-center flex-col  text-black bg-gray-300 border m-4 rounded-md hover:bg-pink-300 hover:text-pink-700 duration-1000"
            >
              <img src={home} alt="" />
              Home
            </a>
          </li>
          <li>
            <a
              href="/courses"
              className=" px-4 py-2 flex justify-center items-center flex-col  text-black bg-gray-300 border m-4 rounded-md hover:bg-pink-300 hover:text-pink-700 duration-1000"
            >
              <img src={course} alt="" />
              Courses
            </a>
          </li>
        </ul>
        <div onClick={()=>handleClick()} className="px-4 py-2 flex justify-center items-center flex-col ">
          <img src={logout} alt="" />
          <button>Logout</button>
        </div>
      </div>
    </>
  );
};

export default SideMenu;