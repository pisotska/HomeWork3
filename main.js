const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = [
  "Дифференциальные уравнения",
  "Теория автоматов",
  "Алгоритмы и структуры данных",
];
const marks = [4, 5, 5, 3, 4, 5];

console.log("students", students);

const pairs = getPairs(students);

console.log("pairs", pairs);

const pairsWithTheme = addThemesToPairs(pairs, themes);

console.log("pairsWithTheme", pairsWithTheme);

const studentsWithMarks = addMarksToStudents(students, marks);

console.log("studentsWithMarks", studentsWithMarks);

const pairsWithMarks = addMarksToPairs(pairsWithTheme, marks);

console.log("pairsWithMarks", pairsWithMarks);

function getPairs(students) {
  let reduceCallback = function (result, value, index, array) {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  };
  let pairs = [];
  //  from https://stackoverflow.com/questions/31352141/how-do-you-split-an-array-into-array-pairs-in-javascript
  students.reduce(reduceCallback, pairs);
  return pairs;
}
console.log(getPairs);

function addThemesToPairs(pairs, themes) {
  return pairs.reduce(function (result, pair, pairIndex, array) {
    console.log("pair", pair, pairIndex);
    let newPairWithTheme = [pair[0] + " and " + pair[1], themes[pairIndex]];
    result.push(newPairWithTheme);
    return result;
  }, []);
}
console.log(addThemesToPairs);

function addMarksToStudents(students, marks) {
  return students.reduce(function (result, value, index, array) {
    result.push([value, marks[index]]);
    return result;
  }, []);
}
console.log(addMarksToStudents);

function addMarksToPairs(pairsWithTheme, marks) {
  return pairsWithTheme.reduce(function (result, value, index, array) {
    let mark = marks[Math.floor(Math.random() * marks.length)];
    result.push(value.concat(mark));
    return result;
  }, []);
}
console.log(addMarksToPairs);
