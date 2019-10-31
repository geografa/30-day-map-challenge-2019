window.addEventListener('DOMContentLoaded', function(e) {

    var waterfall = new Waterfall({ minBoxWidth: 200 });

    // button click handle
    // var btn = document.getElementById('add-btn');
    // var boxHandle = newNode();
    // btn.addEventListener('click', function() {
    //     waterfall.addBox(boxHandle());
    // });

    // var scaleUpbtn = document.getElementById('scaleup-btn');
    // scaleUpbtn.addEventListener('click', function() {

    //     waterfall.minBoxWidth += 50;
    //     waterfall.compose(true);
    // });

    // var scaleDownbtn = document.getElementById('scaledown-btn');
    // scaleDownbtn.addEventListener('click', function() {

    //     waterfall.minBoxWidth -= 50;
    //     waterfall.compose(true);
    // });

    // window.onscroll = function() {
    //     var i = waterfall.getHighestIndex();
    //     if(i > -1) {
    //         // get last box of the column
    //         var lastBox = Array.prototype.slice.call(waterfall.columns[i].children, -1)[0];
    //         if(checkSlide(lastBox)) {
    //             var count = 5;
    //             while(count--) waterfall.addBox(boxHandle());
    //         }
    //     }
    // };

    function checkSlide(elem) {
        if(elem) {
            var screenHeight = (document.documentElement.scrollTop || document.body.scrollTop) +
                               (document.documentElement.clientHeight || document.body.clientHeight);
            var elemHeight = elem.offsetTop + elem.offsetHeight / 2;

            return elemHeight < screenHeight;
        }
    }

    function newNode() {
        var size = ['660x250', '300x400', '350x500', '200x320', '300x300'];
        var color = [ 'E97452', '4C6EB4', '449F93', 'D25064', 'E59649' ];
        var i = 0;

        return function() {
            
            var box = document.createElement('div');
            box.className = 'wf-box';
            var image = document.createElement('img');
            image.src = "http://placehold.it/" + size[i] + '/' + color[i] + '/fff';
            box.appendChild(image);
            var content = document.createElement('div');
            content.className = 'content';
            var title = document.createElement('h3');
            title.appendChild(document.createTextNode('Heading'));
            content.appendChild(title);
            var p = document.createElement('p');
            p.appendChild(document.createTextNode('Content here'));
            content.appendChild(p);
            box.appendChild(content);

            if(++i === size.length) i = 0;

            return box;
        };
    }
});

var access_token = 'pk.eyJ1IjoiZ3JhZmEiLCJhIjoiY2ptYjNtZWxnMDBrdDNwbnVicGJzOWg2NyJ9.9OulyCe3kEqMAXPbx1mKUA';

var styles = [
    [
        'cjdxwjzz515ri2so4azysuxy6',
        -122.54,
        45.5,
        30,
        -131,
        13
    ],
    [
        'cio634qhz0008afnm4sqwpfts',
        -122.54,
        45.5,
        30,
        -131,
        13
    ]
];

for (let index = 0; index < styles.length; index++) {
    var staticMap = 'https://api.mapbox.com/styles/v1/grafa/' + styles[index][0] + '/static/-121.983366/,45.628481,14.5,0/300x300?access_token=' + access_token;
    console.log(staticMap);
}



var baseMap = 'https://api.mapbox.com/styles/v1/grafa/cjdxwjzz515ri2so4azysuxy6.html?fresh=true&title=true&access_token=pk.eyJ1IjoiZ3JhZmEiLCJhIjoiY2ptYjNtZWxnMDBrdDNwbnVicGJzOWg2NyJ9.9OulyCe3kEqMAXPbx1mKUA#13.71/38.72536/-9.14433/152.8/44';