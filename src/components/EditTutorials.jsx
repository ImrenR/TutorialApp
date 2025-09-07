//? https://react.dev/reference/react/useState#usestate
//! State degiskeninin degeri, 1.render ile initialState
//! parametresinin ilk degerini alir. Dolayisiyle bu durumda
//! prop'tan gelen ilk deger state'e aktarilir.
//! Sonradan degisen props degerleri useState'e aktarilmaz.
//! Eger props'tan gelen degerleri her degisimde useState'e
//! aktarmak istersek useEffect hook'unu componentDidUpdate
//! gibi kullanabiriz.

import { useState,useEffect } from "react";
import axios from "axios";

const EditTutorials = ({ editData, getTutorials }) => {
  const [title, setTitle] = useState(editData.title);
  const [description, setDescription] = useState(editData.description);

  useEffect(() => {
    setTitle(editData.title);
    setDescription(editData.description);
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTutorials({ title, description });
  };

  const editTutorials = async (tutorial) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_APP_URL}${editData.id}/`,
        tutorial
      );
    } catch (error) {
      console.log(error);
    } finally {
      getTutorials();
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="desc"
                    rows={1}
                    placeholder="Enter your Description"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <button type="submit" class="btn btn-danger">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTutorials;
