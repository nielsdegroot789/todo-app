import useAxiosManual from './useAxiosManual'

/*TODO: make test for this */
/*TODO: make error component */
/* TODO: figure out rerender issue */
const useAdd = ({ data, title, collection, successFunction }) => {
  if (!data && !collection) {
    return console.log('Found no data or collection')
  }

  const { execute, response } = useAxiosManual({
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

  return { executeAdd, response }
}

export default useAdd
