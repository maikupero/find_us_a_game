import React, { useEffect, useState } from "react";

const FoodContext = React.createContext({
    food: [], fetchFood: () => {}
  })

export default function Food() {

    const [food, setFood] = useState([])

    const fetchFood = async () => {
        const response = await fetch("http://localhost:8000/food")
        const food = await response.json()
        setFood(food.data)
    }

    useEffect(() => {
        fetchFood()
    }, [])


  return (
    <div>
        <FoodContext.Provider value={{food, fetchFood}}>
        <table>
            {food.map((food) => (
            <tr>{food.item}</tr>
            ))}
        </table>
        </FoodContext.Provider>
    </div>
  )

}


  