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

export const handleOk = () => {
  return {
    type: "MODAL",
    payload: {
      visible: false,
      loading: false
    }
  };  
}


export const handleCancel = () => {
  return {
    type: "MODAL",
    payload: {
      visible: false
    }
  };
}
// End Modal