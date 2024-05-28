import { Color, PieceSymbol, Square } from "chess.js";

type BoardSquare = { type: PieceSymbol; color: Color; square: Square } | null;

export const ChessBoard = ({
  board,
}: {
  board: BoardSquare[][];
}) => {
  return (
    <div className="text-white-200">
      {board.map((row, i) => (
        <div key={i} className="flex">
          {row.map((square, j) => (
            <div
              key={j}
              className="w-10 h-10 border-2 border-white-200 rounded-full flex justify-center items-center"
            >
              {square && <span className="text-white-200">{square.type}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
