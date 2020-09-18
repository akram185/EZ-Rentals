import api from './api-config'

export const getAllCars = async () => {
  const resp = await api.get('/cars')
  return resp.data
}

export const getOneCar = async (id) => {
  const resp = await api.get(`/cars/${id}`)
  return resp.data
}
