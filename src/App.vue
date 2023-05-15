<template>
  <PomodoroTimer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PomodoroTimer from './components/pomodoro/PomodoroTimer.vue';

export default defineComponent({
  name: 'App',
  components: {
    PomodoroTimer,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
