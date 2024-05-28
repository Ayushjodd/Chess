import { GiChessQueen } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export default function Landing() {
  const github1Handler = () => {
    window.open("https://github.com/Ayushjodd/Chess");
  };
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="text-white flex justify-between px-6 md:px-12 lg:px-[25%] py-8 shadow-xl relative select-none">
        <div className="text-4xl md:text-6xl flex text-[#779556] ">
          <GiChessQueen />
          <span className="mt-2 md:mt-4 text-xl md:text-2xl font-semibold text-white">
            ChessOP
          </span>
        </div>
        <div className="text-xl md:text-2xl mt-2 md:mt-4 font-semibold flex">
          <span className="pr-4 md:pr-14 hover:text-[#779556] transition-all cursor-pointer hover:underline">
            Play Online
          </span>
          <span className="hover:text-[#779556] transition-all cursor-pointer hover:underline">
            Login
          </span>
          <span
            onClick={github1Handler}
            className="text-2xl md:text-4xl hover:text-gray-400 cursor-pointer px-4 md:px-10"
          >
            <FaGithub />
          </span>
        </div>
      </div>
      <div className="mt-12 md:mt-28 flex flex-col md:flex-row mx-6 md:mx-[20%] relative select-none">
        <div className="mb-20">
          <h1 className="text-white text-start text-3xl md:text-4xl lg:text-5xl font-bold">
            Your Ultimate <span className="block md:inline text-6xl md:text-8xl">CHESS</span> Destination
          </h1>
          <p className="text-white text-start text-base md:text-xl  pt-4 md:pr-32">
            Chess.100x is your premier destination for mastering the timeless game of chess. Whether you're a beginner looking to learn the basics or an experienced player aiming to sharpen your skills.
          </p>
          <Button
            onClick={() => {
              navigate("/game");
            }}
            className="mt-4 md:mt-6 mb-10"
          >
            Play
          </Button>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            width={1150}
            className="rounded-2xl mx-auto md:ml-20"
            src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1713647295/standardboard.1d6f9426_asqzum.png"
          />
        </div>
      </div>
    </div>
  );
}
