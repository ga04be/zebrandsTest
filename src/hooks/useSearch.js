import {useContext} from 'react';
import {Context} from '../context/Context';

export const useSearch = () => {
  const {searchUsers, searchRepos} = useContext(Context);
  return {searchUsers, searchRepos};
};
