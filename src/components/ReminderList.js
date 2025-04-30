import React from 'react';

function ReminderList({ reminders, onTriggerMeeting }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upcoming Reminders</h2>
      {reminders.length === 0 ? (
        <p className="text-gray-500">No reminders set yet.</p>
      ) : (
        <ul className="space-y-3">
          {reminders.map((reminder) => (
            <li
              key={reminder.id}
              className="border border-gray-200 rounded p-3 flex justify-between items-center hover:bg-indigo-50 cursor-pointer"
              onClick={() => onTriggerMeeting(reminder)}
              title="Click to simulate meeting popup"
            >
              <span>{reminder.text}</span>
              {/* Placeholder for reminder time */}
              <span className="text-sm text-gray-400 italic">Reminder</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReminderList;
