import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useWeatherStore = defineStore('weather', () => {
  const temperature = ref(0)
  const setTemperature = (temp) => {
    temperature.value = temp
  }
  return { temperature, setTemperature }
})
