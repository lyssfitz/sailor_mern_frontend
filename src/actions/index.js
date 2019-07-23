import LocalAPI from "./../apis/local";

export const setAuthToken = token => {
  sessionStorage.setItem("token", token);

  return {
    type: "AUTH_TOKEN",
    payload: token
  };
};

// User Info

export const setCurrentUser = (user) => {
  return {
    type: "CURRENT_USER",
    payload: user
  }
}

export const fetchCurrentUser = () => {
  return async (dispatch, getState) => {
      const response = await LocalAPI.get("/user");
      dispatch(setCurrentUser(response.data));
  }
}


// Auth token

export const removeAuthToken = () => {
  sessionStorage.removeItem("token");

  return {
    type: "AUTH_TOKEN",
    payload: null
  };
}




// feed
export const setArticles = (articles) => {
  return {
    type: "ARTICLES_LIST",
    payload: articles
  }
}

// export const setCuratedArticles = (curatedArticles) => {
//   return {
//     type: "CURATED_ARTICLES_LIST",
//     payload: curatedArticles
//   }
// }

export const fetchArticles = () => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.get("/feed");
    // console.log(response.data, "here");
    dispatch(setArticles(response.data));
    // dispatch(setCuratedArticles(response.data));
  }
}

export const setArticlesByInterest = (selectedArticles) => {
  return {
    type: "CATEGORY_ARTICLES_LIST",
    payload: selectedArticles
  }
}


export const getArticlesByInterest = (interest) => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.get(`/feed/${interest}`);
    dispatch(setArticlesByInterest(response.data));
  }
}


// Add Article Modal

export const showArticleModal = () => {
  return {
    type: "ARTICLE_MODAL",
    payload: {
      visible: true
    }
  };
}

export const closeArticleModal = () => {
  return {
    type: "ARTICLE_MODAL",
    payload: {
      visible: false
    }
  };
}


// Interests
// Retrieve list of interests
export const setAllInterests = (interests) => {
  return {
    type: "INTERESTS_LIST",
    payload: interests
  }
}

export const fetchAllInterests = () => {
  return async (dispatch, getState) => {
      const response = await LocalAPI.get("/user/interests/all");
      // temporarily set to last element for JSON server
      dispatch(setAllInterests(response.data));
  }
} 




// User interests editing and saving
export const setUserInterests = (userInterests) => {
  return {
    type: "USER_INTERESTS_LIST",
    payload: userInterests
  }
}

export const fetchUserInterests = () => {
  return async (dispatch, getState) => {
      const response = await LocalAPI.get("/user/interests");
      dispatch(setUserInterests(response.data.interests));
  }
} 


// export const editUserInterests = (userInterests) => {
//   return setUserInterests(userInterests);
// }


export const saveUserInterests = (userInterests) => {
  return async (dispatch, getState) => {
    await LocalAPI.post(`/user/interests`, userInterests);
    dispatch(setUserInterests(userInterests));
    dispatch(closeInterestsModal());
  }
}

// Interests popup
export const showInterestsModal = () => {
  return {
    type: "INTERESTS_MODAL",
    payload: {
      visible: true
    }
  };
}


export const closeInterestsModal = () => {
  return {
    type: "INTERESTS_MODAL",
    payload: {
      visible: false
    }
  };  
}