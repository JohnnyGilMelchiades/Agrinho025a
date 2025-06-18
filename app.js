// Produtos de exemplo (você pode trocar por dados dinâmicos futuramente)
const products = [
  {
    name: "Tomate Orgânico",
    description: "Tomates frescos colhidos no dia, sem agrotóxicos.",
    price: 7.50,
    unit: "kg",
    img: "img/tomates.jpg"
  },
  {
    name: "Alface Crespa",
    description: "Alface crocante, ideal para saladas.",
    price: 2.00,
    unit: "unidade",
    img: "img/Alface.jpg"
    
  },
  {
    name: "Cenoura",
    description: "Cenouras doces e suculentas, direto da terra.",
    price: 4.20,
    unit: "kg",
    img: ""
  },
   {
    name: "outros itens",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    price: 0.00,
    unit: "kg",
    img: ""
  },
   {
    name: "outros itens",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    price: 0.00,
    unit: "kg",
    img: ""
  }, {
    name: "outros itens",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    price: 0.00,
    unit: "kg",
    img: ""
  }, {
    name: "outros itens",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    price: 0.00,
    unit: "kg",
    img: ""
  }, {
    name: "outros itens",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    price: 0.00,
    unit: "kg",
    img: ""
  }, {
    name: "outros itens",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    price: 0.00,
    unit: "kg",
    img: ""
  }, {
    name: "outros itens",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    price: 0.00,
    unit: "kg",
    img: ""
  }, {
    name: "outros itens",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    price: 0.00,
    unit: "kg",
    img: ""
  },
  {
    name: "Batata Doce",
    description: "Batata doce roxa, rica em nutrientes.",
    price: 5.00,
    unit: "kg",
    img: ""
  }
];

function renderProducts() {
  const list = document.getElementById('productList');
  list.innerHTML = '';
  products.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.name}">
      <h3>${prod.name}</h3>
      <p>${prod.description}</p>
      <div class="price">R$ ${prod.price.toFixed(2)} / ${prod.unit}</div>
      <button>Comprar</button>
    `;
    list.appendChild(card);
  });
}

// Modal de login/cadastro
const modal = document.getElementById('modal');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.getElementById('closeModal');

loginBtn.onclick = () => modal.style.display = "block";
closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

// Formulário de login
document.getElementById('loginForm').onsubmit = function(e) {
  e.preventDefault();
  alert("Login simulado! (implemente backend)");
  modal.style.display = "none";
};

renderProducts();