import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { toWords } from 'to-words';

const Home = () => {
  const [Fhvalue, setFhValue] = useState('');
  const [Thvalue, setThValue] = useState('');
  const [Ohvalue, setOhValue] = useState('');
  const [Ftvalue, setFtValue] = useState('');
  const [Ttvalue, setTtValue] = useState('');
  const [Tenvalue, setTenValue] = useState('');
  const [Fvvalue, setFvValue] = useState('');
  const [Tsvalue, setTsValue] = useState('');
  const [Osvalue, setOsValue] = useState('');
  const [fhAmount, setFhAmount] = useState(0);
  const [thAmount, setThAmount] = useState(0);
  const [ohAmount, setOhAmount] = useState(0);
  const [ftAmount, setFtAmount] = useState(0);
  const [ttAmount, setTtAmount] = useState(0);
  const [tenAmount, setTenAmount] = useState(0);
  const [fvAmount, setFvAmount] = useState(0);
  const [tsAmount, setTsAmount] = useState(0);
  const [OsAmount, setOsAmount] = useState(0);
  const [Amount ,setAmount] = useState(0);
  const [notes ,setNotes] = useState(0)
  
  useEffect(() => {
    let Total = fhAmount+thAmount+ohAmount+ftAmount+ttAmount+tenAmount+fvAmount+tsAmount+OsAmount;
    let Tnotes = (Number(Fhvalue)+Number(Thvalue)+Number(Ohvalue)+Number(Ftvalue)+Number(Ttvalue)+Number(Ttvalue)+Number(Tenvalue)+Number(Fvvalue)+Number(Tsvalue)+Number(Osvalue));
    setAmount(Total);
    setNotes(Tnotes);
  }, [fhAmount, thAmount, ohAmount, ftAmount, ttAmount, tenAmount, fvAmount, tsAmount, OsAmount, Fhvalue, Thvalue, Ohvalue, Ftvalue, Ttvalue, Tenvalue, Fvvalue, Tsvalue, Osvalue]);
   
  
  const handleChangeFh = (event) => {
    const newValue = event.target.value;
    setFhValue(newValue);
    setFhAmount(newValue * 500);
  };
  const handleChangeTh = (event) => {
    const newValue = event.target.value;
    setThValue(newValue);
    setThAmount(newValue * 200);
  };
  const handleChangeOh = (event) => {
    const newValue = event.target.value;
    setOhValue(newValue);
    setOhAmount(newValue * 100);
  };
  const handleChangeFt = (event) => {
    const newValue = event.target.value;
    setFtValue(newValue);
    setFtAmount(newValue * 50);
  };
  const handleChangeTt = (event) => {
    const newValue = event.target.value;
    setTtValue(newValue);
    setTtAmount(newValue * 20);
  };
  const handleChangeTen = (event) => {
    const newValue = event.target.value;
    setTenValue(newValue);
    setTenAmount(newValue * 10);
  };
  const handleChangeFv = (event) => {
    const newValue = event.target.value;
    setFvValue(newValue);
    setFvAmount(newValue * 5);
  };
  const handleChangeTs = (event) => {
    const newValue = event.target.value;
    setTsValue(newValue);
    setTsAmount(newValue * 2);
  };
  const handleChangeOs = (event) => {
    const newValue = event.target.value;
    setOsValue(newValue);
    setOsAmount(newValue * 1);
  };
  var converter = require('number-to-words');
  let word = converter.toWords(Amount);
//   const word = toWords(Amount);
  return (
    <div className="  bg-green-950 bg-opacity-80 h-screen flex items-center justify-center overflow-hidden">
      <div className=" text-white px-2 py-4  ">
      <div>
        <p className="text-2xl px-2 py-2 text-white font-semibold  ">Denomination</p>
      <p className="text-2xl px-2 py-2 pb-4  text-orange-400 font-semibold">Total Amount&nbsp;: &nbsp;{Amount}<br/></p>
      <div className="text-center my-4">
        <p className="text-orange-400 font-semibold text-xl ">{word.charAt(0).toUpperCase() + word.slice(1)}</p>
            <p className="text-white font-semibold text-xl my-2">Total Notes :&nbsp;&nbsp;{notes}</p>
            
        </div>
      </div>
        <div className="border grid  grid-cols-custom  gap-2 bg-white text-black text-center  text-xl px-1 py-2">
          <div className="px-2 py-1">
            <p>500</p>
          </div>
          <div className="px-2 py-1">
            <p> <CloseIcon/> </p>
          </div>
          <div className="w-24">
            <input
              className="w-full border border-black rounded-sm px-2 py-1"
              value={Fhvalue}
              onChange={handleChangeFh}
            />
          </div>
          <div className="px-2 py-1">
            <p><ArrowRightAltIcon/></p>
          </div>
          <div className="px-2 py-1">
            <p className="font-semibold">{fhAmount}</p>
          </div>
          <div>
            <p>200</p>
          </div>
          <div>
            <p> <CloseIcon/> </p>
          </div>
          <div className="w-24">
            <input
              className="w-full border border-black rounded-sm px-2 py-1"
              value={Thvalue}
              onChange={handleChangeTh}
            />
          </div>
          <div>
            <p><ArrowRightAltIcon/></p>
          </div>
          <div>
            <p className="font-semibold">{thAmount}</p>
          </div>
          <div>
            <p>100</p>
          </div>
          <div>
            <p> <CloseIcon/></p>
          </div>
          <div className="w-24">
            <input
              className="w-full border border-black rounded-sm px-2 py-1"
              value={Ohvalue}
              onChange={handleChangeOh}
            />
          </div>
          <div>
            <p><ArrowRightAltIcon/></p>
          </div>
          <div>
            <p className="font-semibold">{ohAmount}</p>
          </div>
          <div>
            <p>50</p>
          </div>
          <div>
            <p> <CloseIcon/></p>
          </div>
          <div className="w-24">
            <input
              className="w-full border border-black rounded-sm px-2 py-1"
              value={Ftvalue}
              onChange={handleChangeFt}
            />
          </div>
          <div>
            <p><ArrowRightAltIcon/></p>
          </div>
          <div>
            <p className="font-semibold">{ftAmount}</p>
          </div>
          <div>
            <p>20</p>
          </div>
          <div>
            <p> <CloseIcon/> </p>
          </div>
          <div className="w-24">
            <input
              className="w-full border border-black rounded-sm px-2 py-1"
              value={Ttvalue}
              onChange={handleChangeTt}
            />
          </div>
          <div>
            <p><ArrowRightAltIcon/></p>
          </div>
          <div>
            <p className="font-semibold">{ttAmount}</p>
          </div>
          <div>
            <p>10</p>
          </div>
          <div>
            <p> <CloseIcon/> </p>
          </div>
          <div className="w-24">
            <input
              className="w-full border border-black rounded-sm px-2 py-1"
              value={Tenvalue}
              onChange={handleChangeTen}
            />
          </div>
          <div>
            <p><ArrowRightAltIcon/></p>
          </div>
          <div>
            <p className="font-semibold">{tenAmount}</p>
          </div>
          <div>
            <p>5</p>
          </div>
          <div>
            <p> <CloseIcon/> </p>
          </div>
          <div className="w-24">
            <input
              className="w-full border border-black rounded-sm px-2 py-1"
              value={Fvvalue}
              onChange={handleChangeFv}
            />
          </div>
          <div>
            <p><ArrowRightAltIcon/></p>
          </div>
          <div>
            <p className="font-semibold">{fvAmount}</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p> <CloseIcon/> </p>
          </div>
          <div className="w-24">
            <input
              className="w-full border border-black rounded-sm px-2 py-1"
              value={Tsvalue}
              onChange={handleChangeTs}
            />
          </div>
          <div>
            <p><ArrowRightAltIcon/></p>
          </div>
          <div>
            <p className="font-semibold">{tsAmount}</p>
          </div>
          <div>
            <p>1</p>
          </div>
          <div>
            <p> <CloseIcon/> </p>
          </div>
          <div className="w-24" >
            <input
              className="w-full border border-black rounded-sm px-2 py-1"
              value={Osvalue}
              onChange={handleChangeOs}
            />
          </div>
          <div>
            <p><ArrowRightAltIcon/></p>
          </div>
          <div>
            <p className="font-semibold">{OsAmount}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
