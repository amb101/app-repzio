<template>
  <section class="product">
    <div class="two-line-decorator">
      <hr/>
      <h1 class="title">Products</h1>
      <hr/>
    </div>
    <div class="product__items">
      <AppCard v-for="product in products"
               :key="product.id"
               :cardData="product"
               :image="`${product.PhotoName}?width=325&height=325`"
               :cardTitle="product.ItemName"
               :cardSubtitleOne="product.ItemID"
               :cardSubtitleTwo="product.Dimensions"
               :description="product.Description"
               :ctaShow="true"
               :price="product.BasePrice"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppCard from './AppCard.vue';

export default {
  name: 'ProductList',
  components: { AppCard },
  computed: {
    ...mapGetters(['products']),
  },
  async mounted() {
    if (!this.products.length) {
      await this.getData();
    }
  },
  methods: {
    ...mapActions(['getData']),
  },
};
</script>

<style lang="scss" scoped>
.product {
  &__items {
    display: flex;
    flex-flow: column;
    gap: 3rem;

    @include media-breakpoint-up(md) {
      display: grid;
      grid-template-columns: repeat(2, minmax(10px, 1fr));
    }

    @include media-breakpoint-up(lg) {
      grid-template-columns: repeat(4, minmax(10px, 1fr));
    }
  }
}
</style>
