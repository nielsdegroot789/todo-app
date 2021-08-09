import { useState } from 'react'

const useToggle = () => {
  // TODO: support multiple toggleCases
  const [isToggled, setToggle] = useState(false)

  const toggle = () => {
    setToggle(!isToggled)
  }

  return [isToggled, toggle]
}

export default useToggle
