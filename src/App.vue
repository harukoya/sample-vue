<template>
  <div>
    <LikeHeader v-slot:default="slotProps">
      <p>{{ slotProps }}</p>
      <p>みなさん</p>
      <h3>はじめまして</h3>
      <p>よろしくおねがいします</p>
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
