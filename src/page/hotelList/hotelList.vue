<template>
  <div>
    <header class="h_header">
      <div class="head_inp">
        <i class="inp_icon"></i>
        <input type="text" placeholder="关键词">
        <i class="inp_close"></i>
      </div>
      <i class="h_back"></i>
    </header>
    <div class="header_fixed_holder"></div>
    <nav class="h_filt">
      <ul>
        <li>星级</li>
        <li>品牌</li>
        <li>位置</li>
        <li>排序</li>
      </ul>
    </nav>
    <section class="h_list"></section>
  </div>
</template>

<style>
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
  left: 10px;
  top: 5px;
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
  padding: 2px 26px 8px 30px;

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
  background: #a35151;
}
.header_fixed_holder {
  height: 45px;
}
</style>
