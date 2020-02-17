import axios from "axios";
import { GET_GREETINGS, GREETINGS_ERROR } from "./types";
import config from "../../package.json";

const uri = config.apiURI;

// Busca lista de saudações
export const getGreetings = () => async dispatch => {
    try {
        const res = await axios.get(`${uri}/greetings`);
        dispatch({
            type: GET_GREETINGS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GREETINGS_ERROR,
            payload: "Erro ao buscar lista de saudações"
        });
    }
};
