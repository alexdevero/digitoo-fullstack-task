import { useState } from 'react'

import { Header } from './../components/header'
import { FormInput } from './../components/form-input'

interface resJSONUI {
  message: string;
  matches: boolean;
}

export const Homepage = () => {
  const [string1, setString1] = useState('')
  const [string2, setString2] = useState('')
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleStringCheck = () => {
    if (string1.length > 0 && string2.length > 0) {
      setMessage('')

      fetch('http://localhost:3001/api/', {
        method: 'POST',
        body: JSON.stringify({
          str1: string1,
          str2: string2
        }),
        // Adding headers to the request
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then((json: resJSONUI) => {
          setMessage(json.message)
          setIsError(json.matches)
        })
        .catch(err => setMessage(err))
    } else {
      setIsError(true)
      setMessage('Please specify both strings to check.')
    }
  }

  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-lg-8">
            <div className="row">
              <div className="col-md-6">
                <FormInput inputLabel="String 1" inputId="str1" handleInputChange={setString1} />
              </div>

              <div className="col-md-6">
                <FormInput inputLabel="String 2" inputId="str2" handleInputChange={setString2} />
              </div>
            </div>

            {(message && message.length > 1) && <div className={`result mt-2 mb-3 text-center ${isError ? 'text-danger' : 'text-success'}`}>{message}</div>}

            <div className="d-flex justify-content-center">
              <button className="btn btn-primary" onClick={handleStringCheck}>Check strings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
