<template>
 <!-- <div v-if="step == 0">contents1</div>
 <div v-if="step == 1">contents2</div>
 <div v-if="step == 2">contents3</div>
 <button @click="step = 0">button1</button>
 <button @click="step = 1">button2</button>
 <button @click="step = 2">button3</button> -->

  <!-- 버튼을 클릭하면 actions 의 ajax getData 를 실행시켜주세요. 그리고 mutation 으로 state 를 변경시켜서 p 에 출력해주세요 -->
  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">more</button>

 <button @click="$store.commit('이름변경')">이름변경</button>
 <!-- <button @click="$store.commit('나이변경',store.js에 전달하는 데이터)">나이변경</button> -->
 <button @click="$store.commit('나이변경',10)">나이변경</button>

 <button @click="$store.commit('하트변경')">하트</button>


  <!-- {{ list }} -->
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <!-- when you click the button + the step number -->
      <!-- if your step number become 1, publish the text -->
      <li v-if="step==1" @click="step++">Next</li>
      <!-- if your step number become 2, show Publish -->
      <li v-if="step==2" @click="publish">Publish</li>
    </ul>
    <img src="./assets/logo.svg" class="logo" />
  </div>

  <!-- props 전달 :step="step" -->
  <!-- props 내려보낼 component 에 전달 :imgUrl="imgUrl" -->
  <Container v-bind:list="list" :step="step" :imgUrl="imgUrl" @write="writed=$event" />
  
  <button @click="more">Show More</button>

  <div class="footer">
    <ul class="footer-button-plus">

      <!-- type="file" 파일업로드 -->
      <!-- multiple 여러파일 선택 가능 -->
      <input @change="upload" type="file" multiple id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>



</template>

<script>
import Container from './components/Container.vue'
import list from './assets/list.js'
import axios from 'axios'

export default {
  name:'App',
  data(){
    // 여기 담긴 속성들만 props 전달할수있다.
    return {
      list:list,
      step:3,
      imgUrl:'',
      writed:''
    }
  },
  components:{Container},
  methods:{
    more(){
      // axios.get('url')
      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then(function(result){
        // 요청 성공시 실행 코드
        // result
        console.log(result.data);
        list.push(result.data)
      })
      // 화살표 함수 사용 : 바깥에 있던 this 를 그대로 사용할수있다.
      // .then(result=>{
      //   console.log(result.data);
      //   this.result.push(result.data);
      // })

    // 요청 성공시 .then() 실행
    // 요청 실패시 .catch() 실행
    // axios.post('URL',{name:'jo'}).then().catch((err)=>{
    //   err
    // })
    },

    // 내가 업로드한 이미지 추가하기
    // (e) event 파라메터 추가
    upload(e){  
  let file = e.target.files;
  console.log(file[0].type);

  // 업로드한 이미지의 URL 을 생성
  let url = URL.createObjectURL(file[0])
  // 변수 url 에 저장해서 URL 출력해보기
  console.log(url);
  // 생성된 임시 URL 이 출력됨
  // blob : binary 데이터 다룰때 BLOB 이라는 object 에 담아서 다룬다.

  // imgUrl 안에 url 변수 넣기
  this.imgUrl = url

  // step 을 변경해서 다음 페이지로 넘어가게해주기
  // 가져온 props step 활용
  this.step++;

    },

    // 글 발행시키기 
    publish(){
      // 데이터를 넣을 공간을 만들어서 this.list.unshift(myList) 로 {내가쓴것} 집어넣기 
      const myList = {
        // 객체 안의 양식은 기존 list 객체와 같아야 문제가 없을것이다.
        name: "Kim Hyun",

      userImage: "https://picsum.photos/100?random=3",
      // postImage: "내가 업로드한 이미지 URL",
      postImage: this.imgUrl,
      likes: 36,
      date: "May 15",
      liked: false,

      // content: "내가 입력한 글",
      content: this.writed,
      filter: "perpetua"
      };
      // .unshift() 왼쪽 array 에 자료를 집어넣음
      // this.myList 에 {내가쓴것} 집어넣기
      this.list.unshift(myList);
      // 그리고 발행이 끝나면 메인 페이지 0 으로 돌리기
      this.step=0;
    }
 

  }


}
</script>

<style>
@import 'style.css';

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>