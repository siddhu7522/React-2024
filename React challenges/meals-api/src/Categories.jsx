import React, { useEffect, useState } from 'react'

function Categories({ categories, activeTab, handleActive }) {

    const [meals, setMeals] = useState({})
    const [favourites, setFavourites] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const handleTab = async (categoryName) => {
        const selectedCategory = categories.find((category) => category.strCategory === categoryName)
        if (selectedCategory) {
            handleActive(selectedCategory.idCategory)
            setIsLoading(true)
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
            const data = await res.json()
            setMeals(data.meals)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        if (categories.length > 0) {
            handleTab(categories[0].strCategory);
        }
    }, [categories])

    const handleFavourites = (meal) => {
        setFavourites((prevMeals) => [...prevMeals, meal])
    }
    console.log(favourites)

    const handleDeleteFromFavourites = (id) => {
        setFavourites((favourites) => favourites.filter((x) => x.idMeal !== id))
    }

    return (
        <>
            <div className='d-flex p-2'>
                {categories.map((category) => {
                    const isActive = activeTab == category.idCategory
                    return (
                        <div className="d-flex p-2" key={category.idCategory}>

                            <button onClick={() => handleTab(category.strCategory)} type="button" className={isActive ? "btn btn-primary m-3 " : ""}>{category.strCategory}</button>

                        </div>
                    )
                })}

            </div>
            {!isLoading ? (

                meals.length > 0 && (
                    meals.map((meal) => {
                        const alreadyInFavourites = favourites.find((favourite) => favourite.idMeal === meal.idMeal)
                        return (
                            <div key={meal.idMeal}>
                                <p>{meal.strMeal}</p>
                                <img style={{ height: "150px", width: "300px" }} src={meal.strMealThumb} />
                                <button type="button" onClick={handleShowModal} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    View Details
                                </button>
                                {alreadyInFavourites ? (
                                    <buttton>Already in favourites</buttton>
                                ) : (
                                    <button onClick={() => handleFavourites(meal)}>
                                        Add to favourites
                                    </button>
                                )}

                            </div>
                        )
                    })
                )

            ) : (
                <p>Loading ....</p>
            )}
            <h3>Favourites Section</h3>
            {favourites.map((item) => {
                return (
                    <div key={item.idMeal}>
                        <img style={{ height: "150px", width: "300px" }} src={item.strMealThumb} />
                        <p>{item.strMeal}</p>
                        <button onClick={() => handleDeleteFromFavourites(item.idMeal)}>Remove from favourites</button>
                    </div>
                )
            })}
        </>
    )
}

export default Categories
