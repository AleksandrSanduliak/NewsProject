import {
  FETCH_POST_REQ,
  FETCH_POST_SUCCES,
  FETCH_POST_FAIL,
} from "../actions/newsActions";

const initialState = {
  news: [],
  load: null,
  error: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQ:
      return { ...state, load: false, error: false };

    case FETCH_POST_SUCCES:
      return { ...state, load: true, error: false, news: action.payload };

    case FETCH_POST_FAIL:
      return { ...state, load: false, error: true };

    default:
      return state;
  }
};
