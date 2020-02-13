const API_ROOT = `http://localhost:3000/`;

let token = localStorage.getItem("token")

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  "Authorization": token
};

export function getResorts() { 
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESORTS' }); //awaiting the fetch
    fetch(`${API_ROOT}resorts`, {
      headers: headers})
      .then(response => response.json())
      .then(resorts => { 
        dispatch({ type: 'GET_RESORTS', resorts: resorts.data })});
  };
}

export function getResort(name) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESORT' });
    fetch(`${API_ROOT}resorts/${name}`, {
      method: "GET",
      headers: headers})
      .then(response => response.json())
      .then(resort => { 
        console.log(resort)
        dispatch({ type: 'GET_RESORT', currentResort: resort })});
  };
}

export function saveResort(userId, resortId, type) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESORT' });
    fetch(`${API_ROOT}saved_resorts/`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ saved_resort: {resort_id: resortId, user_id: userId, save_type: type}})
    })
      .then(response => response.json())
      .then(resort => { 
        dispatch({ type: 'GET_RESORT', currentResort: resort})});
  };
}

export function deleteSavedResort(savedResortId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESORT' });
    fetch(`${API_ROOT}saved_resorts/${savedResortId}`, {
      method: "DELETE",
      headers: headers
    })
      .then(response => response.json())
      .then(resort => { 
        dispatch({ type: 'GET_RESORT', currentResort: resort})});
  };
}


export function getSavedResorts(userId, type) { 
  return (dispatch) => {
    dispatch({ type: 'LOADING_RESORTS' }); //awaiting the fetch
    fetch(`${API_ROOT}saved_resorts/user/${userId}?type=${type}`, {
      headers: headers})
      .then(response => response.json())
      .then(resorts => { 
        dispatch({ type: 'GET_SAVED_RESORTS', savedResorts: resorts.data, saveType: type })});
  };
}