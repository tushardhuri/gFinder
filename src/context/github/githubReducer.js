import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USERS, GET_REPOS } from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        user: [],
        repos: [],
      };
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        user: [],
        loading: false,
        repos: [],
      };
    case GET_USERS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
  }
};
