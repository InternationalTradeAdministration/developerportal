---
permalink: change-log.html
layout: body
title: Change Log
---

# Change Log

We will continue to add updates and features to ITA’s API on an ongoing basis.  Please check this page regularly to ensure you have the latest updates to the API.

## Recent Changes

| Date            | Change                                                     |
| --------------- | --------------------------------------------------------------- |
| 8/19/15         | Deprecated Version 1 of the APIs.  Please use Version 2 going forward - all endpoints now default to Version 2 but you do need to [sign up for an API key](https://api.trade.gov/users/sign_up) to access them.   |
| 8/7/15          | Added *source_used* fields to all endpoints that indicatate where the original data sources from, when it was last updated, and when it was last imported.
| 7/24/15         | Enabled developers to access [documentation through Swagger endpoint](http://developer.trade.gov/api/trade-apis.json).    |
| 7/22/15         | Added two new APIs:  ITA [Business Service Providers](http://developer.trade.gov/business-service-providers.html) and the [Zip Code to USEAC](http://developer.trade.gov/ita-zip-codes.html) mappings   |
| 7/17/15         | Enabled developers to download the entire [Market Research Library](http://developer.trade.gov/market-research-library.html) by setting ```size=-1```   |
| 6/30/15         | Added the ability to download the complete Consolidated Screening List data set as a [CSV](https://api.trade.gov/consolidated_screening_list/search.csv) or [TSV](https://api.trade.gov/consolidated_screening_list/search.tsv) file  |
| 6/15/15         | Added a new value in the JSON for the [Consolidated Screening List API](http://developer.trade.gov/consolidated-screening-list.html):  ```score: integer```     |
| 6/15/15         | Added a new parameter to the [Consolidated Screening List API](http://developer.trade.gov/consolidated-screening-list.html):  ```fuzzy_name=true```     |
| 5/13/2015       | Added procurement opportunities from the Millennium Challenge Corporation Account (MCA) to the [Trade Leads API]({{ site.baseurl }}/trade-leads.html)  | 
| 5/13/2015       | Added JSON examples inline with the documentation for each API  |
| 5/13/2015       | Updated the layout of Developer Portal - Look for additional menu items in the upper right corner  |

If you would like to read a list of changes, please visit our [wiki](https://github.com/InternationalTradeAdministration/developerportal/wiki/Version-2-of-ITA%E2%80%99s-Data-Services-Platform-Released)






