import api from './api-config'

export const getAllVehicles = async () => {
  const resp = await api.get('/vehicles')
  return resp.data
}

export const getOneVehicle = async (id) => {
  const resp = await api.get(`/vehicles/${id}`)
  return resp.data
}