import api from './api-config'

export const getAllVehicles = async () => {
  const resp = await api.get('/vehicle')
  return resp.data
}