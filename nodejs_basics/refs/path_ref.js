const path = require('path')

console.log('1. path to file', __filename) //* получить полный путь с именем файла
console.log('2. basename:', path.basename(__filename)) //* забрать название файла из абсолютного пути
console.log('3. dirname', path.dirname(__filename)) //* название папки из абсолютного пути
console.log('4. extname:', path.extname(__filename))

console.log('5. parse', path.parse(__filename)) //* возвращает объект свойств пути

//# Удобные методы для работы с путями

console.log('join', path.join(__dirname, 'test', 'second.html')) //* объединяет все заданные сегменты пути вместе
console.log('6. resolve', path.resolve('/foo/bar', './baz', './gaz')) //* преобразует последовательность путей в абсолютный путь.
