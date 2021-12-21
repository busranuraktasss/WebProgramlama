<template>
  <div>
    <div class="row mx-5 my-5">
      <div class="col-6">
        <div class="form-group my-3">
          <label>Ad</label>
          <input v-model="user.ad" type="text" class="form-control">
        </div>
        <div class="form-group my-3">
          <label>Soyad</label>
          <input v-model="user.soyad" type="text" class="form-control">
        </div>
        <div class="form-group my-3">
          <label>E-posta</label>
          <input v-model="user.email" type="email" class="form-control">
        </div>
        <div class="form-group my-3">
          <label>Şifre</label>
          <input v-model="user.password" type="password" class="form-control">
        </div>

        <b-form-checkbox class="mb-2" >Kampanya, duyuru, bilgilendirmelerden e-posta ile haberdar olmak
          istiyorum.
        </b-form-checkbox>
        <b-form-checkbox >Kampanya, duyuru, bilgilendirmelerden sms ile haberdar olmak istiyorum.
        </b-form-checkbox>
      </div>
      <div class="col-6">
        <div class="form-group my-3">
          <label>Cep Telefonunuz</label>
          <input class="form-control" type="tel">
        </div>
        <div class="form-group my-3">
          <label>Ülke</label>
          <select class="form-select" aria-label="Default select example">
            <option selected value="tr">Türkiye</option>
            <option value="en">Amerika</option>
            <option value="fr">Fransa</option>
          </select>
        </div>
        <div class="form-group my-3">
          <label>Şehir</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Seçiniz</option>
            <option value="01">Adana</option>
            <option value="55">Samsun</option>
            <option value="41">Kocaeli</option>
          </select>
        </div>
        <div class="form-group my-3">
          <label>İlçe</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Seçiniz</option>
            <option value="0600">Sincan</option>
            <option value="06000">Çankaya</option>
            <option value="41400">Gebze</option>
          </select>
        </div>

        <b-form-checkbox value="Vizon">Üyelik koşullarını ve kişisel verilerimin korunmasını kabul ediyorum.
        </b-form-checkbox>
      </div>


    </div>
    <div class="text-center">
      <B-button @click="register" style="background-color: #ec95a3;width: 150px" :block="false" class="my-2 mx-5">
        Üye Ol
      </B-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        ad: '',
        soyad: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register() {
      this.$store.commit('setUsers', this.user)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>