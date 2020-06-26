import _ from 'lodash';
import faker from 'faker';

export const randomNumber = (min, max) => {
  const number = _.random(min, max);
  return number;
};

export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1.');
};

export const fakerGeneralsDatas = () => {
  faker.locale = 'fr';
  const datasArray = [];

  let i;
  for (i = 0; i < randomNumber(10, 50); i++) {
    const dataObject = {
      id: i,
      firstname: faker.fake('{{name.firstName}}'),
      lastname: faker.fake('{{name.lastName}}'),
      pic: faker.fake('{{image.avatar}}'),
      jobTitle: faker.fake('{{name.jobType}}'),
      company: faker.fake('{{company.companyName}}'),
      phone: formatNumber(faker.fake('{{phone.phoneNumberFormat}}')),
    };
    datasArray.push(dataObject);
  }

  return datasArray;
};

export const fakerChartsPieDatas = () => {
  faker.locale = 'fr';

  const chartPieDatas = {
    labels: [
      'Javascript',
      'PHP',
      'React Native',
      'Vue',
      'Python',
    ],
    datasets: [{
      data: [randomNumber(1, 50), randomNumber(1, 50), randomNumber(1, 50), randomNumber(1, 50), randomNumber(1, 50)],
      backgroundColor: [
        '#2a9d8f',
        '#264653',
        '#e9c46a',
        '#f4a261',
        '#e76f51',
      ],
      hoverBackgroundColor: [
        '#2a9d8f',
        '#264653',
        '#e9c46a',
        '#f4a261',
        '#e76f51',
      ],
    }],
  };

  return chartPieDatas;
};

export const fakerChartsLineDatas = () => {
  faker.locale = 'fr';

  const chartLineDatas = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [randomNumber(50, 55), randomNumber(55, 60), randomNumber(60, 65), randomNumber(65, 70), randomNumber(70, 75), randomNumber(75,80), randomNumber(80, 85), randomNumber(85, 90), randomNumber(95, 100), randomNumber(95, 97), randomNumber(97, 100), randomNumber(97, 100)],
      }, 
    ],
  };

  return chartLineDatas;
};
