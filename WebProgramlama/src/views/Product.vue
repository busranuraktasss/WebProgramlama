<template>
  <div class="p-5">
    <div class="card" v-if="product!=null">
      <div class="container-fliud">
        <div class="wrapper row">
          <div class="preview col-md-6">

            <div class="preview-pic tab-content">
              <div class="tab-pane active" style="height: 500px; width: 500px" id="pic-1"><img :src="product.image"/>
              </div>
            </div>
            <ul class="preview-thumbnail nav nav-tabs">
              <li v-for="index in 3" :key="index"><a data-target="#pic-2" data-toggle="tab">
                <img :src="product.image"/></a>
              </li>
            </ul>

          </div>
          <div class="details col-md-6">
            <h6>Marka: Şalland</h6>
            <h4 class="product-title">Freya Serisi</h4>
            <h5 class="product-title" style="font-size: small">Stok Kodu : (kras0015)</h5>
            <span style="font-size: large " >₺{{ product.price }} <small>KDV Dahil</small></span>
            <br>
            <p class="vote">₺14,15 'den başlayan taksitlerle</p>
            <p>4 ADET 120 TL
            </p>
            <select class="form-select w-25" aria-label="1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <div class="action">
              <button @click="addBasket" style="background-color: #ec95a3;" class="btn  text-white my-2 mx-3">
                Sepete Ekle
              </button>
              <button style="background-color: #dee066;" class="btn  text-white my-2">
                Hemen Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>Ürün bulunamadı.</h3>
    </div>

    <div class="p-5">
      <div class="text-center">
        <div class="btn-group btn-group-justified w-75 mt-3">
          <b-link href="#" class="btn btn-outline-secondary btn-block">Ürün Özellikleri</b-link>
          <b-link href="#" class="btn btn-outline-secondary btn-block">Yorumlar</b-link>
          <b-link href="#" class="btn btn-outline-secondary btn-block">Ödeme Seçenekleri</b-link>
          <b-link href="#" class="btn btn-outline-secondary btn-block">Ürün Önerileri</b-link>
          <b-link href="#" class="btn btn-outline-secondary btn-block">Teslimat ve İade</b-link>
        </div>
      </div>
      <hr>
      <div class="urunTabAlt">
        <p>Kraş Pamuk Şal</p>
        <br>
        <p>Spor ve zerafet bir arada….</p>
        <p>Kendinden dokulu ve saçaklı olan bu serimiz sezonun gözde renkleri baz alınarak sizler için
          özenle hazırlanmıştır. Kolay şekil alan hafif kumaşı ile gün boyu rahatlıkla kullanıma
          uygundur.Her tarza hitap eden her kombine uyum sağlayan serimiz terletme, yakma ve
            kayma yapmaz. Serinin diğer renklerini inceleyebilir, favorilerinize ekleyebilir, kendinize
            alışveriş listesi oluşturarak güvenle alışveriş yapabilirsiniz.</p>
        
        <p>Ürün Detayları;</p>
        <p>İç göstermez</p>
        <p>4 Mevsim kullanıma uygundur.</p>
        <p>Ütü Gerektirmez</p>
        <p>Kolay Şekil Alır</p>
        <p>Yakma Yapmaz</p>
        <p>Ürün Boyutları: 80-190/200 cm</p>
        <br>
        <p>Şalland marka ürünlerimizin tamamı kendi üretimimiz ve özgün tasarımlarımızdır. Diğer
          modellerimize ve ürün renklerine kategorilerimizden kolayca ulaşabilirsiniz. Kampanyalarımıza göz atmayı
          unutmayın:)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      product: null
    }
  },
  methods: {
    addBasket() {
      this.product["count"] = 1
      const temp = this.getProducts;
      const filter = this.getProducts.find(x => x.id == this.product.id);
      if (filter != null) {
        this.$store.commit('clearBasket')
        this.product["count"] = filter.count + 1;
        const index = temp.findIndex(x => x.id == this.product.id);
        if (index > -1) {
          console.log(index)
          temp.splice(index,1);
        }
        temp.push(this.product)
        console.log(temp)
        this.$store.commit('setbasket', temp)
      } else {
        this.$store.commit('setbasket', this.product)
      }
    }
  },
  computed: {
    getProducts() {
      return this.$store.getters.getBasket;
    }
  },
  created() {
    const id = this.$route.params.id;
    const arr = this.$store.getters.getProducts.filter(x => x.id == id)
    console.log(arr)
    if (arr != null && arr.length > 0)
      this.product = arr[0];
  }
}
</script>

<style scoped>

p {
  font-size: 12px;
}

img {
  max-width: 100%;
}

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

@media screen and (max-width: 996px) {
  .preview {
    margin-bottom: 20px;
  }
}

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px;
}

.preview-thumbnail.nav-tabs li {
  width: 18%;
  margin-right: 2.5%;
}

.preview-thumbnail.nav-tabs li img {
  max-width: 100%;
  display: block;
}

.preview-thumbnail.nav-tabs li a {
  padding: 0;
  margin: 0;
}

.preview-thumbnail.nav-tabs li:last-of-type {
  margin-right: 0;
}

.tab-content {
  overflow: hidden;
}

.tab-content img {
  width: 100%;
  -webkit-animation-name: opacity;
  animation-name: opacity;
  -webkit-animation-duration: .3s;
  animation-duration: .3s;
}

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em;
}

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: bold;
}

.checked, .price span {
  color: #ff9f1a;
}

.product-title, .rating, .product-description, .price, .vote, .sizes {
  margin-bottom: 15px;
}

.product-title {
  margin-top: 0;
}

.size {
  margin-right: 10px;
}

.size:first-of-type {
  margin-left: 40px;
}

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px;
}

.color:first-of-type {
  margin-left: 20px;
}

.add-to-cart, .like {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background .3s ease;
  transition: background .3s ease;
}

.add-to-cart:hover, .like:hover {
  background: #b36800;
  color: #fff;
}

.not-available {
  text-align: center;
  line-height: 2em;
}

.not-available:before {
  font-family: fontawesome;
  content: "\f00d";
  color: #fff;
}

.orange {
  background: #ff9f1a;
}

.green {
  background: #85ad00;
}

.blue {
  background: #0076ad;
}

.tooltip-inner {
  padding: 1.3em;
}

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

/*# sourceMappingURL=style.css.map */
</style>