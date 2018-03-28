<template>
  <div>
    <div class="btn_search font22" @click="toList">查询</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cityId: '390073',
      arrivalDate: '2018-04-10',
      departureDate: '2018-04-13'
    }
  },
  methods: {
    toList () {
      this.$router.push({path: '/hotelList', query: {cityId: this.cityId, arrivalDate: this.arrivalDate, departureDate: this.departureDate}})
    }
  }
}
</script>
<style>
  .btn_search {
    height: 45px;
    width: 100%;
    color: #fff;
    background: #ff6600;
    text-align: center;
    line-height: 40px;
    border-radius: 3px;
  }
</style>
