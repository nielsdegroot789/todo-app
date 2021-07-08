import axios from 'axios'
import { useEffect, useState } from 'react'

axios.defaults.baseURL = 'http://localhost:5000'

const useAxios = async ({ method, url, body = null, headers = null }) => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then(response => {
        setResponse(response)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [method, url, body, headers])

  return { response, error, loading }
}
export default useAxios
