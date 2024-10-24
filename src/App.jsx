import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import SideBar from "./components/SideBar"

function App() {

  return (
    <div className="container mx-auto px-2 ">
      {/* header section  */}
      <Header/>
      {/* banner section */}
      <Banner/>
      {/* Our recipe section */}
      <OurRecipes/>
      {/* all recipes are here */}
      <div className="flex gap-5">
        <Recipes/>
        <SideBar/>
      </div>
    </div>
  )
}

export default App
