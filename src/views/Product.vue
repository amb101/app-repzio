<template>
  <div class="product-details">
    <div v-if="currentProduct">
      <section>
        <div class="two-line-decorator">
          <hr/>
          <h1 class="title">Product Details</h1>
          <hr/>
        </div>
        <AppCard :cardData="currentProduct"
                 :image="`${currentProduct.PhotoName}?width=700&height=700`"
                 :cardTitle="currentProduct.ItemName"
                 :cardSubtitleOne="currentProduct.ItemID"
                 :cardSubtitleTwo="currentProduct.Dimensions"
                 :description="currentProduct.Description"
                 :ctaShow="true"
                 :price="currentProduct.BasePrice"
        />
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppCard from '../components/AppCard.vue';

export default {
  name: 'Product',
  components: { AppCard },
  async mounted() {
    if (!this.currentProduct) {
      await this.getData();
    }
  },
  computed: {
    ...mapGetters(['products']),
    currentProduct() {
      const paramsId = this.$route.params.id;
      return this.products.find((product) => product.ItemID === paramsId);
    },
  },
  methods: {
    ...mapActions(['getData']),
  },
};
</script>
