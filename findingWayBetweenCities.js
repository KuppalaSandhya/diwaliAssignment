function findsPath(from, to, path) {

    if (from === to) {
        path.unshift(to);
        return path;
    }

    for (let i = 0; i < connections.length; i++) {
        for (let j = 0; j < connections[i].connections.length; j++) {
            if (to === connections[i].connections[j]) {
                path.unshift(to);
                findsPath(from, connections[i].city, path)
            }
        }
    }

    return path;

}

const connections = [
    {
        city: "Mumbai",
        connections: ["Bangalore", "New Delhi"],
    },
    {
        city: "New Delhi",
        connections: ["Bangalore", "Mumbai", "Kolkata"],
    },
    {
        city: "Bangalore",
        connections: ["Chennai", "Mumbai"],
    },
    {
        city: "Kolkata",
        connections: ["Shillong"],
    },
    {
        city: "Shillong",
        connections: ["Guwahati"],
    },
];

const path = [];
console.log(findsPath("Mumbai", "Guwahati", path));
// console.log(findsPath("Bangalore", "Kolkata", path));