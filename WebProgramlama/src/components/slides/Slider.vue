<template>
  <div class="m-5 bg-black">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

      <div class="carousel-inner">
        <div v-for="carousel in carousels" :key="carousel.id" :class="{'active':carousel.active}"
             class="carousel-item">
          <img :src="carousel.path" class="d-block w-100" :alt="carousel.path">
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    carousels() {
      return this.$store.getters.getCarousel
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>