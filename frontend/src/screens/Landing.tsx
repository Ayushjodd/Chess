import { GiChessQueen } from "react-icons/gi";
import { LiaChessSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
export default function Landing() {
  const github1Handler = () => {
    window.open("https://github.com/Ayushjodd/Chess");
  };
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="text-white flex justify-between px-[25%] py-8 shadow-xl relative select-none">
        <div className="text-6xl flex text-[#779556]">
          <GiChessQueen />
          <span className="mt-4 text-2xl font-semibold text-white">
            ChessOP
          </span>
        </div>
        <div className="text-2xl mt-4 font-semibold flex">
          <span className="pr-14 hover:text-[#779556] transition-all cursor-pointer hover:underline">
            Play Online
          </span>
          <span className="hover:text-[#779556] transition-all cursor-pointer hover:underline">
            Login
          </span>
          <span
            onClick={github1Handler}
            className="text-4xl hover:text-gray-400 cursor-pointer px-10"
          >
            <FaGithub />
          </span>
        </div>
      </div>
      <div className="mt-28 flex mx-[20%] relative select-none">
        <div>
          <h1 className="text-white text-start text-7xl font-bold">
            Your Ultimate <span className="text-9xl">CHESS</span> Destination
          </h1>
          <p className="text-white text-start text-xl pt-4 pr-32">
            Chess.100x is your premier destination for mastering the timeless
            game of chess. Whether you're a beginner looking to learn the basics
            or an experienced player aiming to sharpen your skills.
          </p>
          <Button
            onClick={() => {
              navigate("/game");
            }}
          >
            Play
          </Button>
        </div>
        <div className=" ">
          <img
            width={1150}
            className="rounded-2xl ml-20"
            src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1713647295/standardboard.1d6f9426_asqzum.png"
          />
        </div>
      </div>
      {/* <div className="border mt-24 mx-[30%] rounded-3xl py-10">
        <div className="text-white text-center  text-2xl font-semibold"></div>
        <div className="mt-2 text-white justify-center text-2xl font-semibold flex ">
          <span>Follow me on</span>
          <div className="flex ">
            <span>
              <FaGithub />
            </span>
            <span>
              <FaSquareXTwitter />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
