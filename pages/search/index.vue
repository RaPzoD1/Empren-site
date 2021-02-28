<template>
  <div>
    <h2 class="mt-4 text-center">Todos los emprendimientos</h2>
    <Featured :featured="business" />
  </div>
</template>
<script>
import Featured from '@/components/featured.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  components: { Featured },
  computed: {
    ...mapGetters({
      business: 'getBusiness'
    })
  },
  async mounted () {
    try {
      await this.$store.dispatch('bindBusiness')
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
