import React, { useState } from "react";
import Clipboard from "react-clipboard.js";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { MdHighQuality } from "react-icons/md";
import { CgShare } from "react-icons/cg";

const Card = (props) => {
  const [like, setLike] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center"
      key={props.date}
    >
      <div className=" md:w-2/3 lg:w-1/2 2xl:w-1/3">
        {/* image or video frame */}
        {props?.media === "image" ? (
          <img
            src={props.url}
            className="w-full rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl"
            alt={props.title}
          ></img>
        ) : (
          <iframe
            src={props.url}
            frameBorder="0"
            className="w-full rounded-md md:rounded-lg h-96 lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl"
            title={props.title}
          ></iframe>
        )}
        <div className="flex items-center justify-between pt-2">
          {/* Like function */}
          {like ? (
            //Liked
            <RiHeart3Fill
              onClick={() => setLike(false)}
              className="xl:w-10 xl:h-10 w-6 h-6 text-red-600 motion-safe:animate-[ping_.4s] cursor-pointer	"
            />
          ) : (
            //Not Liked
            <RiHeart3Line
              onClick={() => setLike(true)}
              className="w-6 h-6 cursor-pointer xl:w-10 xl:h-10 hover:text-red-600 "
            />
          )}
          <div className="flex items-center justify-center space-x-4">
            {/* High Quality Image Download */}
            <MdHighQuality
              onClick={() =>
                window.open(`${props.hdurl}`, "_blank")
              }
              className="w-6 h-6 cursor-pointer xl:w-10 xl:h-10 hover:text-blue-600 "
            />
            {/* Share link to the image */}
            <Clipboard
              data-clipboard-text={`Check this photo from nasa apod -> ${props.hdurl}`}
              onSuccess={() => {
                alert("Copied to Clipboard");
              }}
            >
              <CgShare className="w-6 h-6 cursor-pointer xl:w-10 xl:h-10 hover:text-blue-600 " />
            </Clipboard>
          </div>
        </div>
        <h1 className="pt-2 text-2xl font-medium xl:text-3xl">
          {props.title}
        </h1>
        <p className="font-medium text-newblue">
          {props.date}
        </p>
        <p className="pt-4 text-sm lg:text-base">
          {props.exp}
        </p>
        {/* copyrights if available */}
        {props.copy && (
          <p className="pt-2 text-newblue">
            © {props.copy}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
