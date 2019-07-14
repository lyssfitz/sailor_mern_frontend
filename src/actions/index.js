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
      dispatch(setInterests(response.data));
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
    await LocalAPI.post(`/interests`, interests);
    dispatch(setInterests(interests));
    dispatch(closeModal());
  }
}


// Modal
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

// export const handleOk = () => {
//   return {
//     type: "MODAL",
//     payload: {
//       visible: false,
//       loading: false
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
// End Modal
