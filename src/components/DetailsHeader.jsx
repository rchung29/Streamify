import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  
return (
  <div className='relative w-full flex flex-col'>
    <div className="w-full bg-zinc-900 sm:h-48 h-28" />
    <div className='absolute inset-0 flex items-center'>
      <img src={artistId ? artistData?.attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart} alt="art" className='sm:w-36 w-20 sm:h-36 h-20 rounded-full object-cover border-2 shadow-xl shadow-black' />
      <div className='ml-5'>
        <p className='font-semibold sm:text-3xl text-xl text-zinc-100'>{artistId ? artistData?.attributes?.name : songData?.title}</p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <p className='text-base text-zinc-500 mt-2'>{songData?.subtitle}</p>
         </Link>
        )}
        <p className='text-base text-zinc-500 mt-2'>
        {artistId
            ? artistData?.attributes?.genreNames[0]
            : songData?.genres?.primary}
        </p>

      </div>
    </div>
    <div className='w-full sm:h-44 h-24'/>
  </div>
  )
}

export default DetailsHeader;
