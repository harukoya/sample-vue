<template>
  <div>
    <slot name="title" v-bind:user="user" text="text">でふぉると</slot>
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'Hoge',
        lastName: 'Fuga'
      }
    }
  }
}

</script>
