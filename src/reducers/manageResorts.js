const resortReducer = (state = { resorts: [], loadingResorts: false , loadingResort: false, currentResort: {}}, action) => {
    switch(action.type) {
      case 'LOADING_RESORTS':
        return {
          ...state,
          loadingResorts: true
        }
        case 'LOADING_RESORT':
            return {
            ...state,
            loadingResort: true
            }
      case 'GET_RESORTS':
        return {
          ...state,
          resorts: action.resorts,
          loadingResorts: false
        }
      case "GET_RESORT":
        return {
          ...state,
          currentResort: action.currentResort,
          loadingResort: false
        }
      default:
        return state;
    }
  }
  
  export default resortReducer;