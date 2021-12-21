<template>
  <div class="header-menu">
    <nav class="navbar navbar-expand-lg bg-light text-secondary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="mx-auto order-0 text-uppercase">
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li v-for="menu in menus" :key="menu.id" class="nav-item dropdown" id="myDropdown">
                <a class="nav-link text-black dropdown-toggle" style="text-align: center" href="#"
                   data-bs-toggle="dropdown"> {{ menu.text }}</a>
                <ul class="dropdown-menu">
                  <li v-for="firstMenus in menu.menus" :key="firstMenus.id">
                    <a class="dropdown-item" href="#">
                   <router-link to="/Products" tag="span">
                     {{ firstMenus.text }}
                   </router-link>
                    </a>
                    <ul class="submenu dropdown-menu">
                      <div v-if="firstMenus.menus!=null&&firstMenus.menus.length>0">
                        <li v-for="submenu in firstMenus.menus"
                            :key="submenu.id">
                          <a class="dropdown-item" href="#">{{ submenu.text }}</a>
                        </li>
                      </div>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menus",
  props: {
    menus: Array
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}
</style>
