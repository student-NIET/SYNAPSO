import React, { useState } from 'react';

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [command, setCommand] = useState('');
  const [log, setLog] = useState([]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (command.trim() === '') return;
    setLog((prev) => [...prev, { id: Date.now(), text: command }]);
    setCommand('');
  };

  return (
    <>
      {/* Desktop bar icon */}
      <div
        className="fixed bottom-4 right-4 bg-indigo-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer hover:bg-indigo-700 transition"
        onClick={toggleOpen}
        title="Open AI Assistant"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') toggleOpen(); }}
      >
        <i className="fas fa-robot fa-lg"></i>
      </div>

      {/* Assistant modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-lg p-4 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">AI Assistant</h3>
            <button
              onClick={toggleOpen}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close AI Assistant"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="flex-grow overflow-auto mb-2 max-h-48 border border-gray-200 rounded p-2 bg-gray-50">
            {log.length === 0 ? (
              <p className="text-gray-400 italic">No commands yet.</p>
            ) : (
              log.map((entry) => (
                <p key={entry.id} className="mb-1">
                  <span className="font-semibold">You:</span> {entry.text}
                </p>
              ))
            )}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Type your command..."
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
              aria-label="AI Assistant command input"
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 text-white px-3 rounded hover:bg-indigo-700 transition"
              aria-label="Send command"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AIAssistant;
