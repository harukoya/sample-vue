<template>
  <div>
    <p>いいね（{{totalNumber / 2}}）</p>
    <button v-on:click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      required: true
    }
  },
  methods: {
    increment: function() {
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>

