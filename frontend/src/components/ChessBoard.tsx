import { Color, PieceSymbol, Square } from "chess.js";

export const ChessBoard = ({
  board,
}: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
}) => {
  return (
    <>
      <div className="text-white-200">
        {board.map((row, i) => {
          return (
            <div key={i} className="flex">
              {row.map((square, j) => {
                return (
                  <div
                    key={j}
                    className="w-10 h-10 border-2 border-white-200 rounded-full flex justify-center items-center"
                  >
                    {square && (
                      <span className="text-white-200">{square.type}</span>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
