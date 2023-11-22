"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
//블록 클래스
class Block {
    constructor(
    //해시값 생성을 위해 필요한 값
    prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    //해시값 생성
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
//블록체인 클레스
class Blockchain {
    constructor() {
        this.blocks = [];
    }
    //이전 해시값을 불러오는 함수
    getPrevHash() {
        if (this.blocks.length === 0)
            return ""; //이전 해시값이 없을 경우
        return this.blocks[this.blocks.length - 1].hash; //마지막 블록의 해시값 반환
    }
    //새로운 블록 추가
    addBlock(data) {
        //새로운 블록
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock); //블록 추가
    }
    //블록 접근
    getBlocks() {
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
