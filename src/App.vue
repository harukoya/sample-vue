<template>
  <div>
    <LikeHeader>
      <p>みなさん</p>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <h3>はじめまして</h3>
      <p>よろしくおねがいします</p>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" v-on:my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'

export default {
  data() {
    return {
      number: 10
    }
  },
  components: {
    LikeHeader: LikeHeader
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  },
}
</script>
