const baseUrl = `https://api.github.com/users`;

export const getUser = id =>
  fetch(`${baseUrl}/${id}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to fetch');
  });
