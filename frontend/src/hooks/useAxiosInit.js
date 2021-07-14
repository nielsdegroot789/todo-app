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
  // Don't know if this is better since there are cases that will be initted and manually...
  // TODO: check when this hook renders, if it renders too much, maybe useCallback?
  const execute = () => {
    executeAxios(axiosConfig)
  }

  return { response, loading, execute }
}
export default useAxiosInit
