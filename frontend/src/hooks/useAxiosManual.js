import useAxiosCore from './useAxiosCore'

const useAxiosManual = ({
  axiosConfig = {},
  successMessage,
  errorMessage,
  successFunction = () => {},
}) => {
  const { response, error, loading, executeAxios } = useAxiosCore({
    axiosConfig,
    successMessage,
    errorMessage,
    successFunction,
  })

  const execute = () => {
    executeAxios(axiosConfig)
  }
  return { response, error, loading, execute }
}

export default useAxiosManual
