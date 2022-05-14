<template>
  <div>
    <p>About</p>
    <input>
  </div>
</template>

<script>
  export default {
    destroyed() {
      console.log("destroyed")
    },
    deactivated() {
      console.log("deactivate")
    },
    activated() {
      console.log("activate")
    }
  }
</script>
