<template>
    <div v-if="step == 0">
      Container
      <!-- {{ list }} -->
      <!-- <Post v-bind:list="list[0]"/>
      <Post v-bind:list="list[1]"/>
      <Post v-bind:list="list[2]"/> -->
      <Post v-bind:list="list[i]" v-for="(a,i) in list" :key="i" />
    </div>

    <div v-if="step == 1">

<!-- 필터선택페이지 -->
<div class="upload-image" :style="`background-image: url(${imgUrl})`">{{ imgUrl }}</div>
  <div class="filters">
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
  </div>
  </div>


<div v-if="step == 2">
<!-- 글작성페이지 -->
<!-- style 에 업로드한 이미지 넣기 -->
<div class="upload-image" ></div>
  <div class="write">

    <!-- 작성한 글 App.vue 로 올려보내기  -->
    <!-- $emit : textareat 의 value 값을 부모 App.vue 로 보내기 -->
    <textarea @input="$emit('write',$event.target.value)" class="write-box">write!</textarea>
  </div>

</div>


</template>

<script>
import Post from '../components/Post.vue'

export default {
    name:'Container',
    components:{Post},
    props:{
      list:Array,         
      step:Number,
      imgUrl:String
},
    data(){
      return{
      }
    }

}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
/* background: url('url'); */
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>