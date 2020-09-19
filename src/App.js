import React from 'react';
import './App.css';

import Name from './Components/Name';
import Email from './Components/Email';
import BirthDate from './Components/BirthDate';
import Button from './Components/Button';

const App = () => {

  return (
    <section>
        <h1>Contact Form</h1>
        <form>
           <Name />
           <Email />
           <BirthDate />
           <Button />
        </form>
        {/* add aggrement to be contacted must be checked to make button work */}
    </section>
  )
}

export default App;
