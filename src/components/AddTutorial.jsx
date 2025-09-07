




const AddTutorial = () => {
return( 
 
   <>
   <form>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Title
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="Enter your title"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Description
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={1}
      placeholder="Enter your Description"
    />
  </div>
  <button type="submit" class="btn btn-danger">Submit</button>
  </form>
</>
)
}

export default AddTutorial