import './App.css';
import DRUMPADS from './Drumpads';
import { useEffect, useState } from 'react';

function App() {
  const [activeKey, setActiveKey] = useState('Press the Key')

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase())
    })
  }, [])

  function playSound(selector) {
    const audio = document.getElementById(selector);
    if (audio === null) {
      console.log("not a key");
    } else {
      audio.play();
      console.log(audio.parentElement);
      setActiveKey(audio.parentElement.id);
    }

  }

  return (
    <div className="App bg-teal-500 font-fira text-white">
      <div
        className="App flex justify-center items-center h-screen flex-col w-80 mx-auto"
        id="drum-machine"
      >
        <div id="display" className='w-80 bg-teal-400 font-semibold text-xl text-center h-[100px] flex justify-center items-center rounded-md border-2 border-white mb-4'>
          {activeKey}
        </div>
        <div className="drum-pads grid grid-cols-3 w-80 gap-4 bg-transparent font-bold">
          {DRUMPADS.map((drumPad) => (
            <div
              key={drumPad.key}
              onClick={() => {
                playSound(drumPad.text);
              }}
              className="drum-pad bg-teal-400 border-white text-4xl border-2 w-24 h-24 flex items-center justify-center rounded-md flex-col hover:scale-110 transition-all duration-200 ease-in-out"
              id={drumPad.key}
            >
              {drumPad.text}
              <p className='text-sm font-bold'>{drumPad.key}</p>
              <audio
                className="clip"
                id={drumPad.text}
                src={drumPad.src}
              ></audio>
            </div>
          ))}
        </div>
        <footer className='mt-4'>created by <a href='https://github.com/nabilfikrisp' className='text-teal-800 font-semibold hover:text-white transition-all duration-300 ease-in-out'>nabilfikrisp</a> with ❤</footer>
      </div>
    </div>
  );
}

export default App;
