import {
  ADD_USER,
  ADD_SCORE,
  UPDATE_USER,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
      };

    case ADD_SCORE:
      return {
        ...state,
      };

    case UPDATE_USER:
      return {
        ...state,
      };
    
    default:
      return state
        
  };
};


