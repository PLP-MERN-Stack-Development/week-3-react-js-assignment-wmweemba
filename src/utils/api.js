/**
 * Fetch data from JSONPlaceholder API
 * @param {string} endpoint - The API endpoint (e.g., 'posts', 'users', 'todos')
 * @returns {Promise<any>} - The fetched data
 */
export const fetchFromJsonPlaceholder = async (endpoint) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    // Optionally log or handle error here
    throw error;
  }
};