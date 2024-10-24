import PropTypes from "prop-types";
const SideBar = ({ wantToCook, handlePreparing, currentlyCooking, time, calories }) => {
    return (
        <div className=" md:w-1/2 lg:w-2/5 border-2 max-h">

            <div className="text-center"><h1 className="text-center text-2xl font-semibold mt-6 mb-3 inline-block border-b-2 pb-6 px-16">Want to cook: {wantToCook.length}</h1></div>
            <div className="overflow-x-auto">
                <table className="table text-xs lg:text-base ">
                    {/* head */}
                    <thead className="font-medium">
                        <tr>
                            <th></th>
                            <th className="font-medium">Name</th>
                            <th className="font-medium">Time</th>
                            <th className="font-medium">Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {wantToCook.map((recipe, index) => <tr key={recipe.recipe_id}>
                            <th>{index + 1}</th>
                            <td className="text-gray-500">{recipe.recipe_name}</td>
                            <td className="text-gray-500">{recipe.preparing_time} minutes</td>
                            <td className="text-gray-500">{recipe.calories} Calories</td>
                            <td className="p"><button
                                onClick={() => handlePreparing(recipe)}
                                className="py-2 px-4 rounded-full bg-primary-color font-medium">Preparing</button></td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
            {/* currently cooking section */}
            <div className="text-center"><h1 className="text-center text-2xl font-semibold mt-6 mb-3 inline-block border-b-2 pb-6 px-16">Currently Cooking: {currentlyCooking.length} </h1></div>
            <div className="overflow-x-auto">
                <table className="table text-xs lg:text-base ">
                    {/* head */}
                    <thead className="font-medium">
                        <tr>
                            <th></th>
                            <th className="font-medium">Name</th>
                            <th className="font-medium">Time</th>
                            <th className="font-medium">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentlyCooking.map((recipe, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td className="text-gray-500">{recipe.recipe_name}</td>
                            <td className="text-gray-500">{recipe.preparing_time} minutes</td>
                            <td className="text-gray-500">{recipe.calories} Calories</td>

                        </tr>)}
                        <tr>
                            <th></th>
                            <td></td>
                            <td>Total Time = {time}</td>
                            <td>Total Calories = {calories}</td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </div>
    );
};
SideBar.propTypes = {
    wantToCook: PropTypes.array,
    handlePreparing: PropTypes.func,
    currentlyCooking: PropTypes.array,
    time: PropTypes.number,
    calories: PropTypes.number
}
export default SideBar;