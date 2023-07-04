export const userColumns = [
  {
    title: 'Organization Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: any, b: any) => {
      console.log(a.name);
      return a.name.length - b.name.length;
    },
    sortDirections: ['descend'],
  },
  {
    title: 'Email Address',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone number',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Created on',
    dataIndex: 'created',
    key: 'created',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];
const userDataSource: any = [];
userDataSource.push({
  name: `Demo`,
  email: `hello  @ gmail.com`,
  phone: 7874445547,
  created: `some date`,
  action: `some action`,
});
for (let index = 0; index < 24; index++) {
  userDataSource.push({
    name: `Company ${index}`,
    email: `hello ${index} @ gmail.com`,
    phone: 7874445547,
    created: `some date`,
    action: `some action`,
  });
}

export const userDrawerBody = {
  userFields: [
    {
      title: 'First Name',
      id: 'fistName',
      type: 'text',
      name: 'fistName',
      defaultValue: '',
      errorMessage: 'Please enter the first name',
      placeholder: 'Enter your first name',
    },
    {
      title: 'Last Name',
      id: 'lastName',
      type: 'text',
      name: 'lastName',
      defaultValue: '',
      errorMessage: 'Please enter the last name',
      placeholder: 'Enter your last name',
    },
    {
      title: 'Email Address',
      id: 'email',
      type: 'text',
      name: 'email',
      defaultValue: '',
      errorMessage: 'Please enter the email address',
      placeholder: 'Enter your email address',
    },
    {
      title: 'Phone Number',
      id: 'phoneNumber',
      type: 'text',
      name: 'phoneNumber',
      defaultValue: '',
      errorMessage: 'Please enter the phone number',
      placeholder: 'Enter your phone number',
    },
  ],
};

export { userDataSource };
