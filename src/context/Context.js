import React, {createContext, useState} from 'react';
import axios from 'axios';

export const Context = createContext();

export const Provider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchUsers = async query => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`,
      );
      setUsers(response.data.items);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const searchRepos = async query => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}`,
      );
      setRepos(response.data.items);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Context.Provider value={{users, repos, loading, searchUsers, searchRepos}}>
      {children}
    </Context.Provider>
  );
};
