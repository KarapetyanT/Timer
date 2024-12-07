export const Buttons = ({ onPause, onContinue, onDelete }) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded mr-2"
        onClick={onPause}
      >
        Pause
      </button>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded mr-2"
        onClick={onContinue}
      >
        Continue
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};
