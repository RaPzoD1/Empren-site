<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>
body {
  margin: 0;
  background-color: #F7F7F7;
}
</style>
