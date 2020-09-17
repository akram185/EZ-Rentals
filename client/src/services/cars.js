import api from './api-config'

export const getAllCars = async () => {
  const resp = await api.get('/cars')
  return resp.data
}