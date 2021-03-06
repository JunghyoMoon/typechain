class Block {
    public index: number;
    public hash: string;
    public prevHash: string;
    public data: string;
    public timestamp: number;
    constructor(index: number, hash: string, prevHash: string, data: string, timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.prevHash = prevHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "o134081h3ksjd093", "", "hello world", 123456);

let blockChain: [Block] = [genesisBlock];

console.log(blockChain);

export {};