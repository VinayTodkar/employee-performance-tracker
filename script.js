const employees = [
  { id: 101, name: 'Amit Sharma', dept: 'IT', score: 8.0, goals: 1, joining: '2020-01-01' },
  { id: 102, name: 'Neha Reddy', dept: 'HR', score: 7.0, goals: 1, joining: '2019-05-12' },
  { id: 103, name: 'Ravi Deshmukh', dept: 'IT', score: 9.0, goals: 0, joining: '2021-07-10' },
  { id: 104, name: 'Sneha Patil', dept: 'Marketing', score: 6.0, goals: 1, joining: '2018-03-05' }
];

function populateTable(list = employees) {
  const tbody = document.querySelector('#employeeTable tbody');
  tbody.innerHTML = '';
  const max = Math.max(...employees.map(e => e.score));

  list.forEach(e => {
    const tr = document.createElement('tr');
    if (e.score === max) tr.classList.add('highlight');
    tr.innerHTML = `
      <td>${e.id}</td>
      <td>${e.name}</td>
      <td>${e.dept}</td>
      <td>${e.score}</td>
      <td>${e.goals}</td>
      <td>${e.joining}</td>
    `;
    tbody.appendChild(tr);
  });
}

function showAll() { populateTable(); }
function showTop() {
  const topScore = Math.max(...employees.map(e => e.score));
  populateTable(employees.filter(e => e.score === topScore));
}
function showEligible() {
  const eligible = employees.filter(e =>
    e.score >= 8 && e.goals >= 1 && new Date(e.joining) < new Date('2022-01-01')
  );
  populateTable(eligible);
}

populateTable();
