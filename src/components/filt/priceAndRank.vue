<template>
  <div v-show='prFlag' class="pr_box">
    <div @click="changePRView" class="pr_box_mask"></div>
    <div class="pr_box_content">
      <div class="price_filt">
        <h4>价格</h4>
        <div>
          <ul class="priceRange clearfix">
            <li>不限</li>
            <li>￥150以下</li>
            <li>￥150以下</li>
            <li>￥150以下</li>
            <li>￥150以下</li>
            <li>￥150以下</li>
          </ul>
        </div>
      </div>
      <div class="rank_filt clearfix">
        <h4>星级</h4>
        <div>
          <ul class="rankRange clearfix">
            <li>不限</li>
            <li>二星级/经济型</li>
            <li>二星级/经济型</li>
            <li>二星级/经济型</li>
            <li>二星级/经济型</li>
            <li>二星级/经济型</li>
          </ul>
        </div>
      </div>
      <div class="btn_search_pr">查询</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // prFlag: false
    }
  },
  methods: {
    changePRView () {
      this.prFlag = !this.prFlag
    }
  },
  props: ['prFlag']
}
</script>

<style>
  .pr_box_mask {
    position: fixed;
    display: block;
    top: 45px;
    left: 0;
    width: 100%;
    height: 1000px;
    background: rgba(51, 51, 51, 0.4);
    z-index:3;
  }
  .pr_box_content {
    width: 100%;
    /* height: 276px; */
    position: fixed;
    padding: 12px;
    top: 45px;
    left: 0;
    background: #f3f3f3;
    z-index: 99;
    box-sizing: border-box;
  }
  .priceRange {
    box-sizing: border-box;
  }
  .price_filt h4 {
    font-size: 16px;
    padding: 5px 0;
  }
  .priceRange li {
    width: 30%;
    height: 24px;
    text-align: center;
    margin: 1% 2% 1% 0;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 13px;
    margin-right: 2%;
    float: left;
    line-height: 24px;
  }
  .rankRange {
    font-size: 16px;
    padding: 5px 0;
  }
  .rankRange li {
    width: 30%;
    height: 24px;
    text-align: center;
    margin: 1% 2% 1% 0;
    font-size: 13px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 2%;
    float: left;
    line-height: 24px;
  }
  .btn_search_pr {
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    border-radius: 3px;
    background: #ff7600;
    color: #fff;
    text-align: center;
    font-size: 20px;
    line-height: 45px;
  }
</style>
