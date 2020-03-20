const BLOG_TOKEN = 'BLOG_TOKEN'

export const setToken = token => {
  localStorage.setItem(BLOG_TOKEN, token)
}

export const getToken = () => {
  return localStorage.getItem(BLOG_TOKEN)
}

export const isLogin = () => {
  const token = getToken()

  if (token) {
    return true
  } else {
    return false
  }
}
