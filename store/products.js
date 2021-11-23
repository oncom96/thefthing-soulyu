import axios from 'axios';

export const state = () => ({
  productsList: null,
  categoryName: "",
});

export const getters = {
  getProductList(state) {
    return state.productsList;
  },
};

export const mutations = {
  setProductList(state, payload) {
    state.productsList = payload;
  },
  setCategoryName(state, payload) {
    state.categoryName = payload;
  },
};

export const actions = {
  async fetchProductList({ commit }, productVar) {
    try {
      let response = await axios.get(process.env.API_ENDPOINT +'product/?perPage='+productVar.pageSize+'&page='+productVar.page+'&filter[category]='+productVar.catId);
      commit('setProductList', response.data);
    } catch (error) {
      commit('setProductList', []);
      commit('setProductList', {});
    }
  },
  async fetchProductHome({ commit }, productVar) {
    try {
      let response = await axios.get(process.env.API_ENDPOINT +'product/?perPage='+productVar.pageSize+'&page='+productVar.page+'&filter[category]='+productVar.catId);
      return response.data.data
    } catch (error) {
      return []
    }
  },
  async fetchProductDetail({},id) {
    try {
      let response = await axios.get(process.env.API_ENDPOINT +'product/'+id);
      return response.data
    } catch (error) {
      return null
    }
  },
};
