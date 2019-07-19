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

export const setInterests = (interests) => {
  return {
    type: "INTERESTS_LIST",
    payload: interests
  }
}

export const fetchInterests = () => {
  return async (dispatch, getState) => {
      const response = await LocalAPI.get("/interests");
      // temporarily set to last element for JSON server
      dispatch(setInterests(response.data));
  }
}

export const editInterests = (interests) => {
  return setInterests(interests);
}

export const closeInterestsModal = () => {
  return {
    type: "INTERESTS_MODAL",
    payload: {
      visible: false,
      loading: false
    }
  };  
}

export const saveInterests = (interests) => {
  return async (dispatch, getState) => {
    LocalAPI.post(`/interests`, interests);
    dispatch(setInterests(interests));
    dispatch(closeInterestsModal());
  }
}


export const showInterestsModal = () => {
  return {
    type: "INTERESTS_MODAL",
    payload: {
      visible: true
    }
  };
}


// export const handleInterestsRequest = () => {
//   return {
//     type: "INTERESTS_MODAL",
//     payload: {
//       loading: true
//     }
//   };
// }


export const handleInterestsCancel = () => {
  return {
    type: "INTERESTS_MODAL",
    payload: {
      visible: false
    }
  };
}


// feed
export const setArticles = (articles) => {
  return {
    type: "ARTICLES_LIST",
    payload: articles
  }
}

export const fetchArticles = () => {
  return async (dispatch, getState) => {
    const response = await LocalAPI.get("/feed");
    dispatch(setArticles(response.data));
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