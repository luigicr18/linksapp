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

const defaultState = {
  links: [],
  message: '',
  error: '',
  isFetching: false,
  id: -1,
  link: null,
  showDeleteModal: false,
};

const linksReducer = (state = defaultState, action) => {
    switch (action.type) {
    case FETCH_ALL_LINKS_REQUEST: {
        return {
            ...state,
            links: [],
            message: '',
            error: '',
            isFetching: true,
            id: -1,
            link: null,
            showDeleteModal: false,
        }
    }

    case FETCH_ALL_LINKS_SUCCESS: {
        return {
            ...state,
            links: action.links,
            message: action.message,
            error: '',
            isFetching: false,
            id: -1,
            link: null,
            showDeleteModal: false,
        }
    }

    case LINKS_FAIL: {
        return {
            ...state,
            links: [],
            message: action.message,
            error: action.error,
            isFetching: false,
            id: -1,
            link: null,
            showDeleteModal: false,
        }
    }

    case FETCH_LINK_REQUEST: {
        return {
            ...state,
            links: state.links,
            message: '',
            error: '',
            isFetching:true,
            id: action.id,
            link: null,
            showDeleteModal: false,
        }
    }

    case FETCH_LINK_SUCCESS: {
        return {
            ...state,
            links: state.links,
            message: '',
            error: '',
            isFetching: false,
            id: -1,
            link: null,
            showDeleteModal: false,
        }
    }

    case ADD_NEW_LINK_REQUEST: {
        return {
            ...state,
            links: state.links,
            message: '',
            error: '',
            isFetching: true,
            id: -1,
            link: action.link,
            showDeleteModal: false,
        }
    }

    case ADD_NEW_LINK_SUCCESS: {
        return{
            ...state,
            links:[...state.links, action.link],
            message: action.message,
            error: '',
            isFetching: false,
            id: -1,
            link: null,
            showDeleteModal: false
        }
    }
    case DELETE_LINK_REQUEST: {
        return{
            ...state,
            links: state.links,
            message: '',
            error: '',
            isFetching: true,
            id: action.id,
            link: null,
            showDeleteModal: false
        }
    }

    case DELETE_LINK_SUCCESS: {
        const filtered = state.links.filter((link) => link.id !== state.id);
        return{
            ...state,
            links: filtered,
            message: action.message,
            error: '',
            isFetching: false,
            id: -1,
            link: null,
            showDeleteModal: false
        }
    }
    case LIKE_LINK_REQUEST: {
        return{
            ...state,
            links: state.links,
            message: '',
            error: '',
            id:action.id,
            isFetching: true,
            link: null,
            showDeleteModal: false
        }
    }
    case LIKE_LINK_SUCCESS: {
        const updatedLinks = state.links.map((link) => {
    
            if(link.id !== state.id){
              //This is not the item we care about, keep it as is
              return link;
            }
            //Otherwise, this is the one we want to return an updated value
            return { ...link, ...{like_count: link.like_count+1} }
        });
        return{
            ...state,
            links: updatedLinks,
            message: action.message,
            error: '',
            id:-1,
            isFetching: false,
            link: null,
            showDeleteModal: false
        }
    }

    case UNLIKE_LINK_REQUEST: {
        return{
            ...state,
            links: state.links,
            message: '',
            error: '',
            id:action.id,
            isFetching: true,
            link: null,
            showDeleteModal: false
        }
    }
    case UNLIKE_LINK_SUCCESS: {
        const updatedLinks = state.links.map((link) => {
    
            if(link.id !== state.id){
              //This is not the item we care about, keep it as is
              return link;
            }
            //Otherwise, this is the one we want to return an updated value
            return { ...link, ...{like_count: link.like_count-1} }
        });
        return{
            ...state,
            links: updatedLinks,
            message: action.message,
            error: '',
            id:-1,
            isFetching: false,
            link: null,
            showDeleteModal: false
        }
    }

    case SHOW_DELETE_MODAL: {
        return{
            ...state,
            links: state.links,
            message: '',
            error: '',
            id:-1,
            isFetching:false,
            link: action.link,
            showDeleteModal: true,
            
        }
    }

    case HIDE_DELETE_MODAL: {
        return{
            ...state,
            links: state.links,
            message: '',
            error: '',
            id:-1,
            isFetching:false,
            link: null,
            showDeleteModal: false,
            
        }
    }

    default:
        return state;
    }
};

export default linksReducer;