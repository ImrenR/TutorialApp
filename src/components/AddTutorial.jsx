import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postTutorial({ title, description });
    setTitle("");
    setDescription("");
  };

  // this is the field need to post new data
  const postTutorial = async (newTutorial) => {
    try {
      await axios.post(import.meta.env.VITE_APP_URL, newTutorial);
    } catch (error) {
      console.log(error);
    } finally {
      getTutorials();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h1 className="text-danger">Add Your Tutorial </h1>
          <label htmlFor="exampleFormControlInput1" className="form-label">
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
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
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
    </>
  );
};

export default AddTutorial;
