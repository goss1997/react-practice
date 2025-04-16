import Header from './components/Header/Header.jsx';
import Result from './components/Result.jsx';
import UserInput from './components/UserInput.jsx';
import { calculateInvestmentResults, formatter } from './util/investment.js';
import { useState } from 'react';

const INIT_TYPE = ['INITIAL INVESTMENT', 'ANNUAL INTEREST', 'EXPECTED RETURN', 'DURATION'];

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleInputChange(type, value) {
    switch (type) {
      case INIT_TYPE[0]:
        setInitialInvestment(value);
        break;
      case INIT_TYPE[1]:
        setAnnualInvestment(value);
        break;
      case INIT_TYPE[2]:
        setExpectedReturn(value);
        break;
      case INIT_TYPE[3]:
        setDuration(value);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Header />
      <div id='user-input'>
        <div className='input-group'>
          <UserInput type={INIT_TYPE[0]} onChange={handleInputChange} />
          <UserInput type={INIT_TYPE[1]} onChange={handleInputChange} />
        </div>
        <br></br>
        <div className='input-group'>
          <UserInput type={INIT_TYPE[2]} onChange={handleInputChange} />
          <UserInput type={INIT_TYPE[3]} onChange={handleInputChange} />
        </div>
      </div>
      <Result resultData={0} />
    </>
  );
}

export default App;
