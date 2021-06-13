import { useState } from 'react'

const useInput = (initVal) => {
  const [val, setVal] = useState(initVal)
  return [
    { value: val, onChange: (e) => setVal(e.target.value) },
    () => {
      setVal(initVal)
      console.log(initVal)
    }
  ]
}

export default useInput
