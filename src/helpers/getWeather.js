import axios from 'axios'

const API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=6.2518&longitude=-75.5636&hourly=temperature_2m&timezone=auto'

export const getTemperature = async () => {
  const answer = await axios.get(API_URL)
  const newTemperature = answer.data.hourly.temperature_2m[0]
  return newTemperature
}
