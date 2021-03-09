import * as CryptoJS from "crypto-js";

class Block {
	public index: number;
	public hash: string;
	public prevHash: string;
	public data: string;
	public timestamp: number;

	static calculateBlockHash = (
		index: number,
		prevHash: string,
		timestamp: number,
		data: string
	): string => CryptoJS.SHA256(index + prevHash + timestamp + data).toString();

	static validateStructure = (aBlock: Block): boolean =>
		typeof aBlock.index === "number" &&
		typeof aBlock.hash === "string" &&
		typeof aBlock.prevHash === "string" &&
		typeof aBlock.timestamp === "number" &&
		typeof aBlock.data === "string";

	constructor(
		index: number,
		hash: string,
		prevHash: string,
		data: string,
		timestamp: number
	) {
		this.index = index;
		this.hash = hash;
		this.prevHash = prevHash;
		this.data = data;
		this.timestamp = timestamp;
	}
}

const genesisBlock: Block = new Block(
	0,
	"o134081h3ksjd093",
	"",
	"hello world",
	123456
);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
	const previousBlock: Block = getLatestBlock();
	const newIndex: number = previousBlock.index + 1;
	const nextTimestamp: number = getNewTimestamp();
	const nextHash: string = Block.calculateBlockHash(
		newIndex,
		previousBlock.hash,
		nextTimestamp,
		data
	);
	const newBlock: Block = new Block(
		newIndex,
		nextHash,
		previousBlock.hash,
		data,
		nextTimestamp
	);
	return newBlock;
};

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
	if (!Block.validateStructure(candidateBlock)) {
		return false;
	} else if (previousBlock.index + 1 !== candidateBlock.index) {
		return false;
	} else if (previousBlock.hash !== candidateBlock.prevHash) {
		return false;
	} else {
		return true;
	}
};

export {};
