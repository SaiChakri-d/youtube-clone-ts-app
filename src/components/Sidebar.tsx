import React from "react";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

export default function Sidebar() {
  const mainLinks = [
    {
      icons: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icons: <FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icons: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icons: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icons: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icons: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icons: <MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
    },
    {
      icons: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icons: <MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      icons: <TbMusic className="text-xl" />,
      name: "Music",
    },
    {
      icons: <MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sports",
    },
    {
      icons: <TbDeviceGamepad className="text-xl" />,
      name: "Gaming",
    },
    {
      icons: <GiFilmStrip className="text-xl" />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icons: <MdSettings className="text-xl" />,
      name: "Settings",
    },
    {
      icons: <MdOutlinedFlag className="text-xl" />,
      name: "Report History",
    },
    {
      icons: <MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
    },
    {
      icons: <MdOutlineFeedback className="text-xl" />,
      name: "Send Feedback",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];
  
  return (
    <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icons, name }) => {
          return (
            <li
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-slate-600" : ""
              }`}
              key={name}
            >
              <a href="" className="flex items-center gap-5">
                {icons}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icons, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
              <a href="#" className="flex items-center gap-5">
                {icons}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icons, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
              <a href="#" className="flex items-center gap-5">
                {icons}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icons, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
              <a href="#" className="flex items-center gap-5">
                {icons}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2022 Google </span>
      <br />
      <div className="px-4 pt-3 text-sm text-zinc-400">
        This clone is for educational purposes only.
      </div>
    </div>
  );
}
