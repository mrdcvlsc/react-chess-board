import white_pawn from './chess-piece/pw.png';
import white_rook from './chess-piece/rw.png';
import white_knight from './chess-piece/nw.png';
import white_bishop from './chess-piece/bw.png';
import white_king from './chess-piece/kw.png';
import white_queen from './chess-piece/qw.png';

import black_pawn from './chess-piece/pb.png';
import black_rook from './chess-piece/rb.png';
import black_knight from './chess-piece/nb.png';
import black_bishop from './chess-piece/bb.png';
import black_king from './chess-piece/kb.png';
import black_queen from './chess-piece/qb.png';

import empty_piece from './chess-piece/empty.png'

export namespace Piece {
  export namespace White {
    export const pawn = white_pawn;
    export const rook = white_rook;
    export const knight = white_knight;
    export const bishop = white_bishop;
    export const king = white_king;
    export const queen = white_queen;
  }

  export namespace Black {
    export const pawn = black_pawn;
    export const rook = black_rook;
    export const knight = black_knight;
    export const bishop = black_bishop;
    export const king = black_king;
    export const queen = black_queen;
  }

  export const empty = empty_piece;
}