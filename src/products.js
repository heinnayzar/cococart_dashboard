// // MY CODE
// const tableBody = document.querySelector(".table-body");

// let products = [];

// window.addEventListener("DOMContentLoaded", getProductData);


// async function getProductData() {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.jason();
//     products = data;


//     console.log(products);

//     products.foreach((product) => {
//       addProductTOTableBody(product);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// // DOM api
// function addProductTOTableBody(product) {
//   const trEl = document.createElement("tr");
//   trEl.classList.add("table-row");
//   trEl.innerHTML = `
//                 <tr class="table-row">
//                   <td class="table-col">${product.title.substring(0, 10)}</td>
//                   <td class="table-col">${product.price}</td>
//                   <td class="table-col">${product.category}</td>
//                   <td class="table-col">${product.description.substring(0. 20)}...</td>
//                   <td class="table-col">
//                     <button type="button" class="btn-primary">Edit</button>
//                   </td>
//                   <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <button type="button" class="btn-danger">Delete</button>
//                   </td>
//                 </tr>
//     `;
//   tableBody.appendChild(trEl);
// }

// Thet

const tableBody = document.querySelector('.table-body');

let products = [];

// run function when the document is ready
window.addEventListener('DOMContentLoaded', getProductData);

async function getProductData() {
  tableBody.textContent = 'loading...';
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=10');
    const data = await response.json();
    products = data;

    tableBody.innerHTML = '';
    products.forEach((product) => {
      addProductToTableBody(product);
    });
  } catch (error) {
    console.log(error);
  }
}

// DOM API
function addProductToTableBody(product) {
  const trEl = document.createElement('tr');
  trEl.classList.add('table-row');
  trEl.innerHTML = `
      <td class='table-col'>${product.title.substring(0, 10)}</td>
      <td class='table-col'>${product.price}</td>
      <td class='table-col'>${product.description.substring(0, 20)}...</td>
      <td class='table-col'>${product.category}</td>
      <td class='table-col'>
        <button type='button' class='btn-primary'>
          Edit
        </button>
      </td>
      <td class='table-col'>
        <button type='button' class='btn-danger'>
          Delete
        </button>
      </td>
  `;

  tableBody.appendChild(trEl);
}
