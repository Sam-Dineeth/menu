let totalAmount = 0;

function updateTotal() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    
    totalAmount = Array.from(checkboxes).reduce((sum, checkbox) => {
        return checkbox.checked ? sum + parseInt(checkbox.value) : sum;
    }, 0);

    document.getElementById('total').innerText = totalAmount; // Update total amount display
}

function submitSelection() {
   if (totalAmount > 0) {
       alert(`Thank you for your selection! Your total amount is $${totalAmount}.`);
       // Here you can add functionality to process the selection further
       // For example, sending data to a server or redirecting to a payment page
       // Reset total after submission
       totalAmount = 0;
       document.getElementById('total').innerText = totalAmount; 
       const checkboxes = document.querySelectorAll('input[type=checkbox]');
       checkboxes.forEach(checkbox => checkbox.checked = false); // Uncheck all checkboxes
   } else {
       alert("Please select at least one service.");
   }
}