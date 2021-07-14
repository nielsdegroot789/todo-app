import axios from 'axios'
import { useState } from 'react'
import useNotify from './useNotify'

const useAxiosCore = ({
  axiosConfig,
  successMessage,
  errorMessage,
  successFunction = () => {},
}) => {
  console.log(axiosConfig, successFunction)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  axios.defaults.baseURL = 'http://localhost:5000/'

  const notify = useNotify()
  console.log(axiosConfig)
  const executeAxios = async axiosConfig => {
    try {
      const response = await axios.request(axiosConfig)
      setResponse(response.data)

      await successFunction()
      if (successMessage) {
        notify({ title: successMessage })
      }

      setLoading(false)
    } catch (error) {
      setError(error)
      notify({ title: errorMessage || 'oops, something went wrong!' })
    }
  }
  return { executeAxios, response, error, loading }
}

export default useAxiosCore
