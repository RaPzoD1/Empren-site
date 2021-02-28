<template>
  <b-container class="mt-4">
    <b-card-group class="p-4 center d-flex justify-content-center" deck>
      <template v-for="feature in featured">
        <Card :key="feature.id" :feature="feature" />
      </template>
    </b-card-group>
  </b-container>
</template>
<script>
import Card from '@/components/card.vue'
export default {
  name: 'Featured',
  components: { Card },
  props: {
    featured: {
      required: true,
      type: Array
    }
  },
  computed: {
    // featuresList () {
    //   return this.features.slice(6, this.features.lenght)
    // }
  }
}
</script>
<style scoped></style>
