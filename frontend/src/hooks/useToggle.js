import { useState } from 'react'

const useToggle = () => {
  const [isToggled, setToggle] = useState(false)

  const toggle = () => {
    setToggle(!isToggled)
  }

  return { isToggled, toggle }
}

export default useToggle
