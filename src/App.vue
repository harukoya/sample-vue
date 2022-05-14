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
      <label for="host">主催者</label>
      <input type='text'
             id='host'
             v-model.trim="eventData.host"
      >
      <p>{{ eventData.host }}</p>

      <label for="detail">イベントの内容</label>
      <textarea name="" id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space: pre;">{{ eventData.detail }}</p>

      <input type="checkbox"
             id="isPrivate"
             v-model="eventData.isPrivate"
      >
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>

      <p>参加条件</p>
      <input type="checkbox"
             id="10"
             value="10代"
             v-model="eventData.target"
      >
      <label for="10">10代</label>
      <input type="checkbox"
             id="20"
             value="20代"
             v-model="eventData.target"
      >
      <label for="20">20代</label>
      <input type="checkbox"
             id="30"
             value="30代"
             v-model="eventData.target"
      >
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>
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
        maxNumber: 0,
        host: '',
        detail: '',
        isPrivate: false,
        target: [],
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
