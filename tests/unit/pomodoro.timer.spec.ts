import { shallowMount } from '@vue/test-utils';
import PomodoroTimer from '@/components/pomodoro/PomodoroTimer.vue';

describe('PomodoroTimer.vue', () => {
  it('renders the timer and break time when mounted', () => {
    const wrapper = shallowMount(PomodoroTimer);
    expect(wrapper.text()).toContain('25');
    expect(wrapper.text()).toContain('5');
  });

  it('starts the timer when the Start button is clicked', async () => {
    jest.useFakeTimers(); // Usa timers falsos para manipular o tempo
    const wrapper = shallowMount(PomodoroTimer);
    await wrapper.find('button').trigger('click');
    jest.advanceTimersByTime(2000); // Avança o tempo em 2 segundos
    expect(wrapper.vm.second).toBe(57); // Espera que os segundos tenham diminuído
    jest.useRealTimers(); // Volta para os timers reais
  });

  it('stops the timer when the Stop button is clicked', async () => {
    jest.useFakeTimers();
    const wrapper = shallowMount(PomodoroTimer);
    await wrapper.find('button').trigger('click'); // Inicia o timer
    jest.advanceTimersByTime(2000); // Avança o tempo em 2 segundos
    await wrapper.findAll('button')[1].trigger('click'); // Para o timer
    jest.advanceTimersByTime(2000); // Avança o tempo em 2 segundos
    expect(wrapper.vm.second).toBe(57); // Espera que os segundos não tenham diminuído, já que o timer foi parado
    jest.useRealTimers();
  });
});
