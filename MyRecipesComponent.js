


function MyRecipesComponent({label, image, calories, ingredients}){
    return(
        <div >

<div className='position'> <h2 className='name' > {label}</h2> </div>
<div className='position' > <img className='img' src={image} width="350px" hight="300px" alt="recipe"/> </div>
<div className='position'><p className='calories'>{calories.toFixed()} calories</p> </div>
<ul className='positionIngredients'> {ingredients.map(ingredient =>(
   <div className='li'>  <li className="list"> 
        
        {ingredient}</li></div> 
))}
</ul>
        </div>
    )
}

export default MyRecipesComponent;