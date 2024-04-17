import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let api = "http://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppContext = React.createContext();


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const orgData = await res.json();
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: orgData.hits,
                    nbPages: orgData.nbPages,
                },
            });
            initialState.isLoading = false;
        } catch (e) {
            console.log(e);
        }
    };


    //to remove the post
    const removePost = (pid) => {
        dispatch({
            type: "REMOVE_POST",
            payload: pid
        });
    }


    //search query
    const getQuery = (query) => {
        dispatch({
            type: "NEW_QUERY",
            payload: query,
        })
    };

    // Pagination
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE",
        })
    }

    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE",
        })
    }


    useEffect(() => {
        fetchApiData(`${api}query=${state.query}&page=${state.page}`);
    }, [api , state.query, state.page]);

    return (
        <AppContext.Provider value={{ ...state, removePost, getQuery, getNextPage, getPrevPage }}>
            {children}
        </AppContext.Provider>
    )
};

// custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };
