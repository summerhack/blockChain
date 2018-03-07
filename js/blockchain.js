//Blockchain类
class Blockchain {
    constructor(){
        this.chain = [];
        this.current_transactions = [];
        //创建初始快
        this.new_block(previous_hash=1, proof=100)
    }
    new_block(){
        //new block
        const block = {
            'index': len(this.chain) + 1,
            'timestamp': time(),
            'transactions': this.current_transactions,
            'proof': proof,
            'previous_hash': previous_hash || this.hash(this.chain[-1]),
        }
        //Reset the current list of transactions
        this.current_transactions = []
        this.chain.push(block)
        return block
        //add block to chain
    }

    new_transaction(sender,recipient,amount){
        this.current_transactions.push({
            'sender':sender,
            'recipient':recipient,
            'amount':amount
        })
        return this.last_block['index'] + 1
    }

    hash(block){
        const block_string = json.dumps(block, sort_keys=True).encode()
        return hashlib.sha256(block_string).hexdigest()
    }

    last_block(){
        return this.chain[-1]
    }
}