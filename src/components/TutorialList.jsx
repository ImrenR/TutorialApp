import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import { useState } from "react";

const TutorialList = ({tutorials}) => {
 
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" style={{ width: "160px" }}>
              Title
            </th>
            <th scope="col" style={{ width: "250px" }}>
              Description
            </th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map((item)=> {
            const {id, title, description} = item
            return (
     <tr className="bg-light">
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{description}</td>
            <td className="text-center text-nowrap">
              <button type="submit">
                <CiEdit size={22} className="me-2 btn-warning" />
              </button>
              <button type="submit">
                <MdDeleteOutline size={22} className="text-danger" />
              </button>
            </td>
          </tr>
            )
          })}
     
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
