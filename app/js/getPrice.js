$(document).ready(function () {
    var products = [];
    $(".rrp").each(function () {
        products.push($(this).attr('id'));
    })
    $.ajax({
        type: "POST",
        url: "../getprice.php",
        data: {
            ids: products
        }
    }).done(function (result) {
        var response = JSON.parse(result);
        //var response = result;
        var price = response.data.products;
        price.forEach(function (item) {
            var id = item.id;
            var rrp = item.rrprice;
            if (rrp != undefined) {
                document.getElementById(id).textContent = rrp;
                document.getElementById(id).innerHTML = rrp;
            } else {
                document.getElementById(id).textContent = '—';
                document.getElementById(id).innerHTML = '—';
            }
        })
    });
});