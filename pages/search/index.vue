<template>
  <div v-if="businesses.length">
    <Filters />
    <Featured :featured="filteredBusinesses" />
  </div>
</template>
<script>
import Featured from '@/components/featured.vue'
import Filters from '@/components/filter.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  components: { Featured, Filters },
  computed: {
    ...mapGetters({
      businesses: 'getBusinesses',
      filteredBusinesses: 'getFilteredBusinesses'
    })
  },
  async mounted () {
    try {
      await this.$store.dispatch('fetchAllBusinesses')
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
