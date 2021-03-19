var queryString = location.search.substring(1);

fetch("./data.json")
.then(response => {
    if(!response){}
   return response.json();
})
.then(data => { 
    let newData = data.find(x => x.id === queryString)
    changeStatusLabel(newData);
    changeInvoice(newData);
})
.catch(err =>{
    console.log(err)
});

// myArray.find(x => x.id === '45').foo;
function changeStatusLabel(data){
    const payment = document.querySelector('.payment')
    payment.classList.add(data.status);
    name.charAt(0).toUpperCase() + name.slice(1)
    payment.innerHTML = `<span></span> ${data.status.charAt(0).toUpperCase()}${data.status.slice(1)}`
}

function changeInvoice(data){
    const leftSide = document.querySelector('.left-side');
    const description = document.querySelector('.title');
    const dateInv = document.querySelector('.date-inv');
    const paymentDue = document.querySelector('.payment-due');
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    const invoiceDate = new Date(data.createdAt).toLocaleDateString("en-US", options);
    const paymentDate = new Date(data.paymentDue).toLocaleDateString("en-US", options);

    //Billing info
    const billingSection = document.querySelector('.center-mid');
    billingSection.innerHTML = `<p>Bill To</p>
    <h3>${data.clientName}</h3>
    <p>${data.clientAddress.street}</p>
    <p>${data.clientAddress.city}</p>
    <p>${data.clientAddress.postCode}</p>
    <p>${data.clientAddress.country}</p>`;

    //Email
    const emailSection = document.querySelector('.end-mid');
    emailSection.innerHTML = `
    <p>Sent To</p>
    <h3>${data.clientEmail}</h3>`

    //Sender Info
    const senderSection = document.querySelector('.right-side');
    senderSection.innerHTML = 
    `<p>${data.senderAddress.street}</p>
     <p>${data.senderAddress.city}</p>
     <p>${data.senderAddress.postCode}</p>
     <p>${data.senderAddress.country}</p>`

    leftSide.querySelector('h2').textContent = `#${data.id}`;
    description.textContent = data.description;
    dateInv.querySelector('h3').textContent = invoiceDate;
    paymentDue.querySelector('h3').textContent = paymentDate;
  

}