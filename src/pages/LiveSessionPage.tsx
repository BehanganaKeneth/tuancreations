import React, { memo } from 'react';
import { Video, Users } from 'lucide-react';

const LiveSessionPage = memo(() => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 text-center">
        <Video className="w-20 h-20 text-indigo-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Session Room</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to your interactive learning session. This area can be connected to a real-time video service like Jitsi, Twilio, or Daily.co to enable live audio-video classes for both learners and instructors.
        </p>
        
        <div className="flex justify-center items-center text-gray-600 text-base mb-6">
          <Users className="w-5 h-5 mr-2" />
          <span>Connecting to your session...</span>
        </div>

        {/* Placeholder for actual video conferencing integration */}
        <div className="h-96 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-lg">
          Video Conferencing Interface Goes Here
        </div>
      </div>
    </div>
  );
});

LiveSessionPage.displayName = 'LiveSessionPage';

export default LiveSessionPage;
