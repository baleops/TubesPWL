var Product = require('../models/Product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbku', {useNewUrlParser: true, useUnifiedTopology: true});

var products = [
    new Product ({
        imagePath: 'https://i.pinimg.com/originals/fe/3a/e1/fe3ae18f6556d771f7d1998feede3a7b.jpg',
        title: 'Oh M G',
        desc: 'Gafgafg dfdgfdyfgdyfwf wufheufe',
        price: 200
    }),
    new Product ({
        imagePath: 'https://i.pinimg.com/originals/fe/3a/e1/fe3ae18f6556d771f7d1998feede3a7b.jpg',
        title: 'Kaguya is here',
        desc: 'Gafgafg dfdgfdyfgdyfwf wufheuf ffffffffffffffffffefefefe effsdgdfg gffgfgfg w ae',
        price: 2865
    }),
    new Product ({
        imagePath: 'https://i.pinimg.com/originals/fe/3a/e1/fe3ae18f6556d771f7d1998feede3a7b.jpg',
        title: 'Kahuya sama',
        desc: 'Gafgafg dfdgfdyfyfwf wufheufe',
        price: 2045
    }),
    new Product ({
        imagePath: 'https://i.pinimg.com/originals/fe/3a/e1/fe3ae18f6556d771f7d1998feede3a7b.jpg',
        title: 'Typo bgsd',
        desc: 'Gafgafg dfdgfdyfgdyfwf w',
        price: 209
    })
];

var done = 0;
for (var i = 0; i<products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
