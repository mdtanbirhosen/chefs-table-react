import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { useEffect, useState } from 'react'

function Recipes() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    fetch('./recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])
  return (
    <div className='w-3/5 grid  md:grid-cols-2 gap-3 lg:gap-5'>
      {recipes.map((recipe) => <div key={recipe.recipe_id} className="card bg-base-100 border-2">
        <figure className='px-2 pt-2 md:pt-5 md:px-5 '>
          <img
            className='rounded-lg h-32 md:h-40 lg:h-52 w-full object-cover'
            src={recipe.image}
            alt={`picture of ${recipe.recipe_name}`} />
        </figure>
        <div className="md:card-body p-2 md:p-5">
          <h2 className="card-title">{recipe.recipe_name}</h2>
          <p className='text-gray-500'>{recipe.description}</p>
          <hr />
          <div>
            <h3 className='font-medium text-lg mb-3'>Ingredients: {recipe.ingredients.length}</h3>
            <ul className='list-disc text-base md:text-lg'>
              {recipe.ingredients.map((data, index) => <li className='ml-6 text-gray-400' key={index}>{data}</li>)}
            </ul>
          </div>
          <hr />
          <div className='flex gap-5 text-gray-600 my-6'>
            <div className="flex gap-1 items-center">
              <CiClock2 className="text-xl"/>
              <p>{recipe.preparing_time}</p>
            </div>
            <div className="flex gap-1 items-center">
              <AiOutlineFire className="text-xl"/>
              <p>{recipe.calories}</p>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn rounded-full bg-primary-color text-lg font-medium">Want to Cook</button>
          </div>
        </div>
      </div>)}

    </div>
  )
}


export default Recipes
