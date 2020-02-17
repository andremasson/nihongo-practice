import axios from "axios";
import { GET_VOCABULARIES, VOCABULARY_ERROR } from "./types";
import config from "../../package.json";

const uri = config.apiURI;

// Busca a lista de vocabularios
export const getVocabulary = () => async dispatch => {
    try {
        const res = await axios.get(`${uri}/vocabulary`);
        dispatch({
            type: GET_VOCABULARIES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: VOCABULARY_ERROR,
            payload: "Erro ao buscar lista de vocabulário"
        });
    }
};

