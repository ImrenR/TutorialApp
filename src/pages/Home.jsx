import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"
import axios from "axios"



const Home = () => {

const getTutorial = async()=>{
  try {
    const result = await axios.get(import.meta.env.VITE_APP_URL)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
getTutorial();


  return <div>
<AddTutorial/>
<TutorialList/>
  </div>
}

export default Home