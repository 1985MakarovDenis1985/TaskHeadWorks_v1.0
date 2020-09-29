import {ADD_CLIENT} from "../types"

const initiallyState = {
    clientsArr: [{
        name: "Denys",
        date: "07.08.1985"
    }]
}

export const clientsReducer = (state = initiallyState, action) => {
    switch (action.type) {
        case ADD_CLIENT :
            return {...state, client: action.payload}
        default :
            return state
    }
}