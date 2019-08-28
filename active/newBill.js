function addBill(){
    var add = document.createElement("div");
    add.id = "bill";
    var orgUnit = "\t\t\t<input type=\"text\" name=\"name\" value=\"fillMe\" class=\"billClass\">\n" +
        "\t\t\t<input type=\"number\" name=\"amount\" value=\"0\" class=\"billAmountInput\">\n" +
        "\t\t\t<a href=\"javascript:void(0)\" class=\"deleteBill\" onclick=\"deleteBill()\">&times;</a>\n" +
        "\t\t</div>";
    add.innerHTML = orgUnit;
    document.getElementById("budgetOrg").appendChild(add);
};

function deleteBill(){
    var rem = document.getElementById("bill");
    rem.parentNode.removeChild(rem);
};