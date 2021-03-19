// function readJson () {
//     // http://localhost:8080
//     fetch('/Reading/api/file')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("HTTP error " + response.status);
//         }
//         return response.json();
//     })
//     .then(json => {
//         this.users = json;
//         //console.log(this.users);
//     })
//     .catch(function () {
//         this.dataError = true;
//     })
//  }

var invoices = document.querySelector('.invoices');
var noInvoices = document.querySelector('.no-invoices');
var invoiceCount = document.querySelector('.invoice-count');

fetch("./data.json")
.then(response => {
    if(!response){}
   return response.json();
})
.then(data => {
    console.log(data); 
    createInvoice(data)
})
.catch(err =>{
    invoices.style.display = "none";
    noInvoices.style.display = "flex";
    console.log(err)
});

// Function to create row of invoices
function createInvoice(data){
    invoiceCount.innerHTML = `There are ${data.length} total invoices`
    noInvoices.style.display = "none";
    for(i=0;i < data.length; i++){
    const invoice = document.createElement("div");
    invoice.classList.add('each-invoice');
    invoice.innerHTML = `<div class="item-invoice">#${data[i].id}</div>
    <div class="item-invoice">Due ${data[i].paymentDue}</div>
    <div class="item-invoice">${data[i].clientName}</div>
    <div class="item-invoice due">£ 1${data[i].total}</div>
    <div class="item-invoice payment ${data[i].status}"><span></span> ${data[i].status}</div>
    <div onClick="hello" class="item-invoice icon"><a href="./invoice.html?${data[i].id}"><img src="./assets/icon-arrow-right.svg" alt="Right arrow"></a></div>`;
    invoices.append(invoice);
    }
}

function hello(){
    var queryString = location.search.substring(1);
    console.log("HELLO");
}