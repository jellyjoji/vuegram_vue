<template>
  <div class="filter-item" :class="filter" :style="`background-image: url(${imgUrl});`">
  FilterBox
  {{ filter }}
  
  <!-- 원하는 곳에 구멍을 뚫고 <slot></slot> -->
  <slot></slot>

  <!-- slot 여러개 쓸때는 name="" 이름 붙여 사용 -->
  <slot name="a"></slot>
  <slot name="b"></slot>

  </div> 
</template>

<script>
export default {
name:'fliterbox',
props:{
    imgUrl:String,
    filter:String
}
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>