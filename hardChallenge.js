function getFinalQuantity(type, transactionQuantity, currentQuantity) {

    switch (type) {
        case "sale": {
            return Math.max(0, currentQuantity - transactionQuantity)
        }
        case "restock": {
            return currentQuantity + transactionQuantity
        }
        default: {
            console.log("unknownTransaction")
        }
    }

}

function processInventory(initialStock, transactions) {
    const finalStock = { ...initialStock }

    for (const transaction of transactions) {

        if (finalStock[transaction.item] === undefined) {
            finalStock[transaction.item] = 0;
        }

        finalStock[transaction.item] = getFinalQuantity(transaction.type, transaction.quantity, finalStock[transaction.item])
    }
    return finalStock

}

const transactions = [
    { item: "laptop", type: "sale", quantity: 2 },
    { item: "phone", type: "restock", quantity: 10 },
    { item: "tablet", type: "sale", quantity: 6 }
];

const initialStock = { laptop: 10, phone: 25, tablet: 5 };

console.log(processInventory(initialStock, transactions));
