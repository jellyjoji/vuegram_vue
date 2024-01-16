<template>
    <div style="padding : 10px">
      <h4>팔로워</h4>
      <input placeholder="?" />
      <div class="post-header">
        <div class="profile"></div>
        <span class="profile-name">사용자명</span>
      </div>
    </div>
    </template>

<script>
import {onMounted, ref} from 'vue'
import axios from 'axios';

export default {
    name:'mypage',
    setup(){
        // ref(데이터) : setup()안에서 데이터를 생성하는 법
        let follower=ref([]);

        onMounted(()=>{
            // composition API 안에서 Ajax 요청 및 데이터 변경하는 법
            axios.get('/follower.json').then((a)=>{
                // a 는 가져온 데이터
                // 데이터를 수정하려면 데이터.value 를 써야한다. 
                follower.value=a.data
                // follower 안의 [array] 에 a 데이터를 저장시킴

            })
        })
        return{follower}
    }

}
</script>

<style>

</style>