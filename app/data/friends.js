
var amigosData = [
    {
        name: "Carlos",
        picture: "src= 'assets/images/carlos.jpg'",
        score: [
            1,
            1,
            1,
            1,
            1,
            1,
            5,
            5,
            4,

        ],
        totalScorefunc: function(total, num){
            return total + num;
        },
        totalnum: function(item){
            amigosData[0].score.reduce(amigosData[0].totalScorefunc);
        }

    },
    {
        name: "Malik",
        score: [
            1,
            4,
            3,
            2,
            3,
            1,
            2,
            3,
            1
        ]
    },
    {
    name: "Penny",
    score: [
        1,
        4,
        3,
        3,
        3,
        1,
        4,
        5,
        5,
        5,
    ]
    },
    {
        name: "Lauren",
        score: [
            1,
            1,
            5,
            5,
            3,
            2,
            4,
            3,
            3,
            1
        ]
    },
    {
        name: "Jessica",
        score: [
            1,
            2,
            1,
            2,
            1,
            2,
            5,
            5,
            2,
            3
        ]
    }
]

module.exports = amigosData;
