<template>
  <div class="main">
    <button v-on:click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>現在設定されているアニメーション：{{ myAnimation }}</p>
    <button v-on:click="show = !show">切り替え</button>
    <br><br>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class='circle' v-if="show"></div>
    </transition>
    <br>
    <button @click="myComponent = 'ComponentA'">コンポーネントAを表示</button>
    <button @click="myComponent = 'ComponentB'">コンポーネントBを表示</button>
    <transition name='fade' mode='out-in'>
      <component :is="myComponent"></component>
    </transition>
    <transition name="fade" mode="out-in">
      <p v-if="show" key='bye'>さようなら</p>
      <p v-else key='hello'>こんにちは</p>
    </transition>
    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__rubberBand"
    >
      <p v-if="show">Hello (animation by animated.css)</p>
    </transition>
    <transition
      v-bind:name="myAnimation"
    >
      <p v-if="show">bye (animation by css)</p>
    </transition>
  </div>
  
</template>

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'

export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      show: true,
      myAnimation: '',
      myComponent: 'ComponentA'
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = "scale(0)";
    },
    enter(el, done) {
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    leave(el, done) {
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 20);
    }
  }
}
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}

</style>
