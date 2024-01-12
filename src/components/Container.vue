<template>
    <div>
      Container
      <!-- {{ list }} -->
      <!-- <Post v-bind:list="list[0]"/>
      <Post v-bind:list="list[1]"/>
      <Post v-bind:list="list[2]"/> -->
      <Post v-bind:list="list[i]" v-for="(a,i) in list" :key="i" />
  </div>
</template>

<script>
import Post from '../components/Post.vue'

export default {
    name:'Container',
    components:{Post},
    props:{list:Array}

}
</script>

<style>

</style>