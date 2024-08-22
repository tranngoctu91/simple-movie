import axios from "axios";
export const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false";

export const apiDetail = "https://api.themoviedb.org/3/movie/";

export const fetcher = async (url) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2YyODY5NWY5NzcwY2E1MWJjYjI0MjQ0OWIyMzNlOSIsIm5iZiI6MTcyMzI4NzQwOS40MzE4ODQsInN1YiI6IjY2YWE2MjRiNWI4NDViNTcxZjU5ZGQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Se1N569nKeB8667BbnZJO9TYXM5QfO9muUeR0wzIUHU`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
