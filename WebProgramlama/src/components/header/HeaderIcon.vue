<template>
  <div class="header-icon">
    <router-link to="/sepet">
      <b-icon class="mx-2 text-secondary fs-5" icon="cart"></b-icon>
    </router-link>

    <router-link v-if="userInfo==null || userInfo==undefined" to="/Login">
      <b-icon class="mx-2 text-secondary fs-5" icon="person"></b-icon>
    </router-link>
    <router-link v-if="userInfo==null || userInfo==undefined" to="/Register">
      <b-icon class="mx-2 text-secondary fs-5" icon="person-plus"></b-icon>
    </router-link>
    <span v-else>{{ userInfo.ad + ' ' + userInfo.soyad }}</span>

    <b-icon class="mx-2 text-secondary fs-5" icon="search"></b-icon>
  </div>
</template>

<script>
export default {
  name: "HeaderIcon",
  computed: {
    userInfo() {
      return this.$store.getters.getUserInfo;
    },
  }
}
</script>

<style scoped>

.header-icon {
  margin-top: 20px;
  float: right;
  position: absolute;
  right: 110px;
  top: 0;
}

.header-menu {
  text-align: center;
}

@media all and (min-width: 992px) {
  .dropdown-menu li {
    position: relative;
  }

  .nav-item .submenu {
    display: none;
    position: absolute;
    left: 100%;
    top: -7px;
  }

  .nav-item .submenu-left {
    right: 100%;
    left: auto;
  }

  .dropdown-menu > li:hover {
    background-color: #f1f1f1
  }

  .dropdown-menu > li:hover > .submenu {
    display: block;
  }
}

/* ============ desktop view .end// ============ */

/* ============ small devices ============ */
@media (max-width: 991px) {
  .dropdown-menu .dropdown-menu {
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    margin-bottom: .5rem;
  }
}
</style>
