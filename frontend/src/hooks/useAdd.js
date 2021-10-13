import useAxiosManual from './useAxiosManual'

const useAdd = ({ value, title, collection, successFunction }) => {
  console.log(value, title, collection)
  const { execute } = useAxiosManual({
    axiosConfig: {
      method: 'add',
      url: `${collection}/add`,
      data: { value },
    },
    successMessage: `${title} successfully deleted`,
    successFunction,
  })

  const executeAdd = () => {
    execute()
  }

  return { executeAdd }
}

export default useAdd
