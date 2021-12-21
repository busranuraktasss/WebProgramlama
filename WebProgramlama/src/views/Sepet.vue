<template>
  <div class="m-5">

    <div class="row">
      <div class="col-9">
        <div v-if="getProducts.length>0">
          <div class="sepetItem sepetAdetTipi0" v-for="product in getProducts" :key="product.id">
            <div class="sepetItemB sepetItemB0 divUrunSepetResim">
              <img class="sepetImg urunSepetResim" :src="product.image">
            </div>
            <div class="sepetItemB sepetItemB1">
              <span>{{ product.title }}</span>
              <span>{{ product.subTitle }}</span>
              <a href="/kras-pamuk-sal-beyaz-3764" rel="0" target="_top">Kraş Pamuk Şal Beyaz</a>
            </div>
            <div class="sepetItemB sepetItemB2">
              <div class="adetGuncelleContent">
                <a class="urunListeAdetAzalt qtyMinus" style="display: none;">Azalt</a>
                <input type="number" class="textbox txtSepetAdet" id="txtbxAdet_4836" name="txtbxAdet_4836" value="1"
                       min="1"
                       max="999999" step="1" data-double="False">
                <span class="sepetAdetMobile" style="display: none">x <span>Adet</span></span>
                <a class="urunListeAdetArtir qtyPlus" style="display: none;">Artır</a>
                <a onclick="return adetGuncelleKontrol(this);" id="mainHolder_ucSepetim_rptSepet_lnkBtnAdetGuncelle_0"
                   class="AdetGuncelle" data-urun-id="4836" data-kampanya-id="0"
                >Güncelle</a>
              </div>
            </div>
            <div class="sepetItemPriceContent">
              <div class="sepetItemB sepetItemBIndirimsiz sepetFiyatBold sepetItemB3">

              </div>
              <div class="sepetItemB sepetItemB4 sepetFiyatBold">
      <span class="sepetItemB4_1">
      ₺100,00
      </span>
                <span class="sepetItemB4_2">
      ₺{{ product.price }}
      </span>
              </div>
            </div>
            <div class="sepetItemB sepetItemB5">
              <a class="sepet-sil" rel="0"></a>
            </div>
          </div>
        </div>
        <div v-else>Ürün bulunamadı</div>
      </div>
      <div class="col-3">
        <div class="BasketAccount" style="z-index: 0;">
          <div class="basketCompleteContent">
            <b-button
                style="cursor: pointer !important; background: #ec95a3!important" class="button basketCompletebtn w-100"
            >SİPARİŞİ TAMAMLA
            </b-button>
          </div>
          <div class="BasketRigth">
            <ul>
              <li>
                <span>Sipariş Tutarı</span>
                <span class="tut ng-binding">₺60,00</span>
              </li>

              <li ng-if="cart.kampanyaIndirimleri > 0" class="ng-scope">
                <span>Kampanya İndirimi</span>
                <span class="tut ng-binding">- ₺10,00</span>
              </li><!-- end ngIf: cart.kampanyaIndirimleri > 0 -->
              <!-- ngIf: cart.indirimlerToplami > 0 && false -->
              <li class="genelToplam">
                <span>Sepet Toplamı </span>
                <span class="tut ng-binding">₺50,00</span>
              </li>
              <!-- ngIf: cart.tahminiTeslimSuresi > 0 || cart.ayniGunTeslimat -->
            </ul>
          </div>
          <div class="BasketRigth BasketHediyeCeki">
            <div id="hed">
              <div id="mainHolder_ucSepetim_divHediyeCekiForm" class="Odeme-RightLine">
                Hediye Çekleri
                <div id="hediyeCeklerimList" style="display: none;">
                </div>
                <div class="hediCekForm">
                  <input name="ctl00$mainHolder$ucSepetim$txtbxHediyeCekiKodu" type="text" id="txtbxHediyeCekiKodu">
                  <a onclick="onHediyeCekiUygula();" id="mainHolder_ucSepetim_lnkButtonHediyeCekiUygula" class="button"
                     href="javascript:__doPostBack('ctl00$mainHolder$ucSepetim$lnkButtonHediyeCekiUygula','')">Ekle</a>
                </div>
              </div>
            </div>
          </div>
          <div class="basketCompleteContent">
            <b-button
                style="cursor: pointer !important; background: #ec95a3!important" class="button basketCompletebtn w-100"
            >SİPARİŞİ TAMAMLA
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sepet",
  computed: {
    getProducts() {
      return this.$store.getters.getBasket;
    }
  }
}
</script>

<style scoped>
ul, li {
  list-style-type: none
}

a {
  line-height: normal
}

select {
  border-radius: 0;
  box-shadow: none;
  border-color: #efefef;
  margin: 0;
  padding: 0
}

.sepetimBody {
  background-color: #f2f2f2;
  background-image: none
}

.sepetimBody .ticiContainer {
  clear: both;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-width: 1180px;
  min-width: 1000px;
  position: relative;
  -moz-transition-duration: inherit !important;
  -o-transition-duration: inherit !important;
  -webkit-transition-duration: inherit !important;
  transition-duration: inherit !important
}

.sepetimBody .ticiContainer:after {
  clear: both;
  display: table;
  content: ""
}

.sepetimBody .ticiContainer .centerCount {
  width: 100%
}

.sepetimBody .BasketPage {
  font: 12px/normal 'Roboto', sans-serif;
  margin: 20px 0
}

.SiparisParaPuan {
  display: block !important
}

.sepetimBody #header {
}

.sepetimBody .MobileHeaderControlContent {
  display: none
}

.sepetimBody .mobileAddition {
  display: none
}

.footerSslLogo {
  display: none
}

.hediyeCekiBtn {
  background-color: #76b852;
  display: block;
  text-align: center;
  color: #fff !important;
  font-weight: 400 !important;
  line-height: 34px !important;
  text-decoration: none !important
}

.hediyeCekiBtn:hover {
  background-color: #04be00;
  display: block;
  text-align: center;
  color: #fff !important;
  font-weight: 300 !important;
  line-height: 34px !important;
  text-decoration: none !important
}

.odemeBankaAdi {
  width: 400px
}

#btnPayPalOde {
  padding: 5px;
  width: 200px;
  height: 40px;
  float: left;
  border: solid 1px #ddd
}

#mainHolder_ucOdeme_divParcaliOdemeFormu #cbParcaliOdemeYapmakIstiyorum {
  margin-right: 5px;
  float: left;
  margin-bottom: 10px
}

#mainHolder_ucOdeme_divParcaliOdemeFormu input[type=text] {
  border-radius: 0;
  box-shadow: none;
  border: 1px solid #e5e5e5
}

.SoslesmeCheck {
  line-height: 18px;
  color: #000;
  font-size: 12px
}

.SoslesmeCheck a {
  color: #000;
  text-decoration: underline;
  font-weight: 600;
  line-height: 18px;
  color: #000;
  font-size: 12px
}

#spn3DContainer {
  margin-top: 10px;
  clear: both;
  display: block;
  float: left;
  width: 100%
}

#cbMesafeliSatisSozlesme {
  float: left;
  margin-top: 2px;
  margin-right: 5px;
  min-height: 0
}

#cb3DSecureOdeme {
  float: left;
  margin-right: 5px;
  min-height: 13px
}

.orderSummary::after {
  clear: both;
  display: table;
  content: ""
}

.orderSummary .sepetTitle .st_1:before {
  content: "\f041"
}

#AdresContent .row {
  width: 100%;
  margin: 0 !important
}

#AdresContent .row .span {
  position: relative
}

#AdresContent .row .span:after {
  clear: both;
  display: table;
  content: ""
}

#AdresContent .row .span label {
  width: 100%;
  float: left;
  color: #000;
  position: static;
  font-size: 14px;
  padding: 10px 0
}

#AdresContent .row .span .textbox {
  width: 100%;
  float: left;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 0;
  box-shadow: none
}

#AdresContent .row .span .textarea {
  width: 100%;
  float: left;
  border: 1px solid #ddd;
  border-radius: 0;
  box-shadow: none
}

#AdresContent .row .span .selectboxx {
  width: 100%;
  float: left;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd
}

table#rblFaturaTipi tbody tr td {
  border: 0;
  line-height: normal
}

#AdresContent #rblFaturaTipi tr input {
  margin-top: 8px
}

.intl-tel-input {
  width: 100%
}

#txtbxPostaKodu {
  width: 100% !important
}

.tckZorunlu {
  margin-left: 10px;
  color: red
}

.sepetTitle3 {
  height: 30px;
  line-height: 30px;
  padding-left: 18%;
  font-size: 18px;
  border: none;
  margin-bottom: 10px;
  margin-top: 20px
}

#AdresContent .button {
  padding: 11px 21px;
  margin-left: 15px;
  background: #000;
  color: #fff;
  line-height: normal;
  border: 0
}

#AdresContent .button:hover {
  background: #fc5f5e
}

#AdresContent .span .validate {
  right: 0;
  left: 0;
  line-height: 25px;
  top: 3px;
  display: block
}

#AdresContent .validate .validateOk, .validateSol .validateSolOk, .validateOrta .validateOrtaOk {
  right: auto;
  left: 10px
}

#btnPayPalOde {
  background-color: #000;
  cursor: pointer;
  border: none;
  color: #fff
}

#sozlesme_cc {
  max-width: 1000px;
  background-color: #fff
}

.hedefSatisContent {
  padding: 0;
  margin-bottom: 0;
  color: #000;
  font-size: 12px;
  line-height: 30px;
  float: left
}

.hedefSatisContent:before {
  content: "\f0a2";
  color: #fc5f5e;
  font: normal normal normal 12px/1 FontAwesome !important
}

.hedefTutar {
  text-decoration: underline
}

.BasketDetail.EmptyCart {
  margin-bottom: 15px;
  border: 0;
  padding: 0;
  background-color: transparent
}

.EmptyCart .empty-area {
  display: -webkit-flex;
  display: flex
}

.EmptyCart .empty-area > .left {
  background-color: #fff;
  border: 1px solid #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  flex: none;
  width: 125px;
  height: auto;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px
}

.EmptyCart .empty-area > .left > .Icon {
}

.EmptyCart .empty-area > .left > .Icon::before {
}

.EmptyCart .empty-area > .left > .Icon > span {
  font-size: 30px
}

.EmptyCart .empty-area > .right {
  background-color: #fff;
  border: 1px solid #f0f0f0;
  padding: 20px 25px;
  border-radius: 5px;
  flex: auto;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: space-between
}

.EmptyCart .empty-area > .right > .Text {
}

.EmptyCart .empty-area > .right > .Text > .T {
  font-size: 14px;
  font-weight: 600
}

.EmptyCart .empty-area > .right > .Text > .sT {
}

.EmptyCart .empty-area > .right > .alisverisedevamet {
  margin: 0;
  font-weight: 400;
  background-color: #fc5f5e;
  color: #fff;
  border: 0
}

.EmptyCart .empty-area > .right > .alisverisedevamet:hover {
  background-color: #000
}

.popupSepet .KasaOnuFirsatlar, .popupSepet .Basketstep, .popupSepet .sepetTitle {
  display: none
}

.popupSepet .Basketstep, .popupSepet .BasketDetail, .popupSepet .BasketAccount {
  padding: 10px
}

.BasketPage * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box
}

.BasketPage:after {
  display: table;
  clear: both;
  content: ""
}

.BasketDetail, .BasketRigth, .BasketDetailBolme {
  background-color: #fff;
  border: 1px solid #eee;
  padding: 10px;
  width: 100%;
  margin: 0
}

.sozlemeCheckContent {
}

.BasketDetail {
  margin-bottom: 20px
}

.BasketDetail:after {
  clear: both;
  display: table;
  content: ""
}

.BasketAccount {
  width: 100%;
  margin: 0;
  padding: 0
}

.BasketAccountContainer {
  width: 28%;
  float: right;
  position: relative
}

.BasketRigth {
  margin-top: 20px;
  margin-bottom: 20px
}

.BasketDetailContainer {
  width: 70.5%;
  position: relative;
  float: left
}

.Basketstep.step1 {
  width: 76%
}

.Basketstep ul li div span {
}

.BasketDetailBolme {
  text-align: center;
  margin-bottom: 20px;
  padding: 20px 0
}

.BasketDetailBolme .satir1 {
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 15px;
  margin-bottom: 20px
}

.BasketDetailBolme .satir1 i {
  font-size: 20px;
  color: red
}

.BasketDetailBolme .satir1 b {
  font-size: 22px;
  color: #000;
  margin: 0 10px
}

.BasketDetailBolme .satir2 span {
  display: block
}

.BasketDetailBolme .satir2 span b {
  font-size: 13px
}

.BasketDetailBolme .satir2 span a {
  font-size: 13px;
  color: #a4a4a4;
  font-size: 13px;
  border: 1px solid #e1e1e1;
  border-radius: 3px;
  display: inline-block;
  padding: 10px 30px;
  margin-top: 20px
}

.BasketDetailBolme .satir2 span a:hover {
  background-color: #000;
  color: #fff;
  border-color: #000
}

.BasketDetailBolmeItems {
  margin-bottom: 20px;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 20px;
  padding-left: 45px;
  padding-right: 45px
}

.BasketDetailBolmeItems ul {
}

.BasketDetailBolmeItems ul li {
}

.BasketDetailBolmeItems ul li a {
  display: block;
  border: 1px solid #e1e1e1;
  border-radius: 3px;
  background-color: #fff;
  color: #000;
  font-size: 13px;
  text-align: center;
  font-weight: 600;
  padding: 11px 0
}

.BasketDetailBolmeItems ul li a:hover {
  background-color: #f3f3f3
}

.BasketDetailBolmeItems ul li.active a {
  background-color: #fc5f5e;
  color: #fff
}

.BasketDetailBolmeItems .owl-nav {
  position: absolute;
  top: 0;
  right: -45px;
  left: -45px;
  z-index: 2
}

.BasketDetailBolmeItems .SepetListprev {
  left: 0
}

.BasketDetailBolmeItems .SepetListnext {
  right: 0
}

.BasketDetailBolmeItems .SepetListprev, .BasketDetailBolmeItems .SepetListnext {
  font-size: 0;
  width: 38px;
  height: 38px;
  border: 1px solid #e1e1e1;
  background: #fff;
  position: absolute;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  transition: all .3s ease
}

.BasketDetailBolmeItems .SepetListprev:before {
  content: '\f104';
  font-family: fontawesome;
  font-size: 16px;
  color: #000;
  line-height: 38px
}

.BasketDetailBolmeItems .SepetListnext:before {
  content: '\f105';
  font-family: fontawesome;
  font-size: 16px;
  color: #000;
  line-height: 38px
}

.BasketDetailBolmeItems .SepetListprev:hover {
  background: #000;
  border-color: #000
}

.BasketDetailBolmeItems .SepetListnext:hover {
  background: #000;
  border-color: #000
}

.BasketDetailBolmeItems .SepetListnext:hover:before {
  color: #fff
}

.BasketDetailBolmeItems .SepetListprev:hover:before {
  color: #fff
}

.sozlemeCheckContent {
}

.BasketDetail {
  margin-bottom: 20px
}

.cokluKargoContent {
  padding: 0;
  background-color: transparent;
  border: 0
}

.cokluKargoContent .cargo {
  padding: 10px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  margin-bottom: 20px
}

.BasketDetail:after {
  clear: both;
  display: table;
  content: ""
}

.BasketAccount {
  width: 100%;
  margin: 0;
  padding: 0
}

.BasketAccountContainer {
  width: 28%;
  float: right;
  position: relative
}

.BasketRigth {
  margin-top: 20px;
  margin-bottom: 20px
}

.BasketRigth.BasketHediyeCeki {
  background-color: #ddd;
  border-color: #d0d0d0
}

.BasketDetailContainer {
  width: 70.5%;
  position: relative;
  float: left
}

.Basketstep.step1 {
  width: 76%
}

.sepetimBody .Basketstep .sepetListTittle {
  display: none
}

.Basketstep ul li div span.tittleSpan {
  font-size: 18px
}

.adresGeriBtn {
  display: none
}

.Basketstep ul:after {
  clear: both;
  display: table;
  content: ""
}

.Basketstep ul li {
  width: 49%;
  margin: 0;
  padding: 15px;
  background: #fff;
  float: left;
  position: relative;
  text-align: center;
  min-height: 96px
}

.Basketstep ul li.aktif {
  background-color: #9c9c9c;
  color: #fff
}

.Basketstep ul li.aktif:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 100%;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #9c9c9c;
  clear: both
}

.Basketstep ul li.aktif .step_1 i {
  color: #fff
}

.Basketstep ul li.aktif .step_2 div {
  color: #fff
}

.Basketstep ul li.aktif .step_2 span {
  color: #fff
}

.Basketstep ul li:last-child {
  float: right
}

.Basketstep ul li .stepContent {
  display: block
}

.Basketstep ul li .stepContent:after {
  clear: both;
  display: table;
  content: ""
}

.Basketstep ul li .step_1 {
  display: block;
  text-align: left;
  margin-right: 20px;
  margin-bottom: 10px
}

.Basketstep ul li .step_1 i {
  font-size: 20px;
  color: #7d7d7d;
  margin-right: 10px
}

.Basketstep ul li .step_2 {
  display: block;
  text-align: left
}

.Basketstep ul li .step_2 div {
  font-weight: 400;
  font-size: 22px;
  color: #7d7d7d
}

.Basketstep ul li .step_2 span {
  font-size: 14px
}

.sepetDuzenleBtn {
  display: none
}

.sepetListTittle > div.sepetListTittleB {
  float: left;
  line-height: 24px;
  font-weight: 600
}

.Basketstep {
  margin-bottom: 15px;
  padding-left: 0;
  padding-right: 0
}

.sepetListTittle > div.sepetListTittleB.sepetListTittleB0 {
  font-size: 18px;
  line-height: 22px
}

.Basketstep .sepetListTittleB0 i {
  margin-right: 10px
}

.sepetListTittle .sepetListTittleB {
  height: auto;
  padding: 0;
  margin: 0;
  color: #000;
  text-transform: none
}

.sepetListTittle .sepetListTittleB0, .sepetListTittle .sepetListTittleB1 {
  border-left: 0
}

.sepetListTittleB0, .sepetItemB0 {
  width: 20%
}

.sepetListTittleB1 {
  width: 22%
}

.sepetItemB1 {
  width: 34%
}

.sepetItemB1 a {
  font-size: 13px;
  line-height: 20px;
  display: block;
  color: #000
}

.sepetItemB1 span {
  display: block;
  line-height: 20px;
  font-size: 12px
}

.sepetItemB1 span.KampanyaTanimSpan {
  display: inline-block
}

.sepetItemB1 span.UrunKisiselNot i {
  display: block
}

.sepetItemB1 span.UrunKisiselNot.SepetKampanyaTanim i {
  display: inline-block
}

.sepetItemB1 span strong {
  font-weight: 600
}

.sepetListTittleB2 {
  width: 15%;
  text-align: center
}

.sepetItemB2 {
  width: 15%;
  text-align: center;
  padding: 26px 0
}

.sepetItemPriceContent {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%
}

.sepetListTittleB3 {
  width: 15%;
  text-align: center
}

.sepetItemB3 {
  flex: 1;
  text-align: center
}

.sepetItemB3 .sepetItemB3_1 {
  font-size: 13px;
  text-decoration: line-through;
  display: block;
  line-height: 20px
}

.sepetItemB3 .sepetItemB3_2 {
  font-size: 18px;
  display: block;
  line-height: 24px
}

.sepetListTittleB4, .sepetItemB4 {
  width: 15%;
  text-align: center
}

.sepetItemB4 {
  flex: 1;
  text-align: center;
  padding: 37px 0;
  color: #fd7175;
  font-size: 18px;
  line-height: 24px
}

.sepetItemB4 .sepetItemB4_1 {
  font-size: 13px;
  text-decoration: line-through;
  display: block;
  line-height: 20px
}

.sepetItemBIndirimsiz.sepetItemB4 {
  color: #000
}

.sepetListTittleB5, .sepetItemB5 {
  width: 1%;
  text-align: center
}

.sepetListTittle::after {
  clear: both;
  display: table;
  content: ""
}

.sepetItem {
  background-color: #fff;
  border: 1px solid #f0f0f0;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  position: relative
}

.sepetItem:last-child {
  margin-bottom: 0
}

.sepetAdetTipi1 .AdetGuncelle {
  display: none
}

.sepetItem:after {
  clear: both;
  display: table;
  content: ""
}

.sepetItem > div {
  float: left
}

.sepetItem .favori {
  position: static
}

.sepetItem .favori a {
  font-family: unset !important
}

.sepetItem .favori a:after {
  display: none
}

.sepetTitle {
  margin-bottom: 17px;
  padding: 0;
  border: 0;
  height: auto;
  font-weight: 600
}

.sepetTitle .st_1 {
  font-size: 16px;
  color: #000;
  line-height: 22px
}

.sepetTitle .st_1:before {
  color: #000;
  content: "\f07a";
  display: inline-block;
  font: normal normal normal 16px/1 FontAwesome;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 5px
}

.sepetTitle .st_1:after {
  clear: both;
  display: block;
  content: ""
}

.sepetTitle .st_2 {
  font-size: 13px;
  color: #000;
  margin-top: 2px;
  display: block
}

.sepetItem div.sepetItemB0 {
  height: 100px;
  width: 70px;
  overflow: hidden;
  padding: 0;
  margin-right: 20px;
  border: 0
}

.sepetImg {
  max-height: 100px;
  max-width: 100%
}

.textbox.txtSepetAdet {
  height: 30px;
  line-height: 30px;
  width: 60px;
  float: none;
  display: inline-block;
  margin: 0;
  padding: 0;
  text-align: center;
  box-shadow: none;
  border: 1px solid #e5e5e5;
  border-radius: 0
}

.AdetGuncelle {
  margin: 4px 0 0;
  display: block;
  padding: 0;
  line-height: normal;
  font-weight: 400;
  color: #b5b5b5;
  font-size: 11px
}

.BasketDetail table tbody tr td.sepetFiyatBold {
  text-align: center;
  font-size: 15px;
  color: #000;
  font-weight: 500
}

.sepetItemB.sepetItemB5 {
  width: auto;
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px
}

.sepet-sil {
  font-size: 12px;
  color: #6c706d;
  cursor: pointer
}

.sepet-sil:before {
  content: "\f102";
  font-family: ticimax-font !important;
  font-style: normal;
  font-weight: 400 !important;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.alisverisedevamet {
  color: #8d8e8f;
  font-weight: 500;
  background-color: #fff;
  display: block;
  padding: 12px 22px;
  border-radius: 3px;
  border: 1px solid #f0f0f0;
  text-align: center;
  transition: .3s
}

.sepett .alisverisedevamet {
  float: right;
  margin-bottom: 15px
}

.alisverisedevamet:after {
  clear: both;
  display: table;
  content: ""
}

.alisverisedevamet:hover {
  background: none #fc5f5e;
  color: #fff;
  border: 1px solid #fc5f5e
}

.sepetListAlt:after {
  clear: both;
  display: table;
  content: ""
}

.sepetiTemizle {
  float: right;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  color: #b9b9b9;
  font-size: 12px;
  text-decoration: underline;
  line-height: 30px;
  border-radius: 0
}

.sepetiTemizle:hover {
  color: #fc5f5e
}

.sepetTitle2 {
  padding: 0;
  border: 0;
  height: auto;
  font-weight: 400;
  text-align: left;
  line-height: normal
}

.sepetTitle2:after {
  clear: both;
  display: table;
  content: ""
}

.sepetTitle2 .st_1 {
  font-size: 16px;
  color: #000
}

.sepetTitle2 a {
  float: right;
  margin-top: 5px
}

.sepetTitle2 a:hover {
  color: #fc5f5e
}

.BasketRigth.loadingList {
  background: url(/Scripts/images/Loading_icon.gif) no-repeat center center #fff;
  background-size: 150px auto
}

.BasketRigth.loadingList li {
  opacity: 0
}

.BasketRigth ul {
}

.BasketRigth ul li {
  text-align: left;
  border: 0
}

.BasketRigth ul li:after {
  clear: both;
  display: table;
  content: ""
}

.BasketRigth ul li.genelToplam {
  height: auto;
  font-weight: 800;
  font-size: 14px
}

.BasketRigth ul li span {
  float: left;
  font-size: 12px;
  line-height: 20px
}

.BasketRigth ul li .tut {
  float: right
}

.BasketRigth ul li.genelToplam .tut {
  color: #fc5f5e;
  font-size: 13px;
  font-weight: 800
}

.basketCompleteContent div {
  white-space: normal
}

.divMinSiparisTutariUyari {
  display: block;
  cursor: default;
  font-size: 12px;
  margin-top: 5px;
  background-color: red
}

.sepetimBody .basketCompletebtn {
  background: none #fc5f5e;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  float: none;
  width: auto;
  height: auto;
  display: block;
  border-radius: 3px;
  line-height: 28px;
  font-size: 16px;
  border: 0;
  font-weight: 400;
  padding: 5px 0
}

.button.basketCompletebtn:hover {
  background-color: #000;
  color: #fff;
  border: 0
}

.KasaOnuFirsatlar {
  width: 100%
}

.SepetKampanyaTittle {
  margin: 0 0 17px;
  padding: 0;
  border: 0;
  height: auto;
  font-weight: 400;
  text-align: left;
  line-height: 22px;
  color: #000;
  font-size: 16px
}

.SepetKampanyaTittle:before {
  color: #000;
  content: "\f005";
  display: inline-block;
  font: normal normal normal 16px/1 FontAwesome !important;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 5px
}

.KasaOnuFirsatlarContent {
  width: 100%
}

.KasaOnuFirsatlarContent:after {
  clear: both;
  display: block;
  content: ""
}

.KasaOnuFirsatlarContent ul {
}

.KasaOnuFirsatlarContent ul:after {
  clear: both;
  display: block;
  content: ""
}

.KasaOnuFirsatlarContent ul li {
  position: relative
}

.KasaOnuFirsatlarContent ul li a {
  max-width: 100%;
  display: block;
  border: 0;
  height: auto;
  margin-top: 0
}

.KasaOnuFirsatlarContent ul li .indirimOrani {
  position: absolute;
  right: 0;
  top: 0;
  background: #000;
  color: #fff;
  padding: 4px;
  left: auto !important;
  width: auto
}

.KasaOnuFirsatlarContent ul li a + span {
  height: 30px;
  overflow: hidden;
  display: block;
  margin-top: 5px
}

.KasaOnuFirsatlarContent ul li a + span + span {
  display: block
}

.KasaOnuFirsatlarContent ul li .uzereniCiz {
  text-decoration: line-through;
  margin-bottom: 5px;
  display: block
}

.favoriUrunlerSlider ul li {
  width: 100%;
  float: none
}

.favoriUrunlerSlider ul li .TukendiIco {
  height: auto;
  bottom: auto;
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px
}

.favoriUrunlerSlider ul li .productImage span {
  width: auto;
  height: auto
}

.favoriUrunlerSlider ul li .productImage {
  padding: 0
}

.productImage span {
  width: 100%;
  height: 250px;
  display: block
}

.KasaOnuFirsatlarContent ul li a img {
  max-width: 100%;
  max-height: 100%
}

.KasaOnuFirsatlarContent ul li .kasaOnuUrunAdiDiv {
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
  overflow: hidden;
  overflow: hidden;
  padding: 0 5px
}

.KasaOnuFirsatlarContent ul li .kasaOnuPriceDiv {
  font-size: 12px;
  color: #000;
  margin-bottom: 10px
}

.KasaOnuFirsatlarContent ul li .kasaOnuPriceDiv span {
  line-height: 13px;
  overflow: hidden;
  float: none;
  min-height: inherit;
  height: auto;
  max-height: inherit;
  text-align: center;
  display: inline-block;
  text-overflow: ellipsis;
  text-align: center;
  white-space: pre;
  width: 100%
}

.KasaOnuFirsatlarContent ul li a.button {
  width: auto;
  height: auto;
  background: #fff;
  color: #000;
  border: 1px solid #efefef;
  line-height: normal;
  padding: 5px 10px;
  display: block;
  font-size: 12px;
  margin-bottom: 5px !important;
  margin-top: 5px;
  border-radius: 3px;
  text-align: center
}

.KasaOnuFirsatlarContent ul li a.button:hover {
  background: #f3f3f3;
  color: #000;
  border: 1px solid #f3f3f3
}

.kasaOnuUrunSecenek {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
  padding: 5px
}

.kasaOnuUrunSecenek a {
  font-size: 12px;
  display: block;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 5px;
  padding: 3px
}

.kasaOnuUrunSecenek a:hover {
  background-color: #ddd
}

#divSecilemezKampanyalar {
  clear: both;
  display: block;
  content: ""
}

#divSecilebilirHediyeUrun .hediyeUrunSecenek {
  position: absolute;
  z-index: 9;
  background: rgba(53, 31, 31, .21);
  font-size: 10px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0
}

#divSecilebilirHediyeUrun .hediyeUrunSecenek a {
  font-size: 12px;
  border: 1px solid #a0a0a0;
  padding: 5px;
  margin: 2px;
  border-radius: 3px;
  display: inline-block;
  background: #fff;
  font-weight: 600
}

#divSecilebilirHediyeUrun .hediyeUrunSecenek a:hover {
  background-color: #ddd
}

.SeciliHediyeUrunler span {
  font-size: 16px;
  background-color: #36c741;
  padding: 15px 10px;
  margin-bottom: 10px;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  display: block
}

.SeciliHediyeUrunler span:before {
  color: #fff;
  content: "\f00c";
  display: inline-block;
  font: normal normal normal 12px/1 FontAwesome !important;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 5px
}

.hediyeUrunBilgilendirme {
  font-size: 14px
}

.hediyeUrunSepeteEkle {
  color: #fff;
  border: 1px solid;
  border-radius: 5px;
  padding: 14px 48px;
  line-height: normal;
  background: #000;
  display: inline-block;
  margin-bottom: 10px
}

.hediyeUrunSepeteEkle:hover {
  color: #fff
}

.ozelFirsatUrunler {
  float: left;
  clear: both;
  width: 100%
}

.ozelFirsatUrun {
  width: 100%;
  border-bottom: 1px solid #e5e5e5
}

.ozelFirsatUrunResim {
  width: 70px;
  margin-right: 20px;
  height: 100px
}

.ozelFirsatUrunResim img {
  max-height: 100px;
  max-width: 100%
}

.ozelFirsatUrunAdi {
  width: 34%;
  padding-top: 40px
}

.ozelFirsatUrunAdet {
  width: 15%;
  padding-top: 40px
}

.ozelFirsatUrunIndirim {
  padding-top: 40px;
  width: calc(48% - 70px)
}

.ozelFirsatUrunler div {
  float: left;
  font-size: 13px
}

.campaignsItem {
  display: block;
  width: 100%;
  padding: 0;
  border-bottom: 1px solid #e5e5e5;
  margin: 0 0 10px;
  padding-bottom: 15px
}

.campaignsItem:after {
  clear: both;
  display: table;
  content: ""
}

.campaignsItemS1, .campaignsItemS2, .campaignsItemS3 {
  float: left;
  color: #000;
  font-weight: 500
}

.campaignsItemS1 {
  text-align: left;
  line-height: normal;
  float: left;
  padding: 0;
  font-size: 13px;
  color: #000;
  line-height: 30px;
  cursor: pointer
}

.campaignsItemS1 i {
  margin-right: 10px
}

.campaignsItemS2 {
  text-align: center
}

.campaignsItemS2 img {
  max-height: 40px;
  vertical-align: middle
}

.campaignsItemS3 {
  float: right
}

.campaignsItemS3 a {
  width: 150px;
  height: 25px;
  color: #a0a0a0;
  border-radius: 3px;
  background: #fff;
  font-weight: 400;
  border: 1px solid #e5e5e5;
  display: inline-block;
  margin-top: 0;
  text-align: center;
  line-height: 25px
}

.campaignsItemS3 a:hover {
  background: none repeat scroll 0 0 #fff !important;
  color: #000;
  border: 1px solid #000
}

.sepetHistoryProductItems .sepetItemB3 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%)
}

.KasaOnuFirsatlarContent ul li .spanUrunSecenek {
  position: absolute;
  z-index: 9;
  background: rgba(53, 31, 31, .21);
  font-size: 10px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0
}

.KasaOnuFirsatlarContent ul li .spanUrunSecenek a {
  font-size: 12px;
  border: 1px solid #a0a0a0;
  padding: 5px;
  margin: 2px;
  border-radius: 3px;
  display: inline-block;
  background: #fff;
  font-weight: 600
}

.HediyeContentContainer {
  margin-bottom: 0
}

.teslimatAdresContent:after, .kargoSecimContent:after, .TeslimatTarihContainer:after, .SiparisNotuContent:after, .HediyeContentContainer:after {
  clear: both;
  display: table;
  content: ""
}

.teslimatAdresContent .sepetTitle .st_1:before {
  content: "\f041"
}

.teslimatAdresContent .sepetTitle:after {
  clear: both;
  display: table;
  content: ""
}

.teslimatAdresContent .sepetTitle .st_1 {
  float: left
}

.faturaAdresBtn, .adresAyniBtn {
  float: right;
  font-size: 13px;
  color: #a5a5a5;
  line-height: 22px
}

.faturaAdresBtn i, .adresAyniBtn i {
  margin-right: 10px;
  font-size: 16px
}

.faturaAdresBtn.active, .adresAyniBtn.active {
  color: #fc5f5e;
  position: absolute;
  right: 20px
}

.faturaAdresBtn:hover, .adresAyniBtn:hover {
  color: #fc5f5e
}

.AdresLine:after {
  clear: both;
  display: block;
  content: ""
}

.buKoliContent img {
  float: left
}

.buKoliContent strong {
  float: left;
  font-weight: 600;
  margin-top: 0;
  margin-left: 10px
}

a.YeniAdresEkle {
  width: 100%;
  display: block;
  height: 100%;
  background-color: #f2f2f2;
  text-align: center;
  vertical-align: middle;
  padding: 23px 38px;
  margin-top: 22px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #a5a5a5;
  border-radius: 3px
}

a.YeniAdresEkle i {
  display: block
}

a.YeniAdresEkle:hover {
  background-color: #fc5f5e;
  color: #fff;
  border-color: #fc5f5e
}

.TeslimatAdresTittle {
  width: 100%;
  font-size: 17px;
  color: #fc5f5e;
  margin-bottom: 20px
}

#divKargoAdreslerim:after {
  clear: both;
  display: table;
  content: ""
}

.AdresItem {
  width: 100%;
  float: left
}

#divKargoAdreslerim, #divFaturaAdreslerim {
  margin-left: -10px;
  margin-right: -10px
}

.adresItemFloat {
  width: 25%;
  float: left;
  overflow: hidden;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px
}

.OrderAdresList.active .OrderAdresListFatura {
  display: block !important;
  float: right;
  width: 50%;
  padding-left: 10px
}

.OrderAdresList.active .OrderAdresListTeslimat {
  width: 50%;
  padding-right: 10px
}

.OrderAdresList.active .AdresItem .adresItemFloat {
  width: 50%
}

.OrderAdresList.active .OrderAdresListFatura .adresItemFloat {
  width: 50%
}

.OrderAdresList.active .AdresItem .adresItemFloat:nth-child(2n) {
  margin-right: 0
}

.OrderAdresList.active {
}

.adresItemFloat:nth-child(4n) {
  margin-bottom: 20px
}

.AdresItemSelected {
  background-color: #f2f2f2
}

.AdresItemLine {
  padding: 10px;
  border: solid 1px #e5e5e5;
  overflow: hidden;
  width: 100%;
  height: 90px;
  cursor: pointer
}

.AdresItemLine:hover {
  background-color: #f2f2f2
}

.AdresItemLine.active {
  background-color: #f2f2f2
}

.AdresItemLine label {
  width: 100%;
  display: block
}

.AdresItemLine label input {
  float: left
}

.AdresItemLine label span {
  float: left
}

.AdresItemLine .adresKargoSubDetay {
  float: left;
  line-height: 16px;
  color: #000;
  font-size: 11px
}

.AdresItemLine .adresKargoSubDetay span {
  display: block
}

.AdresItemLine .adresFaturaSubDetay {
  float: left;
  line-height: 16px;
  color: #000;
  font-size: 11px
}

.AdresItemLine .adresFaturaSubDetay span {
  display: block
}

.AdresItemAlt {
  width: 100%;
  margin-bottom: 8px
}

.AdresItemAlt:after {
  clear: both;
  display: table;
  content: ""
}

.AdresItemAltLeft {
  float: left;
  line-height: 0;
  font-size: 13px;
  width: 80%
}

.AdresItemAltLeft label input {
  visibility: hidden;
  position: absolute
}

.AdresItemAltLeft label span {
  font-size: 13px;
  line-height: 13px;
  text-align: left;
  overflow: hidden;
  min-height: inherit;
  height: auto;
  max-height: inherit;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: pre;
  width: 100%
}

.AdresItemAltLeft label span.check:before {
  width: 12px;
  height: 12px;
  display: inline-block;
  content: "";
  background: url(/Scripts/images/pasifMenu.png);
  margin-right: 8px;
  float: left
}

.AdresItemAlt.AdresItemSelected {
  background: 0 0
}

.AdresItemAlt.AdresItemSelected .AdresItemAltLeft label span.check:before {
  background: url(/Scripts/images/AdresactiveMenu.png) transparent
}

.AdresItemAlt.AdresItemSelected .AdresItemAltLeft label span.check {
  color: #fc5f5e;
  font-weight: 500
}

.AdresItemAltRight {
  float: right
}

.AdresItemAlt a {
  color: #b4b4b4;
  font-size: 12px
}

.AdresItemAlt a:hover {
  color: #fc5f5e
}

.BasketDetail .adresDuzenlemeTutucu .sagIcerikTutucu {
  padding: 0;
  margin: 0
}

.BasketDetail .adresGir {
  padding: 0
}

.BasketDetail .icerikIkiliBlok {
  padding: 0
}

.BasketDetail .adresDuzenlemeTutucu input {
  border-radius: 0;
  box-shadow: none;
  border: 1px #e5e5e5 solid
}

.BasketDetail .adresDuzenlemeTutucu select {
  border-radius: 0;
  box-shadow: none;
  border: 1px #e5e5e5 solid
}

.BasketDetail .adresDuzenlemeTutucu textarea {
  border-radius: 0;
  box-shadow: none;
  border-color: #e5e5e5
}

.BasketDetailMagazaBtnGrup:after {
  clear: both;
  display: table;
  content: ""
}

.BasketDetailMagaza .magazaTeslimBtn, .BasketDetailMagaza .adresTeslimBtn {
  float: left;
  font-size: 16px;
  color: #1c1c1c;
  line-height: 28px;
  margin-right: 40px
}

.BasketDetailMagaza .magazaTeslimBtn i, .BasketDetailMagaza .adresTeslimBtn i {
  margin-right: 10px;
  font-size: 30px;
  float: left
}

.BasketDetailMagaza .magazaTeslimBtn.active i:before, .BasketDetailMagaza .adresTeslimBtn.active i:before {
  content: "\f046"
}

.SepetMagazalarListContent {
  display: none
}

.SepetMagazalarList {
  display: block;
  min-width: 375px;
  max-width: 100%;
  clear: left;
  margin: 20px 0 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  -moz-flex-direction: row;
  -o-flex-direction: row;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between
}

.SepetMagazalarList select {
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  font-size: 13px;
  color: #1c1c1c;
  height: auto;
  margin-bottom: 10px;
  margin-right: 10px
}

.SepetMagazalarList.select2 select {
  width: calc(100% / 2)
}

.SepetMagazalarList.select3 select {
  width: calc(100% / 3)
}

.SepetMagazalarList.select4 select {
  width: calc(100% / 4)
}

.SepetMagazalarList select:last-child {
  margin-right: 0
}

.sepetimBody .BasketDetailContainer .SepetMagazaAdres {
}

.sepetimBody .BasketDetailContainer .SepetMagazaAdres h5 {
  font-size: 14px;
  font-weight: 400
}

.magazaSecTittle {
  font-weight: 600;
  padding: 5px 0 10px;
  display: block;
  float: none;
  width: 100%;
  font-size: 14px;
  color: #fc5f5e
}

.magazaSecTittle:after {
  clear: both;
  display: table;
  content: ""
}

.magazaSecSol {
  margin-bottom: 30px
}

.magazaSecSol ul {
  max-height: 170px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 20px
}

.magazaSecSol ul::-webkit-scrollbar {
  width: 5px
}

.magazaSecSol ul::-webkit-scrollbar-track {
  background: #efefef;
  border-radius: 5px
}

.magazaSecSol ul::-webkit-scrollbar-thumb {
  background: #242b31;
  border-radius: 5px
}

.magazaSecSol ul li {
  padding: 15px;
  color: #1c1c1c;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px solid #f5f5f5
}

.magazaSecSol ul li:after {
  clear: both;
  display: table;
  content: ""
}

.magazaSecSol ul li i {
  color: #000;
  font-weight: 300;
  font-size: 18px;
  float: left;
  margin-top: 6px;
  margin-right: 5px
}

.magazaSecSol ul li span {
  color: #1c1c1c;
  font-weight: 700;
  font-size: 13px;
  float: left;
  margin-top: 8px;
  font-weight: 400
}

.magazaSecSol ul li a {
  background-color: #7d7d7d;
  padding: 8px;
  color: #fff;
  border-radius: 2px;
  float: right;
  font-weight: 400;
  font-size: 13px
}

.magazaSecSol ul li:hover {
  background-color: #f5f5f5
}

.magazaSecSol ul li:hover span {
  color: #000
}

.magazaSecSol ul li:hover a {
  background-color: #000;
  color: #fff
}

.magazaSecSol ul li.selected {
  background-color: #f5f5f5
}

.magazaSecSol ul li.selected span {
  color: #000
}

.magazaSecSol ul li.selected a {
  background-color: #000;
  color: #fff
}

#magazaSecSag {
  padding: 15px;
  width: 420px
}

#magazaSecSag ul li:after {
  clear: both;
  display: table;
  content: ""
}

#magazaSecSag ul li {
  float: left;
  padding: 0;
  margin-bottom: 15px
}

#magazaSecSag ul li span:first-child {
  font-weight: 600;
  color: #000;
  display: block;
  margin-right: 10px;
  margin-bottom: 10px
}

#magazaSecSag ul li span:last-child {
  font-weight: 400;
  color: #000;
  display: block;
  margin-right: 10px;
  font-size: 14px
}

#magazaSecSag a {
  display: block;
  clear: left;
  background-color: #000;
  text-align: center;
  margin: 0 !important;
  padding: 10px 12px;
  color: #fff;
  font-weight: 300 !important;
  text-decoration: none !important;
  font-size: 14px !important
}

.kargoSecimContent .sepetTitle .st_1:before {
  content: "\f0d1"
}

.cargoInformation {
  cursor: pointer;
  width: 100%;
  padding: 20px;
  border: solid 1px #e5e5e5;
  overflow: hidden;
  margin-bottom: 20px
}

.cargoInformation.disabled {
  opacity: .4
}

.cargoInformation:hover {
  border-color: #3e3e3e
}

.cargoInformation.selected {
  border-color: #e5e5e5;
  background: #f2f2f2
}

.cargoInformation:last-child {
  margin-bottom: 0
}

.cargoInformation.active {
  background-color: #ddd
}

.cargoInformation div {
  float: left;
  font-size: 14px
}

.cargoInformation div.cargoInput {
  width: 3%
}

.cargoInformation div.cargoInput input {
  margin-top: 5px;
  min-height: 0
}

.cargoInformation div.cargoName {
  width: 30%;
  color: #fc5f5e;
  font-size: 17px;
  font-weight: 400
}

.cargoInformation div.cargoName span {
  display: block;
  width: 100%;
  font-size: 13px;
  color: #fd7175
}

.cargoInformation div.cargotext {
  width: 67%;
  color: #a5a5a5;
  font-size: 13px;
  line-height: 18px
}

.cargoInformation div.cargotext span {
  color: #a5a5a5;
  margin-right: 5px;
  font-size: 13px;
  line-height: 18px
}

#ctl00_mainHolder_rdpTeslimatTarihi_dateInput {
  border: solid 1px #e5e5e5 !important;
  margin-bottom: 10px;
  border-radius: 0;
  box-shadow: none
}

.RadPicker td {
  vertical-align: top !important
}

#mainHolder_ddlTeslimaSaati {
  padding: 5px !important;
  border: solid 1px #e5e5e5 !important;
  height: 32px !important
}

.TeslimatTarihContainer .sepetTitle .st_1:before {
  content: "\f073"
}

.SiparisNotuContainer:after {
  clear: both;
  display: table;
  content: ""
}

.siparisUrunUyari.active {
  width: 50%;
  float: left
}

.SiparisNotuLine.active {
  width: 50%;
  float: left
}

.siparisUrunUyariBaslik {
  margin-bottom: 15px
}

.siparisUrunUyariBaslik:after {
  clear: both;
  display: table;
  content: ""
}

.siparisUrunUyariBaslik .col-1 {
  width: 5%;
  float: left;
  margin-right: 15px
}

.siparisUrunUyariBaslik .col-2 {
  width: 90%;
  max-width: 90%;
  float: left;
  line-height: 16px;
  font-size: 13px
}

.siparisUrunUyariBaslik i {
  font-size: 40px
}

.SiparisNotuContent .sepetTitle .st_1:before {
  content: "\f040"
}

.SiparisNotuContent textarea {
  border: solid 1px #e5e5e5;
  color: #000;
  padding: 10px;
  margin: 0;
  width: 100%;
  min-height: 150px;
  border-radius: 0;
  box-shadow: none;
  font: 12px/normal 'Roboto', sans-serif
}

.siparisUrunUyariSecenekler {
}

.siparisUrunUyariSecenekler:after {
  clear: both;
  display: table;
  content: ""
}

.siparisUrunUyariSecenek {
  display: block;
  width: 100%;
  float: left;
  margin-bottom: 8px
}

.siparisUrunUyariSecenek input[type=radio] {
  width: 20px;
  float: left
}

.siparisUrunUyariSecenek label {
  float: left;
  width: 90%
}

.siparisUrunUyariSecenek .siparisUrunDurumBaslik {
  display: block;
  font-weight: 500;
  color: #fd7175;
  margin-bottom: 2px
}

.siparisUrunUyariSecenek .siparisUrunDurumAciklama {
  display: block
}

.HediyeContentContainer .sepetTitle .st_1:before {
  content: "\f06b"
}

.HediyeContent textarea {
  border: solid 1px #e5e5e5;
  color: #000;
  padding: 10px;
  width: 100%;
  min-height: 150px;
  border-radius: 0;
  box-shadow: none;
  font: 12px/normal 'Roboto', sans-serif;
  margin: 0
}

#divUrunListesi.UrunContent {
  display: none
}

.UrunContent:after {
  clear: both;
  display: table;
  content: ""
}

#divUrunListesi.UrunContent.active {
  display: block
}

.UrunItem {
  display: block;
  padding: 0;
  margin: 0 0 20px;
  float: left;
  width: 100%
}

.UrunItemImg {
  width: 25%;
  margin-right: 8px;
  height: 70px;
  overflow: hidden;
  float: left;
  text-align: center
}

.UrunItemImg img {
  max-width: 100%;
  max-height: 70px
}

.UrunItemSag {
  width: 71%;
  float: right
}

.UrunItemSag div {
  color: #000;
  padding: 0;
  font-size: 12px;
  display: block;
  width: auto;
  text-align: left;
  line-height: 16px
}

.carpma {
  font-weight: 700;
  margin: 0 3px;
  display: inline-block;
  float: left;
  font-size: 11px;
  line-height: 18px
}

.Odeme-RightLine.hediyeCekiBtnContent {
  border-top: 0
}

.Odeme-RightLine {
  text-align: left;
  padding: 0
}

.Odeme-RightLine:after {
  clear: both;
  display: block;
  content: ""
}

.Odeme-RightLine div.Left {
  line-height: 20px;
  font-size: 12px;
  color: #000;
  float: left
}

.Odeme-RightLine div.Right {
  line-height: 20px;
  font-size: 12px;
  color: #000;
  float: right
}

.Odeme-RightLine.siparisOzet {
  height: auto !important;
  border-top: 0;
  border-bottom: 0;
  cursor: pointer
}

#divToplamOdeme {
  color: #fc5f5e;
  font-size: 13px;
  font-weight: 800
}

#tblKargolar .cargo {
  margin-bottom: 20px
}

.cargoProduct {
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 20px
}

.cargoProduct:after {
  clear: both;
  display: table;
  content: ""
}

.cargoProductImg {
  height: 100px;
  width: 70px;
  overflow: hidden;
  padding: 0;
  margin-right: 20px;
  float: left
}

.cargoProductImg img {
  max-width: 100%;
  max-height: 100%
}

.cargoProductBrand {
}

.cargoProductName {
  width: 34%;
  float: left
}

.cargoProductName span {
  display: block
}

.cargoProductQty {
  width: 34%;
  float: left
}

.cargoProductPrice {
  width: 15%;
  text-align: center;
  padding: 0 0;
  float: right
}

.cargoProductPrice span {
  font-size: 18px;
  display: block;
  line-height: 24px
}

.cargoOptions {
  margin-bottom: 10px
}

.cargoDate .hasDatepicker {
  padding: 10px;
  border: 1px solid #e5e5e5
}

.cargoDate .ilceKargoGonderimSaatleri {
  padding: 5px 0;
  font-size: 16px;
  font-weight: 500
}

.sepetimBody .ui-widget-header {
  background-color: #e5e5e5 !important
}

.sepetimBody .ui-widget-content {
  border-radius: 0;
  margin-top: 10px;
  border: 1px solid #e5e5e5
}

.sepetimBody .ui-state-default, .sepetimBody .ui-widget-content .ui-state-default, .sepetimBody .ui-widget-header .ui-state-default {
  width: 28px !important;
  height: 20px !important;
  background-color: #e5e5e5 !important;
  text-align: center !important
}

.sepetimBody .ui-state-default.ui-state-active, .sepetimBody .ui-widget-content .ui-state-default.ui-state-active, .sepetimBody .ui-widget-header .ui-state-default.ui-state-active {
  background-color: #000 !important;
  text-align: center !important;
  color: #fff !important
}

.sepetimBody .ui-state-default:hover, .sepetimBody .ui-widget-content .ui-state-default:hover, .sepetimBody .ui-widget-header .ui-state-default:hover {
  background-color: #000 !important;
  text-align: center !important;
  color: #fff !important
}

.ilceKargoGonderimSaatleri {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  -moz-flex-direction: row;
  -o-flex-direction: row;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between
}

.ilceKargoGonderimSaatleri[kargo-tip="1"] {
  overflow-x: auto
}

.ilceKargoGonderimSaatleri .sutun {
}

.ilceKargoGonderimSaatleri .baslik {
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  background-color: #b5b5b5;
  border: 0;
  width: 113px;
  padding: 10px 20px;
  text-align: center;
  line-height: 16px;
  border: 1px solid #ebebeb;
  margin-bottom: -1px
}

.ilceKargoGonderimSaatleri .satir {
  font-size: 12px;
  margin-top: 10px;
  border: 1px solid #ebebeb;
  margin: 0;
  margin-right: -1px;
  margin-bottom: -1px;
  height: 50px;
  display: block;
  font-size: 12px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center
}

.ilceKargoGonderimSaatleri .satir.active {
  background-color: #fb3c3c;
  color: #fff
}

.ilceKargoGonderimSaatleri .satir.passive {
  opacity: .5;
  color: #ccc;
  cursor: default
}

.KargoIlaveBedel {
  display: block;
  line-height: normal;
  margin-top: 4px;
  margin-left: 15px
}

.ilceKargoGonderimSaatleri .satir input {
  width: 12px;
  height: 12px;
  min-width: 12px;
  line-height: normal;
  margin-right: 5px
}

.pasifSatir {
  opacity: .4;
  filter: alpha(opacity=40)
}

.teslimatSaatiContent {
  width: 100%;
  margin: 0 auto;
  display: block
}

.teslimatSaatiRow {
  flex-wrap: wrap;
  display: flex
}

.teslimatSaatiHeader .teslimatSaatiCol {
  width: 14.285714%;
  cursor: pointer
}

.teslimatSaatiHeader .teslimatSaatiCol.selected span.baslik {
  background-color: red;
  color: #fff
}

.teslimatSaatiHeader .teslimatSaatiCol.selected.active span.baslik {
  border: 1px solid #000;
  color: #fff
}

.teslimatSaatiHeader .teslimatSaatiCol.active span.baslik {
  border: 1px solid red;
  color: red
}

.teslimatSaatiHeader .teslimatSaatiCol span.baslik {
  width: auto;
  color: #727272;
  font-weight: 500;
  font-size: 13px;
  background-color: #fff;
  padding: 10px 20px;
  text-align: center;
  line-height: 16px;
  border: 1px solid #e8e8e8;
  margin-bottom: -1px
}

.teslimatSaatiHeader .teslimatSaatiCol span {
  display: block
}

.teslimatSaatiTabContent {
  margin-top: 15px
}

.teslimatSaatiTabRow .satir {
  background-color: #fff;
  border: 0;
  border-bottom: 2px solid #ebebeb;
  text-align: left;
  padding: 0
}

.teslimatSaatiTabRow .satir:after {
  clear: both;
  display: table;
  content: ""
}

.teslimatSaatiTabRow .satir span {
  width: 49%;
  display: inline-block;
  padding: 0 10px
}

.teslimatSaatiTabRow .satir input {
  margin-left: 5px
}

.teslimatSaatiTabRow .satir span:first-child {
  font-weight: 600
}

.teslimatSaatiTabRow .satir span.pasif {
  color: #ccc
}

.teslimatSaatiTabRow .satir span:last-child {
  float: right;
  text-align: right
}

@media (max-width: 640px) {
  .teslimatSaatiHeader .teslimatSaatiCol span.baslik {
    padding: 10px 5px
  }
}

@media (max-width: 480px) {
  .teslimatSaatiHeader .teslimatSaatiCol span.baslik {
    padding: 10px 2px;
    font-size: 11px
  }
}

@media (max-width: 425px) {
  .teslimatSaatiHeader .teslimatSaatiCol span.baslik {
    padding: 5px 0;
    font-size: 9px
  }
}

.magazaTeslimatSaati {
}

.magazaTeslimatSaati .sutun {
  float: left;
  width: calc(100% / 7)
}

.magazaTeslimatSaati .baslik {
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  background-color: #b5b5b5;
  border: 0;
  padding: 10px 20px;
  text-align: center;
  line-height: 16px;
  border: 1px solid #ebebeb;
  margin-bottom: -1px
}

.magazaTeslimatSaati .satir {
  font-size: 12px;
  margin-top: 10px;
  border: 1px solid #ebebeb;
  margin: 0;
  margin-right: -1px;
  margin-bottom: -1px;
  height: 50px;
  display: block;
  font-size: 12px;
  color: #000;
  font-weight: 400;
  cursor: pointer;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center
}

.magazaTeslimatSaati .satir.active {
  background-color: #000;
  color: #fff
}

.magazaTeslimatSaati .satir.passive {
  opacity: .5;
  color: #ccc;
  cursor: default
}

.magazaTeslimatSaati .satir input {
  width: 12px;
  height: 12px;
  min-width: 12px;
  line-height: normal;
  margin-right: 5px
}

.odemeYap .sepetTitle {
  border-bottom: 1px solid #ddd;
  padding-bottom: 30px
}

.odemeYap .sepetTitle .st_1:before {
  content: "\f09d"
}

.odemeMenuContent {
  display: block
}

.OdemeMenuTittle {
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 22px
}

.OdemeMenuTittle.p strong {
  font-size: 16px;
  font-weight: 600
}

.odemeMenuContent:after {
  clear: both;
  display: block;
  content: ""
}

.OdemeMenu {
  width: 100%;
  float: left;
  z-index: 100
}

.Odeme-Left {
  padding: 0
}

.OdemeMenu ul {
  margin-left: -10px;
  margin-right: -10px
}

.OdemeMenu > ul > li {
  transition-duration: .2s, .2s;
  -webkit-transition-duration: .2s, .2s;
  background-color: #fff;
  padding: 0;
  float: left;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px
}

.OdemeMenu ul li .Left {
  margin-top: 20px
}

.OdemeMenu ul li#mainHolder_ucOdeme_liCariKrediOdeme a {
  font-size: 12px
}

.OdemeMenu ul li > a {
  display: block;
  transition-duration: .2s, .2s;
  -webkit-transition-duration: .2s, .2s;
  color: #a5a5a5;
  border-radius: 4px;
  font-size: 13px;
  padding: 17px 0;
  height: 50px;
  border: 1px solid #e5e5e5;
  font-weight: 500
}

.OdemeMenu ul li > a i {
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px 0 10px
}

.OdemeMenu ul li > a i:after {
  display: inline-block;
  font: normal normal normal 17px/1px FontAwesome !important;
  color: #000;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.OdemeMenu ul li#mainHolder_ucOdeme_liCariKrediOdeme > a i:after {
  content: "\f09d"
}

.OdemeMenu ul li#mainHolder_ucOdeme_liMenuKrediKarti > a i:after {
  content: "\f38a"
}

.OdemeMenu ul li#mainHolder_ucOdeme_liMenuHavale > a i:after {
  content: "\f0ac"
}

.OdemeMenu ul li#mainHolder_ucOdeme_liMenuKapidaOdeme > a i:after {
  content: "\f08b"
}

.OdemeMenu ul li#mainHolder_ucOdeme_liMenuBKMExpress > a i:after {
  content: "\f282"
}

.OdemeMenu ul li#mainHolder_ucOdeme_liMenuMobilOdeme > a i:after {
  content: "\f10b";
  font-size: 26px !important
}

.OdemeMenu ul li#mainHolder_ucOdeme_liMenuMailOrder > a i:after {
  content: "\f2b6"
}

#mainHolder_ucOdeme_liMenuGarantiPay i:after {
  display: none
}

#mainHolder_ucOdeme_liMenuGarantiPay i {
  width: 20px;
  height: 20px;
  background: url(https://cdn.ticimax.com/App_Themes/Default/images/garantiPayLiActive.png) no-repeat 0 0
}

#mainHolder_ucOdeme_liMenuPaypal i:after {
  display: none
}

#mainHolder_ucOdeme_liMenuPaypal i {
  width: 20px;
  height: 20px;
  background: url(https://cdn.ticimax.com/App_Themes/Default/images/payPalLiActive.png) no-repeat 0 center
}

.OdemeMenu ul li > a:before {
  display: inline-block;
  content: "";
  margin-top: 2px;
  float: left;
  width: 12px;
  height: 12px;
  background: url(/Scripts/images/PasifMenu.png) no-repeat center center;
  color: #d0d0d0;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 5px
}

.OdemeMenu ul li.activeMenu > a:before {
  background: url(/Scripts/images/activeMenu.png) no-repeat center center;
  color: #fc5f5e
}

.OdemeMenu ul li:hover > a:before {
  background: url(/Scripts/images/activeMenu.png) no-repeat center center;
  color: #fc5f5e
}

.OdemeMenu ul li#mainHolder_ucOdeme_liMenuPayCell > a i, .OdemeMenu ul li#mainHolder_ucOdeme_liMenuPayCellMobil > a i {
  background: url(https://cdn.ticimax.com/App_Themes/Default/images/paycellico.png) no-repeat 0 0;
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-top: -4px
}

#mainHolder_ucOdeme_liMenuMaximumMobil i {
  width: 29px;
  height: 27px;
  background: url(http://cdn.ticimax.com/App_Themes/Default/images/maximumMobil.png) no-repeat -1px -3px/100px;
  margin-top: -5px;
  margin-left: 0
}

#mainHolder_ucOdeme_divPayNet {
  text-align: center
}

#mainHolder_ucOdeme_divPayNet .paynetDecs {
  font-size: 14px;
  line-height: 20px
}

.OdemeMenu ul li#mainHolder_ucOdeme_liPayNet > a i:after {
  content: "\f283"
}

.paynetj-button {
  display: none
}

#mainHolder_ucOdeme_liMenuGarantiPay i:after {
  display: none
}

.OdemeMenu ul li.activeMenu > a {
  transition-duration: .2s, .2s;
  -webkit-transition-duration: .2s, .2s;
  background-color: #fc5f5e;
  border: 0;
  color: #fff
}

.OdemeMenu ul li.activeMenu > a i:after {
  color: #fff
}

.OdemeMenu ul li:hover > a i:after {
  color: #fff
}

.OdemeMenu ul li:hover > a {
  background-color: #fc5f5e;
  border-color: #fc5f5e;
  color: #fff
}

.OdemeMenu ul li > a > img {
  display: inline-block
}

#mainHolder_ucOdeme_divCariKrediOdeme ul li {
  padding: 0;
  margin-bottom: 8px;
  font-size: 13px;
  color: #000;
  line-height: 20px
}

.crediKartContainer:after {
  clear: both;
  display: table;
  content: ""
}

.CrediCardContent {
  position: relative;
  width: 50%;
  float: left
}

.CrediCardName, .CrediCardNo, .CrediCardDate, .CrediCardDate, .CrediCardSecure {
  width: 100%;
  margin-bottom: 10px
}

.CrediCardRow {
  margin-left: -3px;
  margin-right: -3px
}

.CrediCardCol {
  padding-left: 3px;
  padding-right: 3px;
  width: 33.3333%;
  float: left
}

.CrediCardDate.m_closable {
  width: 100%;
  float: left
}

.CrediCardSecure.m_closable {
  width: 100%;
  float: right
}

.CrediCardName:after, .CrediCardNo:after, .CrediCardDate:after, .CrediCardNameInput:after {
  clear: both;
  display: table;
  content: ""
}

.CrediCardNameLabel, .CrediCardNoLabel, .CrediCardDateLabel, .CrediCardSecureLabel {
  font-size: 13px;
  color: #000;
  font-weight: 600;
  line-height: 30px;
  height: 30px;
  overflow: hidden
}

#divKartKampanyaSecenek .CrediCardNameLabel {
  display: block;
  clear: both
}

.odemeBankaAdi select {
  width: 100%;
  border: solid 1px #ddd;
  border-radius: 0;
  box-shadow: none
}

#divOdemeSecenekleri:after {
  clear: both;
  display: table;
  content: ""
}

.odemeSecenekLine {
  width: 100% !important;
  float: left
}

.odemeSecenekLine:after {
  clear: both;
  display: table;
  content: ""
}

.seciliTaksit {
  color: #fc5f5e
}

.seciliTaksitValue {
  padding: 8px 0;
  display: block;
  color: #fc5f5e
}

.CrediCardNameInput select {
  width: 100%;
  float: left;
  border: solid 1px #e5e5e5;
  min-height: 40px;
  line-height: 40px
}

.CrediCardContent input[type=text] {
  width: 100%;
  border: solid 1px #e5e5e5;
  height: 40px;
  line-height: 40px;
  border-radius: 0;
  box-shadow: none;
  margin: 0
}

.CrediCardContent input[type=tel] {
  width: 100%;
  border: solid 1px #e5e5e5;
  height: 40px;
  line-height: 40px;
  border-radius: 0;
  box-shadow: none;
  margin: 0
}

.CrediCardContent input[type=text]:focus {
  border: solid 1px #000
}

.CrediCardNoInput input[type=tel] {
  width: 100%;
  margin-right: 15px;
  float: left
}

.CrediCardDateInput select {
  width: 100%;
  float: left;
  border: solid 1px #e5e5e5;
  height: 40px;
  line-height: 40px;
  border-radius: 0
}

.CrediCardDateInput select#ddlCCYil {
  width: 100%;
  border-radius: 0
}

.CrediCardSecureInput select {
  width: 48%;
  float: right;
  border: solid 1px #e5e5e5;
  height: 40px;
  line-height: 40px;
  border-radius: 0
}

#odemeTaksit {
  min-width: 300px;
  clear: both
}

.taksitSecenekBtn {
  background: #000;
  text-align: center;
  color: #fff;
  border: 1px solid #000;
  display: block;
  margin-top: 10px;
  padding: 4px 10px;
  line-height: 34px;
  font-size: 14px
}

.taksitSecenekBtn:hover {
  background: #fff;
  color: #000;
  border: 1px solid #e5e5e5
}

#divOdemeSecenekleri {
  background-color: #fff;
  border-bottom: solid 1px #e5e5e5
}

.divOdemeSecenekleriTittle {
  width: 100%;
  height: 30px;
  line-height: 30px
}

.divOdemeSecenekleriTittle div {
  width: 10%;
  float: left;
  height: 30px
}

.divOdemeSecenekleriTittle span {
  width: 33.3%;
  float: left;
  color: #000;
  border-right: 2px solid #fff;
  text-align: center;
  background-color: #f2f2f2
}

.odemeSecenekLine {
  width: 100%;
  height: 30px;
  line-height: 30px;
  position: relative
}

.odemeSecenekLine:nth-child(2n) {
  background-color: #ecf7f7
}

.odemeSecenekLine span {
  float: left;
  width: 33.3%;
  text-align: center
}

.odemeSecenekLine input {
  width: 10px;
  float: left;
  margin-top: 8px;
  min-height: 0;
  position: absolute;
  left: 0
}

.divComPay {
  text-align: center;
  float: left;
  width: 100%
}

.divComPay .divComPay-Img {
  float: left;
  width: 100%;
  text-align: left;
  padding: 0 10px;
  margin-bottom: 20px
}

.divComPay .divComPay-Text {
  font-size: 13px;
  color: #333;
  line-height: 20px;
  float: left;
  width: 100%
}

.divComPay .divComPay-Text ul {
  float: left;
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
  margin: 20px 0
}

.divComPay .divComPay-Text ul li {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  margin: 0 10px
}

.divComPay .divComPay-Text ul li img {
}

.divComPay .divComPay-Text ul li input {
  margin-right: 5px
}

.divComPay .divComPay-SubText {
  float: left;
  width: 100%;
  font-size: 11px;
  color: #888
}

#divCreditCart {
  float: right;
  width: 45%;
  z-index: 1;
  position: relative
}

#divCreditCart .divCreditCartSagUst {
  position: relative;
  height: 218px
}

#divCreditCart #front {
  background-position: 0 0;
  z-index: 2
}

#divCreditCart #front {
  background: url(/Scripts/images/divCreditCartFront.png) no-repeat;
  height: 200px;
  width: 318px;
  z-index: 1;
  position: absolute;
  transition: all 1s ease-out
}

#divCreditCart #back {
  background: url(/Scripts/images/divCreditCartBack.png) no-repeat;
  height: 200px;
  width: 318px;
  z-index: 1;
  position: absolute;
  transition: all 1s ease-out
}

#divCreditCart.creditCardFront #front {
  z-index: 2;
  top: 0;
  left: -24px
}

#divCreditCart.creditCardBack #front {
  z-index: 1;
  top: 15px;
  left: -24px
}

#divCreditCart .divCreditCartSagUst span {
  color: #898989;
  position: absolute;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: .5px;
  font-weight: 600;
  padding: 0 2px
}

#divCreditCart .divCreditCartSagUst span.cardLogo {
  top: 15px;
  right: 21px;
  z-index: 2
}

#divCreditCart .divCreditCartSagUst span.cardNo {
  top: 100px;
  left: 23px;
  z-index: 2
}

#divCreditCart .divCreditCartSagUst span.cardDate {
  top: 128px;
  left: 182px;
  z-index: 3;
  font-size: 15px
}

#divCreditCart .divCreditCartSagUst span > em {
  font-style: normal
}

#divCreditCart .divCreditCartSagUst span.cardName {
  top: 151px;
  left: 23px;
  z-index: 4;
  max-width: 155px;
  overflow: hidden;
  word-break: break-all;
  font-size: 15px
}

#divCreditCart .divCreditCartSagUst span.cardType {
  top: 151px;
  right: 21px;
  z-index: 2
}

#divCreditCart .cardCvc {
  font-size: 18px;
  top: 77px;
  left: 130px
}

#divCreditCart.creditCardFront #back {
  z-index: 1;
  top: 15px;
  left: -12px
}

#divCreditCart.creditCardBack #back {
  z-index: 2;
  top: 0;
  left: 0
}

#divCreditCart #back {
  top: 15px;
  left: 20px;
  z-index: 1
}

#divCreditCart .cardCvc {
  font-size: 18px;
  top: 88px;
  left: 137px
}

.highlight {
  color: #898989 !important;
  background-color: #f2ecd1
}

.HavaleLine {
  width: 100%;
  float: left;
  margin-bottom: 20px;
  padding: 10px 0;
  border: 1px solid #ddd;
  cursor: pointer
}

.aHavaleCompayUyari {
  padding-bottom: px;
  display: block;
  font-weight: 600;
  font-size: 14px;
  text-decoration: underline
}

.SiparisTamamlaLine .HavaleLine {
  width: 50%;
  margin: 0 auto 15px;
  float: none;
  clear: both
}

.HavaleLine:after {
  clear: both;
  display: table;
  content: ""
}

.HavaleLine:nth-child(2n) {
  background-color: #f2f2f2;
  overflow: hidden
}

.HavaleLine div {
  float: left
}

.HavaleLine .HavaleCheckContent {
  width: 20px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 10px
}

.HavaleLine .HavaleCheck {
  width: 20px;
  height: 20px;
  min-height: 0
}

.HavaleLine .HavaleImg {
  width: 25%;
  margin-right: 10px;
  text-align: center;
  margin-top: 10px
}

.HavaleLine .HavaleImg img {
  max-width: 100%
}

.HavaleLine .HavaleBnk {
  width: 62%
}

.KapidaOdemeTittle {
  font-size: 16px;
  margin-bottom: 10px
}

.KapidaOdemeLine {
  margin-bottom: 10px;
  padding: 5px 0
}

.KapidaOdemeLine:after {
  clear: both;
  display: table;
  content: ""
}

.KapidaOdemeInput {
  float: left;
  margin-right: 7px
}

.KapidaOdemeInput input {
  min-height: 0
}

.KapidaOdemeLabel {
  float: left;
  font-size: 13px;
  color: #000;
  line-height: normal
}

#mainHolder_ucOdeme_TextBox1 {
  width: 100%
}

.BkmExpressLogo {
  margin-bottom: 20px;
  text-align: center
}

.BkmExpressLogo img {
  max-width: 100%;
  width: 400px
}

.BkmExpressTittle {
  font-size: 14px;
  line-height: 20px
}

.bkmExpressBtn {
  background: url(/Scripts/images/bkmexpress.png) no-repeat left center;
  width: 300px;
  height: 60px;
  display: block;
  font-size: 0;
  margin-bottom: 10px
}

#hed {
  text-align: left;
  margin: 0;
  padding: 0
}

#hed * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box
}

#hed div {
  width: 100%;
  border: none;
  padding-bottom: 0;
  font-weight: 600
}

#hed div select {
  width: 100%;
  height: 30px;
  line-height: 30px;
  border: solid 1px #e5e5e5;
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  float: left;
  font-size: 12px;
  margin-top: 10px
}

.hediCekForm {
  display: block;
  margin-top: 10px;
  display: block;
  float: left;
  clear: both
}

.hediCekForm:after {
  clear: both;
  display: table;
  content: ""
}

#hed div.hediCekForm input {
  width: 68%;
  float: left;
  background-color: #f7f7f7;
  height: 30px;
  min-height: 30px;
  line-height: 30px;
  border-radius: 0;
  box-shadow: none;
  margin: 0;
  padding: 0;
  color: #b5b5b5;
  text-indent: 15px;
  border: 1px solid #e5e5e5;
  font-size: 12px;
  font-weight: 400
}

#hed div.hediCekForm a {
  width: 28%;
  float: right;
  background-color: #565656;
  text-align: center;
  color: #fff;
  height: 30px;
  line-height: 30px;
  border-radius: 0;
  height: auto;
  box-shadow: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 12px
}

#hed div.hediCekForm a:hover {
  background-color: #fc5f5e
}

#hed div.hediCekForm a.hediyeCeklerimListBtn {
  padding: 0;
  margin: 5px 0 0;
  width: auto;
  display: block;
  color: #000;
  font-size: 12px;
  line-height: 20px;
  background-color: transparent;
  height: auto
}

#hed div.hediCekForm a.hediyeCeklerimListBtn i {
  color: #fc5f5e
}

#hed div.hediCekForm a.hediyeCeklerimListBtn:hover {
  color: #fc5f5e;
  background-color: transparent
}

.BasketEkVergi .EkVergiSelect {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: #f7f7f7;
  height: 30px;
  min-height: 30px;
  line-height: 30px
}

.BasketEkVergi .EkVergiTextbox {
  float: left;
  background-color: #f7f7f7;
  height: 30px;
  min-height: 30px;
  line-height: 30px;
  border-radius: 0;
  box-shadow: none;
  margin: 10px 0 0;
  padding: 0;
  color: #b5b5b5;
  text-indent: 15px;
  border: 1px solid #e5e5e5;
  font-size: 12px;
  font-weight: 400
}

.BasketEkVergi .EkVergiBtn {
  width: 100%;
  margin: 10px 0 0;
  float: left;
  text-align: center;
  background-color: #b5b5b5;
  text-align: center;
  color: #fff;
  height: 30px;
  line-height: 30px;
  border-radius: 0;
  height: auto;
  box-shadow: none;
  padding: 0;
  float: left;
  border: 0;
  font-size: 12px
}

.BasketEkVergi .EkVergiBtn:hover {
  background-color: #fc5f5e
}

.hediyecekiDelete {
  font-size: 12px;
  color: #fc5f5e;
  text-decoration: underline;
  display: block;
  clear: both;
  line-height: 20px
}

.BasketEkVergi .EkVergiSelect {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: #f7f7f7;
  height: 30px;
  min-height: 30px;
  line-height: 30px
}

.BasketEkVergi .EkVergiTextbox {
  float: left;
  background-color: #f7f7f7;
  height: 30px;
  min-height: 30px;
  line-height: 30px;
  border-radius: 0;
  box-shadow: none;
  margin: 0;
  padding: 0;
  color: #b5b5b5;
  text-indent: 15px;
  border: 1px solid #e5e5e5;
  font-size: 12px;
  font-weight: 400
}

.BasketEkVergi .EkVergiBtn {
  width: 100%;
  margin: 10px 0 0;
  float: left;
  text-align: center;
  background-color: #b5b5b5;
  text-align: center;
  color: #fff;
  height: 30px;
  line-height: 30px;
  border-radius: 0;
  height: auto;
  box-shadow: none;
  padding: 0;
  float: left;
  border: 0;
  font-size: 12px
}

.BasketEkVergi .EkVergiBtn:hover {
  background-color: #fc5f5e
}

.PayPalLeft input {
  background: url(https://cdn.ticimax.com/App_Themes/Default/images/PayPalLeftBtn.jpg) no-repeat 5px center transparent !important;
  width: 178px !important;
  height: 75px !important;
  font-size: 0;
  padding: 0 !important;
  margin: 0;
  display: block;
  border: 0;
  cursor: pointer
}

.GarantiPayLeft input {
  background: url(https://cdn.ticimax.com/App_Themes/Default/images/GarantiPayLeftBtn.jpg) no-repeat 5px center transparent !important;
  width: 190px;
  height: 75px;
  font-size: 0;
  padding: 0;
  margin: 0 0 20px;
  display: block;
  border: 0;
  cursor: pointer
}

.garantiPaySol {
  float: left;
  padding-right: 10px;
  margin-bottom: 10px
}

.garantiPaySol a {
  display: inline-block
}

.garantiPaySag {
  float: left
}

.garantiPaySag ul {
  margin: 0
}

.PayCellLeft:after {
  clear: both;
  display: table;
  content: ""
}

.payCellSol {
  float: left;
  display: inline-block;
  width: 30%
}

.payCellSag {
  float: left;
  display: inline-block;
  width: 70%;
  padding: 27px 0;
  font-size: 13px
}

.PayCellLeft input {
  background: url(https://cdn.ticimax.com/App_Themes/Default/images/PayCellLeftBtn.jpg) no-repeat 5px center transparent !important;
  width: 175px !important;
  height: 100px !important;
  font-size: 0;
  padding: 0 !important;
  margin: 0;
  display: block;
  border: 0;
  cursor: pointer
}

.paycellVisa {
  background: url(https://cdn.ticimax.com/App_Themes/Default/images/paycellvisa.png) no-repeat 0 10px transparent !important;
  background-size: 95% auto !important;
  display: block;
  padding-top: 90px;
  margin-top: 20px
}

.GarantiPayLeft input {
  background: url(https://cdn.ticimax.com/App_Themes/Default/images/GarantiPayLeftBtn.jpg) no-repeat 5px center transparent !important;
  width: 190px;
  height: 75px;
  font-size: 0;
  padding: 0;
  margin: 0 0 20px;
  display: block;
  border: 0;
  cursor: pointer
}

.garantiPaySag ul li {
  list-style-type: none
}

.garantiPayOrta {
  margin-top: 20px;
  font-weight: 700
}

#divSozlesme {
  background-color: #fff;
  padding: 10px
}

.sozlesmeIcerik1, .sozlesmeIcerik2, .sozlesmeIcerik3 {
  width: 438px;
  padding: 20px 0 20px 20px;
  background-color: #fff;
  height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto 20px;
  border: 1px solid #e0e0e0
}

#divSozlesme .sozlesmeText {
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 5px
}

.payCellKayitliKartItem:after {
  clear: both;
  display: table;
  content: ""
}

.payCellKayitliKartItem {
  border: 1px solid #e5e5e5;
  margin-bottom: 5px;
  cursor: pointer
}

.payCellKayitliKartItem:hover {
  background-color: #e5e5e5
}

.payCellKayitliKartItem span {
  float: left;
  display: block
}

.payCellKartCheckBox {
  width: 10%;
  padding: 31px 12px
}

.chkPayCellKayitliKart {
  visibility: hidden
}

.payCellRadio {
  position: relative
}

.payCellRadio ipnut[type=radio] {
  -webkit-appearance: none;
  -moz-appearance: none
}

.payCellRadio label {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  transition: all .5s ease;
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
  background: #dedede;
  border: 1px solid #a6a6a6
}

.payCellRadio input[type=checkbox]:checked + label:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 7px;
  height: 7px;
  background-color: #666;
  border-radius: 100%;
  margin: auto;
  display: block
}

#divPayCellKartSaklama .CrediCardNameInput > input[type=checkbox], #spnPayCellKartimiSakla > input[type=checkbox] {
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle
}

#divPayCellKartSaklama .CrediCardNameInput label {
  font-weight: 700;
  font-size: 13px
}

.payCellKartLogo {
  padding: 0;
  margin-top: 4px;
  margin-bottom: 4px
}

.payCellKartLogo img {
  max-width: 100%;
  padding: 0
}

.payCellKartIsim {
  padding: 30px 20px;
  font-size: 13px;
  font-weight: 600;
  width: 58%;
  text-align: left
}

#divPayCellKartSaklama .CrediCardNameInput {
  background-color: #ffd300;
  padding: 10px;
  color: #332f2f;
  font-size: 16px;
  cursor: pointer
}

#divPayCellKartSaklama .CrediCardNameInput label {
  cursor: pointer
}

.masterPassKayitliKartItem:after {
  clear: both;
  display: table;
  content: ""
}

.masterPassKayitliKartItem {
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 0;
  cursor: pointer
}

.masterPassKayitliKartItem:hover {
  background-color: #e5e5e5
}

.masterPassKayitliKartItem span {
  float: left;
  display: block
}

.masterPassKartCheckBox {
  width: 13px;
  padding: 14px 0 10px
}

.chkMasterPassKayitliKart {
  visibility: hidden
}

#spnMasterPassKartimiSakla img, #divMasterPassKayitliKartlar img {
  max-width: 100%
}

.masterPassRadio {
  position: relative
}

.masterPassRadio ipnut[type=radio] {
  -webkit-appearance: none;
  -moz-appearance: none
}

.masterPassRadio label {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  transition: all .5s ease;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: #dedede;
  border: 1px solid #a6a6a6
}

.masterPassRadio input[type=checkbox]:checked + label:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 7px;
  height: 7px;
  background-color: #666;
  border-radius: 100%;
  margin: auto;
  display: block
}

#spnMasterPassKartimiSakla > input[type=checkbox] {
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle
}

#divMasterPassKartSaklama .CrediCardNameInput label {
  font-weight: 700;
  font-size: 13px
}

#cbMasterPassKayitliKartlaOdeme {
  float: left;
  width: 15px
}

#divMasterPassYeniKart {
  margin-top: 15px
}

#divMasterPassYeniKart > div {
  position: relative
}

#divMasterPassYeniKart > div input#masterPassYeniKart {
  visibility: hidden
}

#divMasterPassYeniKart > div label.dummy {
  display: block;
  width: 13px;
  height: 13px;
  border-radius: 100px;
  transition: all .5s ease;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: #dedede;
  border: 1px solid #a6a6a6
}

#divMasterPassYeniKart > div input[type=checkbox]:checked + label:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 7px;
  height: 7px;
  background-color: #666;
  border-radius: 100%;
  margin: auto;
  display: block
}

.masterPassKartKaydet {
  font-size: 13px;
  margin-left: 18px;
  font-weight: 600;
  cursor: pointer
}

.masterPassKartLogo {
  padding: 0;
  margin-top: 4px;
  margin-bottom: 4px
}

.masterPassKartLogo img {
  max-width: 100%;
  padding: 0
}

.masterPassKartIsim {
  padding: 13px 20px;
  font-size: 13px;
  font-weight: 600;
  width: 58%;
  text-align: left
}

.masterPassKartSil {
  padding: 14px 0;
  font-size: 13px;
  float: right !important
}

#divMasterPassKartSaklama .CrediCardNameInput {
  padding: 10px 0;
  color: #332f2f;
  font-size: 16px
}

#divMasterPassKartSaklama .CrediCardNameInput label {
  float: left
}

#divMasterPassKartSaklama img {
  float: right;
  display: inline-block;
  width: 150px
}

#cbMasterPassKayitliKartlaOdeme {
  display: none
}

@media (max-width: 991px) {
  #divMasterPassKartSaklama img {
    max-width: 90px
  }
}

#spnMasterPassKartimiSakla {
  float: left;
  margin-bottom: 10px
}

.MasterPassKartimiSaklaTxt {
  display: block;
  width: 100%
}

.MasterPassKartimiSaklaTxt input {
  float: left;
  display: inline-block;
  margin-right: 5px;
  width: 15px;
  margin-top: 2px
}

.MasterPassKartimiSaklaTxt label {
  margin-bottom: 15px;
  display: inline-block;
  font-size: 13px;
  float: left;
  width: 90%;
  line-height: normal
}

.divMasterPassKartAdi {
  float: left;
  width: 100%;
  margin-bottom: 15px
}

.divMasterPassKartAdi .CrediCardNameLabel {
  font-weight: 600;
  font-size: 13px
}

.masterCardLogo {
  float: left;
  display: block;
  width: 100%
}

#masterPassOtpForm .logoAlan img {
  max-width: 100%
}

.BasketDetailComplate {
  width: 100%
}

.BasketDetailComplate .UrunContent {
  display: block !important
}

.BasketDetailComplate .UrunContent .sepetItem {
  border: 0;
  border-bottom: 1px solid #eee
}

.BasketDetailComplate .UrunContent .sepetItem .sepetItemPriceContent {
}

.BasketDetailComplate .UrunContent .sepetItem .UrunItemAdet {
  float: left;
  margin-left: 75px
}

.SiparisTamamlaLine ul li {
  font-size: 14px;
  line-height: 25px
}

.SiparisTamamlaLine:after {
  clear: both;
  display: table;
  content: ""
}

.BasketDetailComplateBottom {
  display: block
}

.BasketDetailComplateBottomRow {
  margin-left: -10px;
  margin-right: -10px
}

.BasketDetailComplateBottom .BasketDetailCol {
  width: 100%;
  float: left;
  padding-left: 10px;
  padding-right: 10px
}

.BasketDetailComplateBottom.adresBolumu .BasketDetailCol {
  width: 33.3333%;
  float: left;
  padding-left: 10px;
  padding-right: 10px
}

.BasketDetailComplate .BasketDetail {
  padding-top: 60px;
  min-height: 220px;
  position: relative
}

.BasketDetailComplate .BasketDetail.BasketDetailSonuc {
  padding: 40px 0
}

.BasketDetailComplateTittle {
  border-bottom: 1px solid #eee;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 45px;
  padding: 14px 5px
}

.BasketDetailComplateTittle .tittle {
  color: #fd7175;
  font-size: 13px;
  font-weight: 500
}

#divSiparisTamalandiSonuc {
}

#divSiparisTamalandiSonuc .satirLeft {
  margin-bottom: 15px
}

#divSiparisTamalandiSonuc .satirLeft i {
  color: #33ae52;
  font-size: 40px;
  border: 3px solid #33ae52;
  border-radius: 50%;
  padding: 15px
}

#divSiparisTamalandiSonuc .SiparisBasarili {
}

#divSiparisTamalandiSonuc .SiparisBasarili strong {
  color: #33ae52;
  font-size: 22px;
  margin-bottom: 10px;
  line-height: 25px;
  font-weight: 600
}

#divSiparisTamalandiSonuc .SiparisBasarili span {
  font-size: 18px;
  line-height: 28px;
  color: #000;
  display: block;
  margin-top: 25px
}

#divSiparisTamalandiSonuc .SiparisBasarili .SiparisNoLabel {
  display: block;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 3px
}

#mainHolder_spanTekrarOdemeYap strong {
  display: block;
  font-size: 24px;
  color: red;
  margin-bottom: 10px
}

#mainHolder_spanTekrarOdemeYap a {
  margin-bottom: 10px
}

.BasketDetailRight .BasketAccount {
  padding: 0;
  background: 0 0;
  border: 0
}

.SiparisTamamlaLine {
  text-align: center
}

#kapidaOdemeOnay, #kapidaSmsIleOnay {
  width: 80%;
  margin: auto
}

#kapidaOdemeOnay .DivOnaySekliSecim:after {
  clear: both;
  display: table;
  content: ""
}

.basketComplateAdres div {
  font-size: 12px;
  line-height: 22px;
  display: block
}

.siparisNumarasi {
  padding: 25px 40px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  font-size: 20px;
  color: #000;
  line-height: 37px;
  text-align: center
}

.siparisNumarasi span {
  display: block
}

.siparisOzetTakip {
  padding: 25px 0;
  border: 1px solid #ddd;
  font-size: 15px;
  text-align: center
}

.SiparisTutari {
  float: left;
  margin-top: 20px
}

.kazanilanParaPuan {
}

.kazanilanParaPuan:after {
  clear: both;
  display: table;
  content: ""
}

.parapuanKazan {
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  color: #fc5f5e;
  padding: 10px 0;
  font-size: 17px;
  font-weight: 600;
  display: block;
  margin: 10px 0
}

.SiparisParaPuanLabel {
  color: #fc5f5e;
  padding: 5px 0;
  font-size: 17px;
  font-weight: 600;
  display: block
}

.BasketCargoItem span {
  display: block;
  line-height: 20px
}

.BasketCargoItem img {
  max-width: 100%
}

#kapidaOdemeOnay .DivSmsGosterimKutu {
  display: block;
  margin: 17px 0
}

#kapidaOdemeOnay .DivSmsGosterimKutu:after {
  clear: both;
  display: table;
  content: ""
}

#kapidaOdemeOnay .BtnGuncelle {
  float: right;
  color: #fc5f5e;
  font-size: 16px;
  font-weight: 500
}

#kapidaOdemeOnay .BtnGuncelle i {
  margin-right: 3px
}

#kapidaOdemeOnay .DivSmsGosterimKutu .GmsNoInput {
  width: 100%;
  float: left
}

#kapidaOdemeOnay .DivSmsGosterimKutu .DivGuncelle {
  float: left;
  padding: 7px 0 10px 10px
}

#kapidaOdemeOnay .DivOnaySekliSecim {
  display: block;
  margin: 26px 0
}

#kapidaOdemeOnay .DivOnaySekliSecim:after {
  display: table;
  clear: both;
  content: ""
}

#kapidaOdemeOnay .DivOnaySekliSecim .SagAlan {
  width: 45%;
  float: left
}

#kapidaOdemeOnay .DivOnaySekliSecim .SolAlan {
  width: 45%;
  float: right
}

#kapidaOdemeOnay .AltAciklama {
  float: left;
  padding: 10px;
  font-size: 13px;
  color: #a7a7a7
}

#kapidaSmsIleOnay .kodGonderilecekTelefonNo {
  width: 100%;
  margin: 0;
  text-align: center;
  font-size: 17px;
  background-color: #fff;
  padding: 5px 0;
  font-weight: 400;
  background-color: #fff
}

#kapidaSmsIleOnay .onayGenelAlan {
  float: left;
  width: 100%;
  margin: 0
}

#kapidaSmsIleOnay .onayKodAlan {
  float: left;
  width: 67%;
  margin: 0;
  position: relative
}

#kapidaSmsIleOnay .Sayac {
  float: left;
  border-radius: 0 !important;
  width: 31%;
  margin: 0 0 0 4px;
  text-align: center;
  background-color: #fff;
  border-radius: 2px;
  font-weight: 400;
  line-height: 38px;
  border: 1px solid #ccc
}

#kapidaSmsIleOnay .Sayac .mesaj {
  font-size: 13px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .2);
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px
}

#kapidaSmsIleOnay .TelefonOnayAciklama {
  float: left;
  width: 100%;
  font-size: 12px;
  margin-left: 2%;
  font-weight: 400;
  margin: 2px 0 0
}

#kapidaSmsIleOnay .siparisOnayKutu {
  float: left;
  width: 100%;
  margin: 10px 0 0;
  position: relative
}

#kapidaSmsIleOnay .siparisOnayKutu .btnSiparisOnayla {
  float: left;
  margin: 2%;
  background-color: #da5860;
  padding: 4px 0;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: 18px;
  margin: 0;
  padding: 6px;
  font-weight: 400
}

#kapidaMusteriHizmetleriOnay .musteriHizmetleriGenelAlan {
  display: table;
  width: 100%;
  padding: 6px 7px;
  margin: 0;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  text-align: center
}

#kapidaMusteriHizmetleriOnay .Aciklama1 {
  float: left;
  font-size: 21px;
  width: 100%;
  text-align: center;
  font-weight: 400;
  margin-top: 6px;
  margin-bottom: -2px;
  color: #da5860
}

#kapidaMusteriHizmetleriOnay .GenelAciklama {
  float: left;
  width: 100%;
  font-size: 13px;
  text-align: center;
  font-weight: 400;
  margin-top: 5px
}

#kapidaMusteriHizmetleriOnay .GenelAciklama p {
  margin-top: 7px
}

.YeniSmsKodTalepEt {
  float: left;
  margin: 8px 0;
  background-color: #f9f9f9;
  height: 40px;
  border-radius: 0;
  cursor: pointer;
  width: 100%;
  border: 1px solid #ccc;
  color: #000;
  margin-top: 24px
}

.YeniSmsKodTalepEt .TalepBirinciSatir {
  float: left;
  width: 100%;
  text-align: center;
  font-size: 17px;
  margin: 0;
  padding: 0;
  font-weight: 400;
  height: 14px
}

.YeniSmsKodTalepEt .TalepIkinciSatir {
  float: left;
  width: 100%;
  text-align: center;
  font-size: 10px;
  color: #909090;
  font-weight: 400;
  margin-top: 2px;
  padding: 0
}

.sozlesmeBoxContent > div {
  max-height: 60px;
  overflow-y: auto;
  display: block;
  min-height: 60px;
  border: 1px solid #e5e5e5;
  margin-bottom: 20px;
  padding: 10px
}

.sozlesmeBoxContent.active {
}

.sozlesmeBoxCaymahakkiTitle, .sozlesmeBoxOnbilgilendirmeTitle, .sozlesmeBoxMesafelisatisTitle {
  margin-bottom: 10px;
  display: block;
  font-size: 12px
}

.SiparisIco {
  display: block;
  text-align: center;
  padding: 20px 0;
  line-height: 40px;
  font-size: 36px;
  color: #a5a5a5
}

.SiparisIco i {
  font-size: 40px;
  color: red;
  margin-right: 20px;
  line-height: 16px
}

.SiparisBasarili.mesaj {
  font-size: 13px;
  color: #000;
  padding: 20px 0;
  line-height: 40px
}

.TekrarDeneBtn {
  margin: auto;
  background-color: #fc5f5e;
  border: 0;
  border-radius: 0;
  border-radius: 3px
}

.TekrarDeneBtn:hover {
  background-color: #000
}

.sepetimBody .fancybox-skin {
  background: #fff !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important
}

#sepetHazirlayanBilgisi {
  background-color: #f2f2f2;
  position: relative;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px
}

#sepetHazirlayanBilgisi:after {
  clear: both;
  display: table;
  content: ""
}

.hazirlayanMesaj {
  width: 50%;
  float: left;
  font-size: 14px;
  padding-right: 10px
}

.hazirlayanKisiContent {
  width: 50%;
  float: left
}

.hazirlayanKisi {
  float: left;
  font-size: 14px;
  width: 80%
}

.hazirlayanKisiContent .hazirlayanMagaza {
  font-weight: 500;
  line-height: 20px
}

.hazirlayanKisiContent .hazirlayanIsim {
  font-weight: 600;
  line-height: 20px
}

.hazirlayanKisiContent .hazirlayanPuan {
  font-weight: 600;
  line-height: 20px
}

.hazirlayanKisiContent .hazirlayanResim {
  width: 20%;
  float: left
}

.hazirlayanKisiContent .hazirlayanResim img {
  max-height: 100px
}

.kuryeBilgisi {
  background-color: #f2f2f2;
  position: relative;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px
}

.kuryeBilgisi:after {
  clear: both;
  display: table;
  content: ""
}

.kuryeMesaj {
  width: 50%;
  float: left;
  font-size: 14px;
  padding-right: 10px
}

.kurye {
  width: 50%;
  float: left
}

.kuryeContent {
  float: left;
  font-size: 14px;
  width: 80%
}

.kurye .kuryeResim {
  width: 20%;
  float: left
}

.kurye .kuryeResim img {
  max-height: 100px
}

@media (max-width: 480px) {
  .sozlesmeIcerik1, .sozlesmeIcerik2, .sozlesmeIcerik3 {
    width: 100%;
    padding: 10px
  }
}

@media (max-width: 1199px) {
  .KasaOnuFirsatlarContent ul li a.productImage span {
    display: block;
    text-align: center;
    width: 100%
  }
}

@media (max-width: 1024px) {
  .tckBilgilendirmeTitle.active {
    display: block !important;
    font-weight: 400;
    line-height: normal;
    font-size: 11px
  }
}

@media (min-width: 992px) {
  .BasketDetailComplate .odemeCompleteContent {
    clear: both
  }
}

@media (max-width: 991px) {
  .sepetimBody .ticiContainer {
    width: 100%;
    max-width: 100%;
    padding: 0 5px;
    min-width: 100%
  }

  .sepetimBody #ticimaxCopyright {
    display: none;
    position: static;
    left: auto;
    right: auto;
    top: auto
  }

  .sepetimBody #header {
    display: none;
    position: static;
    left: auto;
    right: auto;
    top: auto
  }

  .sepetimBody #footer {
    display: none;
    position: static;
    left: auto;
    right: auto;
    top: auto
  }

  .sepetimBody .ticiContainer .row {
    margin: 0
  }

  .Basketstep.step1, .BasketDetailContainer, .BasketAccountContainer {
    width: 100%
  }

  .BasketAccountContainer .odeme #lnkBtnSiparisiTamamlaTop {
    display: none !important
  }

  .BasketDetailContainer {
    margin-top: 15px
  }

  .Basketstep {
    padding: 0;
    margin: 0
  }

  .sepetimBody .BasketPage {
    margin-top: 0;
    margin-bottom: 100px;
    padding: 0 !important
  }

  .sepetimBody .odemeYap.OdemeContent {
    margin-bottom: 50px
  }

  .Basketstep.step1, .sepett .alisverisedevamet {
    display: none
  }

  .sepetimBody .MobileHeaderControlContent {
    display: block
  }

  .sepetimBody .MobileHeaderControl {
    margin-top: 15px;
    display: -webkit-flex;
    display: flex
  }

  .sepetimBody .MobileHeaderControl .item {
    margin-right: 10px;
    flex: 1
  }

  .sepetimBody .MobileHeaderControl .item:last-child {
    margin-right: 0
  }

  .sepetimBody .MobileHeaderControl .item .cart-btn {
    font-size: 14px;
    padding: 10px;
    margin: 0;
    border-radius: 5px
  }

  .sepetimBody .MobileHeaderControl .cart-btn {
    color: #8d8e8f;
    font-weight: 500;
    background-color: #fff;
    display: block;
    padding: 12px 22px;
    border-radius: 3px;
    border: 1px solid #ddd;
    text-align: center;
    transition: .3s;
    font-size: 13px;
    line-height: normal
  }

  .sepetimBody .MobileHeaderControl .basketCompletebtn {
    position: static;
    font-size: 13px;
    padding: 12px 22px;
    border-radius: 3px;
    line-height: normal
  }

  .Basketstep:after {
    clear: both;
    display: table;
    content: ""
  }

  .sepet-sil {
    padding: 18px 0
  }

  .Basketstep ul {
    float: left
  }

  .Basketstep ul li {
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    height: auto;
    float: none;
    background-color: transparent;
    min-height: 0
  }

  .Basketstep ul li.aktif:after {
    display: none
  }

  .Basketstep ul li.aktif {
    background-color: transparent
  }

  .Basketstep ul li.pasif {
    display: none
  }

  .Basketstep ul li .bAdresIco {
    display: none
  }

  .Basketstep ul li.aktif .step_2 div {
    margin-bottom: 0;
    font-size: 10px;
    color: #000;
    margin-top: 5px
  }

  .Basketstep ul li.aktif .step_2:after {
    display: none
  }

  .Basketstep ul li.aktif .step_2 span {
    display: none
  }

  .Basketstep ul li.aktif .step_1 {
    display: none
  }

  .Basketstep ul li:before {
    display: none
  }

  .Basketstep ul li span {
    font-size: 10px
  }

  .Basketstep ul li div i {
    display: none
  }

  .Basketstep ul li.onestepsec span {
    color: #000;
    font-weight: 500;
    line-height: 22px
  }

  .Basketstep ul.mobilSepetAdim li.onestepsec span.onesteptext {
    display: none
  }

  .Basketstep ul li i {
    color: #000
  }

  .sepetDuzenleBtn {
    display: inline-block;
    float: right;
    border: 1px solid #bbb;
    border-radius: 3px;
    padding: 5px;
    margin-right: 10px;
    font-size: 10px;
    color: #000;
    width: 60px;
    text-align: center
  }

  .sepetDuzenleBtn.selected {
    background-color: #fc5f5e;
    color: #fff;
    border-color: #fc5f5e
  }

  .sepetDuzenleBtn:hover {
    background-color: #fc5f5e;
    color: #fff;
    border-color: #fc5f5e
  }

  .sepetListTittle {
    display: none
  }

  .sepetItem.active {
    padding-left: 55px
  }

  .sepetItem.active .sepetItemB.sepetItemB1 {
    width: 40%
  }

  .sepetItemB.sepetItemB0 {
    width: 15%
  }

  .sepetItem div.sepetItemB0 {
    overflow: hidden;
    padding: 0;
    margin: 0 5px 0 0
  }

  .sepetItemB.sepetItemB1 {
    width: 60%
  }

  .sepetItemB.sepetItemB1:after {
    clear: both;
    display: table;
    content: ""
  }

  .sepetItemB.sepetItemB2 {
    width: 100%;
    float: left;
    text-align: left;
    padding: 0
  }

  .sepetItemB1 span {
    font-size: 11px
  }

  .sepetItemB3 .sepetItemB3_2, .sepetItemB4, .sepetItemB3 .sepetItemB3_1 {
    font-size: 12px
  }

  .adetGuncelleContent {
    float: left;
    margin-left: 75px
  }

  .divKampanyaAdetBox {
    float: left;
    margin-left: 75px
  }

  .adetGuncelleContent .textbox.txtSepetAdet {
    text-indent: 0;
    border: 0;
    height: auto;
    width: auto;
    min-height: 24px;
    line-height: 24px;
    margin: 0;
    font-size: 12px;
    color: #999;
    text-align: right;
    pointer-events: none
  }

  .adetGuncelleContent .urunListeAdetArtir {
    width: 24px;
    height: 24px;
    display: inline-block !important;
    font-size: 0;
    background-color: #c5c2c2;
    color: #fff;
    text-align: center;
    line-height: 24px;
    float: left
  }

  .adetGuncelleContent .urunListeAdetArtir:after {
    content: "+";
    font-size: 14px;
    font-weight: 500
  }

  .adetGuncelleContent .urunListeAdetAzalt {
    width: 24px;
    height: 24px;
    display: inline-block !important;
    font-size: 0;
    background-color: #c5c2c2;
    color: #fff;
    text-align: center;
    line-height: 24px;
    float: left
  }

  .adetGuncelleContent .urunListeAdetAzalt:after {
    content: "-";
    font-size: 14px;
    font-weight: 500
  }

  .adetGuncelleContent .AdetGuncelle {
    margin: 0;
    float: left;
    line-height: 24px;
    margin-left: 5px;
    font-size: 11px;
    color: #000
  }

  .adetGuncelleContent .textbox.txtSepetAdet {
    background-color: #fff;
    margin: 0;
    height: auto;
    line-height: normal;
    text-align: center;
    padding: 0;
    width: 24px;
    height: 24px;
    border: 1px solid #c5c2c2;
    float: left;
    pointer-events: auto
  }

  .sepetItemPriceContent {
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: block;
    width: auto
  }

  .sepetItemPriceContent > div {
    display: block;
    flex: none;
    padding: 0;
    text-align: right;
    width: auto
  }

  .sepetHistoryProductItems .KasaOnuFirsatlarContent ul li .sepetItemPriceContent {
    position: static;
    position: static;
    width: 60%;
    text-align: left
  }

  .sepetHistoryProductItems .sepetItemB3 {
    text-align: left
  }

  .sepetHistoryProductItems .KasaOnuFirsatlarContent ul li .indirimOrani {
    display: none !important
  }

  .sepetHistoryProductItems .KasaOnuFirsatlarContent ul li .sepetItemB.sepetItemB0 {
    width: 70px;
    padding-bottom: 0;
    height: 100px;
    border: 0
  }

  .sepetHistoryProductItems .KasaOnuFirsatlarContent ul li .sepetItemB.sepetItemB5 {
    width: auto;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    padding: 0
  }

  .sepetHistoryProductItems .KasaOnuFirsatlarContent ul li .sepetItemB.sepetItemB5 a.button {
    width: auto;
    height: auto;
    background: #a0a0a0;
    color: #fff;
    border: 1px solid #a0a0a0;
    line-height: normal;
    padding: 5px 10px;
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
    margin-top: 5px;
    border-radius: 2px;
    float: none
  }

  .sepetHistoryProductItems .KasaOnuFirsatlarContent ul li {
    width: 100%
  }

  .sepetHistoryProductItems .KasaOnuFirsatlarContent ul li {
    width: 100%
  }

  .sepetItemB.sepetItemB5 {
    transform: none;
    top: 0;
    right: 0
  }

  .sepetItem .sepetItemB1 a {
    font-size: 11px;
    color: #a5a5a5
  }

  .sepetTitle.sepetTittleAdres {
    display: block
  }

  .BasketHediyeCeki {
    clear: both
  }

  .BasketRigth ul li {
    padding: 0;
    border: 0;
    font-size: 12px
  }

  .BasketRigth ul li span {
    font-size: 12px;
    margin: 0;
    color: #a5a5a5;
    font-weight: 400;
    line-height: 20px
  }

  .BasketRigth ul li span:first-child {
    float: left;
    width: 50%;
    text-align: left
  }

  .BasketRigth ul li span:last-child {
    float: right;
    width: 50%;
    text-align: right
  }

  .BasketRigth ul li .tut {
    font-weight: 400;
    color: #a5a5a5
  }

  .Overlay.Show {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .36);
    z-index: 10
  }

  .sepetimBody .mobileAddition {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 999
  }

  .sepetimBody .mobileAddition > .addition-area-clone {
    padding: 15px 15px 10px;
    position: absolute;
    bottom: -100%;
    opacity: 0;
    visibility: hidden;
    background-color: #fff;
    left: 0;
    right: 0;
    transition: .1s
  }

  .sepetimBody .mobileAddition > .addition-area-clone.ShowAdd {
    bottom: 58px;
    opacity: 1;
    visibility: visible
  }

  .sepetimBody .mobileAddition > .addition-area-clone .Add-title {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 15px
  }

  .sepetimBody .mobileAddition > .addition-area-clone ul li {
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0
  }

  .sepetimBody .mobileAddition > .addition-area-clone ul li {
    color: #1c1e1f;
    font-size: 14px
  }

  .sepetimBody .mobileAddition > .addition-area-clone ul li .tut {
    font-weight: 600;
    color: #616161;
    font-size: 14px
  }

  .sepetimBody .mobileAddition > .addition-area-clone ul li.genelToplam .tut {
    color: #fc5f5e;
    font-weight: 700;
    font-size: 16px
  }

  .sepetimBody .mobileAddition > .addition-area-clone .Odeme-RightLine {
    padding: 4px 0
  }

  .sepetimBody .mobileAddition > .addition-area-clone .Odeme-RightLine:after {
    clear: both;
    display: table;
    content: ""
  }

  .sepetimBody .mobileAddition > .addition-area-clone .Odeme-RightLine {
    color: #1c1e1f;
    font-size: 14px
  }

  .sepetimBody .mobileAddition > .addition-area-clone .Odeme-RightLine .Right {
    font-weight: 600;
    color: #616161;
    font-size: 14px
  }

  .sepetimBody .mobileAddition > .addition-area-clone .Odeme-RightLine.genelToplam .Right {
    color: #fc5f5e;
    font-weight: 700;
    font-size: 16px
  }

  .sepetimBody .mobileAddition > .addition-area-clone .CartAddition > span {
    text-align: right;
    display: block;
    color: #606162
  }

  .sepetimBody .mobileAddition > .addition-content {
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 10px 0;
    border-top: 1px solid #f0f0f0;
    position: relative;
    z-index: 3;
    background-color: #fff
  }

  .sepetimBody .mobileAddition > .addition-content::before {
    content: "\f0d8";
    display: inline-block;
    font: normal normal normal 24px/1 FontAwesome;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #fc5f5e
  }

  .sepetimBody .mobileAddition > .addition-content.Show::before {
    content: "\f0d7"
  }

  .sepetimBody .mobileAddition > .addition-content > .item:last-child {
    flex: auto
  }

  .sepetimBody .mobileAddition > .addition-content > .item .basketCompletebtn {
    margin: 0;
    padding: 10px 5px;
    font-size: 14px;
    line-height: normal
  }

  .sepetimBody .mobileAddition > .addition-content > .TotalPrice {
    font-family: oxygen, sans-serif;
    font-weight: 600;
    color: #fc5f5e;
    margin-right: 20px;
    font-size: 16px;
    line-height: 18px;
    padding-left: 40px
  }

  .sepetimBody .mobileAddition > .addition-content > .TotalPrice > .T {
    color: #686768;
    font-size: 12px;
    font-weight: 300
  }

  #mainHolder_btnKapidaSmsSiparisOnayla {
    position: relative;
    left: auto;
    top: auto;
    bottom: auto
  }

  .sepetimBody .basketCompletebtn {
    border-radius: 4px;
    border: 0;
    line-height: 38px
  }

  .sepetimBody .BasketAccount .basketCompletebtn {
    display: none
  }

  .BasketDetail.sozlesmeBtnContent {
    display: none !important
  }

  .sepetimBody .sozlesmeTextBtn {
    position: relative;
    left: auto;
    right: auto;
    bottom: auto;
    height: auto
  }

  .odemeCompleteContent {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: #f2f2f2
  }

  a.YeniAdresEkle {
    display: none;
    position: absolute;
    right: 8px;
    top: 10px;
    border: 1px solid #bbb;
    border-radius: 3px;
    padding: 3px;
    font-size: 10px;
    color: #000;
    text-align: center;
    width: auto;
    height: auto;
    margin: 0;
    line-height: 15px
  }

  a.YeniAdresEkle i {
    display: none
  }

  a.YeniAdresEkle.selected {
    background-color: #fc5f5e;
    color: #fff;
    border-color: #fc5f5e
  }

  .altButonTutucu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    margin-bottom: 0 !important;
    padding: 0;
    background-color: #fff;
    display: block;
    text-align: center;
    padding: 5px 0
  }

  .altButonTutucu a {
    width: 46%;
    text-align: center;
    margin: 5px;
    padding: 0;
    display: inline-block;
    float: left;
    line-height: 34px;
    border: 0;
    height: 34px;
    font-size: 13px
  }

  .altButonTutucu a#saveAddressButton {
    float: right
  }

  .adresEkleButtons {
    padding: 8px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    background-color: #f2f2f2
  }

  .odemeDetailContent {
    padding: 0;
    background: #f2f2f2
  }

  .basketCompletebtn.btnAlt {
    display: none !important
  }

  .BasketAccount.odeme {
    margin: 0;
    padding: 0;
    background: #f2f2f2
  }

  .BasketAccount.odeme .Odeme-RightLine {
    padding: 8px 0 0;
    border: 0
  }

  .BasketAccount.odeme .Odeme-RightLine .Left {
    width: 50%;
    float: left;
    text-align: left;
    font-size: 12px;
    margin: 0
  }

  .BasketAccount.odeme .Odeme-RightLine.hediyeCekiBtnContent .Left {
    width: 100%;
    float: none;
    text-align: center
  }

  .BasketAccount.odeme .Odeme-RightLine .Right {
    width: 50%;
    float: right;
    text-align: right;
    font-size: 12px;
    font-weight: 400;
    margin: 0
  }

  .Odeme-RightLine.hediyeCekiBtnContent {
    clear: both
  }

  .UrunItemImg {
    width: 50px;
    margin-right: 8px
  }

  .UrunItemSag {
    float: left;
    font-size: 12px
  }

  .UrunItem {
    padding: 0;
    border: 0;
    margin-bottom: 8px
  }

  .BasketDetailComplate {
    width: 100%;
    font-size: 12px
  }

  .BasketDetailComplate .satirLeft {
    float: none;
    text-align: center
  }

  .satirLeft i {
    font-size: 30px
  }

  .SiparisTamamlaLine .satirRight {
    float: none;
    margin-top: 8px
  }

  #kapidaOdemeOnay .DivSmsGosterimKutu .GmsNoInput, #kapidaOdemeOnay .DivSmsGosterimKutu .DivGuncelle, #kapidaOdemeOnay .BtnGuncelle {
    margin: auto;
    float: none
  }

  #kapidaOdemeOnay .DivOnaySekliSecim a {
    position: relative;
    margin-bottom: 10px
  }

  #kapidaSmsIleOnay .siparisOnayKutu #btnKapidaSmsSiparisOnayla {
    position: static !important
  }

  .sozlemeCheckContent {
  }

  .SoslesmeCheck a, .SoslesmeCheck span {
    font-size: 11px
  }

  #cb3DSecureOdeme {
    margin-top: 5px
  }

  #spn3DContainer label {
    line-height: 24px;
    font-size: 12px;
    color: #000;
    font-weight: 500
  }

  .sepetimBody .zopim {
    display: none !important
  }

  #mainHolder_ucOdeme_divPayByMe iframe {
    min-height: 875px
  }

  .siparisUrunUyariBaslik i {
    display: none
  }

  .siparisUrunUyariBaslik .col-2 {
    width: 100%
  }

  .siparisUrunUyari.active {
    width: 100%
  }

  .SiparisNotuLine.active {
    width: 100%
  }
}

@media (-webkit-min-device-pixel-ratio: 0) {
  select[size], select[multiple], select[multiple][size] {
    background-image: none
  }

  ::-webkit-validation-bubble-message {
    -webkit-box-shadow: none;
    box-shadow: none;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #666666), color-stop(1, black));
    border: 0;
    color: #fff;
    overflow: hidden;
    text-shadow: #000 0 0 1px
  }

  ::-webkit-validation-bubble-arrow, ::-webkit-validation-bubble-top-outer-arrow, ::-webkit-validation-bubble-top-inner-arrow {
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #666;
    border-color: #666
  }
}

@media (max-width: 700px) {
  input.textbox, input.button, select, textarea, input[type=text] {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    webkit-background-clip: padding;
    -moz-background-clip: padding;
    background-clip: padding-box;
    cursor: pointer
  }

  input[type=file]:focus, input[type=file]:active, input[type=radio]:focus, input[type=radio]:active, input[type=checkbox]:focus, input[type=checkbox]:active {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%
  }

  input[type=file], input[type=file], input[type=radio], input[type=radio], input[type=checkbox], input[type=checkbox] {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%
  }

  select {
    padding-top: 0 !important
  }

  input[type=button] {
  }

  .BasketDetail, .BasketRigth {
    padding: 5px
  }

  .BasketDetail {
    margin-bottom: 5px
  }

  .BasketRigth {
    margin-bottom: 5px;
    margin-top: 5px
  }

  .sepetTitle .st_1 {
    font-size: 13px
  }

  .sepetTitle .st_1:before {
    font-size: 12px
  }

  #divKargoAdreslerim, #divFaturaAdreslerim {
    margin: 0
  }

  .OrderAdresList .AdresItem, .OrderAdresList.active .AdresItem, .OrderAdresList.active .AdresItem .adresItemFloat, .OrderAdresList.active .OrderAdresListFatura {
    width: 100%;
    margin: 0 0 10px;
    padding: 0;
    border: 0
  }

  .adresItemFloat {
    width: 100%;
    margin: 0 0 10px;
    padding: 0
  }

  .faturaAdresBtn, .adresAyniBtn {
    float: left;
    clear: left
  }

  .KasaOnuFirsatlarContent ul li {
    width: 100%;
    margin: 5px 0
  }

  .KasaOnuFirsatlarContent ul li .productImage {
    float: left;
    height: 0;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    border: solid 1px #e5e5e5;
    background-color: #fff;
    margin-right: 10px;
    margin-top: 0;
    overflow: hidden
  }

  .KasaOnuFirsatlarContent ul li .productImage img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    height: auto
  }

  .KasaOnuFirsatlarContent ul li a + span {
    width: 100%;
    text-align: left;
    height: auto
  }

  .KasaOnuFirsatlarContent ul li a + span + span {
    width: 100%;
    float: left;
    text-align: left;
    margin-top: 10px
  }

  .KasaOnuFirsatlarContent ul li .indirimOrani {
    top: 10px
  }

  .KasaOnuFirsatlarContent ul li .uzereniCiz {
  }

  .KasaOnuFirsatlarContent ul li .SindirimliFiyat {
  }

  .KasaOnuFirsatlarContent ul li a.button {
    width: 100%;
    float: left;
    background-color: transparent;
    border: 0;
    color: #000;
    text-align: left;
    font-weight: 600;
    padding: 0;
    margin: 10px 0 0
  }

  .KasaOnuFirsatlarContent ul li a.button:hover {
    background-color: transparent;
    color: #fc5f5e;
    border: 0
  }

  .OrderAdresList {
    width: 100%
  }

  .cargoInformation {
    padding: 5px
  }

  .cargoInformation div.cargoName {
    width: 80%;
    font-size: 13px
  }

  .cargoInformation div.cargoInput {
    width: 20px
  }

  .cargoInformation div.cargotext {
    width: 100%;
    font-size: 12px
  }

  .ilceKargoGonderimSaatleri .sutun {
    width: 33%
  }

  .OdemeMenu {
    width: 100%
  }

  .OdemeMenu ul li {
    width: 100%;
    background-color: transparent
  }

  .Odeme-Left {
    width: 100%;
    padding: 0
  }

  .BasketDetailComplate {
    width: 100%
  }

  .BasketAccount.odeme {
    margin: 0;
    padding: 0;
    background: #f2f2f2
  }

  .BasketAccount.odeme .Odeme-RightLine {
    padding: 8px 0 0;
    border: 0
  }

  .BasketAccount.odeme .Odeme-RightLine #txtbxParcaliOdemeTutar {
    display: block;
    width: 100%;
    clear: left;
    margin-top: 5px
  }

  .BasketAccount.odeme .Odeme-RightLine .Left {
    width: 50%;
    float: left;
    text-align: left;
    font-size: 12px;
    margin: 0
  }

  .BasketAccount.odeme .Odeme-RightLine.hediyeCekiBtnContent .Left {
    width: 100%;
    float: none;
    text-align: center
  }

  .BasketAccount.odeme .Odeme-RightLine .Right {
    width: 50%;
    float: right;
    text-align: right;
    font-size: 12px;
    font-weight: 400;
    margin: 0
  }

  .UrunItemAdet, .UrunItemPrice, .UrunItemTotal, .UrunItemName {
    font-size: 11px;
    color: #000
  }

  .UrunItemName {
    font-size: 11px;
    color: #a5a5a5
  }

  .UrunItem {
    padding: 0;
    border: 0;
    margin-bottom: 8px
  }

  #mainHolder_ucOdeme_divMailOrderTab p {
    font-size: 12px;
    padding: 8px 0 0
  }

  .divCreditCartSagUst {
    display: none
  }

  #divCreditCart, .CrediCardContent, .sozlesmeBoxContent.active {
    width: 100% !important
  }

  .HavaleLine {
    padding: 8px;
    margin-bottom: 0;
    margin-top: 10px
  }

  .SiparisTamamlaLine .HavaleLine {
    width: 90%;
    margin: 0 auto 15px;
    float: none;
    clear: both
  }

  .HavaleLine .HavaleCheckContent, .HavaleLine .HavaleImg {
    margin-top: 0;
    margin-left: 0
  }

  .HavaleLine .HavaleImg {
    width: 30%;
    margin: 0 auto;
    float: none;
    margin-bottom: 8px
  }

  .HavaleLine .HavaleBnk {
    font-size: 11px;
    width: 100%
  }

  .KapidaOdemeTittle, .KapidaOdemeLabel {
    font-size: 12px
  }

  .KapidaOdemeLine {
    margin: 5px 0;
    font-size: 12px
  }

  #kapidaOdemeOnay .DivSmsGosterimKutu {
    margin-bottom: 0
  }

  #kapidaOdemeOnay .DivOnaySekliSecim {
    margin-top: 0
  }

  #kapidaOdemeOnay .DivSmsGosterimKutu .GmsNoInput, #kapidaOdemeOnay .DivSmsGosterimKutu .DivGuncelle {
    width: 100%
  }

  #kapidaOdemeOnay .DivOnaySekliSecim .SagAlan, #kapidaOdemeOnay .DivOnaySekliSecim .SolAlan {
    width: 100%
  }

  #kapidaOdemeOnay .DivOnaySekliSecim a {
    position: relative;
    margin-bottom: 10px
  }

  .BasketDetailComplateBottom.adresBolumu .BasketDetailCol, .BasketDetailComplateBottom .BasketDetailCol {
    width: 100%
  }
}

@media only screen and (max-width: 575px) {
  .EmptyCart .empty-area {
    display: block;
    background-color: #fff;
    border: 1px solid #f0f0f0;
    padding: 25px 10px;
    border-radius: 5px;
    text-align: center
  }

  .EmptyCart .empty-area > .left {
    width: 100%;
    border: 0;
    padding: 0;
    margin-bottom: 15px
  }

  .EmptyCart .empty-area > .left > .Icon > span {
    font-size: 42px
  }

  .EmptyCart .empty-area > .right {
    display: block;
    border: 0;
    padding: 0
  }

  .EmptyCart .empty-area > .right > .Text {
    margin-bottom: 15px
  }

  .EmptyCart .empty-area > .right > .cart-btn {
    display: inline-block;
    width: 100%;
    max-width: 200px
  }

  .payCellSag {
    width: 100%
  }
}

@media (max-width: 380px) {
  .Basketstep ul li.aktif .step_2 {
    display: none
  }
}

@media (max-width: 380px) {
  .OdemeMenu ul li a {
    font-size: 13px
  }

  .OdemeMenu ul li.activeMenu a {
    font-size: 11px
  }

  .CrediCardNoInput input[type=text] {
    width: 19%
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
}

.popupSepet.sepetimBody {
  background-color: transparent
}

.popupSepet .BasketPage {
  margin: 0
}

.popupSepet .BasketPage .BasketDetailSepetList {
  max-height: 376px;
  overflow-y: scroll;
  overflow-x: hidden
}

.popupSepet .BasketPage .BasketAccountContainer .BasketAccount {
  padding-top: 0
}

input[type=number][readonly] {
  -moz-appearance: textfield
}

input[type=number][readonly]::-webkit-outer-spin-button, input[type=number][readonly]::-webkit-inner-spin-button {
  -webkit-appearance: none
}

.paynetj-button {
  background: url(https://cdn.ticimax.com/App_Themes/Default/images/paynet-logo.jpg) no-repeat 5px center transparent !important;
  width: 314px !important;
  height: 75px !important;
  border: 0;
  cursor: pointer
}

#div3DIFrame {
  z-index: 99999 !important
}

@media (max-width: 768px) {
  #iframe3D {
    width: 90% !important;
    height: 93% !important;
    margin-top: 20px !important
  }
}

.bAdres.pasif {
  cursor: pointer;
  opacity: .5
}

.bOdeme.pasif {
  cursor: pointer
}

.favoriUrunlerSlider .owl-dots, .favoriUrunlerSlider .owl-nav {
  text-align: center;
  -webkit-tap-highlight-color: transparent
}

.favoriUrunlerSlider .owl-nav {
  margin-top: 10px
}

.favoriUrunlerSlider .owl-nav [class*=owl-] {
  color: #fff;
  font-size: 14px;
  margin: 5px;
  padding: 4px 7px;
  background: #d6d6d6;
  display: inline-block;
  cursor: pointer;
  border-radius: 3px
}

.favoriUrunlerSlider .owl-nav [class*=owl-]:hover {
  background: #869791;
  color: #fff;
  text-decoration: none
}

.favoriUrunlerSlider .owl-nav .disabled {
  opacity: .5;
  cursor: default
}

.favoriUrunlerSlider .owl-nav.disabled + .owl-dots {
  margin-top: 20px;
  padding-top: 0
}

.favoriUrunlerSlider .owl-dots .owl-dot {
  display: inline-block;
  zoom: 1
}

.favoriUrunlerSlider .owl-dots .owl-dot span {
  width: 8px;
  height: 8px;
  margin: 5px 7px;
  background: #ddd;
  display: block;
  -webkit-backface-visibility: visible;
  transition: opacity .2s ease;
  border-radius: 30px
}

.favoriUrunlerSlider .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
  background: #000
}

#liMenuNestPay > div {
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px
}

#liMenuNestPay > a {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 20px
}

#liMenuNestPay > a img {
  display: inline-block;
  width: 184px
}

#divUyeBakiye .divUyeBakiyeTittle {
  display: block
}

#divUyeBakiye .divUyeBakiyeTittle:after {
  clear: both;
  display: table;
  content: ""
}

#divUyeBakiye .divUyeBakiyeTittle span {
  float: left;
  font-size: 14px;
  color: #fc5f5e;
  font-weight: 500;
  line-height: 20px
}

#divUyeBakiye .divUyeBakiyeTittle span.tut {
  float: right;
  font-size: 14px;
  color: #fc5f5e;
  font-weight: 500
}

#divUyeBakiyeTamamlama {
  display: block;
  margin-top: 8px
}

#divBakiyeFormu {
}

#divBakiyeFormu label {
  font-size: 14px;
  color: #fc5f5e;
  font-weight: 500
}

#divBakiyeFormu #divUyeBakiyeBilgisi {
  font-size: 14px;
  color: #fc5f5e;
  font-weight: 500
}

#divSepetUrunStokYok {
  height: auto;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 2;
  top: inherit;
  left: inherit;
  width: 500px;
  box-sizing: border-box;
  max-width: 100%;
  background-color: #fff;
  padding: 30px 20px 20px;
  text-align: left;
  overflow: initial
}

.modal-js.SoldModal {
}

.modal-js.SoldModal .modal-title {
  text-align: center;
  font-weight: 600;
  position: relative;
  font-size: 18px
}

.modal-js.SoldModal .modal-stitle {
  text-align: center;
  font-size: 14px;
  color: #949494;
  margin-top: 5px;
  position: relative
}

.modal-js.SoldModal::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 150px;
  background-color: #f7f7f7;
  border-radius: 10px 10px 0 0
}

.modal-js.SoldModal .SoldOutCount {
  background-color: #fff;
  width: 100px;
  height: 100px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 50%;
  margin: 5px auto;
  justify-content: center;
  font-size: 48px;
  font-family: oxygen, sans-serif;
  color: #fc5f5e;
  font-weight: 900;
  line-height: 36px;
  padding-top: 12px
}

.modal-js.SoldModal .SoldOutCount::before {
  content: "";
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  bottom: 10px;
  border: 1px dashed #fc5f5e;
  border-radius: 50%
}

.modal-js.SoldModal .SoldOutCount > span.spnSoldOutCount {
  font-size: 48px;
  font-family: oxygen, sans-serif;
  color: #fc5f5e;
  font-weight: 900;
  line-height: 36px
}

.modal-js.SoldModal .SoldOutCount > span {
  font-size: 13px;
  font-weight: 600
}

.modal-js.SoldModal .SoldOut-area {
}

.modal-js.SoldModal .SoldOut-area > .T {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #5a5a5a
}

.modal-js.SoldModal .SoldOut-area > .List {
  text-align: center
}

.modal-js.SoldModal .SoldOut-area > .List > .item {
  display: inline-block;
  width: 124px;
  margin: 0 5px 10px
}

.modal-js.SoldModal .SoldOut-area > .List > .item > .Product {
  position: relative;
  border: 1px dashed #c5c5c5;
  padding: 7px;
  border-radius: 5px;
  overflow: hidden
}

.modal-js.SoldModal .SoldOut-area > .List > .item > .Product > span {
  display: block;
  font-size: 13px;
  line-height: 1.5
}

.modal-js.SoldModal .SoldOut-area > .List > .item > .Product > span.tukenenIco {
  display: none
}

.modal-js.SoldModal .SoldOut-area > .List > .item > .Product > span.tukenenName {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}

.modal-js.SoldModal .modal-control {
  margin-top: 15px;
  display: -webkit-flex;
  display: flex
}

.modal-js.SoldModal .modal-control .item {
  margin-right: 10px;
  flex: 1
}

.modal-js.SoldModal .modal-control .item:first-child a {
  background-color: #fff !important;
  color: #000 !important;
  border: 1px solid #eee !important
}

@media (max-width: 580px) {
  .modal-js.SoldModal .SoldOut-area > .List > .item {
    width: 44%
  }

  .modal-js.SoldModal .modal-control {
    display: block
  }
}

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px
}

.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(.5, 0, .5, 1) infinite;
  transform-origin: 40px 40px
}

.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px
}

.lds-roller div:nth-child(1) {
  animation-delay: -.036s
}

.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px
}

.lds-roller div:nth-child(2) {
  animation-delay: -.072s
}

.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px
}

.lds-roller div:nth-child(3) {
  animation-delay: -.108s
}

.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px
}

.lds-roller div:nth-child(4) {
  animation-delay: -.144s
}

.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px
}

.lds-roller div:nth-child(5) {
  animation-delay: -.18s
}

.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px
}

.lds-roller div:nth-child(6) {
  animation-delay: -.216s
}

.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px
}

.lds-roller div:nth-child(7) {
  animation-delay: -.252s
}

.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px
}

.lds-roller div:nth-child(8) {
  animation-delay: -.288s
}

.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.bilgiKaydetItem {
  font-weight: 700;
  display: block;
  width: 100%
}

.bilgiKaydetItem input[type=password] {
  margin: 0;
  height: 40px;
  line-height: 35px;
  background: #fff;
  border-radius: 5px;
  float: left;
  display: block;
  border: 1px solid #d3d3d3
}

.bilgiKaydetItem label {
  float: left;
  line-height: 15px;
  text-align: left;
  width: 80%;
  font-weight: 500;
  font-size: 12px
}

.bilgiKaydetItem.passDiv {
  margin: 0 auto;
  display: block;
  height: auto;
  min-height: 26px;
  float: left
}

.bilgiKaydetItem.passDiv label {
  display: block;
  float: none;
  max-width: 100px;
  text-align: left;
  font-weight: 500;
  font-size: 11px
}

.bilgiKaydetItem.sozlesmeDiv {
  clear: both;
  margin: 13px auto;
  float: left
}

.bilgiKaydetItem.sozlesmeDiv input {
  float: left;
  display: block;
  height: 15px;
  width: 15px;
  margin: 5px 10px 0 0;
  color: #ddd;
  text-align: left
}

.bilgiKaydetItem.sozlesmeDiv label a {
}

.bilgiKaydetItem.bilgiKaydetButton {
  margin: 0
}

.bilgiKaydetItem.bilgiKaydetButton input {
  font-size: 15px;
  margin: 0 auto;
  background: #000;
  line-height: 19px;
  width: 100%;
  border: 1px solid #000;
  border-radius: 5px;
  letter-spacing: .75px;
  color: #fff;
  height: 40px
}

.bilgiKaydetContainer > .bilgiKaydetItem:nth-child(1) {
  color: #000;
  padding: 0;
  width: 100%
}

.bilgiKaydetContainer > .bilgiKaydetItem:nth-child(1) span {
  color: #000;
  font-size: 22px;
  margin-bottom: 10px;
  line-height: 28px;
  font-weight: 600;
  float: left
}

.bilgiKaydetButton input {
  margin-right: 3px
}

.bilgiKaydetContainer {
  display: block;
  margin-top: 25px;
  background: #f4f4f4;
  width: 100%;
  max-width: 560px;
  margin: 20px auto;
  text-align: center;
  padding-bottom: 10px;
  padding: 35px 80px;
  border-radius: 20px
}

.bilgiKaydetButton {
  display: flex;
  flex-direction: row-reverse
}

@media (max-width: 580px) {
  .bilgiKaydetContainer {
    display: block;
    width: 90%;
    max-width: 560px;
    margin: 20px auto;
    text-align: center;
    padding: 10px;
    border-radius: 5px
  }

  .bilgiKaydetContainer > .bilgiKaydetItem:nth-child(1) span {
    color: #000;
    font-size: 15px;
    margin-bottom: 10px;
    line-height: 1.5;
    font-weight: 600;
    float: left
  }

  .bilgiKaydetItem label {
    float: left;
    line-height: 15px;
    text-align: left;
    width: 89%;
    font-weight: 500;
    font-size: 11px
  }
}

.divSepetProductItem.productItem {
  width: 100% !important;
  margin: 0 !important;
  height: auto !important
}

.divSepetProductItem.productItem .productDetail {
  height: auto !important
}

.divSepetProductItem.productItem .productIcon .favori, .divSepetProductItem.productItem .productIcon .examineIcon {
  display: none !important
}

.divSepetProductItem.productItem .productIcon {
  clear: both !important
}

.divSepetProductItem.productItem .productIcon .newIcon {
  top: 0 !important;
  bottom: auto !important
}

.divSepetProductItem.productItem .productIcon .mycartIcon {
  opacity: 1 !important;
  display: block !important;
  position: static;
  width: 100%;
  height: auto !important;
  margin: 0 auto
}

.divSepetProductItem.productItem .productIcon .mycartIcon a {
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  display: block;
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 13px !important;
  border-radius: 0 !important;
  background: #000;
  color: #fff
}

.divSepetProductItem.productItem .productIcon .mycartIcon a:after {
  display: none !important
}

.divSepetProductItem.productItem .productIcon .mycartIcon a span {
  display: block !important
}

.divSepetBlokContent {
  background-color: #fff;
  background-color: #fff;
  border: 1px solid #eee;
  padding: 0 10px 10px;
  width: 100%;
  margin: 0 0 20px;
  position: relative
}

.divSepetBlokContent .divSepetBlokBaslik {
  margin: 0 0 20px;
  padding: 10px 0;
  border: 0;
  height: auto;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  color: #000;
  font-size: 16px;
  border-bottom: 1px solid #eee
}

.divSepetBlokContent .ItemOrj {
  float: none;
  padding: 0
}

.owl-nav {
  position: static;
  left: auto;
  right: auto;
  top: auto
}

.divSepetBlokContent .SepetListprev {
  font-size: 0;
  float: left;
  cursor: pointer;
  position: absolute;
  left: 15px;
  text-align: center;
  top: 50%;
  margin-top: -25px;
  width: 40px;
  height: 40px;
  background: #eee
}

.divSepetBlokContent .SepetListprev:after {
  font-family: fontawesome;
  color: #a1a1a1;
  font-size: 16px;
  content: "\f053";
  line-height: 40px
}

.divSepetBlokContent .SepetListprev:hover {
}

.divSepetBlokContent .SepetListprev:hover:after {
  color: #fff
}

.divSepetBlokContent .SepetListnext {
  font-size: 0;
  float: left;
  cursor: pointer;
  position: absolute;
  right: 15px;
  text-align: center;
  top: 50%;
  margin-top: -25px;
  width: 40px;
  height: 40px;
  background: #eee
}

.divSepetBlokContent .SepetListnext:after {
  font-family: fontawesome;
  color: #a1a1a1;
  font-size: 16px;
  content: "\f054";
  line-height: 40px
}

.divSepetBlokContent .SepetListnext:hover {
}

.divSepetBlokContent .SepetListnext:hover:after {
  color: #fff
}

.sodexo-container {
  display: flex;
  flex-direction: column
}

.sodexo-container > * {
  margin-top: 13px
}

.sodexo-container > img {
  margin-top: 0
}

.sodexo-container > span {
  color: red
}

.sodexo-container div {
  display: flex;
  flex-direction: column
}

.sodexo-container div input {
  width: 200px
}

span.size_box {
  background-color: #fff;
  line-height: 30px;
  float: left;
  display: block;
  margin-right: 5px;
  cursor: pointer;
  min-height: 30px;
  min-width: 30px;
  padding: 0 3px;
  font-size: 12px;
  color: #000;
  font-weight: 400;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px
}

.ekSecenekValues.noStock span:before {
  content: '';
  top: 13px;
  left: -8px;
  background: #000;
  height: 2px;
  width: calc(100% + 16px);
  position: absolute;
  transform: rotate(45deg);
  z-index: 10
}

.ekSecenekValues.noStock span {
  position: relative;
  overflow: hidden;
  cursor: default
}

.ekSecenekValues.noStock {
  opacity: .3;
  cursor: default
}

#divSepetSuresiGecmisUrunler .regularPrice {
  text-decoration: line-through
}
</style>