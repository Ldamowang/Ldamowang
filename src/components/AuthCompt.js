/*
 * @Author: liyi
 * @LastEditors: liyi
 * @Date: 2023-05-04 20:37:42
 * @LastEditTime: 2023-05-04 21:00:08
 */
import { Navigate } from 'react-router-dom'
function AuthComponent({ children }) {
  // const isToken = getToken()
  const isToken = true
  if (isToken) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" replace />
  }
}
export { AuthComponent }
