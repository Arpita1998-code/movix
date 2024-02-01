import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2IzODBkM2ZiNDgwNWFhYmI5MWM1MTljOWY2ZGJiOSIsInN1YiI6IjY1YWU3NTkwODQ4ZWI5MDBjYTRlNjM4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d-1pkvmV31vAWXZQMmuCX63ijBPCyD5JPgSgbfyN5pM"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};