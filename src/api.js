import axios from "axios";

const baseapi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: `18546a472387723b0b6570e2ccb0741e`,
    language: "ko-kr",
  },
});

export const apiData = {
  movie_Playing: () => baseapi.get("/movie/now_playing"),
  movie_Popular: () => baseapi.get("/movie/popular"),
  movie_Rated: () => baseapi.get("/movie/top_rated"),
  movie_Upcoming: () => baseapi.get("/movie/upcoming"),
  movie_Latest: () => baseapi.get("/movie/latest"),
  movie_Detail: (id) => baseapi.get(`/movie/${id}`),
  tv_AiringToday: () => baseapi.get("/tv/airing_today"),
  tv_Popular: () => baseapi.get("/tv/popular"),
  tv_Rated: () => baseapi.get("/tv/top_rated"),
  tv_OnTheAir: () => baseapi.get("/tv/on_the_air"),
  tv_Latest: () => baseapi.get("/tv/latest"),
  tv_Detail: (id) => baseapi.get(`/tv/${id}`),
  mv_video: (id) => baseapi.get(`/movie/${id}/videos`),
  tv_video: (id) => baseapi.get(`/tv/${id}/videos`),
  tv_episode_detail: (id, season_number) =>
    baseapi.get(`/tv/${id}/season/${season_number}`),
  mv_search: (term) =>
    baseapi.get(`/search/movie`, {
      params: {
        query: term,
      },
    }),
  tv_search: (term) =>
    baseapi.get(`/search/tv`, {
      params: {
        query: term,
      },
    }),
};
