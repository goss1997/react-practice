import Header from './components/Header/Header.jsx';
import Result from './components/Result.jsx';
import UserInput from './components/UserInput.jsx';
import { calculateInvestmentResults, formatter } from './util/investment.js';
import { useState } from 'react';

const INIT_TYPE = ['INITIAL INVESTMENT', 'ANNUAL INTEREST', 'EXPECTED RETURN', 'DURATION'];

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(300);
  const [expectedReturn, setExpectedReturn] = useState(5.5);
  const [duration, setDuration] = useState(12);

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

  const annualData = calculateInvestmentResults({
    initialInvestment: parseFloat(initialInvestment),
    annualInvestment: parseFloat(annualInvestment),
    expectedReturn: parseFloat(expectedReturn),
    duration: parseInt(duration),
  });

  return (
    <>
      <Header />
      <div id='user-input'>
        <div className='input-group'>
          <UserInput type={INIT_TYPE[0]} onChange={handleInputChange} value={initialInvestment} />
          <UserInput type={INIT_TYPE[1]} onChange={handleInputChange} value={annualInvestment} />
        </div>
        <br></br>
        <div className='input-group'>
          <UserInput type={INIT_TYPE[2]} onChange={handleInputChange} value={expectedReturn} />
          <UserInput type={INIT_TYPE[3]} onChange={handleInputChange} value={duration} />
        </div>
      </div>
      <Result annualData={annualData} initialInvestment={initialInvestment}/>
    </>
  );
}

export default App;
