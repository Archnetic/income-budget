/*
Created by Chase Lose
 */
function addBill(){
    var newBill = document.createElement("div");
    newBill.id = "bill";
    var bill = "\t\t\t<input type=\"text\" name=\"name\" value=\"New Bill\" class=\"billClass\">\n" +
        "\t\t\t<input type=\"number\" name=\"amount\" value=\"0.00\" min=\"0\" step=\"any\" class=\"billAmountInput\">\n" +
        "\t\t\t<input type=\"date\" name=\"Due Date\" class=\"billDueInput\"> \n" +
        "\t\t\t<a href=\"javascript:void(0)\" class=\"deleteBill\" onclick=\"deleteBill()\">&times;</a>\n" +
        "\t\t</div>";
    newBill.innerHTML = bill;
    document.getElementById("billCategory").parentNode.appendChild(newBill);
};

function deleteBill(){
    var rem = this.parentNode;
    rem.parentNode.removeChild(rem);
};

function newCategory(){
    var newCat = document.createElement("div");
    newCat.id = "billCategory";
    var inject = "\t\t<input type=\"text\" name=\"name\" value=\"New Category\" class=\"categoryInput\">\n" +
        "<button class=\"addNewBill\" onclick=\"addBill()\">Add New Bill</button>\n" +
        "<a href=\"javascript:void(0)\" class=\"deleteCat\" onclick=\"deleteCat()\">&times;</a>\n" +
        "\t</div>\n";
    newCat.innerHTML = inject;
    document.getElementById("budgetOrg").appendChild(newCat);
}

function deleteCat(){
    var remCat = document.getElementById("billCategory");
    remCat.parentNode.removeChild(remCat);
}