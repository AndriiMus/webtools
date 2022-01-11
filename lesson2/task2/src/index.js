import { printProfile } from '../../task1/src/profile.js';
const userData = {
  name: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  copany: 'Gromcode',
};

printProfile(profile);
