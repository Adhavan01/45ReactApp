import React, { useState } from 'react'

const Recipe = () => {
    const [recipes, setRecipes] = useState([
        { id: 1, name: 'Spaghetti Carbonara', ingredients: ['spaghetti', 'eggs', 'bacon', 'parmesan'] },
        { id: 2, name: 'Chicken Curry', ingredients: ['chicken', 'curry powder', 'coconut milk', 'vegetables'] },
        { id: 3, name: 'Caprese Salad', ingredients: ['tomatoes', 'mozzarella', 'basil', 'balsamic vinegar'] },
      ]);

      const [selectedRecipe, setSelectedRecipe] = useState(null);

      const handleRecipe =(item)=>{
        setSelectedRecipe(item)
      }

  return (
    <div>
        <h1>Recipe App</h1>
       {
        recipes.map((item)=>(
            <div key={item.id} onClick={()=>handleRecipe(item)}>
                {item.id} {item.name}
            </div>
        ))
       }
       {
        selectedRecipe && (
            <div>
                <h1>{selectedRecipe.name}</h1>
                <ul>
                    {
                        selectedRecipe.ingredients.map((task,i)=>(
                            <li key={i}>{task}</li>
                        ))
                    }
                </ul>
            </div>
        )
       }
    </div>
  )
}

export default Recipe