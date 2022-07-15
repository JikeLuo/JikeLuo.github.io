// 231 / 1m = 3.85 每秒拍數
// 900 / 4 = 225 一拍

//
//  225 550 775 900 | x x x 1800 | x x x 2700 / 900

// 17 20 20.5 | 21 22 23 24 | 25 .25 .5 .75 26.25
// 1

//
// 37 38 39 40 | 41*2 43*2 | 45*2 47*2 | 49*2 52 |
//
//
// 53 54 55 56 | 57 |
//
//
// 89 93 97 101 105 109 113 117 121 125 129 133 137 141

export const tempestissimo = [{speed: 1, bpm: 231,},
    // 1*2 4 4.5 |5
    {block: '1', position: 1,}, {block: '4', position: 1,}, {block: '2', position: 4,}, {block: '3', position: 4.5,}, {block: '2', position: 5,},
    //  6 7 8 |
    {block: '3', position: 6,}, {block: '2', position: 7,}, {block: '3', position: 8,},
    //  9*2 11*2 |
    {block: '1', position: 9,},  {block: '4', position: 9,}, {block: '1', position: 11,}, {block: '4', position: 11,},
    // 13*2 15*2 |
    {block: '2', position: 13,},  {block: '3', position: 13,}, {block: '2', position: 15,}, {block: '3', position: 15,},

    // 17*2 20 20.5 |21
    {block: '2', position: 17,},  {block: '3', position: 17,}, {block: '2', position: 20,}, {block: '3', position: 20.5,},{block: '1', position: 21,},
    //   22 23 24 |
    {block: '2', position: 22,}, {block: '3', position: 23,}, {block: '4', position: 24,},


    // 7
    // 25 5 26 5 27 5 28 5 |
    {block: '1', position: 25,},  {block: '2', position: 25,}, {block: '3', position: 25.5,}, {block: '4', position: 25.5,},
    {block: '1', position: 26,},  {block: '2', position: 26,}, {block: '3', position: 26.5,}, {block: '4', position: 26.5,},
    {block: '1', position: 27,},  {block: '2', position: 27,}, {block: '3', position: 27.5,}, {block: '4', position: 27.5,},
    {block: '1', position: 28,},  {block: '2', position: 28,}, {block: '3', position: 28.5,}, {block: '4', position: 28.5,},


    // 29 32 | 33  36 36.5 | 37
    {block: 'space', position: 32,}, {block: '3', position: 33,},  {block: '2', position: 33,}, {block: '1', position: 36,},{block: '2', position: 36.5,},{block: '1', position: 37,},
    //  38 39 40 |
    {block: '2', position: 38,}, {block: '3', position: 39,}, {block: '4', position: 40,},
    // 41*2 43*2 | 45*2 47*2 | 49*2 52 |53 54
    {block: '1', position: 41,},  {block: '4', position: 41,}, {block: '1', position: 43,}, {block: '4', position: 43,},
    {block: '2', position: 45,},  {block: '3', position: 45,}, {block: '2', position: 47,}, {block: '3', position: 47,},
    {block: '2', position: 49,},  {block: '3', position: 49,},
    {block: '3', position: 52,},{block: '2', position: 53,},  {block: '3', position: 54,},


    // 14
    //  55 56 | 57 | 61 .5 |65 65.5
     {block: '3', position: 55,}, {block: '4', position: 56,},
    {block: 'space', position: 57,},
    {block: '2', position: 65,}, {block: '3', position: 65,}, {block: '2', position: 65.5,}, {block: '3', position: 65.5,},
    {block: 'space', position: 66.8,},    {block: 'space', position: 67.6,},    {block: 'space', position: 68.4,},


    // 19
    //  69 | **73** |
    {block: '2', position: 73,}, {block: '3', position: 73,}, {block: '2', position: 73.5,}, {block: '3', position: 73.5,},
    {block: 'space', position: 74.8,},    {block: 'space', position: 75.6,},    {block: 'space', position: 76.4,},


    // 21
    //  77 | **81** | 85 86 87.3 88.1 88.9 |
    {block: '1', position: 81,}, {block: '2', position: 82,},
    {block: 'space', position: 83.3,}, {block: 'space', position: 84.1,}, {block: 'space', position: 84.9,},


    // 23
    // 85| **89** | |
    {block: '1', position: 89,}, {block: '4', position: 90,},
    {block: 'space', position: 91.3,}, {block: 'space', position: 92.1,}, {block: 'space', position: 92.9,},


    // 25
    // 93 |97 98 99 100 (5)| 101 102 103 104 (.5)| 105 106 107 108(.5)
    {block: '1', position: 97,}, {block: '1', position: 97.5,}, {block: '1', position: 98,}, {block: '1', position: 98.5,},
    {block: '3', position: 99,}, {block: '3', position: 99.5,}, {block: '3', position: 100,}, {block: '3', position: 100.5,},
    {block: '1', position: 101,}, {block: '1', position: 101.5,}, {block: '1', position: 102,}, {block: '1', position: 102.5,},
    {block: '3', position: 103,}, {block: '3', position: 103.5,}, {block: '2', position: 104,}, {block: '2', position: 104.5,},

    {block: '4', position: 105,}, {block: '4', position: 105.5,}, {block: '4', position: 106,}, {block: '4', position: 106.5,},
    {block: '2', position: 107,}, {block: '2', position: 107.5,}, {block: '2', position: 108,}, {block: '2', position: 108.5,},
    {block: '4', position: 109,}, {block: '4', position: 109.5,}, {block: '4', position: 110,}, {block: '4', position: 110.5,},
    {block: '3', position: 111,}, {block: '3', position: 111.5,}, {block: '2', position: 112,}, {block: '2', position: 112.5,},

    // 28
    //  109 110 111 112 (.5) | 113 114 115 116 (.5) | 117 118 119 120 (.5)
    {block: '1', position: 113,}, {block: '1', position: 113.5,}, {block: '1', position: 114,}, {block: '1', position: 114.5,},
    {block: '2', position: 115,}, {block: '2', position: 115.5,}, {block: '2', position: 116,}, {block: '2', position: 116.5,},
    {block: '1', position: 117,}, {block: '1', position: 117.5,}, {block: '1', position: 118,}, {block: '1', position: 118.5,},
    {block: '4', position: 119,}, {block: '3', position: 119.5,}, {block: '1', position: 120,}, {block: '2', position: 120.5,},

    {block: '4', position: 121,}, {block: '4', position: 121.5,}, {block: '4', position: 122,}, {block: '4', position: 122.5,},
    {block: '3', position: 123,}, {block: '3', position: 123.5,}, {block: '3', position: 124,}, {block: '3', position: 124.5,},
    {block: '4', position: 125,}, {block: '4', position: 125.5,}, {block: '4', position: 126,}, {block: '4', position: 126.5,},
    // 31
    // 127 128 | 129 130 131 132 | 133 |
    {block: '1', position: 129,}, {block: '2', position: 130,},
    {block: '2', position: 131.3,}, {block: '3', position: 131.3,},
    {block: '2', position: 132.1,}, {block: '3', position: 132.1,},
    {block: '2', position: 132.9,}, {block: '3', position: 132.9,},
    // 137
    {block: '4', position: 137,}, {block: '3', position: 138,},
    {block: '1', position: 139.3,}, {block: '4', position: 139.3,},
    {block: '1', position: 140.1,}, {block: '4', position: 140.1,},
    {block: '1', position: 140.9,}, {block: '4', position: 140.9,},
    //  141 | 145
    {block: '4', position: 145,}, {block: '4', position: 145.5,}, {block: '3', position: 146,}, {block: '3', position: 146.5,},
    {block: '1', position: 147,}, {block: '1', position: 147.5,}, {block: '2', position: 148,}, {block: '2', position: 148.5,},
    {block: '3', position: 149,}, {block: '3', position: 149.5,}, {block: '4', position: 150,}, {block: '4', position: 150.5,},
    {block: '2', position: 151,}, {block: '2', position: 151.5,}, {block: '1', position: 152,}, {block: '1', position: 152.5,},







]

// 77.25 .5 78 78.5
// 80
// 84
// 88
// 92
// 96
// 100
// 104
// 108
// 112
// 116
// 120
// 124
// 128
// 132
