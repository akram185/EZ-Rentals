import api from './api-config'

export const getAllTypes = async () => {
  const resp = await api.get('/types')
  return resp.data
}