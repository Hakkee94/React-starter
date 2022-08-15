import {useRef, useEffect, useState} from 'react'
import Input from './Input'

const Form = () => {
  const [formData, setFormData] = useState({login: ''})
  const formRef = useRef()
  const loginRef = useRef({login: ''})

  useEffect(() => {
    console.log(formRef)
    formRef.current.focus()

    //formRef.current.setAttribute('class', 'input')
  }, [])

  console.log('rerender')

  return (
    <form>
      <input type="text" ref={formRef} onChange={(e) => {
        loginRef.current.login = e.target.value
      }}/>
      <Input value={loginRef.current}/>

      <button>send</button>
    </form>
  )
}

export default Form