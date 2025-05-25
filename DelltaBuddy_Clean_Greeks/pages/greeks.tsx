
import React from 'react';

const Greeks = () => {
  const mockData = [
    { symbol: 'NIFTY', delta: 0.45, gamma: 0.12, theta: -0.35, vega: 0.22 },
    { symbol: 'BANKNIFTY', delta: -0.22, gamma: 0.08, theta: -0.25, vega: 0.30 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Option Greeks</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Symbol</th>
            <th className="border-b p-2">Delta</th>
            <th className="border-b p-2">Gamma</th>
            <th className="border-b p-2">Theta</th>
            <th className="border-b p-2">Vega</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, idx) => (
            <tr key={idx}>
              <td className="border-b p-2">{item.symbol}</td>
              <td className="border-b p-2">{item.delta}</td>
              <td className="border-b p-2">{item.gamma}</td>
              <td className="border-b p-2">{item.theta}</td>
              <td className="border-b p-2">{item.vega}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Greeks;
