export const favoriteReducer = (state = [], action) => {


    switch (action.type) {
        case "SET_FAVORITE":
            return [...state, action.payload]
        // case "REMOVE_FAVORITE":
        //     return [state.filter(element => element !== action.payload)]
        case "EMPTY_FAVORITE":
            return []

        default:
            return state;
    }

}