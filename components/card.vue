<template>
  <div>
    <b-card
      :title="feature.name"
      :img-src="feature.catImg"
      :img-alt="feature.category"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-4 mr-1clea bg-info"
      text-variant="white"
    >
      <b-card-text class="p-1">
        {{ feature.description }}
      </b-card-text>
      <b-card-footer class="pt-1 pb-1">
        <div v-if="hasSocial">
          <p class="p-size mb-1">Redes Sociales:</p>
          <a v-if="hasFacebook" :href="hasFacebook" target="_blank"><img class="img-size " src="../assets/icons/Facebook.png" alt="facebook"/></a>
          <a v-if="hasInstagram" :href="hasInstagram" target="_blank"><img class="img-size " src="../assets/icons/Instagram.png" alt="instagram"/></a>
        </div>
      </b-card-footer>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    feature: {
      required: true,
      type: Object
    }
  },
  computed: {
    hasSocial () {
      return this.feature.socialNet.length > 0
    },
    hasFacebook () {
      const facebook = this.feature.socialNet.find(el => el.includes('facebook'))
      return facebook
    },
    hasInstagram () {
      const instagram = this.feature.socialNet.find(el => el.includes('instagram'))
      return instagram
    }
  }
}
</script>
<style scoped>
.p-size {
  font-size: 10px;
}
.img-size {
  height: 32px;
  width: 32px;
}
</style>
