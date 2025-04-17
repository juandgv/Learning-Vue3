import { useWeatherStore } from '@/stores/weatherStore'
import { getTemperature } from '@/helpers/getWeather'

export const useWeather = async () => {
  const Temperature = await getTemperature()
  const weatherStore = useWeatherStore()

  weatherStore.setTemperature(Temperature)
  return weatherStore
}
