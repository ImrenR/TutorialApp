const EditTutorials = () => {
  return (
    <div>
      <>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Edit Tutorials
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <h1 className="text-danger">Edit Your Tutorial </h1>
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
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default EditTutorials;
