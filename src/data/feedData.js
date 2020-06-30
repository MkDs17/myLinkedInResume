export default [
  {
    id: 1,
    author: {
      name: 'Mickael RASSICOT',
      avatar: 'MR.png',
      connection_level: '1er',
      job: 'Développeur Web - Front End - React.Js',
      company: '',
      publish_date: '2 j',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    img: 'my-web-resume.png',
    stats: {
      counting_total_notifs: 235,
      counting_comments: 78,
      counting_views: 1240321,
      notifs: {
        likes: 24,
        love: 249,
        clap: 1,
        idea: 13,
        interesting: 2,
      },
    },
    comments: [
      {
        id: 1,
        author: 'Bill Gates',
        author_img: 'Bill_Gates.png',
        author_connection_level: '1er',
        author_job: 'CEO',
        author_company: 'Microsoft',
        publish_date: '3 h',
        content: 'Love this guy, He\'s awesome!',
        stats: {
          likes: 24,
        },
        subcomments: [
          {
            id: 1,
            author: 'Bill Gates',
            author_img: 'Bill_Gates.png',
            author_connection_level: '1er',
            author_job: 'CEO',
            author_company: 'Microsoft',
            publish_date: '3 h',
            content: 'Love this guy, He\'s awesome!',
            stats: {
              likes: 24,
            },
          },
          {
            id: 2,
            author: 'Elon Musk',
            author_img: 'Elon_Musk.jpg',
            author_connection_level: '1er',
            author_job: 'CEO',
            author_company: 'Tesla',
            publish_date: '12 h',
            content: 'You\'re the man, MAN !',
            stats: {
              likes: 1986,
            },
          },
        ],
      },
      {
        id: 2,
        author: 'Elon Musk',
        author_img: 'Elon_Musk.jpg',
        author_connection_level: '1er',
        author_job: 'CEO',
        author_company: 'Tesla',
        publish_date: '12 h',
        content: 'You\'re the man, MAN !',
        stats: {
          likes: 1986,
          comments: 42,
        },
      },
    ],
  },
];
