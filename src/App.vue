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
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input type="text"
             id="title"
             v-model.lazy="eventData.title"
      >
      <p>{{ eventData.title }}</p>
      <label for="maxNumber">最大人数</label>
      <input type="number"
             id="maxNumber"
             v-model.number="eventData.maxNumber"
      >
      <p>{{ typeof eventData.maxNumber }}</p>
    </div>
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
      currentComponent: 'Home',
      eventData: {
        title: "タイトル",
        maxNumber: 0
      }
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
