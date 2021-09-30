import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

import { forwardRef } from "react";

interface ThumbnailProps {
  result: any;
}

const Thumbnail = forwardRef(({ result }: ThumbnailProps, ref) => {
  const BASE_URL_IMAGES = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        src={
          `${BASE_URL_IMAGES}${result?.backdrop_path || result.poster_path}` ||
          `${BASE_URL_IMAGES}${result.poster_path}`
        }
        width={1920}
        height={1080}
        alt="Thumbnail"
        layout="responsive"
      />

      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>

        <h2 className="mt-1 text-2xl text-white transition-all durantion-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>

        <p className="opacity-0 group-hover:opacity-100 flex items-center">
          {result.media_type && `${result.media_type} *`}{" "}
          {result.release_date || result.first_air_date} *{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});
export default Thumbnail;
