import { useState } from 'react'
import Particles from 'react-particles'
import {loadFireworksPreset} from 'tsparticles-preset-fireworks'
import { Typewriter } from 'react-simple-typewriter'
import Countdown from 'react-countdown'

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023👋"])
  
  const particles = async(engine) => {
    await loadFireworksPreset(engine)
  }
  
  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
    const newDate = new Date().getTime()
    const selisih = newYearDate - newDate
    return selisih
  }
  
  return (
    <>
      <Particles 
        init={particles}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white px-4 text-4xl font-bold z-50 text-center">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"|"}
            cursor
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown 
            date={Date.now() + timeLeft()}
            onComplete={() => setNewYearMessage(["Selamat Tahun Baru 2024🎇"])}
          />
        </div>
     </div>
    </>
  );
}

export default App;
