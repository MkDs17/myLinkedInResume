import React, { useState, useEffect } from 'react';
import { Pie, Line } from 'react-chartjs-2';

import './second.scss';

import { fakerChartsPieDatas, fakerChartsLineDatas } from '../../../../utils/funtions';

const Second = () => {
  console.log('fakerChartsDatas()', fakerChartsPieDatas());

  const [chartPieDatas, setChartPieDatas] = useState([]);
  const [chartLineDatas, setChartLineDatas] = useState([]);

  useEffect(() => {
    setChartPieDatas(fakerChartsPieDatas());
    setChartLineDatas(fakerChartsLineDatas());
  }, []);

  return (
    <div id="second">
      <div className="second-block">
        <div className="second-block-title">
          <h2>SECOND PAGE</h2>
          <h3>This is the second page</h3>
        </div>
        <div className="second-block-section">
          <div className="second-block-section-chart">
            <h4>My favorites languages</h4>
            <Pie data={chartPieDatas} />
          </div>
          <div className="second-block-section-chart">
            <h4>My learning curve</h4>
            <Line data={chartLineDatas} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
