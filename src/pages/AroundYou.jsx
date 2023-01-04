import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useStore } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(country);
    useEffect(() => {
        //at_sPw4eyVJI6xZeqi4laISsohBaYqnc
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_sPw4eyVJI6xZeqi4laISsohBaYqnc`)
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((error) => console.log(err))
            .finally(() => setLoading(false));
    }, [country]);

    if (isFetching && loading) return <Loader title="Loading songs near you" />;
    
    if (error & country) return <Error />;

    return (
        <div className='flex flex-col'>
            <h2 className='font-semibold text-3xl text-zinc-100 text-left mt-4 mb-10'>Around You <span className='font-semibold text-red-500'>{country}</span></h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => (
                    <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i}/>
                ))}
            </div>
        </div>
    )
}

export default AroundYou;
