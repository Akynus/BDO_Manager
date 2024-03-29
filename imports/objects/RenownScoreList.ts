export interface IScore {
    min: number;
    max: number;
    bonus: number;
}

export default class RenownScoreList {
    public static AP: IScore[] = [
        {min: 100, max: 139, bonus: 5},
        {min: 140, max: 169, bonus: 10},
        {min: 170, max: 183, bonus: 15},
        {min: 184, max: 208, bonus: 20},
        {min: 209, max: 234, bonus: 30},
        {min: 235, max: 244, bonus: 40},
        {min: 245, max: 248, bonus: 48},
        {min: 249, max: 252, bonus: 57},
        {min: 253, max: 256, bonus: 69},
        {min: 257, max: 260, bonus: 83},
        {min: 261, max: 264, bonus: 101},
        {min: 265, max: 268, bonus: 122},
        {min: 269, max: 272, bonus: 137},
        {min: 273, max: 276, bonus: 142},
        {min: 277, max: 280, bonus: 148},
        {min: 281, max: 284, bonus: 154},
        {min: 285, max: 288, bonus: 160},
        {min: 289, max: 292, bonus: 167},
        {min: 293, max: 296, bonus: 174},
        {min: 297, max: 300, bonus: 181},
        {min: 301, max: 304, bonus: 188},
        {min: 305, max: 308, bonus: 196},
        {min: 309, max: 315, bonus: 200},
        {min: 316, max: 322, bonus: 203},
        {min: 323, max: 329, bonus: 205},
        {min: 330, max: 339, bonus: 207},
        {min: 340, max: 999, bonus: 210},
    ];

    public static DP: IScore[] = [
        {min: 203, max: 210, bonus: 1},
        {min: 211, max: 217, bonus: 2},
        {min: 218, max: 225, bonus: 3},
        {min: 226, max: 232, bonus: 4},
        {min: 233, max: 240, bonus: 5},
        {min: 241, max: 247, bonus: 6},
        {min: 248, max: 255, bonus: 7},
        {min: 256, max: 262, bonus: 8},
        {min: 263, max: 270, bonus: 9},
        {min: 271, max: 277, bonus: 10},
        {min: 278, max: 285, bonus: 11},
        {min: 286, max: 292, bonus: 12},
        {min: 293, max: 300, bonus: 13},
        {min: 301, max: 307, bonus: 14},
        {min: 308, max: 314, bonus: 15},
        {min: 315, max: 321, bonus: 16},
        {min: 322, max: 328, bonus: 17},
        {min: 329, max: 334, bonus: 18},
        {min: 335, max: 340, bonus: 19},
        {min: 341, max: 346, bonus: 20},
        {min: 347, max: 352, bonus: 21},
        {min: 353, max: 358, bonus: 22},
        {min: 359, max: 364, bonus: 23},
        {min: 365, max: 370, bonus: 24},
        {min: 371, max: 376, bonus: 25},
        {min: 377, max: 382, bonus: 26},
        {min: 383, max: 388, bonus: 27},
        {min: 389, max: 394, bonus: 28},
        {min: 395, max: 400, bonus: 29},
        {min: 401, max: 999, bonus: 30},
    ];
}