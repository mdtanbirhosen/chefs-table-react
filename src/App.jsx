import { useState } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import SideBar from "./components/SideBar"

function App() {
  const [wantToCook, setWantToCook] = useState([])
  const [currentlyCooking, setCurrentlyCooking] = useState([])
  const [time, setTime] = useState(0)
  const [calories, setCalories] = useState(0)
  const handleWantToCook = (recipe)=>{
    const isExist = wantToCook.find(cooking=> cooking.recipe_id===recipe.recipe_id)
    if(!isExist){
      setWantToCook([...wantToCook, recipe])
    }
    else(
      alert('Already cooking this food.')
    )
  }
  const handlePreparing = (recipe)=>{
    setCurrentlyCooking([...currentlyCooking,recipe])
    const remaining = wantToCook.filter(cooking =>cooking.recipe_id!== recipe.recipe_id)
    setWantToCook(remaining)
    // for cooking time
    setTime(time + parseInt(recipe.preparing_time))
    setCalories(calories + parseInt(recipe.calories))
  }
  return (
    <div className="container mx-auto px-2 ">
      {/* header section  */}
      <Header/>
      {/* banner section */}
      <Banner/>
      {/* Our recipe section */}
      <OurRecipes/>
      {/* all recipes are here */}
      <div className="flex flex-col-reverse md:flex-row mt-12 mb-24 gap-5">
        <Recipes handleWantToCook={handleWantToCook}
        />
        <SideBar wantToCook={wantToCook}
        handlePreparing={handlePreparing}
        currentlyCooking={currentlyCooking}
        time={time}
        calories={calories}
        
        />
      </div>
    </div>
  )
}

export default App
