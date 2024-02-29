import { useState, useEffect } from 'react';

const Contact = () => {
  // const [value, setValue] = useState(0);
  // const [timer, setTimer] = useState(0);
  const [option, setOption] = useState('');
  const [planet, setPlanet] = useState(null);

  // useEffect(() => {
  //   // console.log('DID MOUNT');
  // }, []); //ЯКЩО МАСИВ ПУСТИЙ ВІН ВІДПРАЦЮЄ 1 РАЗ

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setTimer((value) => {
  //       return value + 1;
  //     });
  //   }, 1000);
  //   return () => { //відпрацює як Unmount
  //     clearInterval (id)
  //   }
  // }, []);//масив залежності. коли туди передається якийсь велью відпрацьовує юз ефект та змінюється опшін

  useEffect(() => {
    if (!option) return;
    getPlanet(option);
  }, [option]);

  const getPlanet = (id) => {
    fetch(`https://swapi.dev/api/planets/${id}/`)
      .then((resp) => resp.json())
      .then((resp) => setPlanet(resp))
      .catch((e) => console.log(e));
  };

  const handleSelectChange = (e) => {
    setOption(e.target.value);
  };

  // console.log('planet', planet);

  return (
    <div style={{ padding: 50, paddingTop: 50 }}>
      <h2>{planet?.name}</h2>

      <div style={{ paddingTop: 50 }}>
        <select onChange={handleSelectChange}>
          <option> 1 </option>
          <option> 2 </option>
          <option> 3 </option>
        </select>
      </div>
    </div>
  );
};

// const handelValueChange = () => {
//   // let newValue = value +1
//   setValue((prevValue) => {
//     return prevValue + 1;
//   });
// };

// const [state, setState] = useState(0);
// const [users, setUsers] = useState(0);
// const [inoutValue, setInputValue] = useState ("");

// console.log(option);

// console.log(timer);

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
