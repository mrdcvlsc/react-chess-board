import { url } from 'inspector';
import React from 'react';
import { cursorTo } from 'readline';
import './ChessBoard.css'
import { Piece } from './piece';

type chess_board_props_t = {
  position: string
}

type square_props_t = {
  piece: string,
  color: 'white' | 'black',
  grabbed: string,
  handleClick: React.MouseEventHandler<HTMLDivElement>
};

function Squares (props: square_props_t) {
  const [piece, setPiece] = React.useState(props.piece);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setPiece(props.grabbed);
    props.handleClick(e);
  }

  return(
    <div className={`${props.color}-square`}>
      <img
        src={piece}
        onClick={handleClick}
        draggable={false}
      />
    </div>
  )
}

class ChessBoard extends React.Component {
  state: {
    piece: string,
    flipped: boolean,
    cursor: string
  };

  constructor(props: chess_board_props_t) {
    super(props);

    this.state = {
      piece: Piece.empty,
      flipped: false,
      cursor: ''
    }
  }

  setGrabbedPiece = (e: React.MouseEvent<HTMLDivElement>) => {
    let positionedPiece = (e.target as HTMLImageElement).src;
    let newCursor = (positionedPiece === Piece.empty) ? 'pointer' : positionedPiece;

    console.log(positionedPiece);
    console.log(newCursor);

    if (positionedPiece !== Piece.empty && this.state.piece !== Piece.empty) {
      this.setState({
        cursor: 'pointer',
        piece: Piece.empty
      });
    } else {
      this.setState({
        cursor: `url(${newCursor}) 25 25, auto`,
        piece: positionedPiece
      });
    }
  }

  render() {
    return (
      <div className={'board-frame'}>
        <div className={'chess-board'} style={{ cursor: this.state.cursor }}>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.rook} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.knight} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.bishop} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.queen} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.king} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.bishop} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.knight} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.rook} color={'black'}/>

          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.pawn} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.pawn} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.pawn} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.pawn} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.pawn} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.pawn} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.pawn} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.Black.pawn} color={'white'}/>

          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>

          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>

          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>

          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.empty} color={'white'}/>

          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.pawn} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.pawn} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.pawn} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.pawn} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.pawn} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.pawn} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.pawn} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.pawn} color={'black'}/>

          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.rook} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.knight} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.bishop} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.queen} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.king} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.bishop} color={'white'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.knight} color={'black'}/>
          <Squares grabbed={this.state.piece} handleClick={this.setGrabbedPiece} piece={Piece.White.rook} color={'white'}/>
        </div>
      </div>
    )
  }
}

export default ChessBoard;