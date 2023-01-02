import { useDispatch,useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

import { useGetTopChartsQuery } from '../redux/services/shazamCore';
    
const Discover = () => {
    const dispatch = useDispatch();
    const {activeSong,isPlaying} = useSelector((state)=> state.player);
    const genreTitle = 'Pop';
    const { data, isFetching, error} = useGetTopChartsQuery();
    if (isFetching) return <Loader title="Loading song..." />;
    if (error) return <Error />;
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <div>
                <h3 className="text-xs text-zinc-700 text-left tracking-widest">DISCOVER NEW SONGS</h3>
                <h2 className="font-semibold text-3xl text-zinc-100 text-left">Discover {genreTitle}</h2>   
                </div>
                <select onChange={() => {}} value="" className="bg-zinc-900 text-zinc-300 p-3 text-sm rounded-lg border border-zinc-700 outline-none sm:mt-0 mt-5">
                    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data.map((song,i) => (
                    <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i} />
                ))}
            </div>
        </div>
    )
}
export default Discover;
