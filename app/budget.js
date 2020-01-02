/*
Created by Chase Lose
 */


function addBill(addBill){
    let newBill = document.createElement("div");
    newBill.id = "bill";
    let inject = "\t\t\t<input type=\"text\" name=\"name\" placeholder=\"New Bill\" class=\"billClass\">\n" +
        "\t\t\t<input type=\"number\" name=\"amount\" value=\"0.00\" min=\"0\" step=\"any\" class=\"billAmountInput\">\n" +
        "\t\t\t<input type=\"date\" name=\"Due Date\" class=\"billDueInput\"> \n" +
        "\t\t\t<a href=\"javascript:void(0)\" class=\"deleteBill\" onclick=\"deleteBill(this)\">&times;</a>\n" +
        "\t\t\t<button class=\"btn btn-primary btn-sm payBtn\" onclick=\"payBill()\">Pay Bill</button> \n" +
        "\t\t</div>";
    newBill.innerHTML = inject;
    addBill.parentNode.parentNode.appendChild(newBill);
}

function deleteBill(rem){
    let verify = confirm("Are you sure you want to delete this bill?");
    if(verify) {
        rem.parentNode.remove();
    }
}

function newCategory(){
    let newCat = document.createElement("div");
    newCat.id = "billCategory";
    let inject = "\t\t<div id = \"catStyle\">" +
    "\t\t\t<input type=\"text\" name=\"name\" placeholder=\"New Category\" class=\"categoryInput\">\n" +
    "\t\t\t<button class=\"btn btn-primary btn-sm\" onclick=\"addBill(this)\">Add New Bill</button>\n" +
    "\t\t\t<a href=\"javascript:void(0)\" class=\"deleteCat\" onclick=\"deleteCat(this)\">&times;</a>\n" +
    "\t\t</div>\n" +
    "\t\t</div>\n";
    newCat.innerHTML = inject;
    document.getElementById("budgetOrg").appendChild(newCat);
}

function deleteCat(remCat){
    let verify = confirm("Are you sure you want to delete this category?");
    if(verify) {
        remCat.parentNode.remove();
    }
}

function payBill(){

}

function payThisBill(){

}

function populate(){

}

function stateChange(){
    let jsonString = [];
    for(let i=0; i<document.getElementById("budgetOrg").childElementCount; i++){
        for(let j=0; j<document.getElementById("budgetOrg").children[i].children.length; j++){
            if(document.getElementById("budgetOrg").children[i].children[j].id == "catStyle"){
                let insert = document.getElementById("budgetOrg").children[i].children[j].children[0].value;
                let newCat = {cat:{name: insert}};
                jsonString += newCat;
            }
            else{
                    let insertValue0 = document.getElementById("budgetOrg").children[i].children[j].children[0].value;
                    let insertValue1 = document.getElementById("budgetOrg").children[i].children[j].children[1].value;
                    let insertValue2 = document.getElementById("budgetOrg").children[i].children[j].children[2].value;
                    let newBill = {bill:{name: insertValue0, amount: insertValue1, dueDate: insertValue2}};
                    //alert(JSON.stringify(newBill));
                    jsonString += newBill;
            }

        }
    }
    writeFile("server/bills.json", JSON.stringify(jsonString), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });

}