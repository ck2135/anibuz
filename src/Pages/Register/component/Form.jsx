import React from 'react'

const Form = () => {
  return (
  <>
    <h1 className='heading'>Register</h1>
    <section className='container'>
    <form>
        <div className="field">
            <p>Name</p>
            <input type='text'></input>
        </div>
        <div className="field">
            <p>Email</p>
            <input type='email'></input>
        </div>
        <div className="field">
            <p>Phone Number</p>
            <input type='tel'></input>
        </div>

        <div className="form-button">
            <button>Submit!</button>
        </div>
    </form>
    </section>
  </>
  )
}

export default Form