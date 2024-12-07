import { useState } from 'react'
import './App.css'
import { Timer } from './Timer.jsx'


const App = () => {
  const [showTimer, setShowTimer] = useState(false)


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-50">
      <button
        className="px-4 py-2 bg-yellow-300 text-orange-700 font-medium rounded shadow-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        onClick={() => setShowTimer(true)}
      >
        Show Timer
      </button>
      {showTimer && (
        <div className="mt-4 p-4 bg-orange-200 text-orange-800 rounded shadow-md">
          <Timer />
        </div>
      )}
    </div>
  );
};


export default App;

