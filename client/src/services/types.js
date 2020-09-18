import api from './api-config'

export const getAllTypes = async () => {
  const resp = await api.get('/types')
  return resp.data
}

export const addType = async (carId, typeId) => {
  const resp = await api.get(`/cars/${carId}/types/${typeId}`)
  return resp.data
}
