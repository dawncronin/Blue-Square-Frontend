const reviewsReducer = (state = {loadingReviews: false, reviews: []}, action) => {
    switch(action.type) {
      case 'LOADING_REVIEWS':
        return {
          ...state,
          reviews: state.reviews,
          loadingReviews: true,
        }
      case "GET_REVIEWS":
        return {
          ...state,
          reviews: action.reviews,
          loadingReviews: false,
        }
      default:
        return state;
    }
  }
  
  export default reviewsReducer;