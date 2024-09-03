import React, { createContext, useReducer } from 'react';
import Createdata from './Createdata';

const blogReducer = (state, action) => {
      switch (action.type) {
            case 'add_blogpost':
                  return [...state,
                  {
                        id: Math.floor(Math.random() * 999999),
                        title: action.payload.title,
                        content: action.payload.content,
                  }];
            case 'edit_blogpost':
                  return state.map((blogPost) => {
                        return blogPost.id === action.payload.id ? action.payload : blogPost;
                  })

            case 'delete_blogpost':
                  return state.filter((blogPost) => blogPost.id !== action.payload);
            default:
                  return state;
      }
};

const editBlogPost = (dispatch) => {
      return (id, title, content, callback) => {
            dispatch({ type: 'edit_blogpost', payload: { title, content, id } });
            if (callback) {
                  callback();
            }
      };
};
const addBlogPost = (dispatch) => {
      return (title, content, callback) => {
            dispatch({ type: 'add_blogpost', payload: { title, content } });
            if (callback) {
                  callback();
            }
      };
};

const deleteBlogPost = (dispatch) => {
      return (id) => {
            dispatch({ type: 'delete_blogpost', payload: id });
      };
};

export const { Context, Provider } = Createdata(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, []);