/* eslint-disable no-undef */
import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('smarkwisai@gmail.com')

  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)

    // const getURL = () => {
    //   let url =
    //     `https://auth-supabase-reactjs.vercel.app/`
    //     'http://localhost:5173/'
    //   // Make sure to include `https://` when not localhost.
    //   url = url.includes('http') ? url : `https://${url}`
    //   // Make sure to include a trailing `/`.
    //   url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
    //   return url
    // }

    const { error } = await supabase.auth.signInWithOtp({
     email ,
     options: { emailRedirectTo:  "https://auth-supabase-reactjs.vercel.app/" } 
    })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + React</h1>
        <p className="description">Sign in via magic link with your email below</p>
        <form className="form-widget" onSubmit={handleLogin}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button className={'button block'} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}