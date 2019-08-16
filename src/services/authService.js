import jwtDecode from 'jwt-decode'
import http from './httpService'
import { apiUrl } from "../config.json"

const apiEndpoint = apiUrl + "/auth"
const tokeKey = "token"

http.setJwt(getJwt())

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password })
  localStorage.setItem(tokeKey, jwt)
}

export function loginWithJWT(jwt) {
  localStorage.setItem(tokeKey, jwt)
}

export function logout() {
  localStorage.removeItem(tokeKey)
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokeKey)
    return jwtDecode(jwt)

  } catch (ex) {
    return null
  }
}

export function getJwt() {
  return localStorage.getItem(tokeKey)
}

export default {
  login,
  loginWithJWT,
  logout,
  getCurrentUser,
  getJwt
}