//* File System

const fs = require('fs')
const path = require('path')

//* Создать папку

/* fs.mkdir(path.join(__dirname, 'notes'), err => {
  if (err) {
    throw err
  } else {
    console.log('Папка создана')
  }
}) */

//* Создать файл и записать в него данные

/* fs.writeFile(
  path.join(__dirname, 'notes', 'my_notes.txt'),
  `Этот текст будет записан в файл\n`,
  err => {
    if (err) throw err
    console.log('Файл создан')

    //* Добавление данных в файл

    fs.appendFile(
      path.join(__dirname, 'notes', 'my_notes.txt'),
      'Новый контент \n',
      err => {
        if (err) throw err
        console.log('Добавлено')
      }
    )

    //* Чтение файла

    fs.readFile(
      path.join(__dirname, 'notes', 'my_notes.txt'),
      'utf-8',
      (err, data) => {
        if (err) throw err
        console.log('data:', Buffer.from(data).toString())
      }
    )
  }
) */

//* Переименование файла

fs.rename(
  path.join(__dirname, 'notes', 'my_notes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'), //* путь с новым именем файла
  err => {
    if (err) throw err
    console.log('Переименование файла')
  }
)
