import React, { useState } from 'react';

function ReminderInput({ onAddReminder }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() === '') return;
    // For now, just create a simple reminder object
    const newReminder = {
      id: Date.now(),
      text: input.trim(),
      time: null, // Time extraction can be added later
    };
    onAddReminder(newReminder);
    setInput('');
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Add Reminder / Forward Message</h2>
      <textarea
        className="w-full border border-gray-300 rounded p-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows="3"
        placeholder="Paste your meeting or task message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Add Reminder
      </button>
    </div>
  );
}

export default ReminderInput;
