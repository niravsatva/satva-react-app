import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

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

export const registerFormData = [
  {
    title: 'First Name',
    id: 'first_name',
    type: 'text',
    name: 'first_name',
    defaultValue: '',
    errorMessage: 'Please enter your first name',
    placeholder: 'Enter your first name',
    required: true,
    // icon: 'UserOutlined',
    icon: <UserOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your first name!',
      },
    ],
  },
  {
    title: 'Last Name',
    id: 'last_name',
    type: 'text',
    name: 'last_name',
    defaultValue: '',
    errorMessage: 'Please enter your last name',
    placeholder: 'Enter your Last Name',
    required: true,
    // icon: 'UserOutlined',
    icon: <UserOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your last name!',
      },
    ],
  },
  {
    title: 'Email Address',
    id: 'email',
    type: 'text',
    name: 'email',
    defaultValue: '',
    errorMessage: 'Please enter your email',
    placeholder: 'Enter your email address',
    required: true,
    // icon: 'MailOutlined',
    icon: <MailOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your email address!',
      },
    ],
  },
  {
    title: 'Phone Number',
    id: 'phone',
    type: 'text',
    name: 'phone',
    defaultValue: '',
    errorMessage: 'Please input your phone number!',
    placeholder: 'Enter your Phone Number',
    required: true,
    // icon: 'PhoneOutlined',
    icon: <PhoneOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your phone number!',
      },
    ],
  },
  {
    title: 'Password',
    id: 'password',
    type: 'password',
    name: 'password',
    defaultValue: '',
    errorMessage: 'Please input your password!',
    placeholder: 'Enter your Password',
    required: true,
    // icon: 'LockOutlined',
    icon: <LockOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your password!',
      },
    ],
  },
  {
    title: 'Re Enter Password',
    id: 'confirm_password',
    type: 'password',
    name: 'confirm_password',
    defaultValue: '',
    errorMessage: 'Please input your password again!',
    placeholder: 'Re Enter your Password',
    required: true,
    // icon: 'LockOutlined',
    icon: <LockOutlined className="register-icon" />,
    rules: [
      {
        required: true,
        message: 'Please input your password again!',
      },
    ],
  },
];

export const integrationsCards = [
  {
    title: 'Connect With Quickbooks Online',
    buttonText: 'Connect to Quickbooks',
    logo: '/assets/images/logos/quickbooks_logo.png',
    ghost: false,
  },
  {
    title: 'Connect With ZohoBooks',
    buttonText: 'Connect',
    logo: '/assets/images/logos/zohobooks_logo.png',
    ghost: false,
  },
  {
    title: 'Connect With Xero',
    buttonText: 'Connect to Xero',
    logo: '/assets/images/logos/xero_logo.png',
    ghost: false,
  },
  {
    title: 'Connect With NetSuite',
    buttonText: 'Connect',
    logo: '/assets/images/logos/oracle_logo.png',
    ghost: false,
  },
  {
    title: 'Connect With Sage',
    buttonText: 'Connect',
    logo: '/assets/images/logos/sage_logo.png',
    ghost: true,
  },
  {
    title: 'Connect With ClearBooks',
    buttonText: 'Connect',
    logo: '/assets/images/logos/clearbooks_logo.png',
    ghost: true,
  },
  {
    title: 'Connect With Business Central',
    buttonText: 'Connect',
    logo: '/assets/images/logos/business_central_logo.png',
    ghost: true,
  },
  {
    title: 'Connect With FreshBooks',
    buttonText: 'Connect',
    logo: '/assets/images/logos/freshbooks_logo.png',
    ghost: false,
  },
];

export const preferencesData = [
  {
    title: 'Simply Dummy Preference 1',
    status: true,
    preferences: [
      {
        title: 'Preference 1',
        status: true,
      },
      {
        title: 'Preference 2',
        status: true,
      },
      {
        title: 'Preference 3',
        status: true,
      },
      {
        title: 'Preference 4',
        status: false,
      },
      {
        title: 'Preference 5',
        status: false,
      },
      {
        title: 'Preference 6',
        status: true,
      },
      {
        title: 'Preference 7',
        status: true,
      },
      {
        title: 'Preference 8',
        status: false,
      },
      {
        title: 'Preference 9',
        status: true,
      },
      {
        title: 'Preference 10',
        status: true,
      },
      {
        title: 'Preference 11',
        status: false,
      },
      {
        title: 'Preference 12',
        status: true,
      },
    ],
  },
  {
    title: 'Simply Dummy Preference 2',
    status: false,
    preferences: [
      {
        title: 'Preference 1',
        status: false,
      },
      {
        title: 'Preference 2',
        status: false,
      },
      {
        title: 'Preference 3',
        status: true,
      },
      {
        title: 'Preference 4',
        status: true,
      },
      {
        title: 'Preference 5',
        status: true,
      },
      {
        title: 'Preference 6',
        status: true,
      },
      {
        title: 'Preference 7',
        status: true,
      },
      {
        title: 'Preference 8',
        status: false,
      },
      {
        title: 'Preference 9',
        status: true,
      },
    ],
  },
  {
    title: 'Simply Dummy Preference 1',
    status: true,
    preferences: [
      {
        title: 'Preference 1',
        status: true,
      },
      {
        title: 'Preference 2',
        status: true,
      },
      {
        title: 'Preference 3',
        status: true,
      },
      {
        title: 'Preference 4',
        status: false,
      },
      {
        title: 'Preference 5',
        status: false,
      },
      {
        title: 'Preference 6',
        status: true,
      },
      {
        title: 'Preference 7',
        status: true,
      },
      {
        title: 'Preference 8',
        status: false,
      },
      {
        title: 'Preference 9',
        status: true,
      },
      {
        title: 'Preference 10',
        status: true,
      },
      {
        title: 'Preference 11',
        status: false,
      },
      {
        title: 'Preference 12',
        status: true,
      },
    ],
  },
  {
    title: 'Simply Dummy Preference 2',
    status: false,
    preferences: [
      {
        title: 'Preference 1',
        status: false,
      },
      {
        title: 'Preference 2',
        status: false,
      },
      {
        title: 'Preference 3',
        status: true,
      },
      {
        title: 'Preference 4',
        status: true,
      },
      {
        title: 'Preference 5',
        status: true,
      },
      {
        title: 'Preference 6',
        status: true,
      },
      {
        title: 'Preference 7',
        status: true,
      },
      {
        title: 'Preference 8',
        status: false,
      },
      {
        title: 'Preference 9',
        status: true,
      },
    ],
  },
];
