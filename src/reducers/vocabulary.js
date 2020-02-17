import {
    GET_VOCABULARIES,
    VOCABULARY_ERROR
} from "../actions/types";

const initialState = {
    error: "",
    loading: true,
    collection: [],
    correct: 0,
    tries: 0,
    functionName: "getVocabulary",
    realName: 'Vocabulário'
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_VOCABULARIES:
            return {
                ...state,
                collection: payload,
                loading: false
            };
        case VOCABULARY_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}
