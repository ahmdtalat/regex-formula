const regex = /Row \d+/g // a regex that matchs 'Row {value}'

const getRowValue = str => str.match(regex)[0]

getRowValue('AW Top Sec 1 - Bay 1 - Row 12 - Bin B') // --> Row 12