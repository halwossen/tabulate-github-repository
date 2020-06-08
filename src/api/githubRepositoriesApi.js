import { loadRepositories } from '../actions/repositories';

// Fetch Github Repositories

export default async function fetchRepositories(dispatch) {
    try {
      const response = await fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100')
      
      if (!response.ok) {
          throw new Error('Bad network response');
        }
        // const repositories = await response.json();
        const repositories = await response.json()
        dispatch(loadRepositories(repositories))
        
        } catch(error) {
      console.error('Fetch operation encountered a problem: ', error)
    }
  }