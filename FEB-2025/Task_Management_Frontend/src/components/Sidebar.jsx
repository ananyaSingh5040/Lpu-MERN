import React from "react";
import "./Sidebar.css";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";

const Sidebar = () => {
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
      <div className="user">Hello, User!</div>
      <div className="email">crap@gmail.com</div>
      <div className="taskStatus">
        {data.map((items, i) => (
          <div className="item">{items.title}</div>
        ))}
      </div>
      <button className="btnn">Logout</button>
    </div>
  );
};

export default Sidebar;
