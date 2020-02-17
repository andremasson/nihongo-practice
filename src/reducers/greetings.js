import {
    GET_GREETINGS,
    GREETINGS_ERROR
} from "../actions/types";

const initialState = {
    error: "",
    loading: true,
    collection: [],
    correct: 0,
    tries: 0,
    functionName: "getGreetings",
    realName: "Saudações"
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_GREETINGS:
            return {
                ...state,
                collection: payload,
                loading: false
            };
        case GREETINGS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}
