import crypto from "crypto";

interface BlockShape {
  hash: string; //해시값
  prevHash: string; //이전 해시값
  height: number; //블록 위치 표시 숫자
  data: string; //블록에 저장할 데이터
}

//블록 클래스
class Block implements BlockShape {
  public hash: string;

  constructor(
    //해시값 생성을 위해 필요한 값
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  //해시값 생성
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;

    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

//블록체인 클레스
class Blockchain {
  private blocks: Block[]; //Block 클래스의 배열

  constructor() {
    this.blocks = [];
  }

  //이전 해시값을 불러오는 함수
  private getPrevHash() {
    if (this.blocks.length === 0) return ""; //이전 해시값이 없을 경우
    return this.blocks[this.blocks.length - 1].hash; //마지막 블록의 해시값 반환
  }

  //새로운 블록 추가
  public addBlock(data: string) {
    //새로운 블록
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock); //블록 추가
  }

  //블록 접근
  public getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

//블록 추가
blockchain.addBlock("First");
blockchain.addBlock("Second");
blockchain.addBlock("Third");

//출력
console.log(blockchain.getBlocks());

/*

[
  Block {
    prevHash: '',
    height: 1,
    data: 'First',
    hash: '266fdcb1065975f25a2726228d0078374043b2f86ccaea23fb6316435253a094'
  },
  Block {
    prevHash: '266fdcb1065975f25a2726228d0078374043b2f86ccaea23fb6316435253a094',
    height: 2,
    data: 'Second',
    hash: 'cd8b5f2a1bc709994740219dcc47ef8d899981488a5fe2a58ac9f1827cd28727'
  },
  Block {
    prevHash: 'cd8b5f2a1bc709994740219dcc47ef8d899981488a5fe2a58ac9f1827cd28727',
    height: 3,
    data: 'Third',
    hash: '85cef5111609d0704b720d5e1bfb944d29928bad171f4da668f933f145f2f82e'
  }

*/
