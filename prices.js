function getData() {
   var data = {};
   var response = UrlFetchApp.fetch("https://api.coinmarketcap.com/v1/ticker/?limit=0");
   var json_data = JSON.parse(response.getContentText());
  
 // Logger.log(json_data);
  
  for (var i = 0; i < json_data.length; i++) {
    var symbol = json_data[i]["symbol"];
    
      //Logger.log(symbol);
      var price = json_data[i]["price_usd"];
      data[symbol] = price;
  }
  return data;
}

function getPrice(ticker){
   var pricing_data = getData();
   return (pricing_data[ticker]) 
}