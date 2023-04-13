import { useEffect, useState } from "react";
import './App.css';
import video from './food.mp4';
import icon from'./egg.png';
import MyRecipesComponent from './MyRecipesComponent';
function App() {



 const[mySearch,setMySearch]= useState('');
 const [myRecipes, setMyRecipes]= useState([]);
 const[wordSubmitted, setWordSubmitted] = useState('avocado')


 useEffect(()=> {
  getAdvace()
 },[wordSubmitted])
  
  
  const getAdvace= async ()=> {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=3154b698&app_key=85dbe3fc918b4a7ba2d3964f74b6ecc8`);

const data = await response.json();
setMyRecipes(data.hits)
console.log(data.hits)
 }

 const myRecipeSearch =(e) => {
  setMySearch(e.target.value)
 }

 const finalSearch =(e) =>{
  e.preventDefault();
  setWordSubmitted(mySearch);
 }
 





  return (
    <div className="App">

    <div className="container">
  
    <video autoPlay muted loop>
  
     <source src={video} type="video/mp4" />
  
  </video>
  
    <h1>Find a Recipe</h1>
  
    </div>

<div className='container'> 
<form onSubmit={finalSearch}>
  <div className="inputSearch">  
  <input className='search' placeholder='Ingredient, dish,keyword...' onChange={myRecipeSearch} value={mySearch}>
  </input>
  
  <button> <img src={icon} weight="50px" height="50px"/> </button>
  </div>
</form>

</div>

{myRecipes.map(element =>(
  <MyRecipesComponent 
  label={element.recipe.label}
   image={element.recipe.image} 
   calories={element.recipe.calories}
   
   ingredients={element.recipe.ingredientLines}
   />
))}

  
    </div>
  );
}

export default App;
