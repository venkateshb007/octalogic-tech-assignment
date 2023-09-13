import Card from "@/HomeLayout/Card";
import SideMenu from "@/components/SideMenu";
import LatestEnrollment from "@/components/LetestEnrollment";
import BestStudent from "@/components/BestStudents";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const dummy = [
  {
    title: "164",
    desc: "total number of students",
  },
  {
    title: "12",
    desc: "total number of courses",
  },
  {
    title: "$2000",
    desc: "total amount earned",
  },
  {
    title: "Guitar",
    desc: "best performing course",
  },
  {
    title: "Flute",
    desc: "worst performing course",
  },
];

const Home = () => {
  const navigate = useNavigate()
 
  useEffect(()=> {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("./signup");
    }
  }, [])
  

  return (
    <div className="flex gap-5 bg-gray-200">
      <SideMenu />
      <div className="top-0">
        <p className=" text-gray-500 text-4xl m-4"> Overview</p>
        <div className="flex gap-8">
          {dummy.map((item, index) => (
            <Card num={item.title} desc={item.desc} key={index} />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p className=" text-gray-500 text-lg font-medium m-4">
            LATEST ENROLEMENTS
          </p>
          <p className="text-[#901E75]">View All Courses</p>
        </div>
        <div className="border bg-white rounded-md">
          <LatestEnrollment/>
        </div>
        <div className="flex items-center justify-between">
          <p className=" text-gray-500 text-lg font-medium m-4">
            Best Students
          </p>
          <p className="text-[#901E75]">View All Courses</p>
        </div>
        <div className="border bg-white rounded-md">
          <BestStudent/>
        </div>
      </div>
    </div>
  );
};

export default Home;