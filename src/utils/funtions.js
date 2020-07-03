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
  faker.locale = 'en';
  const datasArray = [];

  let i;
  for (i = 0; i < 50; i++) {
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

export const calculateTimeBtwTwoDates = (value) => {
  const dateNow = new Date().toLocaleDateString('en-US');

  // Transforme dd/mm/yy to mm/dd/yy pour permettre bonne execution de fnct calculateTimeBtwTwoDate (l.65)
  const dateParts = value.split('/');
  const dateFromData = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]).toLocaleDateString('en-US');

  const date1 = new Date(dateFromData);
  const date2 = new Date(dateNow);

  const countDays = Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())) / (1000 * 60 * 60 * 24));

  console.log('countDays', countDays);

  if (countDays >= 335) {
    return '1 y';
  } if (countDays < 335 && countDays > 30) {
    const month = `${Math.floor(countDays / 30)} mois`;
    return month;
  } if (countDays >= 30 && countDays <= 60) {
    return '1 mois';
  } if (countDays <= 30 && countDays >= 21) {
    return '3 semaines';
  } if (countDays <= 30 && countDays >= 14) {
    return '2 semaines';
  } if (countDays <= 30 && countDays >= 7) {
    return '1 semaine';
  } if (countDays < 7 && countDays > 1) {
    const day = `${countDays} jours`;
    return day;
  } if (countDays === 1) {
    const day = `${countDays} jour`;
    return day;
  } if (countDays === 0) {
    return '1 h';
  }
};

export const randomLevel = () => {
  const level = randomNumber(1, 3);
  if (level === 1) {
    return '1 er';
  }
  return `${level} ème`;
};

export const countNotifs = (firstVal, SecondVal, ThirdVal, FourfthVal, FifthVal) => {
  const result = firstVal + SecondVal + ThirdVal + FourfthVal + FifthVal;
  return Number(result);
};

export const checkIfTextContainsLink = (text) => {
  //const text = 'coucou je m\'appelle mickael, http://coucou.com. C\'est nous les amis';
  const expression = /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w\-]*)?(\?[^\s]*)?/gi;
  const regex = new RegExp(expression);
  let match = '';
  let splitText = [];
  let startIndex = 0;
  while ((match = regex.exec(text)) != null) {
    splitText.push({text: text.substr(startIndex, (match.index - startIndex)), type: 'text'});
    let cleanedLink = text.substr(match.index, (match[0].length));
    //cleanedLink = cleanedLink.replace(/^https?:\/\//, '');
    splitText.push({ text: cleanedLink, type: 'link' });
    startIndex = match.index + (match[0].length);
  }
  if (startIndex < text.length) {
    splitText.push(
      { text: text.substr(startIndex),
        type: 'text',
      },
    );
  }
  console.log('splitText', splitText);
  return splitText;
};
