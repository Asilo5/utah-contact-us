import React from 'react';
import './App.css';

import { sendUserInfo } from './apiCalls';

const App = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [birthdate, setBirthdate] = React.useState('');
  const [subscribe, setSubscribe] = React.useState(false);

  let handleClick = () => {
    setSubscribe(!subscribe);
  }

  return (
    <section className='contact_form'>
        <h1>Contact Form</h1>
        <form>
          <section>
            <label>Name</label>
            <input type='text'
                   name='name'
                   value={name}
                   onChange={(e) => setName(e.target.value)}
            />
          </section>
          <section>
            <label>Email</label>
            <input type='email'
                   name='email'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <section>
            <label>BirthDate</label>
            <input type='date'
                   name='birthdate'
                   value={birthdate}
                   onChange={(e) => setBirthdate(e.target.value)}
            />
          </section>
          <section>
            <label>Would you like to subscribe your email?</label>
            <input type='checkbox'
                   checked={subscribe}
                   onClick={handleClick}
            />
          </section>
        </form>
        <button>Submit</button>
    </section>
  )
}

export default App;
