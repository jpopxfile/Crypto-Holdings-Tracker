# Crypto-Holdings-Tracker
Track your crypto holdings in USD on Google Sheets.

## How to Use
There are 2 functions getData and getPrice.

geData will be called to get the prices for coins on CoinMarketCap once at the start when the spreadsheet it loaded. This information will be stored.

The getPrice function will then be used to get the price for each ticker in your list. There is no need to manually enter the ticker for get price as it will get it from the ticker column, and you can just drag and drop the equation.

Example:
Column A2 is BTC, so column C2 will be =getPrice(A2), getting BTC's price from the dictionary of prices.

To add a new coin, just enter the ticker in a new row in the A column, enter the quantity in the B column, and then copy columns C, D and E of the previous row. 


Refer to this sample Google Sheet:
https://docs.google.com/spreadsheets/d/1m0r4Rltw1G1ksdIMYFpF7BOZfsITyXPW4VefLOQMCqA/

To let the spreadsheet automatically update the prices, you can set it in the Google Sheets settings.


```
File > Spreadsheet Settings > Calculation > Recalculation > On change and every Minute
```


