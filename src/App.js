import React, { useState } from 'react';
import ReminderInput from './components/ReminderInput';
import ReminderList from './components/ReminderList';
import AIAssistant from './components/AIAssistant';
import MeetingPopup from './components/MeetingPopup';
import MeetingHistory from './components/MeetingHistory';

function App() {
  const [reminders, setReminders] = useState([]);
  const [showMeetingPopup, setShowMeetingPopup] = useState(false);
  const [currentMeeting, setCurrentMeeting] = useState(null);
  const [meetingHistory, setMeetingHistory] = useState([]);

  // Add a new reminder
  const addReminder = (reminder) => {
    setReminders((prev) => [...prev, reminder]);
  };

  // Simulate meeting popup trigger (for demo)
  const triggerMeetingPopup = (meeting) => {
    setCurrentMeeting(meeting);
    setShowMeetingPopup(true);
  };

  // Close meeting popup and save meeting summary to history
  const concludeMeeting = (summary) => {
    setMeetingHistory((prev) => [...prev, summary]);
    setShowMeetingPopup(false);
    setCurrentMeeting(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-semibold text-center text-indigo-700">Reminder AI App</h1>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <ReminderInput onAddReminder={addReminder} />
        <ReminderList reminders={reminders} onTriggerMeeting={triggerMeetingPopup} />
        <MeetingHistory meetings={meetingHistory} />
      </main>

      <AIAssistant />

      {showMeetingPopup && currentMeeting && (
        <MeetingPopup meeting={currentMeeting} onConclude={concludeMeeting} onClose={() => setShowMeetingPopup(false)} />
      )}
    </div>
  );
}

export default App;
