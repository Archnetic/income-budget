function addBill(){
    var timesClicked = 3;
    var add = document.createElement("bill");
    var orgUnit = "<div id=\"Bill3\">\n" +
        "\t\t<a href=\"#\">PayMe</a>\n" +
        "\t</div>";
    add.innerHTML = orgUnit;
    add.value = "";
    document.getElementById("budgetOrg").appendChild(add);
};