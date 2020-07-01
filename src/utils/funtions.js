import React from 'react';
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

export const dynamicContentButton = (dynamicalClass) => {
  switch (dynamicalClass) {
    case 'blue':
      return (
        {
          img: 'action-like-24.svg',
          text: 'J\'aime',
        }
      );
    case 'green':
      return (
        {
          img: 'action-clap-24.svg',
          text: 'Bravo',
        }
      );
    case 'red':
      return (
        {
          img: 'action-love-24.svg',
          text: 'J\'adore',
        }
      );
    case 'yellow':
      return (
        {
          img: 'action-idea-24.svg',
          text: 'Instructif',
        }
      );
    case 'purple':
      return (
        {
          img: 'action-interest-24.svg',
          text: 'Intéressant',
        }
      );
    default:
      return (
        {
          img: 'like.svg',
          text: 'J\'aime',
        }
      );
  }
};
