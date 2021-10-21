<template>
  <ProductList/>
</template>

<script>
import { mapActions } from 'vuex';
import ProductList from '../components/ProductList.vue';

export default {
  name: 'Home',
  components: { ProductList },
  async mounted() {
    await this.getData();
  },
  methods: {
    ...mapActions(['getData']),
  },
};
</script>
