import React from 'react';
import './App.css';

import { sendUserInfo } from './apiCalls';


const App = () => {

  return (
    <section className='contact_form'>
        <h1>Contact Form</h1>
        <form>
          <section>
            <label>Name</label>
            <input type='text'/>
          </section>
          <section>
            <label>Email</label>
            <input type='email'/>
          </section>
          <section>
            <label>BirthDate</label>
            <input type='date'/>
          </section>
          <section>
            <label>Would you like to subscribe your email?</label>
            <input type='radio'/>
          </section>
        </form>
        <button>Submit</button>
    </section>
  )
}

export default App;
