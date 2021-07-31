import { useEffect } from 'react'
import useAxiosCore from './useAxiosCore'

const useAxiosInit = ({
  axiosConfig = {},
  successMessage,
  errorMessage,
  successFunction = () => {},
}) => {
  const { executeAxios, response, loading } = useAxiosCore({
    axiosConfig,
    successMessage,
    errorMessage,
    successFunction,
  })

  useEffect(() => {
    executeAxios(axiosConfig)
  }, [])

  const refresh = () => {
    executeAxios(axiosConfig)
  }

  return { response, loading, refresh }
}
export default useAxiosInit
