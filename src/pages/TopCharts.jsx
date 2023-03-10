import React from 'react';
import { useSelector, useStore } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return <Loader title="Loading top charts" />;
    
    if (error) return <Error />;

    return (
        <div className='flex flex-col'>
            <h3 className="text-xs text-zinc-700 text-left tracking-widest">TOP CHARTS</h3>
            <h2 className='font-semibold text-3xl text-zinc-100 text-left mb-10'>Discover Top Charts</h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i}/>
                ))}
            </div>
        </div>
    )
}

export default TopCharts;
