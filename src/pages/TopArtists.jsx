import React from 'react';

import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return <Loader title="Loading top artists" />;
    
    if (error) return <Error />;

    return (
        <div className='flex flex-col'>
            <h3 className="text-xs text-zinc-700 text-left tracking-widest">TOP ARTISTS</h3>
            <h2 className='font-semibold text-3xl text-zinc-100 text-left mb-10'>Discover Top Artists</h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((track) => (
                    <ArtistCard key={track.key} track={track} />
                ))}
            </div>
        </div>
    )
}

export default TopArtists;

