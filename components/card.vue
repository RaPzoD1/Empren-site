<template>
  <div>
    <div class="card bg-dark card-size m-2">
      <img class="card-img" :src="feature.catImg" alt="Card image">
      <div class="card-img-overlay">
        <div class="d-flex justify-content-center">
          <h5 class="card-title text-center font-weight-bold">
            {{ feature.name }}
          </h5>
        </div>
        <p class="card-text">
          Ubicacion: {{ feature.location }}
        </p>
        <div>
          <p class="card-text">
            Categoria: {{ feature.category }}
          </p>
        </div>
      </div>
    </div>
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
h5 {
  font-size: 2vw;
}
.card-size {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 325px;
  color: white;
  /* height: 200px; */
}
.p-size {
  font-size: 10px;
}
.img-size {
  height: 32px;
  width: 32px;
}
</style>
