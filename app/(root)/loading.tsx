// app/loading.tsx

import React from 'react';
import { Loader2 } from 'lucide-react'; // optional: uses lucide-react icons
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      {/* Optional logo */}
      <Image
        src="/startuplogo.png"
        alt="App Logo"
        width={60}
        height={60}
        className="mb-4 rounded-full"
      />

      <div className="flex items-center space-x-2 animate-pulse">
        <Loader2 className="animate-spin h-6 w-6 text-blue-600" />
        <span className="text-lg font-medium">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
