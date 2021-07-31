import { useContext } from 'react'
import { NotificationContext } from '../notification/NotificationProvider'

const useNotify = () => useContext(NotificationContext)

export default useNotify
