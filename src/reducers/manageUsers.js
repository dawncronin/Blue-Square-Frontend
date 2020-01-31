const userReducer = (state = { currentUser: {}, loading: false , loggedIn: false}, action) => {
    switch(action.type) {
      case 'LOADING_USER':
        return {
          ...state,
          currentUser: state.currentUser,
          loading: true,
          loggedIn: false
        }
      case 'LOGIN':
        return {
          ...state,
          currentUser: action.currentUser.user.data,
          loading: false,
          loggedIn: true
        }
      case "LOGOUT":
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
  
  export default userReducer;