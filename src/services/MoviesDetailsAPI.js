function MoviesDetailsAPI(movieId) {
  const key = '8d6b51bf2b62aa36e50b05b7370792a1';
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`).then(
    response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error(`Ничего не найдено`));
    },
  );
}

export default MoviesDetailsAPI;