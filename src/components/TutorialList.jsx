import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import EditTutorials from "./EditTutorials";

const TutorialList = ({ tutorials, getTutorials }) => {
  const deleteTutorials = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_URL}${id}/`);
    } catch (error) {
      console.log(error);
    } finally {
      getTutorials();
    }
  };

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
          {tutorials.map((item) => {
            const { id, title, description } = item;
            return (
              <tr className="bg-light">
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <button
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={}
                  >
                    <CiEdit size={22} className="me-2 btn-warning" />
                  </button>
                  <button type="submit" onClick={() => deleteTutorials(id)}>
                    <MdDeleteOutline size={22} className="text-danger" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorials/>
    </div>
  );
};

export default TutorialList;
