<template>
    <div>
        <p>{{ breakTime }}</p>
        <p>Pausa</p>
        <p>{{ productionTimer }}</p>
        <p>Minutos</p>
        <p>{{ timer }} : {{ second }}</p>
        <button type="button" @click="startTimer">Start!</button>
        <button type="button" @click="stopTimer">Stop!</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PomodoroTimer',
  data() {
    return {
      timerId: 0,
      timer: 25,
      breakTime: 5,
      productionTimer: 25,
      second: 0,
    };
  },
  methods: {
    startTimer() {
      this.timerId = setInterval(() => {
        if (this.second === 0) {
          this.second = 59;
          this.timer -= 1;
        }

        this.second -= 1;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timerId);
    },
  },
});
</script>
