import React from "react";
import "./Sidebar.css";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";

const Sidebar = ({currUser, handleLogout}) => {
  const data = [
    {
      title: "All Tasks",
      icon: <CgNotes />,
    },
    {
      title: "Important Tasks",
      icon: <MdLabelImportant />,
    },
    {
      title: "Completed Tasks",
      icon: <FaCheckDouble />,
    },
    {
      title: "Incomplete Tasks",
      icon: <TbNotebookOff />,
    },
  ];
  return (
    <div className="main">
      <div className="user">Hello, {currUser.fullName}!</div>
      <div className="email">{currUser.email}</div>
      
        {data.map((item) => (
          <div className="taskStatus">
          <div key={item.id} className="item">{item.icon} {item.title}</div>
          </div>
        ))}
     
      <button onClick={handleLogout} className="btnn">Logout</button>
    </div>
  );
};

export default Sidebar;
