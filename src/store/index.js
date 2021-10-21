import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
    salesRep: {},
  },
  mutations: {
    setProducts: (state, data) => {
      state.products = data;
    },
    setSalesRep: (state, data) => {
      state.salesRep = data;
    },
  },
  getters: {
    products: (state) => state.products,
    salesRep: (state) => state.salesRep,
    product: (state) => (paramsId) => state.products.find((product) => product.ItemID === paramsId),
  },
  actions: {
    async getData({ commit }) {
      const productsUrl = 'https://raw.githubusercontent.com/RepZio/TestApplication/master/test.json';
      try {
        await fetch(productsUrl).then(async (response) => {
          const { SalesRep, items } = await response.json();
          const products = items.map((product) => ({ ...product }));
          commit('setProducts', products);
          commit('setSalesRep', SalesRep);
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
