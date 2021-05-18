export default {
  users: [
    {
      name: 'Ann',
      username: 'ann',
      image: 'https://randomuser.me/api/portraits/thumb/women/6.jpg',
    },
    {
      name: 'Monica',
      username: 'monica',
      image: 'https://randomuser.me/api/portraits/thumb/women/9.jpg',
    },
    {
      name: 'John',
      username: 'john',
      image: 'https://randomuser.me/api/portraits/thumb/men/4.jpg',
    },
    {
      name: 'Mike',
      username: 'mike',
      image: 'https://randomuser.me/api/portraits/thumb/men/6.jpg',
    },
    {
      name: 'Mia',
      username: 'mia',
    },
    // {
    //   name: 'Mia',
    //   username: 'mi2',
    // },
    // {
    //   name: 'Mia',
    //   username: 'mia3',
    // },
  ],
  cards: [
    {
      accountType: 'premium',
      number: '5789 **** **** 8907',
      holder: 'John Smith',
      expDate: '12/26',
      currentBalance: 1650.78,
      outcome: 1650,
      income: 200,
      paymentLimit: 4000,
      canDeactivate: false,
      deactivate: false,
    },
    {
      accountType: 'regular',
      number: '4111 **** **** 2345',
      holder: 'Julia Robson',
      expDate: '11/28',
      currentBalance: 3019.8,
      outcome: 4590,
      income: 500,
      paymentLimit: 6000,
      canDeactivate: false,
      deactivate: false,
    },
    {
      accountType: 'star',
      number: '5234 **** **** 4356',
      holder: 'Juan Gómez',
      expDate: '5/22',
      currentBalance: 4025.55,
      outcome: 6590,
      income: 800,
      paymentLimit: 7500,
      canDeactivate: false,
      deactivate: false,
    },
  ],
  transactions: [
    {
      id: '1',
      receiver: 'Tesco Market',
      type: 'shopping',
      date: '12/13/20',
      amount: 75.67,
    },
    {
      id: '2',
      receiver: 'ElectroMen Market',
      type: 'shopping',
      date: '12/14/20',
      amount: 250,
    },
    {
      id: '3',
      receiver: 'Fiorgio Restaurant',
      type: 'food',
      date: '12/7/20',
      amount: 19.5,
    },
    {
      id: '4',
      receiver: 'John Mathew Kayne',
      type: 'sport',
      date: '12/6/20',
      amount: 350,
    },
    {
      id: '5',
      receiver: 'Ann Marlin',
      type: 'shopping',
      date: '11/31/20',
      amount: 430,
    },
  ],
  goals: [
    {
      amount: 550,
      date: '12/20/20',
      icon: {
        name: 'mdi-image-filter-hdr',
        color: '#1976D2',
      },
      name: 'Holidays',
    },
    {
      amount: 200,
      date: '6/1/21',
      icon: {
        name: 'mdi-cellphone',
        color: '#FF9800',
      },
      name: 'Cellphone',
    },
    {
      amount: 820,
      date: '2/5/21',
      icon: {
        name: 'mdi-google-controller',
        color: '#4CAF50',
      },
      name: 'Xbox',
    },
    {
      amount: 630,
      date: '5/8/21',
      icon: {
        name: 'mdi-laptop',
        color: '#424242',
      },
      name: 'Laptop',
    },
  ],
  outcomes: {
    shopping: 52,
    electronics: 21,
    travels: 74,
  },
}
