<template>
  <div class="mainContainer">
    <header class="h_header">
      <div class="head_inp">
        <i class="inp_icon"></i>
        <input type="text" placeholder="关键词">
        <i class="inp_close"></i>
      </div>
      <div class="date_div">
          <p>入<span class="font_orange">{{getArrivalDate(arrivalDate)}}</span></p>
          <p>离<span class="font_orange">{{getDepartureDate(departureDate)}}</span></p>
      </div>
      <span class="header_hotel_map"><img src="../../assets/image/header_hotel_map.png"></span>
      <i @click="toBack" class="h_back"></i>
    </header>
    <div class="header_fixed_holder"></div>
    <nav class="h_filt">
      <ul>
        <li @click="changePRView">星级</li>
        <li>品牌</li>
        <li>位置</li>
        <li>排序</li>
      </ul>
    </nav>
    <div class="nav_fixed_holder"></div>
    <section class="h_list">
      <div class="div_list">
        <ul v-for="h in hotelList"class="ul_list">
          <li><img :src='getHotelPic(h)' alt=""></li>
          <li>
            <p class="hotel_name">{{h.hotelName}}</p>
            <p class="hotel_des">{{h.esdName}}</p>
            <p class="hotel_distance">距您xxx公里</p>
            <p class="hotel_pic_icon">惠 返</p>
            <p class="hotel_txt_icon">优惠文字优惠文字</p>
            <div class="hotel_price"><span class="font_orange">￥<em class="font18">{{h.minPrice}}</em></span>起</div>
          </li>
        </ul>
      </div>
    </section>
    <div class="swipe_more">
      <p>{{msg}}</p>
    </div>
    <price-and-rank v-show="prFlag" :prFlag='prFlag'></price-and-rank>
  </div>
</template>
<script>
import priceAndRank from '../../components/filt/priceAndRank'
import {getHotelList} from '../../service/hotelList/hotelListReq'
export default {
  data () {
    return {
      prFlag: false, // 价格品牌筛选标记
      arrivalDate: '',
      departureDate: '',
      cityId: '',
      hotelList: [],
      curPage: '1',
      msg: '上滑加载显示更多'
    }
  },
  created () {
    this.arrivalDate = this.$route.query.arrivalDate
    this.departureDate = this.$route.query.departureDate
    this.cityId = this.$route.query.cityId
  },
  mounted () {
    this.getHotelList('1')
  },
  methods: {
    async getHotelList (page) {
      let params = {}
      params.pageIndex = page
      params.cityId = this.cityId
      params.arrivalDate = this.arrivalDate
      params.departureDate = this.departureDate
      let resObj = await getHotelList(params)
      console.log(resObj)
      let detail = resObj.detail ? resObj.detail : {}
      this.hotelList = detail.hotelList ? detail.hotelList : []
      this.curPage = page
    },
    changePRView () {
      this.prFlag = !this.prFlag
    },
    toBack () {
      this.$router.go(-1)
    },
    getArrivalDate (arrDate) {
      return arrDate.split('-')[1] + '-' + arrDate.split('-')[2]
    },
    getDepartureDate (depaDate) {
      return depaDate.split('-')[1] + '-' + depaDate.split('-')[2]
    },
    getHotelPic (obj) {
      return (obj.imageUrl == null || obj.imgUrl == "") ? '../../assets/image/nopic.png' : obj.imageUrl
    }
  },
  components: {priceAndRank}
}
</script>
<style>
.mainContainer{
  height: 100%;
}
.h_header {
  /* display: table; */
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  /* background: #1fd1b9; */
  min-width: 320px;
  padding: 0 55px;
  border-bottom: 1px solid #e5e5e5;
  z-index: 98;
  background: #fff;
}
.h_back {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 55px;
  height: 43px;
  /* background: #bcb6ca; */
}
.h_back:before {
  position: absolute;
  content: '';
  width: 14px;
  height: 14px;
  border-top: 2px solid #dd741e;
  border-left: 2px solid #dd741e;
  margin-top: 13px;
  margin-left: 20px;
  transform: rotate(-45deg);

}
.inp_icon {
  left: 60px;
  top: 4px;
  position: absolute;
  display: block;
  width: 24px;
  height: 24px;
  /* background: #cccca8; */
}
.inp_icon:before {
  content: '';
  position: absolute;
  display: block;
  width: 12px;
  height: 12px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.inp_icon:after {
  content: '';
  position: absolute;
  width: 8px;
  height: 1px;
  background: #ccc;
  bottom: 8px;
  right: 6px;
  transform: rotate(45deg)

}
.inp_close {
  position: absolute;
  background: #8b8b8b;
  width: 16px;
  height: 16px;
  right: 6px;
  top: 6px;
  border-radius: 50%;
}
.inp_close:before {
  position: absolute;
  content: '';
  width: 8px;
  height: 2px;
  background: #fff;
  left: 4px;
  top: 7px;
  transform: rotate(45deg);
}
.inp_close:after {
  position: absolute;
  content: '';
  width: 8px;
  height: 2px;
  background: #fff;
  left: 4px;
  top: 7px;
  transform: rotate(-45deg);
}
.head_inp {
  position: relative;
  height: 18px;
  border: 1px solid #ccc;
  top: 7px;
  border-radius: 3px;
  /* background: #cccccc; */
  padding: 2px 26px 8px 80px;
}
.date_div {
  position: absolute;
  top: 9px;
  width: 55px;
  height: 26px;
  border-right: 1px solid #e5e5e5;
}
.date_div p {
  margin-left: 2px;
  padding:1px;
  line-height: 12px;
  font-size: 6px;
}
.header_hotel_map {
  position: absolute;
  height: 45px;
  top: 8px;
  right: 16px;
}
.header_hotel_map img {
  height: 50%;
}
.head_inp input {
  border: none;
  margin-left: 3px;
  font-size: 14px;
  /* margin-bottom: 10px; */
  vertical-align: middle;
  line-height: 18px;
  width: 100%;
}
.h_filt {
  position: fixed;
  width: 100%;
  height: 55px;
  left: 0;
  background: #fff;
  border-bottom: solid 1px #e6e6e6;
  z-index: 2;
}
.h_filt ul {
  display: -webkit-box;
}
.h_filt ul li {
  -webkit-box-flex: 1;
  text-align: center;
  margin: 15px 0;
  border-right: solid 1px #e6e6e6;
  width: 0%;
}
.h_filt ul li:last-of-type{
  border: none;
}
.h_list {
  width: 100%;
  height: aoto;
  background: #fff;
}
.header_fixed_holder {
  height: 45px;
}
.nav_fixed_holder {
  height: 55px;
}
.div_list {
  width: 97%;
  padding-left: 10px;
  background: #fff;
}
.ul_list {
  display: table;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
}
.ul_list li {
  display: table-cell;
  vertical-align: middle;
}
.ul_list li:nth-of-type(1){
  padding-top: 5px;
  padding-left: 3px;
  width: 96px;
}
.ul_list li:nth-of-type(2){
  position: relative;
}
.ul_list li p {
  font-size: 12px;
  margin-left: 8px;
  margin-top: 3px;
  color:#808080;
}
.hotel_name {
  font-size: 13px !important;
  color: #000000 !important;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hotel_des {
  width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hotel_distance {
  width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hotel_txt_icon {
  width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hotel_price {
  position: absolute;
  right: 10px;
  bottom: 10px;
  text-align: right;
}
.swipe_more {
  height: 38px;
  background: #fff;
  border-top: 1px solid #ccc;
  text-align: center;

}
.swipe_more p {
  font-size: 12px;
  margin-top: 10px;
  color: #999
}
</style>
