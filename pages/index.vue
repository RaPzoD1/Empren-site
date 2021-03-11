<template>
  <div>
    <Hero />
    <h2 class="mt-4 text-center">Ultimos Emprendimientos Agregados</h2>
    <Featured :featured="featuredList" />
    <div class="d-flex justify-content-center">
    <b-btn class="mt-4 text-center" @click.prevent="seeMore">Ver mas</b-btn>
    </div>
  </div>
</template>

<script>
import Featured from '@/components/featured.vue'
import Hero from '@/components/hero.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    Hero,
    Featured
  },
  computed: {
    ...mapGetters({
      businesses: 'getBusinesses'
    }),
    hasFeatured () {
      return this.businesses.length > 0
    },
    featuredList () {
      return this.businesses.slice(this.businesses.length - 6, this.businesses.length)
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('fetchAllBusinesses')
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    seeMore () {
      this.$router.push('/search')
    }
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
} */

/* .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
