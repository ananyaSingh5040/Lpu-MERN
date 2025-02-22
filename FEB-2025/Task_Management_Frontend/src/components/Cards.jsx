import React, { useState } from "react";
import "./cards.css";
import { MdDoneAll, MdIncompleteCircle } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const Cards = () => {
  const data = [
    {
      title: "Hello",
      desc: "First Card",
      status: "Completed",
    },
    {
      title: "Hello",
      desc: "Second Card",
      status: "Incomplete",
    },
    {
      title: "Hello",
      desc: "Third Card",
      status: "Completed",
    },
    {
      title: "Hello",
      desc: "Fourth Card",
      status: "Completed",
    },
  ];
  const [taskCompletion, setTaskCompletion] = useState("Incomplete");
  return (
    <div className="grid">
      {data &&
        data.map((items, i) => (
          <div className="cards">
            <h3>{items.title} </h3>
            <p>{items.desc}</p>
            <div className="button">
              <button
                className={items.status === "Incomplete" ? "ibtn" : "cbtn"}
              >
                {items.status === "Incomplete" ? (
                  <MdIncompleteCircle className="icon" />
                ) : (
                  <MdDoneAll className="icon" />
                )}{" "}
               <b>{items.status} </b> 
              </button>
              <div className="btn2"> 
                <button className="impbtn">
                <b>  <CiHeart /></b>
                </button>
                <button className="editbtn">
                  <MdEdit />
                </button>
                <button className="delbtn">
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      <div className="cards cardtask">
        <button className="butt">
          <IoMdAddCircle className="iconn" />
        </button>
        <div>Add Task</div>
      </div>
    </div>
  );
};

export default Cards;
