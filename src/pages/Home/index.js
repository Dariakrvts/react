import { useState, useEffect } from 'react';
import { validateUserName } from 'utils/index';
import { Text, Input } from 'baseComponents';
import { Button } from '@mui/material';

const Home = () => {
  const [userName, setUserName] = useState({
    value: '',
    error: '',
  });

  const handleChangeUserName = (e) => {
    setUserName((userName) => ({ ...userName, value: e.target.value }));
  };
  const handleSubmit = () => {
    if (!validateUserName(userName.value)) {
      console.log('Validate');
    }
  };

  return (
    <div >
      <Button variant="outlined">Outlined</Button>
      <Input value={userName.value} handleChange={handleChangeUserName} />
    </div>
  );
};

export default Home;
