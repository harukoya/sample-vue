<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" v-on:my-click="incrementNumber"></LikeNumber>
    <button v-on:click="currentComponent = 'Home'">Home</button>
    <button v-on:click="currentComponent = 'About'">About</button>

    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'

export default {
  data() {
    return {
      number: 10,
      currentComponent: 'Home'
    }
  },
  components: {
    LikeHeader: LikeHeader,
    About: About,
    Home: Home
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  },
}
</script>
