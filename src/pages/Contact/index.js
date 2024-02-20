import { useState, useEffect } from 'react';

const Contact = () => {
  // const [value, setValue] = useState(0);
  // const [option, setOption] = useState('');
  const [timer, setTimer] = useState(0);

  // useEffect( () => {
  //   console.log("DID MOUNT");

  // }, [])  //ЯКЩО МАСИВ ПУСТИЙ ВІН ВІДПРАЦЮЄ 1 РАЗ

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((value) => {
        return value + 1;
      });
    }, 1000);
    return () => { //відпрацює як Unmount
      clearInterval (id)
    }
  }, []);

  // const handelValueChange = () => {
  //   // let newValue = value +1
  //   setValue((prevValue) => {
  //     return prevValue + 1;
  //   });
  // };

  // const handleSelectChange = (e) => {
  //   // console.log(e.target.value);
  //   setOption(e.target.value);
  // };

  // const [state, setState] = useState(0);
  // const [users, setUsers] = useState(0);
  // const [inoutValue, setInputValue] = useState ("");

  // console.log(option);

  console.log(timer);

  return (
    <div style={{ padding: 50, paddingTop: 50 }}>
      <h2>{timer}</h2>

      {/* <p style={{ fontSize: 50 }}>{value}</p>
      <button onClick={handelValueChange}>Increment</button> */}
      <div style={{ paddingTop: 50 }}>
        {/* <select onChange={handleSelectChange}>
          <option> Option 1 </option>
          <option> Option 2 </option>
          <option> Option 3 </option>
        </select> */}
      </div>
    </div>
  );
};

export default Contact;

// 1) ComponentDidMount

// 2) ComponentWillUnmount

// 3) ComponentDidUpdate

// const useState = () => {
//   let state = null;

//   let setState = (value) => {
//     state = value
//   }

//   return [state, setState];
// }
