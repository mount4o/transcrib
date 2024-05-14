export default function Button({ inputType, text }) {
  return (
    <button type={inputType} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
}
