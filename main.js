var bubbleConfig = {
    chart: {
        type: 'packedbubble',
        height: '50%'
    },
    title: {
        text: "Harry Potter Character Screen Time",
    },
    subtitle: {
        text: "Source: Harry Potter Wiki"
    },
    legend: {
        enabled: true
    },
    tooltip:{
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} seconds'
    },
    plotOptions: {
        packedBubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}',
            filter: {
                property: 'y',
                operator: '>',
                value: 250
            },
            style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'normal'
            }
        }
    },
    series: [{
        name: 'Creature',
        color: "#b87333", 
        data: [{
            name: "Dobby",
            value: 675
        }, {
            name: "Nagini",
            value: 210
        },
        {
            name: "Aragog",
            value: 105
        },
        {
            name: "Fang",
            value: 210
        },
        {
            name: "Firenze",
            value: 90
        },
        {
            name: "Grawp",
            value: 105
        },
        {
            name: "Fawkes",
            value: 195
        },
        {
            name: "Bogrod",
            value: 180
        },
        {
            name: "Hedwig",
            value: 375
        },
        {
            name: "Kreacher",
            value: 180
        },
        {
            name: "Griphook",
            value: 435
        }, {
            name: "Buckbeak",
            value: 480
        }, {
            name: "Crookshanks",
            value: 105
        }]
    }, {
        name: "Gryffindor",
        color: "#7F0909",
        data: [{
            name: "Sir Nicholas 'Nearly-Headless Nick'",
            value: 90
        },
        {
            name: "Harry Potter",
            value: 32355
        },
        {
            name: "Ron Weasley",
            value: 12705
        },
        {
            name: "Hermione Granger",
            value: 12300
        },
        {
            name: "Albus Dumbledore",
            value: 4635
        },
        {
            name: "Rubeus Hagrid",
            value: 2745
        },
        {
            name: "Ginny Weasley",
            value: 1815
        },
        {
            name: "Sirius Black",
            value: 1245
        },
        {
            name: "Minerva McGonagall",
            value: 1725
        },
        {
            name: "Remus Lupin",
            value: 1560
        },
        {
            name: "Fred Weasley",
            value: 1185
        },
        {
            name: "George Weasley",
            value: 1215
        },
        {
            name: "Neville Longbottom",
            value: 1695
        },
        {
            name: "Molly Weasley",
            value: 585
        },
        {
            name: "Arthur Weasley",
            value: 945
        }, {
            name: "Katie Bell",
            value: 165
        }, {
            name: "Peter Pettigrew",
            value: 495
        }, {
            name: "Bill Weasley",
            value: 105
        }, {
            name: "Percy Weasley",
            value: 300
        }, {
            name: "Seamus Finnigan",
            value: 585
        }, {
            name: "James Potter",
            value: 135
        }, {
            name: "Cormac McLaggen",
            value: 150
        }, {
            name: "Romilda Vane",
            value: 120
        }, {
            name: "Lily Potter",
            value: 210
        }, {
            name: "Dean Thomas",
            value: 405
        }, {
            name: "Parvati Patil",
            value: 285
        }, {
            name: "Oliver Wood",
            value: 270
        }, {
            name: "Lavender Brown",
            value: 330
        }, {
            name: "Angelina Johnson",
            value: 105
        }, {
            name: "Nigel",
            value: 180
        }]
    }, {
        name: 'Hufflepuff',
        color: "#EEE117",
        data: [{
            name: "Nymphadora Tonks",
            value: 300
        }, {
            name: "Cho Chang",
            value: 405
        }, {
            name: "Cedric Diggory",
            value: 495
        }, {
            name: "Pomona Sprout",
            value: 120
        }]
    }, {
        name: 'Muggle',
        color: "#ffe0bd",
        data: [{
            name: "Petunia Dursley",
            value: 495
        },
        {
            name: "Frank Bryce",
            value: 90
        },
        {
            name: "Vernon Dursley",
            value: 660
        },
        {
            name: "Dudley Dursley",
            value: 585
        },
        {
            name: "Marge Dursley",
            value: 165
        }]
    }, {
        name: 'Ravenclaw',
        color: "#000A90",
        data: [{
            name: "Moaning Myrtle",
            value: 165
        },
        {
            name: "Luna Lovegood",
            value: 1035
        },
        {
            name: "Marcus Flint",
            value: 105
        },
        {
            name: "Professor Filius Flitwick",
            value: 315
        },
        {
            name: "Padma Patil",
            value: 285
        },
        {
            name: "Gilderoy Lockhart",
            value: 630
        },
        {
            name: "Helena Ravenclaw",
            value: 135
        },
        {
            name: "Quirinus Quirrell",
            value: 420
        },
        {
            name: "Sybil Trelawney",
            value: 300
        },
        {
            name: "Xenophilius Lovegood",
            value: 300
        }, {
            name: "Mr. Ollivander",
            value: 435
        }]
    }, {
        name: "Slytherin",
        color: "#48833f",
        data: [{
            name: "Voldemort",
            value: 2235
        },
        {
            name: "Severus Snape",
            value: 2595
        },
        {
            name: "Draco Malfoy",
            value: 1905
        },
        {
            name: "Lucius Malfoy",
            value: 915
        },
        {
            name: "Bellatrix Lestrange",
            value: 630
        },
        {
            name: "Narcissa Malfoy",
            value: 405
        },
        {
            name: "Blaise Zabini",
            value: 150
        },
        {
            name: "Gregory Goyle",
            value: 465
        },
        {
            name: "Vincent Crabbe",
            value: 375
        },
        {
            name: "Horace Slughorn",
            value: 1125
        },
        {
            name: "Albus Severus Potter",
            value: 105
        },
        {
            name: "Scabior",
            value: 210
        },
        {
            name: "Dolores Umbridge",
            value: 960
        }]
    }, {
        name: "Unknown",
        color: "#ccccc5",
        data: [{
            name: "Alastor 'Mad-Eye' Moody",
            value: 210
        }, {
            name: "Aberforth Dumbledore",
            value: 210
        }, {
            name: "Fleur Delacour",
            value: 390
        }, {
            name: "Viktor Krum",
            value: 315
        }, {
            name: "Fenrir Greyback",
            value: 105
        }, {
            name: "Poppy Pomfrey",
            value: 135
        }, {
            name: "Rufus Scrimgeour",
            value: 150
        }, {
            name: "Rolanda Hooch",
            value: 105
        }, {
            name: "Alecto Carrow",
            value: 120
        }, {
            name: "Amycus Carrow",
            value: 120
        }, {
            name: "Amos Diggory",
            value: 90
        }, {
            name: "Mundungus Fletcher",
            value: 180
        }, {
            name: "Rita Skeeter",
            value: 210
        }, {
            name: "Gabrielle Delacour",
            value: 90
        }, {
            name: "Yaxley",
            value: 120
        }, {
            name: "Bathilda Bagshot",
            value: 90
        }, {
            name: "Stan Shunpike",
            value: 120
        }, {
            name: "Arabella Figg",
            value: 90
        }, {
            name: "Mary Cattermole",
            value: 105
        }, {
            name: "Bartemius Crouch Jr.",
            value: 975
        }, {
            name: "Bartemius Crouch Sr.",
            value: 315
        }, {
            name: "Cornelius Fudge",
            value: 555
        }, {
            name: "Argus Filch",
            value: 480
        }, {
            name: "Kingsley Shacklebolt",
            value: 270
        }, {
            name: "Igor Karkaroff",
            value: 195
        }, {
            name: "Olympe Maxime",
            value: 195
        }]
    }]
}
Highcharts.chart("packedBubble", bubbleConfig);

var stackConfig = {
    chart: {
        type: "column"
    },
    title: {
        text: "Harry Potter Movie Gross - Worldwide"
    },
    subtitle:{
        text: "Source: Box Office Mojo"
    },
    tooltip:{
        pointFormat: '{point.value} million'
    },
    xAxis: {
        categories: ['Harry Potter and the Deathly Hallows (Part 2)', 'Harry Potter and the Sorcerer\'s Stone', 'Harry Potter and the Deathly Hallows (Part 1)', 'Harry Potter and the order of the Phoenix', 'Harry Potter and the Half-Blood Prince', 'Harry Potter and the Goblet of Fire', 'Harry Potter and the Chamber of Secrets']
    },
    yAxis: {
        min: 0,
        title: {
            text: "Dollars Earned (Millions)"
        }
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false
        },
    },
    series: [{
        name: 'Worldwide',
        data: [1340, 975, 960, 940, 934, 897, 879]
    }, {
        name: "US",
        data: [381, 318, 296, 292, 302, 290, 262]
    }]

}
Highcharts.chart("stack", stackConfig);

var divElement = document.getElementById('viz1574641640834');
var vizElement = divElement.getElementsByTagName('object')[0];
vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);

var divElement = document.getElementById('viz1574748468183');
var vizElement = divElement.getElementsByTagName('object')[0];
vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
/*
function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200 || httpRequest.status === 0) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

function onSuccessCb(jsonData) {
    var bubbleData = jsonData.map(function(elm) {
        return {
            data: {
                name: elm['Character'],
                value: elm['Elapsed']
            },
            name: elm['Catagory']
            };
        });
    bubbleConfig.series = bubbleData;
    Highcharts.chart("packedBubble", bubbleConfig);
}
function doMain() {
    fetchJSONFile('assets/housedata.json', onSuccessCb);
}

document.onload = doMain();*/