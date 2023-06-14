import { excludesFalsy } from '@creator-experience/utils';
import {
  Keypair,
  Transaction,
  TransactionCtorFields,
  TransactionInstruction,
} from '@solana/web3.js';

interface TransactionsBatchParams {
  beforeTransactions: Transaction[];
  transactions: Transaction[];
  afterTransactions: Transaction[];
  signers: Keypair[];
  instructions: TransactionInstruction[];
}

export class TransactionsBatch {
  beforeTransactions: Transaction[];
  transactions: Transaction[];
  afterTransactions: Transaction[];

  signers: Keypair[];

  static merge(
    txs: (Transaction | TransactionsBatch | undefined)[]
  ): TransactionsBatch {
    return new TransactionsBatch({
      transactions: txs
        .flatMap((tx) =>
          tx instanceof TransactionsBatch ? tx.toTransactions() : [tx]
        )
        .filter(excludesFalsy),
      signers: txs
        .flatMap((tx) => (tx instanceof TransactionsBatch ? tx.signers : []))
        .filter(excludesFalsy),
    });
  }

  constructor({
    beforeTransactions = [],
    transactions = [],
    afterTransactions = [],
    signers = [],
    instructions = [],
  }: Partial<TransactionsBatchParams> | undefined = {}) {
    this.beforeTransactions = beforeTransactions;
    this.transactions = transactions;
    this.afterTransactions = afterTransactions;
    this.signers = signers;

    if (instructions.length) {
      this.addInstructions(instructions);
    }
  }

  addInstructions(instructions: TransactionInstruction[]) {
    const tx = new Transaction();
    tx.add(...instructions);
    this.addTransaction(tx);
  }

  addSigner(signer: Keypair) {
    this.signers.push(signer);
  }

  addBeforeTransaction(transaction: Transaction) {
    this.beforeTransactions.push(transaction);
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  addAfterTransaction(transaction: Transaction) {
    this.afterTransactions.push(transaction);
  }

  addBatch(tx: TransactionsBatch) {
    this.transactions.push(...tx.transactions);
    this.afterTransactions.push(...tx.afterTransactions);
    this.beforeTransactions.push(...tx.beforeTransactions);
    this.signers.push(...tx.signers);
  }

  toTransactions() {
    return [
      ...this.beforeTransactions,
      ...this.transactions,
      ...this.afterTransactions.reverse(),
    ];
  }

  toInstructions() {
    return this.toTransactions().flatMap((t) => t.instructions);
  }

  combine(options?: TransactionCtorFields) {
    const tx = new Transaction(options).add(...this.toTransactions());
    if (this.signers.length) {
      tx.partialSign(...this.signers);
    }
    return tx;
  }
}
