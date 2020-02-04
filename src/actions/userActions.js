const API_ROOT = `http://localhost:3000/`;

let token = localStorage.getItem("token")

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  "Authorization": token
};

export function postUser(username, password, password_confirmation) { // Signup action
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER' }); //awaiting the fetch
    fetch(`${API_ROOT}users`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ user: {username: username, password: password, password_confirmation: password_confirmation
      }})})
      .then(response => response.json())
      .then(user => { 
        localStorage.setItem('token', user.jwt ); //set token
        dispatch({ type: 'LOGIN', currentUser: user })});
  };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER' });
    fetch(`${API_ROOT}login`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ user: {username: username, password: password
      }})})
      .then(response => response.json())
      .then(user => { 
        localStorage.setItem('token', user.jwt );  //set token
        dispatch({ type: 'LOGIN', currentUser: user })});
  };
}

export const logout = () => {
  localStorage.clear();  //delete token
  return (dispatch) => dispatch({ type: 'LOGOUT'});
}

export const getCurrentUser = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER' });
    fetch(`${API_ROOT}current_user`, {
      headers: headers})
      .then(response => response.json())
      .then(user => { 
        dispatch({ type: 'LOGIN', currentUser: user })});
  }
};




// const deleteUser = (id) => {
//   return fetch(`${API_ROOT}users/${id}`, {
//     method: `Delete`,
//     headers: headers
//   }).then(res => res.json())
// }