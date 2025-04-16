import { formatter } from '../util/investment.js';

export default function Result({ annualData, initialInvestment }) {
  let totalInterest = 0; // 누적 이자
  let investedCapital = initialInvestment; // 누적 투자 자본

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data, index) => {
          totalInterest += data.interest; // 매년 이자를 누적
          investedCapital += data.annualInvestment; // 매년 투자 자본을 누적
          return (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
