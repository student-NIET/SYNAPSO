import React, { useState } from 'react';

function MeetingHistory({ meetings }) {
  const [filter, setFilter] = useState('');

  const filteredMeetings = meetings.filter((meeting) => {
    if (!filter.trim()) return true;
    const lowerFilter = filter.toLowerCase();
    return (
      (meeting.summary.topic && meeting.summary.topic.toLowerCase().includes(lowerFilter)) ||
      (meeting.summary.conclusion && meeting.summary.conclusion.toLowerCase().includes(lowerFilter)) ||
      (meeting.summary.tasks && meeting.summary.tasks.toLowerCase().includes(lowerFilter))
    );
  });

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Meeting History</h2>
      <input
        type="text"
        placeholder="Filter by topic, conclusion, or tasks..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full mb-4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Filter meetings"
      />
      {filteredMeetings.length === 0 ? (
        <p className="text-gray-500">No meetings match the filter.</p>
      ) : (
        <ul className="space-y-4 max-h-64 overflow-auto">
          {filteredMeetings.map((meeting, index) => (
            <li key={index} className="border border-gray-200 rounded p-3 bg-gray-50">
              <p><strong>Topic:</strong> {meeting.summary.topic || 'N/A'}</p>
              <p><strong>Conclusion:</strong> {meeting.summary.conclusion || 'N/A'}</p>
              <p><strong>Opinions:</strong> {meeting.summary.opinions || 'N/A'}</p>
              <p><strong>Tasks:</strong> {meeting.summary.tasks || 'N/A'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MeetingHistory;
