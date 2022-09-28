import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {axiosInstance} from '../../utils/axios';
import { Link } from "react-router-dom";
 

const List = () => {

    const dispatch = useDispatch();

    const addToFavorites = (e) => {
        dispatch({type:"SET_FAVORITE", payload: e.target.value})
    }

    useEffect(() => {
        axiosInstance.get()
        .then(response => dispatch({type:"SET_DATA", payload: response.data}))
    }, [])

    const customers = useSelector(state => state.listReducer)

    return(
        <>
            <h1>Customers</h1>
            <Link to='favorites'>Favorites</Link>
            <ul>
                {
                    customers.map(customer => (
                        <li key={customer.id}>
                            <h4>{customer.companyName}</h4>
                            <button value={customer.companyName} onClick={addToFavorites}>Add to favorites</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )

}

export default List;