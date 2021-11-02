import useAxiosManual from './useAxiosManual'

const useAdd = ({ data, title, collection, successFunction }) => {
  const { execute } = useAxiosManual({
    axiosConfig: {
      method: 'add',
      url: `${collection}/add`,
      data: { data },
    },
    successMessage: title ? `${title} successfully added` : false,
    successFunction,
  })

  const executeAdd = () => {
    execute()
  }

  return { executeAdd }
}

export default useAdd
