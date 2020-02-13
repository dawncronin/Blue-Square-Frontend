const resortReducer = (state = { resorts: [], loadingResorts: false , savedResorts: [], saveType: "", loadingResort: false, currentResort: {}}, action) => {
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
      case "LOADING_SAVED_RESORTS":
        return {
            ...state,
            loadingSavedResorts: true
            }
        case "GET_SAVED_RESORTS":
          return {
            ...state,
            savedResorts: action.savedResorts,
            loadingSavedResorts: false,
            saveType: action.saveType
          }
      default:
        return state;
    }
  }
  
  export default resortReducer;