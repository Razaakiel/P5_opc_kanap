main ();

function main() {
    let params = new URL(document.location).searchParams;
    let id = params.get("orderid");
    displayOrderId(id);
}

//Insertion des données dans la page confirmation.html
function displayOrderId(id) {
    const orderId = document.querySelector("#orderId");
    orderId.innerHTML = id;
}