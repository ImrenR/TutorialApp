




const AddTutorial = () => {




  
return( 
 
   <>
   <form>
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
      required
    />
  </div>
  <button type="submit" class="btn btn-danger">Submit</button>
  </form>
</>
)
}

export default AddTutorial