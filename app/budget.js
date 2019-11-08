/*
Created by Chase Lose
 */
function addBill(addBill){
    var newBill = document.createElement("div");
    newBill.id = "bill";
    var inject = "\t\t\t<input type=\"text\" name=\"name\" placeholder=\"New Bill\" class=\"billClass\">\n" +
        "\t\t\t<input type=\"number\" name=\"amount\" value=\"0.00\" min=\"0\" step=\"any\" class=\"billAmountInput\">\n" +
        "\t\t\t<input type=\"date\" name=\"Due Date\" class=\"billDueInput\"> \n" +
        "\t\t\t<a href=\"javascript:void(0)\" class=\"deleteBill\" onclick=\"deleteBill(this)\">&times;</a>\n" +
        "\t\t\t<button class=\"btn btn-primary btn-sm payBtn\" onclick=\"payBill()\">Pay Bill</button> \n" +
        "\t\t</div>";
    newBill.innerHTML = inject;
    addBill.parentNode.parentNode.appendChild(newBill);
};

function deleteBill(rem){
    var verify = confirm("Are you sure you want to delete this bill?")
    if(verify) {
        rem.parentNode.remove();
    }

};

function newCategory(addCat){
    var newCat = document.createElement("div");
    newCat.id = "billCategory";
    var inject = "\t\t<div id = \"catStyle\">" +
        "\t\t\t<input type=\"text\" name=\"name\" placeholder=\"New Category\" class=\"categoryInput\">\n" +
        "\t\t\t<button class=\"btn btn-primary btn-sm\" onclick=\"addBill(this)\">Add New Bill</button>\n" +
        "\t\t\t<a href=\"javascript:void(0)\" class=\"deleteCat\" onclick=\"deleteCat(this)\">&times;</a>\n" +
        "\t\t</div>\n" +
        "\t\t</div>\n";

    newCat.innerHTML = inject;
    document.getElementById("budgetOrg").appendChild(newCat);
}

function deleteCat(remCat){
    var verify = confirm("Are you sure you want to delete this category?")
    if(verify) {
        remCat.parentNode.remove();
    }

}

function payBill(){

}

function payThisBill(){

}
