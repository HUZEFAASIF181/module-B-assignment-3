let a = {
    iphone: {
        v13: {
            ram: 4,
            rom: 64,
            price: 200000,

        },
        v13pro: {
            ram: 6,
            rom: 128,
            price: 250000,
        },
        v14: {
            ram: 6,
            rom: 128,
            price: 300000,
        }
    },
    infinix: {
        hot9play: {
            ram: 4,
            rom: 64,
            price: 18000,
        },
        hot10: {
            ram: 6,
            rom: 128,
            price: 25000,
        },
        smart5: {
            ram: 2,
            rom: 32,
            price: 15000,
        }
    },
    redmi: {
        v9c: {
            ram: 4,
            rom: 64,
            price: 18000,
        },
        v9d: {
            ram: 4,
            rom: 64,
            price: 18000,
        },
        v9e: {
            ram: 8,
            rom: 64,
            price: 20000,
        }
    },
};

a.map(function(e) {
    console.log(e);
});


let b = a.filter(function (x, i) {
    if (x.ram == "4") {
        return x;
    }
});
console.log(b);