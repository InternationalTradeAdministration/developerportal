---
permalink: "/v1-trade-leads.html"
layout: body
title: Trade Leads API
published: false
---

#####This is an old version of the API and will be deprecated soon. Please upgrade to the [new version of the API]({{ site.baseurl }}/trade-leads.html).

#Trade Leads API

{% include trade-leads-tabs %}

##Resource URL

[http://api.trade.gov/trade_leads/search](http://api.trade.gov/trade_leads/search)

##Search Parameters for all leads

###keyword

Searches for a match within the **title** and **description** fields.

    http://api.trade.gov/trade_leads/search?q={term}

**_Example_**

[http://api.trade.gov/trade_leads/search?q=electrical](http://api.trade.gov/trade_leads/search?q=electrical)

###industries

Returns **industry** that the lead relates to.  Note:  This method allows you to search for multiple industries (plural) but will only return one industry (singular) per lead.  Also, this method will soon be updated to limit the search to controlled industry names.

    http://api.trade.gov/trade_leads/search?industries={term}

**_Example_**

[http://api.trade.gov/trade_leads/search?industries=chemical](http://api.trade.gov/trade_leads/search?industries=chemical)

###countries

Returns **location** of lead based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).  Note:  This method allows you to search for multiple countries (plural) but will only return one country (singular) per lead.  

    http://api.trade.gov/trade_leads/search?countries={country code}
    
**_Example_**

[http://api.trade.gov/trade_leads/search?countries=MX,CA,GB](http://api.trade.gov/trade_leads/search?countries=MX,CA,GB)

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

**_Example_**

[http://api.trade.gov/trade_leads/search?country=BR&size=1&offset=1](http://api.trade.gov/trade_leads/search?country=BR&size=1&offset=1)


###Return Values for All Leads


| Field	| Description |
| ------| -------------|
| description | Description of the opportunity |
| industry | Industry category assigned to the opportunity | 
| procurement_organization | Agency responsible for the contract | 
| publish_date | Date lead was posted | 
| specific_location | Location of the opportunity | 
| status | Status of the lead (note this API only shows open leads) |
| url  | URL that pertain to the bid |

## Additional Return Values for Canada

| Field	| Description |
| ------| -------------|
| bid_type 	 The criteria for the contract  |
| competitive_procurement_strategy 	 Bidding criteria for respondents |
| contract_number 	 Contract Number for the opportunity |
| country | Canada |
| end_date	 Closing date for the lead |
| implementing_entity | Agency responsible for the implementation |
| non_competitive_procurement_strategy | States whether it is a competitive procurement |
| notice_type | Type of contract |
| procurement_organization | Agency responsible for the contract |
| trade_agreement | Relevant trade agreement for the contract | 
| contact | Point of contact |

## Additional Return Values for Great Britain

| Field	| Description |
| ------| -------------|
| contact | Point of contact |
| country | Great Britain |
| id | ID of the trade lead |
| max_contract_value  | Maximum value of the lead (in pounds) |
| min_contract_value | Minimum value of the lead (in pounds) |
| notice_type | Type of contract |
| procurement_organization 	| Agency responsible for the contract |
| reference_number | Reference number for the opportunity |
| status | Status of the lead (note this API only shows open leads) |
| title| Title of the opportunity |

## Additional Return Values for State Department

| borrowing_entity | Bank funding the project|
| comments | comments about the project|
| contract_number | Contract Number for the opportunity|
| end_date | Closing date for the lead|
| funding_source | Funding source of the project|
| id | ID of the trade lead|
| project_number | Number for the opportunity|
| project_pocs | Point of contact|
| project_size | Industry category assigned to the opportunity|
| reference_number | Reference number for the opportunity|
| source | Source of the trade lead, typically an organization|
| submitting_officer | Contract officer name|
| submitting_officer_contact | Contract officer email|
| tags | Keywords of the opportunity|
| title | Title of the opportunity (Canadian Leads)	State
| type | Trade lead source|

###State Department Description

The [State Department's](http://bids.state.gov/) Business Information Database System (BIDS) is a portal built to help U.S. businesses learn about significant international commercial opportunities.:

**Licence - State Department**

State Department leads are subject to their open government license located at:

[https://github.com/USStateDept/bids](https://github.com/USStateDept/bids)

###Canadian leads

The [Canadian Government](https://buyandsell.gc.ca/procurement-data/) provides procurement information for their government opportunities.  Leads provided by the Canadian government have the following data model:

**Licence - Canada**

Canadian leads are subject to Canada's license located at:

[http://data.gc.ca/eng/open-government-licence-canada](http://data.gc.ca/eng/open-government-licence-canada)

###UK Government leads

The [UK Government](https://www.contractsfinder.businesslink.gov.uk/) provides procurement information for their government opportunities. Leads provided by the UK government have the following data model:

**Licence - UK**

UK leads are subject to their open government license located at:

[http://www.nationalarchives.gov.uk/doc/open-government-licence/](http://www.nationalarchives.gov.uk/doc/open-government-licence/)

