import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  //USERCARD
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  //REPOCARD
  containerRepo: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 12,
  },
  titleRepo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  descriptionRepo: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  starsRepo: {
    fontSize: 14,
    color: '#888',
  },
  //SEARCHBAR
  containerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  inputSearch: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginRight: 8,
  },
  buttonSearch: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  //RepoSearchScreen - UserSearchScreen
  containerRepoUser: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  loadingTextRepoUser: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 18,
    color: '#333',
  },
  message: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
});
