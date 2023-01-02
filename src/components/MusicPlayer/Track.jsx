import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className="hidden sm:block h-16 w-16 mr-4">
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate font-medium text-zinc-100 font text-md">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate font-normal text-zinc-500 text-sm">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
