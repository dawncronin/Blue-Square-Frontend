const reviewsReducer = (state = {loadingReview: false, currentReview = {}}, action) => {
    switch(action.type) {
      case 'LOADING_RESORTS':
        return {
          ...state,
          currentUser: state.currentUser,
          loading: true,
          loggedIn: false
        }
        case 'LOADING_RESORT':
            return {
              ...state,
              currentUser: state.currentUser,
              loading: true,
              loggedIn: false
            }
      case "GET_RESORT":
        return {
          ...state,
          currentUser: {},
          loading: false,
          loggedIn: false
        }
      default:
        return state;
    }
  }
  
  export default reviewReducer;