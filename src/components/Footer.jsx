import { GrHomeRounded } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Footer = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <div className="flex mb-4 items-center gap-2 justify-between">
      <Link to={"/home"} className="grid">
        <div className="flex justify-center">
          <GrHomeRounded size={25} />
        </div>
        <h1 className="font-bold">Home</h1>
      </Link>
      <Link to={"/priorities"} className="grid">
        <div className="flex justify-center">
          <BiTask size={25} />
        </div>
        <h1 className="font-bold">Priority</h1>
      </Link>
      <div className="relative">
        {!nav ? (
          <div className="bg-purple-600 p-2 rounded-full">
            <FaPlus size={25} onClick={handleNav} />
          </div>
        ) : (
          <div className="bg-purple-600 p-2 rounded-full">
            <MdClose size={25} onClick={handleNav} />
          </div>
        )}
        {nav && (
          <div
            className="absolute bottom-12 right-0 rounded-lg mt-2 bg-white shadow-md p-4 flex flex-col items-start gap-4 transform transition-transform duration-300 ease-in-out"
          >
            <Link to={"/addpriority"} className="bg-white w-full py-2 text-center text-xl">Priority</Link>
            <Link to={"/addschedule"} className="bg-white w-full py-2 text-center text-xl">Schedule</Link>
          </div>
        )}
      </div>
      <Link to={"/scheduled"} className="grid">
        <div className="flex justify-center">
          <RiCalendarScheduleLine size={25} />
        </div>
        <h1 className="font-bold">Scheduled</h1>
      </Link>
      <Link className="grid" to={"/profile"}>
        <div className="flex justify-center">
          <RiAccountPinBoxLine size={25} />
        </div>
        <h1 className="font-bold">Profile</h1>
      </Link>
    </div>
  );
};

export default Footer;
