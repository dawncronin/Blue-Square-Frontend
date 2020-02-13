const reviewsReducer = (state = {loadingReviews: false, reviews: [], error: false}, action) => {
    switch(action.type) {
      case 'LOADING_REVIEWS':
        return {
          ...state,
          reviews: state.reviews,
          loadingReviews: true,
          error: false,
        }
      case "GET_REVIEWS":
        return {
          ...state,
          reviews: action.reviews,
          loadingReviews: false,
          error: false
        }
      case "INVALID_REVIEW":
        return {
          ...state,
          error: true,
          reviews: action.reviews,
          loadingReviews: false
        }
      default:
        return state;
    }
  }
  
  export default reviewsReducer;