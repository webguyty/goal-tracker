import {
  ADD_GOAL,
  GET_GOALS,
  GOAL_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_GOALS:
      return {
        ...state,
        goals: action.payload,
        loading: false,
      };
    case ADD_GOAL:
      return {
        ...state,
        goals: [action.payload, ...state.goals],
        loading: false,
        current: action.payload,
      };
    //   case UPDATE_GOAL:
    //     return {
    //       ...state,
    //       goals: state.goals.map((goal) =>
    //         goal._id === action.payload._id ? action.payload : goal
    //       ),
    //       loading: false,
    //     };
    //   case DELETE_GOAL:
    //     return {
    //       ...state,
    //       goals: state.goals.filter(
    //         (goal) => goal._id !== action.payload
    //       ),
    //       loading: false,
    //     };
    //   case CLEAR_GOALS:
    //     return {
    //       ...state,
    //       goals: null,
    //       filtered: null,
    //       error: null,
    //       current: null,
    //     };
    //   ?
    //   case FILTER_GOALS:
    //     return {
    //       ...state,
    //       filtered: state.goals.filter((goal) => {
    //         const regex = new RegExp(`${action.payload}`, 'gi');
    //         return goal.name.match(regex) || goal.email.match(regex);
    //       }),
    //     };
    //   case CLEAR_FILTER:
    //     return {
    //       ...state,
    //       filtered: null,
    //     };
    case GOAL_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    //   default:
    //     return state;
  }
};
