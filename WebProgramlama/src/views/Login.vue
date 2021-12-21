<template>
  <div class="row mx-5 my-5">
    <div class="col-4"></div>
    <div class="col-4">
      <div v-if="userInfo!=null && userInfo!=undefined">Ad: {{ userInfo.ad }} <br> Soyad: {{ userInfo.soyad }}</div>
      <div v-else class="border p-5">
        <h3 class="text-center mb-3">Üye Girişi</h3>
        <input v-model="user.email" class="form-control mb-3" type="email" placeholder="E-Posta">
        <input v-model="user.password" class="form-control mb-3" type="password" placeholder="Şifre">
        <button @click="login" style="background-color: #ec95a3;" class="btn w-100 text-white btn-block">
          Giriş Yap
        </button>
        <small class="float-end my-1">Şifremi Unuttum</small>
        <button style="background-color: #3b5998;" class="btn w-100 text-white btn-block my-2">
          Facebook İle Bağlan
        </button>
        <button style="background-color: #dd4b39;" class="btn w-100 text-white btn-block my-2">
          Google İle Bağlan
        </button>
      </div>
    </div>
    <div class="col-4"></div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters.getUserInfo;
    },
    users() {
      return this.$store.getters.getUsers;
    }
  },
  methods: {
    login() {
      const res = this.users.find(x => x.email == this.user.email && this.user.password == x.password)
      if (res != null)
        this.$store.commit('setuserInfo', res)
      this.$router.push('/')
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>