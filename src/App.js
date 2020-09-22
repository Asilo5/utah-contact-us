import React from 'react';
import './App.css';

import { sendUserInfo } from './apiCalls';

const App = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [birthdate, setBirthdate] = React.useState('');
  const [subscribe, setSubscribe] = React.useState(false);
  const [sentPost, setSentPost] = React.useState('');

  let handleClick = () => {
    setSubscribe(!subscribe);
  }

  let emailConfirmation = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  let submitState = (e) => {
    e.preventDefault();
    let userObj = {
      name,
      email,
      birthdate,
      subscribe
    }
    sendUserInfo(userObj);
    setSentPost('Submitted! Thank you =)');
  }

  return (
    <section className='contact_form'>
        <h1>Contact Form</h1>
        <form>
          <section>
            <div className='inputs'>
              <label>Name</label>
              <input type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
              />
            </div>
          </section>
           
          <section>
            <div className='inputs'>
              <label>Email</label>
              <input type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </section>

          <section className='inputs'>
            <label>BirthDate</label>
            <input type='date'
                   name='birthdate'
                   value={birthdate}
                   onChange={(e) => setBirthdate(e.target.value)}
            />
          </section>
          
          <section>
            <div className='checkbox'>
              <label>Would you like to subscribe your email?</label>
              <input type='checkbox'
                    checked={subscribe}
                    onChange={handleClick}
              />
            </div>
          </section>
          {!emailConfirmation.test(email) || name.length === '' || subscribe === false ?
          <div className='inputs error_handling'>
            <p>Please make sure name, email, and subscribtion are all filled and checked!</p> 
            <button disabled={true} className='disabled'> Submit </button>
          </div>
          :
          <div className='inputs'>
            <p className='submitted_text'>{sentPost}</p>
              <button onClick={submitState}> Submit </button>
          </div>
        }
        </form>
    </section>
  )
}

export default App;
