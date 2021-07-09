import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const insertIngredient = payload => api.post(`/ingredient`, payload)
export const getAllIngredients = () => api.get(`/ingredients`)
export const updateIngredientById = (id, payload) => api.put(`/ingredient/${id}`, payload)
export const deleteIngredientById = id => api.delete(`/ingredient/${id}`)
export const getIngredientById = id => api.get(`/ingredient/${id}`)

const apis = {
  insertIngredient,
  getAllIngredients,
  updateIngredientById,
  deleteIngredientById,
  getIngredientById,
}

export default apis
