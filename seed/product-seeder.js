var Product = require('../models/Product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbku', {useNewUrlParser: true, useUnifiedTopology: true});

var products = [
    new Product ({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71V8NnWUZXL._AC_SX355_.jpg',
        title: 'Scientific Pen',
        desc: 'This is new, u must have it!',
        price: 50000
    }),
    new Product ({
        imagePath: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/11/26/0/0_0662ae26-6656-4018-b769-e33862f6b8aa_640_640.jpg',
        title: 'Diary Gaib',
        desc: 'Tulis nama orang terdekatmu dan kamu akan terkejut :v',
        price: 100000
    }),
    new Product ({
        imagePath: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/21/11481865/11481865_99c50329-c1f9-4bb6-a2fb-c7235ed11f12_1000_1000.jpg',
        title: 'Sepatu merk Anu',
        desc: 'Orang hemat pake ini',
        price: 200000
    }),
    new Product ({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51iPK6h5zrL._AC_UX385_.jpg',
        title: 'Hoodie UMP45',
        desc: 'Untuk yang fanatik GF',
        price: 999999
    }),
    new Product ({
        imagePath: 'https://www.mairu.id/wp-content/uploads/2018/10/Grey.jpg',
        title: 'Tas Biasa',
        desc: 'good',
        price: 100000
    }),
    new Product ({
        imagePath: 'https://cdn0-production-images-kly.akamaized.net/h3NyckU0Snq4RvnCUvgKNLioPr4=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3127628/original/017766000_1589428267-1.jpg',
        title: 'OreOreOre ..',
        desc: 'Untuk yang suka buang duit, boleh dicoba yang satu ini',
        price: 750000
    }),
    new Product ({
        imagePath: 'https://ae01.alicdn.com/kf/HTB1h0v_JHrpK1RjSZTEq6AWAVXaS/The-Quintessential-Quintuplets-Miku-Nakano-Cosplay-headphone-earphone.jpg',
        title: 'Headphone',
        desc: 'Series Nakano Miku',
        price: 450000
    }),
    new Product ({
        imagePath: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/3/2/0/0_a294fba2-6948-414d-b8b7-2ca2b5b36462_700_505.jpg',
        title: 'Mouse Gaming',
        desc: 'Gaming terus pake mouse ini ga bakal bosen disaat gabut karantina',
        price: 150000
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
