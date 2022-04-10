import chalk from 'chalk';

/**
 * color terminal shortcut
 */
const color = Object.assign(
  {
    Almond: chalk.hex('#EFDECD'),
    'Antique Brass': chalk.hex('#CD9575'),
    Apricot: chalk.hex('#FDD9B5'),
    Aquamarine: chalk.hex('#78DBE2'),
    Asparagus: chalk.hex('#87A96B'),
    'Atomic Tangerine': chalk.hex('#FFA474'),
    'Banana Mania': chalk.hex('#FAE7B5'),
    Beaver: chalk.hex('#9F8170'),
    Bittersweet: chalk.hex('#FD7C6E'),
    Black: chalk.hex('#000000'),
    'Blizzard Blue': chalk.hex('#ACE5EE'),
    Blue: chalk.hex('#1F75FE'),
    'Blue Bell': chalk.hex('#A2A2D0'),
    'Blue Gray': chalk.hex('#6699CC'),
    'Blue Green': chalk.hex('#0D98BA'),
    'Blue Violet': chalk.hex('#7366BD'),
    Blush: chalk.hex('#DE5D83'),
    'Brick Red': chalk.hex('#CB4154'),
    Brown: chalk.hex('#B4674D'),
    'Burnt Orange': chalk.hex('#FF7F49'),
    'Burnt Sienna': chalk.hex('#EA7E5D'),
    'Cadet Blue': chalk.hex('#B0B7C6'),
    Canary: chalk.hex('#FFFF99'),
    'Caribbean Green': chalk.hex('#1CD3A2'),
    'Carnation Pink': chalk.hex('#FFAACC'),
    Cerise: chalk.hex('#DD4492'),
    Cerulean: chalk.hex('#1DACD6'),
    Chestnut: chalk.hex('#BC5D58'),
    Copper: chalk.hex('#DD9475'),
    Cornflower: chalk.hex('#9ACEEB'),
    'Cotton Candy': chalk.hex('#FFBCD9'),
    Dandelion: chalk.hex('#FDDB6D'),
    Denim: chalk.hex('#2B6CC4'),
    'Desert Sand': chalk.hex('#EFCDB8'),
    Eggplant: chalk.hex('#6E5160'),
    'Electric Lime': chalk.hex('#CEFF1D'),
    Fern: chalk.hex('#71BC78'),
    'Forest Green': chalk.hex('#6DAE81'),
    Fuchsia: chalk.hex('#C364C5'),
    'Fuzzy Wuzzy': chalk.hex('#CC6666'),
    Gold: chalk.hex('#E7C697'),
    Goldenrod: chalk.hex('#FCD975'),
    'Granny Smith Apple': chalk.hex('#A8E4A0'),
    Gray: chalk.hex('#95918C'),
    Green: chalk.hex('#1CAC78'),
    'Green Blue': chalk.hex('#1164B4'),
    'Green Yellow': chalk.hex('#F0E891'),
    'Hot Magenta': chalk.hex('#FF1DCE'),
    Inchworm: chalk.hex('#B2EC5D'),
    Indigo: chalk.hex('#5D76CB'),
    'Jazzberry Jam': chalk.hex('#CA3767'),
    'Jungle Green': chalk.hex('#3BB08F'),
    'Laser Lemon': chalk.hex('#FEFE22'),
    Lavender: chalk.hex('#FCB4D5'),
    'Lemon Yellow': chalk.hex('#FFF44F'),
    'Macaroni and Cheese': chalk.hex('#FFBD88'),
    Magenta: chalk.hex('#F664AF'),
    'Magic Mint': chalk.hex('#AAF0D1'),
    Mahogany: chalk.hex('#CD4A4C'),
    Maize: chalk.hex('#EDD19C'),
    Manatee: chalk.hex('#979AAA'),
    'Mango Tango': chalk.hex('#FF8243'),
    Maroon: chalk.hex('#C8385A'),
    Mauvelous: chalk.hex('#EF98AA'),
    Melon: chalk.hex('#FDBCB4'),
    'Midnight Blue': chalk.hex('#1A4876'),
    'Mountain Meadow': chalk.hex('#30BA8F'),
    Mulberry: chalk.hex('#C54B8C'),
    'Navy Blue': chalk.hex('#1974D2'),
    'Neon Carrot': chalk.hex('#FFA343'),
    'Olive Green': chalk.hex('#BAB86C'),
    Orange: chalk.hex('#FF7538'),
    'Orange Red': chalk.hex('#FF2B2B'),
    'Orange Yellow': chalk.hex('#F8D568'),
    Orchid: chalk.hex('#E6A8D7'),
    'Outer Space': chalk.hex('#414A4C'),
    'Outrageous Orange': chalk.hex('#FF6E4A'),
    'Pacific Blue': chalk.hex('#1CA9C9'),
    Peach: chalk.hex('#FFCFAB'),
    Periwinkle: chalk.hex('#C5D0E6'),
    'Piggy Pink': chalk.hex('#FDDDE6'),
    'Pine Green': chalk.hex('#158078'),
    'Pink Flamingo': chalk.hex('#FC74FD'),
    'Pink Sherbet': chalk.hex('#F78FA7'),
    Plum: chalk.hex('#8E4585'),
    'Purple Heart': chalk.hex('#7442C8'),
    "Purple Mountain's Majesty": chalk.hex('#9D81BA'),
    'Purple Pizzazz': chalk.hex('#FE4EDA'),
    'Radical Red': chalk.hex('#FF496C'),
    'Raw Sienna': chalk.hex('#D68A59'),
    'Raw Umber': chalk.hex('#714B23'),
    'Razzle Dazzle Rose': chalk.hex('#FF48D0'),
    Razzmatazz: chalk.hex('#E3256B'),
    Red: chalk.hex('#EE204D'),
    'Red Orange': chalk.hex('#FF5349'),
    'Red Violet': chalk.hex('#C0448F'),
    "Robin's Egg Blue": chalk.hex('#1FCECB'),
    'Royal Purple': chalk.hex('#7851A9'),
    Salmon: chalk.hex('#FF9BAA'),
    Scarlet: chalk.hex('#FC2847'),
    "Screamin' Green": chalk.hex('#76FF7A'),
    'Sea Green': chalk.hex('#9FE2BF'),
    Sepia: chalk.hex('#A5694F'),
    Shadow: chalk.hex('#8A795D'),
    Shamrock: chalk.hex('#45CEA2'),
    'Shocking Pink': chalk.hex('#FB7EFD'),
    Silver: chalk.hex('#CDC5C2'),
    'Sky Blue': chalk.hex('#80DAEB'),
    'Spring Green': chalk.hex('#ECEABE'),
    Sunglow: chalk.hex('#FFCF48'),
    'Sunset Orange': chalk.hex('#FD5E53'),
    Tan: chalk.hex('#FAA76C'),
    'Teal Blue': chalk.hex('#18A7B5'),
    Thistle: chalk.hex('#EBC7DF'),
    'Tickle Me Pink': chalk.hex('#FC89AC'),
    Timberwolf: chalk.hex('#DBD7D2'),
    'Tropical Rain Forest': chalk.hex('#17806D'),
    Tumbleweed: chalk.hex('#DEAA88'),
    'Turquoise Blue': chalk.hex('#77DDE7'),
    'Unmellow Yellow': chalk.hex('#FFFF66'),
    'Violet (Purple)': chalk.hex('#926EAE'),
    'Violet Blue': chalk.hex('#324AB2'),
    'Violet Red': chalk.hex('#F75394'),
    'Vivid Tangerine': chalk.hex('#FFA089'),
    'Vivid Violet': chalk.hex('#8F509D'),
    White: chalk.hex('#FFFFFF'),
    'Wild Blue Yonder': chalk.hex('#A2ADD0'),
    'Wild Strawberry': chalk.hex('#FF43A4'),
    'Wild Watermelon': chalk.hex('#FC6C85'),
    Wisteria: chalk.hex('#CDA4DE'),
    Yellow: chalk.hex('#FCE883'),
    'Yellow Green': chalk.hex('#C5E384'),
    'Yellow Orange': chalk.hex('#FFAE42'),
    pink: chalk.hex('#FFC0CB'),
    lightpink: chalk.hex('#FFB6C1'),
  },
  chalk
);

/*for (const colorname in crayola) {
  if (Object.prototype.hasOwnProperty.call(crayola, colorname)) {
    const hex = crayola[colorname];
    color[colorname] = chalk.hex(hex);
  }
}*/

export default color;
