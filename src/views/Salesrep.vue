<template>
  <section>
    <div class="two-line-decorator">
      <hr/>
      <h1 class="title">Meet your {{ salesRep.CompanyName }} Rep</h1>
      <hr/>
    </div>
    <div class="salesrep">
      <img src="https://b2bbucket.s3.amazonaws.com/18/team/Max-profile.jpg"
           alt="image"
           class="salesrep__img"
      />
      <div class="salesrep__info">
        <p class="h1">{{ (salesRep.FirstName) + " " + (salesRep.LastName) }}</p>
        <p>{{ (salesRep.City) + ", " + (salesRep.State) }}</p>
        <p>{{ salesRep.EmailAddress }}</p>
        <p>{{ salesRep.Phone }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Salesrep',
  components: {},
  async mounted() {
    if (!this.salesRep.SalesRepID) {
      await this.getData();
    }
  },
  computed: {
    ...mapGetters(['salesRep']),
  },
  methods: {
    ...mapActions(['getData']),
  },
};
</script>

<style lang="scss" scoped>
.salesrep {
  text-align: center;

  &__img {
    max-width: 600px;
  }

  &__info {
    font-size: 1.5rem;
  }
}
</style>
