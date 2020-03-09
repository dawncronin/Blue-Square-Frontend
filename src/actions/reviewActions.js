const API_ROOT = `http://localhost:3000/`;

let token = localStorage.getItem("token")

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  "Authorization": token
};


export function getReviews(resortName) { 
    return (dispatch) => {
      dispatch({ type: 'LOADING_REVIEWS' }); //awaiting the fetch
      fetch(`${API_ROOT}reviews/resort/${resortName}`, {
        headers: headers})
        .then(response => response.json())
        .then(reviews => { 
          dispatch({ type: 'GET_REVIEWS', reviews: reviews.data })});
    };
  }
  

  export function postReview(resortId, userId, text, rating) {
    console.log(resortId, userId)
      return (dispatch) => {
          dispatch({ type: 'LOADING_REVIEWS'})
          fetch(`${API_ROOT}reviews`,
          {method: "POST",
          headers: headers,
          body: JSON.stringify({ review: {resort_id: resortId, user_id: userId, text: text, rating: rating}})
      }).then(response => response.json())
      .then(reviews => { 
        console.log(reviews)
        if (!reviews.error) {
          dispatch({ type: 'GET_REVIEWS', reviews: reviews.data })
        }
        else {
          dispatch({ type: 'INVALID_REVIEW', reviews: reviews.data.data})
        }
        })  
  }}