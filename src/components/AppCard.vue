<template>
  <div class="card">
    <router-link :to="`${cardData.ItemID}`">
      <img :src="`${image}`"
           alt="image"
           class="card__img filter"
      />
    </router-link>
    <div class="card__content">
      <div class="card__content-top">
        <div class="card__title">
          <router-link :to="`${cardData.ItemID}`" class="card__title-link h4">
            {{ cardTitle }}
          </router-link>
        </div>
        <div class="card__subtitle">
          <p>
            {{ cardSubtitleOne }}
          </p>
          {{ cardSubtitleTwo }}
        </div>
        <div class="card__desc">
          {{ description }}
        </div>
      </div>
      <div class="card__content-bottom">
        <div :class="`price h1 ${price ? 'show' : 'hide'}`">
          {{ formattedPrice }}
        </div>
        <div class="card__actions">
          <button :class="`btn ${ctaShow ? 'show w-100' : 'hide'}`"
                  @click="$router.push({ path: '/' })">
            {{ ctaText || "Add to Cart" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    cardData: Object,
    image: String,
    description: String,
    cardTitle: String,
    cardSubtitleOne: String,
    cardSubtitleTwo: String,
    ctaText: String,
    ctaShow: Boolean,
    price: Number,
  },
  computed: {
    formattedPrice() {
      return `$${this.cardData.BasePrice.toFixed(2)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 400px;
  height: 100%;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);

  &__img {
    &:hover {
      filter: contrast(100%);
    }
  }

  &__title {
    text-transform: uppercase;
    line-height: 1;
    font-weight: 600;

    &-link {
      margin-bottom: .5rem;
      color: #000;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__subtitle {
    font-size: 0.875rem;
    line-height: 1.8rem;
  }

  &__desc {
    line-height: 1.6;
    margin-bottom: .5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__content {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    height: 100%;

    &-top {
      padding: .75rem .75rem 0;
    }

    &-bottom {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
  }

  &__actions {
    width: 100%;
  }
}
</style>
