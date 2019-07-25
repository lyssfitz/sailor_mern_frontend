import LocalAPI from "./../apis/local";

// Method for setting authorization token to allow users to access feed
export const setAuthToken = token => {
  sessionStorage.setItem("token", token);

  return {
    type: "AUTH_TOKEN",
    payload: token
  };
};

// Setting the fetched current user to global state
export const setCurrentUser = (user) => {
  return {
    type: "CURRENT_USER",
    payload: user
  }
}

// Retrieving the current user who is logged in and their info
export const fetchCurrentUser = () => {
  return async (dispatch, getState) => {
      const response = await LocalAPI.get("/user");
      dispatch(setCurrentUser(response.data));
  }
}


// Remove authorization token on logout
export const removeAuthToken = () => {
  sessionStorage.removeItem("token");

  return {
    type: "AUTH_TOKEN",
    payload: null
  };
}




// Setting articles to global state
export const setArticles = (articles) => {
  return {
    type: "ARTICLES_LIST",
    payload: articles
  }
}

// fetching all articles stored in the database
export const fetchArticles = () => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.get("/feed");
    dispatch(setArticles(response.data));
  }
}
// Setting categorized articles to global state
export const setArticlesByInterest = (selectedArticles) => {
  return {
    type: "CATEGORY_ARTICLES_LIST",
    payload: selectedArticles
  }
}

// retrieving articles by interest from database
export const getArticlesByInterest = (interest) => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.get(`/feed/${interest}`);
    dispatch(setArticlesByInterest(response.data));
  }
}



// show the Add Article modal (popup) that admin users access
export const showArticleModal = () => {
  return {
    type: "ARTICLE_MODAL",
    payload: {
      visible: true
    }
  };
}
//  Close the Add Article modal
export const closeArticleModal = () => {
  return {
    type: "ARTICLE_MODAL",
    payload: {
      visible: false
    }
  };
}


// Interests
// Set a list of possible interests/categories to global state
export const setAllInterests = (interests) => {
  return {
    type: "INTERESTS_LIST",
    payload: interests
  }
}
// Retrieving all possible interests that users can select
export const fetchAllInterests = () => {
  return async (dispatch, getState) => {
      const response = await LocalAPI.get("/user/interests/all");
      // temporarily set to last element for JSON server
      dispatch(setAllInterests(response.data));
  }
} 




// Setting user-selected interests to global state
export const setUserInterests = (userInterests) => {
  return {
    type: "USER_INTERESTS_LIST",
    payload: userInterests
  }
}
// Retrieving user-selected interests from database
export const fetchUserInterests = () => {
  return async (dispatch, getState) => {
      const response = await LocalAPI.get("/user/interests");
      dispatch(setUserInterests(response.data.interests));
  }
} 

// Saving edited interests to database
export const saveUserInterests = (userInterests) => {
  return async (dispatch, getState) => {
    await LocalAPI.post(`/user/interests`, userInterests);
    dispatch(setUserInterests(userInterests));
    dispatch(closeInterestsModal());
  }
}

// Show the edit interests modal popup
export const showInterestsModal = () => {
  return {
    type: "INTERESTS_MODAL",
    payload: {
      visible: true
    }
  };
}

// Close the edit interests modal
export const closeInterestsModal = () => {
  return {
    type: "INTERESTS_MODAL",
    payload: {
      visible: false
    }
  };  
}