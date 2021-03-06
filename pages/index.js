import React, { useEffect } from "react";
import Head from "next/head";

import { Input } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
//
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AddIcon from "@material-ui/icons/Add";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import RedoIcon from "@material-ui/icons/Redo";
import ReplyIcon from "@material-ui/icons/Reply";
import Redo from "@material-ui/icons/Redo";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

export default function Home() {
  useEffect(() => {
    alert(
      "This is a very early version of my reddit clone (0 functionality, no database/ backend, 0 responsiveness, etc etc ). I am still learning how to best use Tailwind and Next.js so if the code looks really spaghetti thats why! I am also playing around with Tailwind styling so the entire project is in index.js but I am eventually going to use react components for posts, ad banners, trending , etc. Last Updated May 2021."
    );
  }, []);

  const h32 = {
    height: "40rem",
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-2 mb-2 flex justify-between h-7 ">
        <div className="">
          <img
            className="ml-8 h-8 "
            src="/reddit.png"
            height={90}
            width={100}
          />
        </div>
        <Input
          id="input-with-icon-adornment"
          className="w-1/3"
          disableUnderline={true}
          color="primary"
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />

        <div className="mr-10  -mt-1 ">
          <button className="bg-white hover:bg-blue-400 text-blue-500  border border-blue-500 font-bold py-1 px-4 mr-4 rounded-full">
            Login In
          </button>
          <buttonn className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-1.5 px-4 rounded-full  mr-4 ">
            Sign Up
          </buttonn>
          <SupervisorAccountIcon />
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="bg-gray-200 w-full h-full">
        <div className="mx-40 ">
          <p className="pt-2  text-lg">Trending Today</p>
          <div className="flex justify-evenly w-9/10 mx-20">
            <div className="relative ">
              <img
                src="/triller.jpg"
                id="test"
                className="rounded-lg h-48 w-72"
              />
              <h4 className="absolute bottom-14 text-white  ml-2 font-medium">
                Triller
              </h4>
              <p className="absolute bottom-2 text-white ml-2 ">
                offering people who pirate the fight one month to pay $50...
              </p>
            </div>
            <div className="relative">
              <img src="/doge.jpg" className="rounded-lg h-48 w-72" />
              <h4 className="absolute bottom-14 text-white  ml-2 font-medium">
                Doge Coin
              </h4>
              <p className="absolute bottom-2 text-white ml-2 ">
                Records highs as American and European Markets undergo a halt
              </p>
            </div>
            <div className="relative">
              <img src="/ufea.png" className="rounded-lg h-48 w-72" />
              <h4 className="absolute bottom-14 text-white  ml-2 font-medium">
                Champions League Final
              </h4>
              <p className="absolute bottom-2 text-white ml-2 ">
                Manchester City braces for Chelsea as the UFEA Champions..
              </p>
            </div>
            <div className="relative">
              <img src="/download.jpg" className="rounded-lg h-48 w-72" />
              <h4 className="absolute bottom-14 text-white  ml-2 font-medium">
                Best Travel Locations
              </h4>
              <p className="absolute bottom-2 text-white ml-2 ">
                for post COVID-19 have been revealed and people cannot wait to
                finally travel
              </p>
            </div>
          </div>

          <p className=" pt-2 text-lg"> Popular posts</p>
          <div className="flex justify-evenly w-full ">
            <div className="bg-white h-20 w-4/6 flex justify-evenly">
              <button className="bg-gray-200 hover:bg-gray-100 text-blue-500 font-bold rounded-full py-1 px-4  mb-4 mt-4 mr-4  focus:outline-none">
                <WhatshotIcon /> Hot
              </button>
              <button className="bg-gray-200 hover:bg-gray-100 text-blue-500 font-bold rounded-full py-1 px-4  mb-4 mt-4 mr-4  focus:outline-none">
                United States <ArrowDropDownIcon />
              </button>
              <button className="bg-gray-200 hover:bg-gray-100 text-blue-500 font-bold rounded-full py-1 px-4  mb-4 mt-4 mr-4  focus:outline-none">
                All <ArrowDropDownIcon />
              </button>
              <button className="bg-gray-200 hover:bg-gray-100 text-blue-500 font-bold rounded-full py-1 px-4  mb-4 mt-4 mr-4  focus:outline-none">
                <NewReleasesIcon /> New
              </button>
              <button className="bg-gray-200 hover:bg-gray-100 text-blue-500 font-bold rounded-full py-1 px-4  mb-4 mt-4 mr-4  focus:outline-none">
                <TrendingUpIcon /> Top
              </button>
              <button className="bg-gray-200 hover:bg-gray-100 text-blue-500 font-bold rounded-full py-1 px-4  mb-4 mt-4 mr-4  focus:outline-none">
                <MoreHorizIcon />
              </button>
              <button className="bg-gray-200 hover:bg-gray-100 text-blue-500 font-bold rounded-full py-1 px-4  mb-4 mt-4 mr-4  focus:outline-none">
                <ViewAgendaIcon /> <ArrowDropDownIcon />
              </button>
            </div>

            {/*             the container at the bottom is the right black side  */}
            <div className="bg-gray-200 h-20 w-2/6">
              <p className="text-white"></p>
            </div>
          </div>

          <div className="bg-white h-40 w-4/6 mt-5 relative ">
            <div className="bg-gray-300 h-full w-20 ">
              <div className="ml-5 pt-8">
                <div className="mb-0.5 ml-0.5">
                  <KeyboardArrowUpIcon fontSize="large" />
                </div>
                <div> 39.1k</div>
                <div className="mt-0.5 ml-0.5">
                  <KeyboardArrowDownIcon fontSize="large" />
                </div>
              </div>
              <div className="absolute top-5 left-20 ml-9">
                <span>
                  <img
                    className="h-4 rounded-full -ml-5"
                    src="/askreddit.png"
                    width={20}
                  />
                </span>
                <div className="-mt-5 ml-2">
                  r/askreddit{" "}
                  <span className="text-gray-500">
                    ??? Posted by u/AbsoluteHavoc 9 Hours ago
                  </span>
                </div>
              </div>
              <div className="absolute -top-1 right-0">
                <button className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-1 px-4 rounded-full  mr-4  mb-4 mt-4 focus:outline-none">
                  Join <AddIcon />
                </button>
              </div>
              <div className="absolute top-20  left-3">
                <p className="text-2xl ml-20  -mt-4">
                  What family secret was finally spilled in your family?
                </p>
              </div>
              <div className="absolute left-20 -mt-2 ml-3 text-gray-700 text-2xl">
                <span className="mr-10">
                  <ModeCommentIcon
                    style={{ marginBottom: 6, marginRight: 2 }}
                  />
                  11.4k Comments
                </span>
                <span className="mr-10">
                  <ReplyIcon style={{ marginBottom: 6 }} />
                  Share
                </span>
                <span className="mr-10">
                  <TurnedInNotIcon />
                  Save
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white  w-4/6 mt-5 relative" style={h32}>
            <div className="bg-gray-300 h-full w-20">
              <div className="ml-5 pt-72">
                <div className="mb-0.5 ml-0.5">
                  <KeyboardArrowUpIcon fontSize="large" />
                </div>
                <div> 127k</div>
                <div className="mt-0.5 ml-0.5">
                  <KeyboardArrowDownIcon fontSize="large" />
                </div>
              </div>
            </div>
            <div className="-mt-5 ml-2 absolute top-10 ml-32 ">
              r/worldnews
              <span className="text-gray-500">
                ??? Posted by u/bethashton 18 Hours ago
              </span>
            </div>
            <div className="absolute top-6 ml-24">
              <img
                className="h-5 rounded-full  "
                src="/worldnews.png"
                width={20}
              />
            </div>
            <div className=" top-20  left-3">
              <p
                className="text-2xl ml-24  "
                style={{ marginTop: "-36.525rem" }}
              >
                Giant wood moth so heavy it struggles to fly found in Australia
              </p>
              <img
                className=" h-3/4 w-4/6 top-24 left-52 absolute"
                src="/giantmoth.png"
              />
            </div>
            <div
              className="absolute left-20  bot-0  ml-3 text-gray-700 text-2xl"
              style={{ marginTop: "31.325rem" }}
            >
              <span className="mr-10">
                <ModeCommentIcon style={{ marginBottom: 6, marginRight: 2 }} />
                11.4k Comments
              </span>
              <span className="mr-10">
                <ReplyIcon style={{ marginBottom: 6 }} />
                Share
              </span>
              <span className="mr-10">
                <TurnedInNotIcon />
                Save
              </span>
            </div>
          </div>
          {/*           next post  */}
          <div className="bg-white  w-4/6 mt-5 relative" style={h32}>
            <div className="bg-gray-300 h-full w-20">
              <div className="ml-5 pt-72">
                <div className="mb-0.5 ml-0.5">
                  <KeyboardArrowUpIcon fontSize="large" />
                </div>
                <div> 127k</div>
                <div className="mt-0.5 ml-0.5">
                  <KeyboardArrowDownIcon fontSize="large" />
                </div>
              </div>
            </div>
            <div className="-mt-5 ml-2 absolute top-10 ml-32 ">
              r/worldnews
              <span className="text-gray-500">
                ??? Posted by u/bethashton 18 Hours ago
              </span>
            </div>
            <div className="absolute top-6 ml-24">
              <img
                className="h-5 rounded-full  "
                src="/worldnews.png"
                width={20}
              />
            </div>
            <div className=" top-20  left-3">
              <p
                className="text-2xl ml-24  "
                style={{ marginTop: "-36.525rem" }}
              >
                Giant wood moth so heavy it struggles to fly found in Australia
              </p>
              <img
                className=" h-3/4 w-4/6 top-24 left-52 absolute"
                src="/giantmoth.png"
              />
            </div>
            <div
              className="absolute left-20  bot-0  ml-3 text-gray-700 text-2xl"
              style={{ marginTop: "31.325rem" }}
            >
              <span className="mr-10">
                <ModeCommentIcon style={{ marginBottom: 6, marginRight: 2 }} />
                11.4k Comments
              </span>
              <span className="mr-10">
                <ReplyIcon style={{ marginBottom: 6 }} />
                Share
              </span>
              <span className="mr-10">
                <TurnedInNotIcon />
                Save
              </span>
            </div>
          </div>
          {/* next one thing  */}
          <div className="bg-white h-40 w-4/6 mt-5 relative ">
            <div className="bg-gray-300 h-full w-20 ">
              <div className="ml-5 pt-8">
                <div className="mb-0.5 ml-0.5">
                  <KeyboardArrowUpIcon fontSize="large" />
                </div>
                <div> 39.1k</div>
                <div className="mt-0.5 ml-0.5">
                  <KeyboardArrowDownIcon fontSize="large" />
                </div>
              </div>
              <div className="absolute top-5 left-20 ml-9">
                <span>
                  <img
                    className="h-4 rounded-full -ml-5"
                    src="/askreddit.png"
                    width={20}
                  />
                </span>
                <div className="-mt-5 ml-2">
                  r/askreddit{" "}
                  <span className="text-gray-500">
                    ??? Posted by u/AbsoluteHavoc 9 Hours ago
                  </span>
                </div>
              </div>
              <div className="absolute -top-1 right-0">
                <button className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-1 px-4 rounded-full  mr-4  mb-4 mt-4 focus:outline-none">
                  Join <AddIcon />
                </button>
              </div>
              <div className="absolute top-20  left-3">
                <p className="text-2xl ml-20  -mt-4">
                  What family secret was finally spilled in your family?
                </p>
              </div>
              <div className="absolute left-20 -mt-2 ml-3 text-gray-700 text-2xl">
                <span className="mr-10">
                  <ModeCommentIcon
                    style={{ marginBottom: 6, marginRight: 2 }}
                  />
                  11.4k Comments
                </span>
                <span className="mr-10">
                  <ReplyIcon style={{ marginBottom: 6 }} />
                  Share
                </span>
                <span className="mr-10">
                  <TurnedInNotIcon />
                  Save
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white  w-4/6 mt-5 relative" style={h32}>
            <div className="bg-gray-300 h-full w-20">
              <div className="ml-5 pt-72">
                <div className="mb-0.5 ml-0.5">
                  <KeyboardArrowUpIcon fontSize="large" />
                </div>
                <div> 127k</div>
                <div className="mt-0.5 ml-0.5">
                  <KeyboardArrowDownIcon fontSize="large" />
                </div>
              </div>
            </div>
            <div className="-mt-5 ml-2 absolute top-10 ml-32 ">
              r/worldnews
              <span className="text-gray-500">
                ??? Posted by u/bethashton 18 Hours ago
              </span>
            </div>
            <div className="absolute top-6 ml-24">
              <img
                className="h-5 rounded-full  "
                src="/worldnews.png"
                width={20}
              />
            </div>
            <div className=" top-20  left-3">
              <p
                className="text-2xl ml-24  "
                style={{ marginTop: "-36.525rem" }}
              >
                Giant wood moth so heavy it struggles to fly found in Australia
              </p>
              <img
                className=" h-3/4 w-4/6 top-24 left-52 absolute"
                src="/giantmoth.png"
              />
            </div>
            <div
              className="absolute left-20  bot-0  ml-3 text-gray-700 text-2xl"
              style={{ marginTop: "31.325rem" }}
            >
              <span className="mr-10">
                <ModeCommentIcon style={{ marginBottom: 6, marginRight: 2 }} />
                11.4k Comments
              </span>
              <span className="mr-10">
                <ReplyIcon style={{ marginBottom: 6 }} />
                Share
              </span>
              <span className="mr-10">
                <TurnedInNotIcon />
                Save
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
