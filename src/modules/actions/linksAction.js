import {
    FETCH_ALL_LINKS_REQUEST,
    FETCH_ALL_LINKS_SUCCESS,
    LINKS_FAIL,
    FETCH_LINK_SUCCESS,
    FETCH_LINK_REQUEST,
    ADD_NEW_LINK_REQUEST,
    ADD_NEW_LINK_SUCCESS,
    DELETE_LINK_REQUEST,
    DELETE_LINK_SUCCESS,
    LIKE_LINK_REQUEST,
    LIKE_LINK_SUCCESS,
    UNLIKE_LINK_REQUEST,
    UNLIKE_LINK_SUCCESS,  
    SHOW_DELETE_MODAL,
    HIDE_DELETE_MODAL
} 
from '../actionTypes';

const apiURL = 'https://likemachine-api.nerdgeschoss.de'


  //Async action
  export const fetchLinks = () => {
    // Returns a dispatcher function
    // that dispatches an action at later time
    return (dispatch) => {
      dispatch(fetchLinksRequest());
      // Returns a promise
      return fetch(apiURL + '/links', {
        method: 'get'
      })
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              dispatch(fetchLinksSuccess(data));
            })
          }
          else if (response.status >= 500){
            dispatch(linksFailed( "Error server connection"));
          }
          else {
            response.json().then(error => {
              console.log('error');
              dispatch(linksFailed(error));
            })
          }
        })
    }
  }
  
  const fetchLinksRequest = () => {
    return {
      type: FETCH_ALL_LINKS_REQUEST
    }
  }
  
  const fetchLinksSuccess = (data) => {
    return {
      type: FETCH_ALL_LINKS_SUCCESS,
      links: data,
      message: 'Get all links success'
    }
  }
  
  const linksFailed = (error) => {
      return {
          type: LINKS_FAIL,
          message: "Error links",
          error
      }
  }

  //Async action
  export const fetchLink = (id) => {
    // Returns a dispatcher function
    // that dispatches an action at later time
    return (dispatch) => {
      dispatch(fetchLinkRequest());
      // Returns a promise
      return fetch(apiURL + '/links/' + id, {
        method: 'get'
      })
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              dispatch(fetchLinkSuccess(data));
            })
          }
          else if (response.status >= 500){
            dispatch(linksFailed( "Error server connection"));
          }
          else {
            response.json().then(error => {
              console.log('error');
              dispatch(linksFailed(error));
            })
          }
        })
    }
  }
  
  const fetchLinkRequest = (id) => {
    return {
      type: FETCH_LINK_REQUEST,
      id
    }
  }
  
  const fetchLinkSuccess = (data) => {
    return {
      type: FETCH_LINK_SUCCESS,
      link: data,
      message: 'Get all links success'
    }
  }

  //Async action
  export const addNewLink = (link) => {
    // Returns a dispatcher function
    // that dispatches an action at later time
    return (dispatch) => {
      dispatch(addNewLinkRequest(link));
      // Returns a promise
      return fetch(apiURL + '/links/', {
        method: 'post',
        body: link
      })
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              dispatch(addNewLinkSuccess(data));
            })
          }
          else if (response.status >= 500){
            dispatch(linksFailed( "Error server connection"));
          }
          else {
            response.json().then(error => {
              console.log('error');
              dispatch(linksFailed(error));
            })
          }
        })
    }
  }
  
  const addNewLinkRequest = (link) => {
    return {
      type: ADD_NEW_LINK_REQUEST,
      link
    }
  }
  
  const addNewLinkSuccess = (data) => {
    return {
      type: ADD_NEW_LINK_SUCCESS,
      link: data,
      message: 'Add new link success'
    }
  }

  //Async action
  export const deleteLink = (id) => {
    // Returns a dispatcher function
    // that dispatches an action at later time
    return (dispatch) => {
      dispatch(deleteLinkRequest());
      // Returns a promise
      return fetch(apiURL + '/links/' + id, {
        method: 'delete'
      })
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              dispatch(deleteLinkSuccess(data));
            })
          }
          else if (response.status >= 500){
            dispatch(linksFailed( "Error server connection"));
          }
          else {
            response.json().then(error => {
              console.log('error');
              dispatch(linksFailed(error));
            })
          }
        })
    }
  }
  
  const deleteLinkRequest = (id) => {
    return {
      type: DELETE_LINK_REQUEST,
      id
    }
  }
  
  const deleteLinkSuccess = () => {
    return {
      type: DELETE_LINK_SUCCESS,
      message: 'delete link success'
    }
  }

  //Async action
  export const likeLink = (id) => {
    // Returns a dispatcher function
    // that dispatches an action at later time
    return (dispatch) => {
      dispatch(likeLinkRequest());
      // Returns a promise
      return fetch(apiURL + '/links/' + id + 'like', {
        method: 'post'
      })
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              dispatch(likeLinkSuccess(data));
            })
          }
          else if (response.status >= 500){
            dispatch(linksFailed( "Error server connection"));
          }
          else {
            response.json().then(error => {
              console.log('error');
              dispatch(linksFailed(error));
            })
          }
        })
    }
  }
  
  const likeLinkRequest = (id) => {
    return {
      type: LIKE_LINK_REQUEST,
      id
    }
  }
  
  const likeLinkSuccess = () => {
    return {
      type: LIKE_LINK_SUCCESS,
      message: 'like link success'
    }
  }

  //Async action
  export const unLikeLink = (id) => {
    // Returns a dispatcher function
    // that dispatches an action at later time
    return (dispatch) => {
      dispatch(unLikeLinkRequest());
      // Returns a promise
      return fetch(apiURL + '/links/' + id + 'like', {
        method: 'delete'
      })
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              dispatch(unLikeLinkSuccess(data));
            })
          }
          else if (response.status >= 500){
            dispatch(linksFailed( "Error server connection"));
          }
          else {
            response.json().then(error => {
              console.log('error');
              dispatch(linksFailed(error));
            })
          }
        })
    }
  }
  
  const unLikeLinkRequest = (id) => {
    return {
      type: UNLIKE_LINK_REQUEST,
      id
    }
  }
  
  const unLikeLinkSuccess = () => {
    return {
      type: UNLIKE_LINK_SUCCESS,
      message: 'like link success'
    }
  }

  export const showDeleteModal = (linkToDelete) => {
    return {
      type: SHOW_DELETE_MODAL,
      link: linkToDelete
    }
  }

  export const hideDeleteModal = () => {
    return {
      type: HIDE_DELETE_MODAL
    }
  }