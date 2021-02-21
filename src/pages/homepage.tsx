import { useState } from 'react'
import sanitizeHtml from 'sanitize-html'

import { Header } from './../components/header'
import { FormInput } from './../components/form-input'

interface resJSONUI {
  message: boolean;
}

const texts = {
  passed: 'Portion of "str1" characters can be rearranged to match "str2".',
  failed: 'Sorry, portion of "str1" characters can\'t be rearranged to match "str2".'
}

export const Homepage = () => {
  const [string1, setString1] = useState('')
  const [string2, setString2] = useState('')
  const [isScramble, setIsScramble] = useState<null | boolean>(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleInput = (type: 'str1' | 'str2', value: string) => {
    if (type === 'str1') {
      setString1(sanitizeHtml(value))
    } else {
      setString2(sanitizeHtml(value))
    }
  }

  const handleStringCheck = () => {
    if (string1.length > 0 && string2.length > 0) {
      setIsScramble(null)
      setErrorMessage('')

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
          setIsScramble(json.message)
        })
        .catch(err => setIsScramble(err))
    } else {
      setIsScramble(null)
      setErrorMessage('Please specify both strings to check.')
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
                <FormInput
                  inputLabel="String 1"
                  inputType="str1"
                  inputId="str1"
                  handleInputChange={handleInput}
                />
              </div>

              <div className="col-md-6">
                <FormInput
                  inputLabel="String 2"
                  inputType="str2"
                  inputId="str2"
                  handleInputChange={handleInput}
                />
              </div>
            </div>

            {(isScramble !== null) && (
              <div className={`result mt-2 mb-3 text-center ${!isScramble ? 'text-danger' : 'text-success'}`}>
                {isScramble ? texts.passed : texts.failed}
              </div>
            )}

            {(errorMessage && errorMessage.length > 0) && (
              <div className="mt-2 mb-3 text-center text-danger">
                {errorMessage}
              </div>
            )}

            <div className="d-flex justify-content-center">
              <button className="btn btn-primary" onClick={handleStringCheck}>Check strings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
