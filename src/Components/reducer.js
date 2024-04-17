const reducer = (state, action) => {
    switch (action.type) {
        case "GET_STORIES":
            return {
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            };
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((curElem) => curElem.objectID !== action.payload),
            }
        case "NEW_QUERY":
            return {
                ...state,
                query: action.payload,
            }
        case "NEXT_PAGE":
            let pageNumInc = state.page+1;

            if (pageNumInc >= state.nbPages) {
                pageNumInc = 1;
            }
            return {
                ...state,
                page: pageNumInc,
            }
        case "PREV_PAGE":
            let pageNum = state.page;

            if (pageNum <= 0) {
                pageNum = 1;
            }
            return {
                ...state,
                page: pageNum-1,
            }
        default:
            return state;
    }
};

export default reducer;
