import axios from "axios";

export const state = () => ({
  newsList: null,
  newsDetail: null,
  newsSort: "latest",
  newsCategory: "",
  newsCategoryName: "",
});

export const getters = {
  getNewsList(state) {
    return state.newsList;
  },
  getNewsDetail(state) {
    return state.newsDetail;
  },
};

export const mutations = {
  setNewsList(state, payload) {
    state.newsList = payload;
  },
  setNewsDetail(state, payload) {
    state.newsDetail = payload;
  },
  setNewsSort(state, payload) {
    state.newsSort = payload;
  },
  setNewsCategory(state, payload) {
    state.newsCategory = payload;
  },
  setNewsCategoryName(state, payload) {
    state.newsCategoryName = payload;
  },
};

export const actions = {
  async fetchNewsList({ commit, state }, newsVar) {
    let sort;
    if (newsVar.sort == "latest") {
      sort = "-created_at";
    } else if (newsVar.sort == "popular") {
      sort = "-viewed";
    } else {
      sort = "-created_at";
    }

    let category = state.newsCategory;
    try {
      let response = await axios.get(
        process.env.API_ENDPOINT +
          "news?perPage=" +
          newsVar.pageSize +
          "&page=" +
          newsVar.page +
          "&sort=" +
          sort +
          "&filter[category]=" +
          category
      );
      commit("setNewsList", response.data);
    } catch (error) {
      console.log("err", error);
    }
  },
  async fetchNewsDetail({ commit }, id) {
    try {
      let response = await axios.get(process.env.API_ENDPOINT + "news/" + id);
      commit("setNewsDetail", response.data);
      return response.data;
    } catch (error) {
      console.log("err", error);
    }
  },
};
