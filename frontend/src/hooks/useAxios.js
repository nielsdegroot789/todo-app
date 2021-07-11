import axios from 'axios'
import { useEffect, useState } from 'react'
import useNotify from './useNotify'

axios.defaults.baseURL = 'http://localhost:5000/'

const useAxios = ({ axiosConfig = {}, manualCancel, successMessage, errorMessage }) => {
  const notify = useNotify()
  const [response, setResponse] = useState(null)
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  const fetchData = async axiosConfig => {
    try {
      const response = await axios.request(axiosConfig)
      setResponse(response.data)

      if (successMessage) {
        notify({ title: successMessage })
      }

      setLoading(false)
    } catch (error) {
      setError(error)
      notify({ title: errorMessage || 'oops, something went wrong!' })
    }
  }

  const execute = () => {
    fetchData(axiosConfig)
  }

  useEffect(() => {
    if (!manualCancel) {
      fetchData(axiosConfig)
    }
  }, [])

  return { response, error, loading, execute }
}
export default useAxios
