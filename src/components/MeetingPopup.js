import React, { useState } from 'react';

function MeetingPopup({ meeting, onConclude, onClose }) {
  const [summary, setSummary] = useState({
    topic: '',
    conclusion: '',
    opinions: '',
    tasks: '',
  });

  const handleChange = (e) => {
    setSummary({ ...summary, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onConclude({ ...meeting, summary });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 overflow-auto max-h-full">
        <h2 className="text-2xl font-semibold mb-4">Meeting Conclusion</h2>
        <p className="mb-4 text-gray-700">
          Please summarize the meeting details below:
        </p>

        <label className="block mb-2 font-semibold" htmlFor="topic">
          Topic
        </label>
        <input
          id="topic"
          name="topic"
          type="text"
          value={summary.topic}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Meeting topic"
        />

        <label className="block mb-2 font-semibold" htmlFor="conclusion">
          Conclusion
        </label>
        <textarea
          id="conclusion"
          name="conclusion"
          value={summary.conclusion}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mb-4 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="3"
          placeholder="Meeting conclusion"
        />

        <label className="block mb-2 font-semibold" htmlFor="opinions">
          Opinions from Others
        </label>
        <textarea
          id="opinions"
          name="opinions"
          value={summary.opinions}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mb-4 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="3"
          placeholder="Opinions from others"
        />

        <label className="block mb-2 font-semibold" htmlFor="tasks">
          Tasks Assigned
        </label>
        <textarea
          id="tasks"
          name="tasks"
          value={summary.tasks}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mb-4 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="3"
          placeholder="Tasks assigned during meeting"
        />

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Save Summary
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetingPopup;
