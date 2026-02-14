const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

const getFeedback = (student) => (gradeToLetter) => {
  const { name, grade } = student;
  const letter = gradeToLetter(grade);

  let feedback;
  switch(letter) {
    case 'a': feedback = `Excellent Job ${name}, you got an ${letter}`; break;
    case 'b': feedback = `Nice Job ${name}, you got an ${letter}`; break;
    case 'c': feedback = `Well done ${name}, you got an ${letter}`; break;
    case 'd': feedback = `What happened ${name}, you got an ${letter}`; break;
    case 'f': feedback = `Not good ${name}, you got an ${letter}`; break;
  }

  return feedback;
};

const gradeToLetter = (grade) => {
  if (grade >= 90) return 'a';
  if (grade >= 80) return 'b';
  if (grade >= 70) return 'c';
  if (grade >= 60) return 'd';
  return 'f';
};

const studentFeedback = studentGrades.map(student => getFeedback(student)(gradeToLetter));

console.log(studentFeedback);