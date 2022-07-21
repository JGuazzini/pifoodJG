import React from "react";


let prevId = 1;

export default function Recipe(recipes) {
  const { image, name, dietTypes } = recipes;

  return (
   <div className="container">
      <div>
        {   
          !image ? <img className="card" src="https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80" alt="no pic" />
           : <img className="recipeImg card" src={image} alt="No image" /> 
          
        }
        {/* <img className="recipeImg card" src={image} alt="No image" /> */}
      </div>
      <div className="recipe card" >
      <div>
        <h2 className="recipeName">{name}</h2>
      </div>

      <div className="dietcointainer">
        {dietTypes?.map((e) => {
          return (
            <h5 className="diets" key={prevId++}>
              {e + ','}
            </h5>
          );
        })}
      </div>
    </div>
   </div>
    
  );
}
