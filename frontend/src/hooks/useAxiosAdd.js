import useAxiosManual from './useAxiosManual'

/*TODO: make test for this */
/*TODO: make error component */
const useAdd = ({ data, title, collection, successFunction }) => {
  if (!data && !collection) {
    return console.log('Found no data or collection')
  }
  console.log('rerendered useAdd')
  const { execute } = useAxiosManual({
    axiosConfig: {
      method: 'post',
      url: `${collection}/add`,
      data,
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
