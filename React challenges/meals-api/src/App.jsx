import { useEffect, useState } from 'react'

function App() {
  const [categories, setCategories] = useState([])
  const [activeTab, setActiveTab] = useState(null)
  const [meals, setMeals] = useState([])
  const [isCategoryLoading, setIsCategoryLoading] = useState(false)
  const [isMealLoading, setIsMealLoading] = useState(false)
  const [favorites, setFavorites] = useState(()=>JSON.parse(localStorage.getItem("favorites")))
  const [search, setSearch] = useState("")
  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(true)
  }

console.log(modal)
  useEffect(() => {
    const fetchCategories = async () => {
      setIsCategoryLoading(true)
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      const data = await res.json()
      setCategories(data.categories)
      setIsCategoryLoading(false)
    }
    fetchCategories()
  }, [])

  const handleActiveTab = async (categoryName) => {
    const findByCategory = categories.find((x) => x.idCategory === categoryName)
    if (findByCategory) {
      setIsMealLoading(true)
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${findByCategory.strCategory}`)
      const data = await res.json()
      setMeals(data.meals)
      setActiveTab(findByCategory.idCategory)
      setIsMealLoading(false)
    }
  }

  useEffect(() => {
    if (categories.length > 0) {
      handleActiveTab(categories[0].idCategory)
    }
  }, [categories])

  const handleFavorites = (meal) => {
    setFavorites((prevFavorites) => [...prevFavorites, meal])
  }

  const handleRemoveFavorites = (id) => {
    setFavorites((favorites) => favorites.filter((x) => x.idMeal !== id))
  }

  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites))
  },[favorites])

  useEffect(() => {
    const searchMeal = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      const data = await res.json()
      setMeals(data.meals)
    }
    searchMeal()
  }, [search])

  return (
    <>
      <div className='d-flex p-2'>
        {!isCategoryLoading ? (
          categories.map((category) => {
            const isActive = activeTab === category.idCategory
            return (
              <div className='m-2' key={category.idCategory}>
                <button onClick={() => handleActiveTab(category.idCategory)} type="button" className={!isActive ? "btn btn-light" : "btn btn-primary"}>{category.strCategory}</button>
              </div>
            )
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="form-outline p-4" data-mdb-input-init>
        <input value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: "300px" }} type="search" id="form1" className="form-control" placeholder="Search meal" aria-label="Search" />
      </div>

      <div className="card-deck d-flex flex-wrap">
        {!isMealLoading ? (
          meals?.map((meal) => {
            const alreadyInFavorites = favorites.find((x) => x.idMeal === meal.idMeal)
            return (
              <div key={meal.idMeal} className="card d-flex flex-wrap m-4 p-2">
                <img style={{ height: "300px", width: "300px" }} className="card-img-top" src={meal.strMealThumb} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{meal.strMeal}</h5>
                  <button onClick={handleModal} type="button" className="btn btn-primary" >
                    View Details
                  </button> &nbsp;
                  {!alreadyInFavorites ? (
                    <button onClick={() => handleFavorites(meal)} type="button" className='btn btn-primary'>Add to Favourites</button>
                  ) : (
                    <button onClick={() => handleRemoveFavorites(meal.idMeal)} type="button" className='btn btn-primary'>Remove from Favorites</button>
                  )}
                </div>
              </div>
            )
          })
        ) : (
          <p>Loading ...</p>
        )}

        {modal && (
          <div className="modal fade" id="exampleModal"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div >
      <h3>Favorites Section</h3>
      {
        favorites.map((favorite) => {
          return (
            <>
              <div key={favorite.idMeal} className="card d-flex flex-wrap m-4 p-2">
                <img style={{ height: "300px", width: "300px" }} className="card-img-top" src={favorite.strMealThumb} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{favorite.strMeal}</h5>
                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default App