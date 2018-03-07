var crypto = require('crypto');

//Blockchain类
class Blockchain {
    constructor(){
        this.chain = [];
        this.current_transactions = [];
        //创建初始block
        this.new_block(previous_hash=1, proof=100)
    }

    new_block(proof, previous_hash=None){
        //new block
        const block = {
            'index': this.chain.length + 1,
            'timestamp': Date.now(),
            'transactions': this.current_transactions,
            'proof': proof,
            'previous_hash': previous_hash || this.hash(this.chain[-1]),
        }
        //Reset the current list of transactions
        this.current_transactions = []
        this.chain.push(block)
        return block
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
        block.sort((a,b) => {
            if(a.index > b.index){
                return 1
            }else{
                return -1
            }
        })
        const block_string = encodeURI(JSON.stringify(block))
        const sha256 = crypto.createHash('sha256');
        sha256.update(block_string);
        return sha256.digest('hex');
    }

    last_block(){
        return this.chain[-1]
    }

    proof_of_work(last_proof){
        const proof = 0;
        while(!this.valid_proof(last_proof,proof)){
            proof += 1;
        }
        return proof;
    }

    valid_proof(last_proof,proof){
        const guessBeforeCode = last_proof.toString()+proof.toString();
        const guess = encodeURI(guessBeforeCode);
        const sha256 = crypto.createHash('sha256');
        sha256.update(guess);
        const guess_hash = sha256.digest('hex');
        return guess_hash.slice(0,4) == '0000'
    }
}