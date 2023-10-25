const gooTable = async (link) => {
    const r = await fetch(link);
    const d = await r.text();
    const lines = d.split('\r\n');
    const arr2d = lines.map(l => l.split(','));
    const names = arr2d.shift();
    const data = arr2d.map(row => row.reduce((acc, r, i) => ({...acc, [names[i]] : r}), {}));
    return data;
}

module.exports = gooTable;