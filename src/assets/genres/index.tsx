import clsx from "clsx";
import { ReactNode } from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { BsDisplay, BsHourglassSplit } from "react-icons/bs";
import { FaHeart, FaLaughSquint, FaMusic, FaSadCry } from "react-icons/fa";
import {
  FaPeopleRoof,
  FaShuttleSpace,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import {
  GiCrossedSwords,
  GiDrippingKnife,
  GiFilmStrip,
  GiPistolGun,
  GiPunch,
} from "react-icons/gi";
import { IoIosTv } from "react-icons/io";
import { IoSkull, IoStarOutline } from "react-icons/io5";
import { PiCactusFill, PiCompassRoseFill } from "react-icons/pi";
import { RiMickeyFill, RiSpyFill } from "react-icons/ri";

type GenreIcons = {
  [key: string]: ReactNode;
};

const iconStyles = "size-[30px]";

const genres: GenreIcons = {
  action: <GiPunch className={iconStyles} />,
  adventure: <PiCompassRoseFill className={iconStyles} />,
  animation: <RiMickeyFill className={iconStyles} />,
  comedy: <FaLaughSquint className={iconStyles} />,
  crime: <GiPistolGun className={iconStyles} />,
  documentary: <BiSolidCameraMovie className={iconStyles} />,
  drama: <FaSadCry className={iconStyles} />,
  family: <FaPeopleRoof className={iconStyles} />,
  fantasy: <FaWandMagicSparkles className={iconStyles} />,
  history: <BsHourglassSplit className={iconStyles} />,
  horror: <GiDrippingKnife className={iconStyles} />,
  music: <FaMusic className={iconStyles} />,
  mystery: <RiSpyFill className={iconStyles} />,
  romance: <FaHeart className={iconStyles} />,
  "science fiction": (
    <FaShuttleSpace className={clsx(iconStyles, "-rotate-45")} />
  ),
  "tv movie": <IoIosTv className={iconStyles} />,
  thriller: <IoSkull className={iconStyles} />,
  war: <GiCrossedSwords className={iconStyles} />,
  western: <PiCactusFill className={iconStyles} />,

  popular: <GiFilmStrip className={clsx(iconStyles, "rotate-180")} />,
  top_rated: <IoStarOutline className={iconStyles} />,
  upcoming: <BsDisplay className={iconStyles} />,
};

export default genres;
