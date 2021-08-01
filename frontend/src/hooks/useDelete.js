import useAxiosManual from './useAxiosManual'

const useDelete = ({ _id, title, collection, successFunction }) => {
  const { execute } = useAxiosManual({
    axiosConfig: {
      method: 'delete',
      url: `${collection}/delete`,
      data: { _id },
    },
    successMessage: `${title} successfully deleted`,
    successFunction,
  })

  const executeDelete = () => {
    execute()
  }

  return { executeDelete }
}

export default useDelete
