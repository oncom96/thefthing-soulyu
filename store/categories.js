import axios from 'axios';

export const state = () => ({
  categoryList: null,
});

export const getters = {
  getCategoryList(state) {
    return state.categoryList;
  },
};

export const mutations = {
  setCategoryList(state, payload) {
    state.categoryList = payload;
  },
};

export const actions = {
  async fetchCategoryList({ commit }, id) {
    try {
      let response = await axios.get(process.env.API_ENDPOINT + 'categories/'+id);
      commit('setCategoryList', response.data);
    } catch (error) {
      commit('setCategoryList', {});
    }
  },
  async fetchCategoryDetail({ commit }, id) {
    try {
      let response = await axios.get(process.env.API_ENDPOINT + 'categories/'+id);
      return response.data
    } catch (error) {
      return null
    }
  },
};
