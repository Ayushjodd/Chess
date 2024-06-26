import { useEffect, useState } from "react";
import { useSocket } from "../Hooks/useSocket";
import { Button } from "../components/Button";
import { Chess, Piece, Square } from "chess.js";
import { ChessBoard } from "../components/ChessBoard";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

type BoardSquare = { type: Piece["type"]; color: Piece["color"]; square: Square } | null;
type BoardType = BoardSquare[][];

export const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState<BoardType>(mapBoard(chess));

  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      switch (message.type) {
        case INIT_GAME:
          const newGame = new Chess();
          setChess(newGame);
          setBoard(mapBoard(newGame));
          console.log("Game initialized");
          break;
        case MOVE:
          const move = message.payload;
          chess.move(move);
          setBoard(mapBoard(chess));
          console.log("Move made");
          break;
        case GAME_OVER:
          console.log("Game over");
          break;
      }
    };
  }, [socket]);

  if (!socket) return <div>Connecting...</div>;

  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 w-full">
          <div className="cols-span-4 w-full">
            <ChessBoard board={board} />
          </div>
          <div className="grid-cols-span-2">
            <Button
              onClick={() => {
                socket.send(
                  JSON.stringify({
                    type: INIT_GAME,
                  })
                );
              }}
            >
              Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapBoard = (chess: Chess): BoardType =>
  chess.board().map((row, rowIndex) =>
    row.map((square, colIndex) => {
      const file = String.fromCharCode('a'.charCodeAt(0) + colIndex);
      const rank = (8 - rowIndex).toString();
      const position = `${file}${rank}` as Square;

      return square ? { type: square.type, color: square.color, square: position } : null;
    })
  );
