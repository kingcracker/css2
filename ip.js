       $(document).ready(function(){
  
  $("button").hide();
  $("button").each(function(i) {
      var name = $(this).attr('value');
      $(this).delay(i*100).slideDown(60);
      $(this).html(name);
  });
  
  $("button").click(function(){
    var name = $(this).attr('value');
    if (name=="") {
    } else {
      console.log('else')
    }
    
  });
});
$(document).ready(function() {
      $.getJSON("https://blockchain.info/ticker?cors=true", function(json) {
        var html = "";
        var usd = "";
        var eur = "";
        jQuery.each(json, function(key, val) {
          if (key == "USD"){
            usd += val["last"] + " " + key
          }
          else if (key == "RUB"){
            rub += val["last"] + " " + key
          }

        });
        html += "</tbody></table>";
        $(".prices").html(html);
        $(".usd-price").html(usd);
        $(".rub-price").html(rub);

    });
});
$(document).ready(function() {
  getLocationF();
  function getLocationF() {
    $.getJSON("https://ipapi.co/json/", function(ip) {
      console.log(ip);
      $("#ip").html(ip.ip);
      $("#server").html(ip.org);
        $("#negara").html(ip.country_name);
        $("#kota").html(ip.region);
        $("#kab").html(ip.city);
      
      
    getWeatherF(ip.postal);  
    }, 'jsonp');
  }
  });
