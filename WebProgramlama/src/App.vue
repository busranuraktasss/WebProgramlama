<template>
  <div class="bg-white">
    <div class="mx-auto mt-5" style="text-align: center">
      <HeaderIcon/>
      <Logo/>
      <Menus :menus="menus"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Menus from "./components/header/Menus";
import HeaderIcon from "./components/header/HeaderIcon";
import Logo from "./components/header/Logo";
import {loadMenuData, loadCarousel, loadProductsData} from "./services/Service";

export default {
  components: {Logo, HeaderIcon, Menus},
  data() {
    return {}
  },
  computed: {
    menus() {
      return this.$store.getters.getMenus
    }
  },
  methods: {},
  created() {
    loadMenuData();
    loadCarousel();
    loadProductsData();
    // this.$store.dipatch("setMenus")
  }
}
</script>

<style>

</style>
