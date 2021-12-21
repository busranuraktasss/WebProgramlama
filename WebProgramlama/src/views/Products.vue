<template>
  <div style="margin-left: 75px;margin-right: 75px;">
    <div class="row">
      <div class="col-3">
        <span class="mb-2">Filtreleme</span>
        <div class="card p-3">
          <span class="pt-2 px-2">Filtreler</span>
          <hr>
          <div class="card-body">
            <div>
              <b-form-checkbox>İndirimli Ürünler</b-form-checkbox>
              <b-form-checkbox>Yeni Ürünler</b-form-checkbox>
            </div>
            <div class="pt-3">
              <span class="pt-2 ">Kategoriler</span>
              <hr>
              <b-form-checkbox>KAMPANYALAR</b-form-checkbox>
              <b-form-checkbox>3 ADET ŞAL 210 TL</b-form-checkbox>
              <b-form-checkbox>Baroq Desen Şal</b-form-checkbox>
              <b-form-checkbox>4 ADET ŞAL 100 TL</b-form-checkbox>
              <b-form-checkbox>4 ADET ŞAL 120 TL</b-form-checkbox>
              <b-form-checkbox>3 ADET ŞAL 110 TL</b-form-checkbox>
              <b-form-checkbox>3 ADET ŞAL 150 TL</b-form-checkbox>
            </div>
            <div class="pt-3">
              <span class="pt-2 ">Renkler</span>
              <hr> 
              <b-form-checkbox-group
                  v-model="filterColors"
              >
               
                <b-form-checkbox value="Vizon">Vizon</b-form-checkbox>
                <b-form-checkbox value="Soğan Kabuğu">Pudra</b-form-checkbox>
                <b-form-checkbox value="Zümrüt">Lemon</b-form-checkbox>
                <b-form-checkbox value="Bordro">Füme</b-form-checkbox>
                <b-form-checkbox value="Fil Dişi">Mint</b-form-checkbox>
                <b-form-checkbox value="Pudra">Pembe</b-form-checkbox>
                <b-form-checkbox value="Pudra">Sütlü Kahve</b-form-checkbox>
                
              </b-form-checkbox-group>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="btn-group btn-group-justified w-100 mb-3">
          <b-link href="#" class="btn btn-outline-secondary btn-block">Fiyata Göre (Artan)</b-link>
          <b-link href="#" class="btn btn-outline-secondary btn-block">Fiyata Göre (Azalan)</b-link>
          <b-link href="#" class="btn btn-outline-secondary btn-block">Ürün Adına Göre (A - Z)</b-link>
          <b-link href="#" class="btn btn-outline-secondary btn-block">Ürün Adına Göre (Z - A)</b-link>
          <b-link href="#" class="btn btn-outline-secondary btn-block">Yeni Gelenler</b-link>
          <b-link href="#" class="btn btn-outline-secondary btn-block">Stoktakiler</b-link>
          <b-link href="#" class="btn btn-outline-secondary btn-block">240 Ürün</b-link>
        </div>


        <div class="row w-100">

          <div class="col-4" v-for="product in products" :key="product.id">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" :src="product.image" alt="Card image cap">
              <div class="card-body">
                <router-link :to="'/product/'+product.id">
                  <h6>{{ product.title }}</h6>
                </router-link>
                <span>{{ product.subTitle }}</span>
                <br>
                <span>₺{{ product.price }}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "products",
  data() {
    return {
      filterColors: [],
      products: []
    }
  },
  watch: {
    filterColors() {
      this.filterProducts()
    }
  },
  methods: {
    filterProducts() {
      this.products = this.products.filter(x => this.filterColors.includes(x.color));
      console.log(this.products)
    }
  },
  created() {
    this.products = this.$store.getters.getProducts;
  }
}
</script>

<style scoped>

</style>