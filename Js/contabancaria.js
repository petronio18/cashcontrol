const tbody = document.querySelector("tbody");
const descItem = document.querySelector("#desc");
const amount = document.querySelector("#amount");
const type = document.querySelector("#type");
const btnNew = document.querySelector("#btnNew");

const incomes = document.querySelector(".incomes");
const expenses = document.querySelector(".expenses");
const total = document.querySelector(".total");

let items;

btnNew.onclick = () => {
  if (descItem.value === "" || amount.value === "" || type.value === "") {
    return alert("Preencha todos os campos!");
  }

  items.push({
    desc: descItem.value,
    amount: Math.abs(amount.value).toFixed(2),
    type: type.value,
  });

  setItensBD();

  loadItens();

  descItem.value = "";
  amount.value = "";
};

function deleteItem(index) {
  items.splice(index, 1);
  setItensBD();
  loadItens();
}

function insertItem(item, index) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${item.desc}</td>
    <td>R$ ${item.amount}</td>
    <td class="columnType">${
      item.type === "Entrada"
        ? '<i class="bx bxs-chevron-up-circle"></i>'
        : '<i class="bx bxs-chevron-down-circle"></i>'
    }</td>
    <td class="columnAction">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;

  tbody.appendChild(tr);
}

function loadItens() {
  items = getItensBD();
  tbody.innerHTML = "";
  items.forEach((item, index) => {
    insertItem(item, index);
  });

  getTotals();
}

function getTotals() {
  const amountIncomes = items
    .filter((item) => item.type === "Entrada")
    .map((transaction) => Number(transaction.amount));

  const amountExpenses = items
    .filter((item) => item.type === "Saída")
    .map((transaction) => Number(transaction.amount));

  const totalIncomes = amountIncomes
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  const totalExpenses = Math.abs(
    amountExpenses.reduce((acc, cur) => acc + cur, 0)
  ).toFixed(2);

  const totalItems = (totalIncomes - totalExpenses).toFixed(2);

  incomes.innerHTML = totalIncomes;
  expenses.innerHTML = totalExpenses;
  total.innerHTML = totalItems;
}

const getItensBD = () => JSON.parse(localStorage.getItem("db_items")) ?? [];
const setItensBD = () =>
  localStorage.setItem("db_items", JSON.stringify(items));
// ... (seu código existente)

// Função para criar e atualizar o gráfico
function updateChart() {
  const ctx = document.getElementById('myChart').getContext('2d');

  const data = {
      labels: ['Entradas', 'Saidas' ],
      datasets: [{
          data: [parseFloat(incomes.innerHTML), parseFloat(expenses.innerHTML)],
          backgroundColor: ['#36A2EB', '#FF6384'],
      }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
   
    layout: {
      padding: {
        top: 20, // Adiciona um espaço entre o gráfico e o texto
      },
    },
   
  };


  // Verifica se o gráfico já foi inicializado
  if (window.myPieChart) {
      // Atualiza os dados
      window.myPieChart.data = data;
      window.myPieChart.update();
  } else {
      // Cria um novo gráfico
      window.myPieChart = new Chart(ctx, {
          type: 'pie',
          data: data,
          options: options
      });
  }
}

function loadItens() {
  items = getItensBD();
  tbody.innerHTML = "";
  items.forEach((item, index) => {
      insertItem(item, index);
  });

  getTotals();

  // Atualiza o gráfico após a carga dos itens
  updateChart();
}

// ... (seu código existente)

// Chame a função para criar o gráfico quando a página for carregada
window.onload = function () {
  loadItens();
  updateChart();
};

loadItens();