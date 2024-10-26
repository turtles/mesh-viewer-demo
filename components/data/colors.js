const colors = [
    { name: 'white', value: "FFFFFF" },
    { name: 'red', value: "FF0000" },
    { name: 'yellow', value: "FFFF00" },
    { name: 'green', value: "00FF00" },
    { name: 'lavender', value: "BFC5FF" },
    { name: 'black', value: "000000" },
];

const getColorHex = (name) => `#${colors.find(o => o.name === name).value}`;

export {
    colors,
    getColorHex,
}
