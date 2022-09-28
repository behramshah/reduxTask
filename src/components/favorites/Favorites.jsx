import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

 

const Favorites = () => {

    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favoriteReducer)

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }      
    
    const favoritesUnique = favorites.filter(unique)

    const removeFavorites = (e) => {
        dispatch({type:"REMOVE_FAVORITE", payload: e.target.value})
    }

    const emptyFavorites = () => {
        dispatch({type:"EMPTY_FAVORITE"})
    }


    
    return(
        <>
            <Link to='/'>List</Link>
            
            <>
                <h1>Favorites</h1>
                <ul>
                {
                    favoritesUnique.map(favorite => (
                        <li key={favorite}>
                            <h4>{favorite}</h4>
                            {/* <button value={favorite} onClick={removeFavorites}>Remove from favorites</button> */}
                        </li>
                    ))
                }
                <button onClick={emptyFavorites}>Empty Favorites</button>
            </ul>
            </>
        </>
    )

}

export default Favorites;