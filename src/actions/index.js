import LocalAPI from "./../apis/local";

export const setAuthToken = token => {
  sessionStorage.setItem("token", token);

  return {
    type: "AUTH_TOKEN",
    payload: token
  };
};

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
      dispatch(setInterests(response.data[response.data.length - 1]));
  }
}

export const editInterests = (interests) => {
  return setInterests(interests);
}

export const closeModal = () => {
  return {
    type: "MODAL",
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
    dispatch(closeModal());
  }
}


export const showModal = () => {
  return {
    type: "MODAL",
    payload: {
      visible: true
    }
  };
}


// export const handleRequest = () => {
//   return {
//     type: "MODAL",
//     payload: {
//       loading: true
//     }
//   };
// }


export const handleCancel = () => {
  return {
    type: "MODAL",
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