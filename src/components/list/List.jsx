import { useState, useEffect } from "react";
import {axiosInstance} from '../../utils/axios';
import { Link } from "react-router-dom";
 

const List = () => {

    const [customers, setCustomers] = useState([]);

    const addToFavorites = (e) => {
        console.log(e.target.value)
    }

    useEffect(() => {
        axiosInstance.get()
        .then(response => setCustomers(response.data))
    }, [customers])

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