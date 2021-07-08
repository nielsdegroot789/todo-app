import axios from 'axios'
import { useEffect, useState } from 'react'
import useNotify from './useNotify'

axios.defaults.baseURL = 'http://localhost:5000/'
//TODO: useAxiosExecute?
const useAxios = params => {
  const notify = useNotify()

  const [response, setResponse] = useState(null)
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  const fetchData = async params => {
    try {
      const response = await axios.request(params)
      setResponse(response.data)

      if (params?.successMessage) {
        notify({ title: params.successMessage })
      }

      setLoading(false)
    } catch (error) {
      setError(error)
      notify({ title: params.errorMessage || 'oops, something went wrong!' })
    }
  }

  useEffect(() => {
    fetchData(params)
  }, [])

  return { response, error, loading, execute }
}
export default useAxios
