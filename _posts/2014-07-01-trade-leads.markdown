---
permalink: "trade-leads.html"
layout: body
title: Trade Leads API
published: true
---

#Trade Leads API
The Trade Leads API provides contract opportunities for U.S. businesses selling their products and services overseas. These leads come from a variety of sources and we continue to expand the number of leads available.

We currently provide trade leads, procurement opportunities, and contract notifications from:

- The State Department’s Business Information Database System (BIDS)
- The United Kingdom
- Canada

We will soon be including leads from FedBizOpps.  All leads are consolidated into one endpoint.

Developers can use this API to keep businesses aware of the latest leads in particular industries or locations.  They can also enhance the value of the leads by incorporating reports from ITA’s [Market Research Library](http://developer.trade.gov/market-research-library.html) or [Trade News & Articles](http://developer.trade.gov/trade-news-articles.html) APIs.


The output format for this API is JSON.  Resource URL and Search Parameters can be found towards the bottom of this page.

##Current Sources

###State Department leads

The [State Department's](http://bids.state.gov/) Business Information Database System (BIDS) is a portal built to help U.S. businesses learn about significant international commercial opportunities.:

**Return Values from BIDS**

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| type                | Trade lead source |
| id                | ID of the trade lead |
| source            | Source of the trade lead, typically an organization |
| specific_location | Location of the opportunity |
| project_number | Number for the opportunity |
| industry | Industry category assigned to the opportunity |
| project_size | Industry category assigned to the opportunity |
| description | Description of the opportunity |
| tags | Keywords of the opportunity |
| publish_date | Date lead was posted |
| end_date | Closing date for the lead |
| funding_source | Funding source of the project |
| borrowing_entity | Bank funding the project |
| procurement_organization | Agency responsible for the contract |
| project_pocs | Point of contact |
| comments | comments about the project |
| submitting_officer | Contract officer name |
| submitting_officer_contact | Contract officer email |
| url | URL that pertain to the bid|
| status | Status of the lead (note this API only shows open leads) |

**Licence - State**

State Department leads are subject to their open government license located at:

[https://github.com/USStateDept/bids](https://github.com/USStateDept/bids)

###Canadian leads

The [Canadian Government](https://buyandsell.gc.ca/procurement-data/) provides procurement information for their government opportunities.  Leads provided by the Canadian government have the following data model:

**Return Values from Canada**

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| title                | Title of the opportunity |
| reference_number         | Reference number for the opportunity |
| contract_number | Contract Number for the opportunity |
| publish_date | Date lead was posted |
| end_date| Closing date for the lead |
| publish_date_amended | Date of latest change to the original lead |
| status | Status of the lead (note this API only shows open leads) |
| description | Description of the opportunity |
| industry | Industry category assigned to the opportunity |
| specific_location | The locations of the work in the contract |
| notice_type | Type of contract |
| trade_agreement | Relevant trade agreement for the contract |
| bid_type | The criteria for the contract |
| competitive_procurement_strategy | Bidding criteria for respondents |
| non_competitive_procurement_strategy | States whether it is a competitive procurement |
| procurement_organization | Agency responsible for the contract |
| implementing_entity | Agency responsible for the implementation |
| contact | Point of contact |
| urls | URLs that pertain to the bid|
| country | CA |

**Licence - Canada**

Canadian leads are subject to Canada's license located at:

[http://data.gc.ca/eng/open-government-licence-canada](http://data.gc.ca/eng/open-government-licence-canada)

###UK Government leads

The [UK Government](https://www.contractsfinder.businesslink.gov.uk/) provides procurement information for their government opportunities. Leads provided by the UK government have the following data model:

**Return Values from the UK**

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| id                | ID of the trade lead |
| reference_number         | Reference number for the opportunity |
| publish_date | Date lead was posted |
| min_contract_value | Minimum value of the lead (in pounds) |
| max_contract_value | Maximum value of the lead (in pounds) |
| status | Status of the lead (note this API only shows open leads) |
| url | URL that pertain to the bid|
| procurement_organization | Agency responsible for the contract |
| contact | Point of contact |
| title                | Title of the opportunity |
| description | Description of the opportunity |
| notice_type | Type of contract |
| industry | Industry category assigned to the opportunity |
| specific_location | Location of the opportunity |
| country | GB |

**Licence - UK**

UK leads are subject to their open government license located at:

[http://www.nationalarchives.gov.uk/doc/open-government-licence/](http://www.nationalarchives.gov.uk/doc/open-government-licence/)

##Resource URL

    http://api.trade.gov/trade_leads/search

##Search Parameters for all leads

###keyword

Searches for a match within the title and description fields.

    http://api.trade.gov/trade_leads/search?q={term}

#####Example:

    http://api.trade.gov/trade_leads/search?q=electrical

###industries

Returns industry that the lead relates to.  Note:  This method allows you to search for multiple industries (plural) but will only return one industry (singular) per lead.  Also, this method will soon be updated to limit the search to controlled industry names.

    http://api.trade.gov/trade_leads/search?industries={term}

#####Example:

    http://api.trade.gov/trade_leads/search?industries=agribusiness

###countries

Returns location of lead based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).  Note:  This method allows you to search for multiple countries (plural) but will only return one country (singular) per lead.  

    http://api.trade.gov/trade_leads/search?countries={country code}
    
#####Example:

    http://api.trade.gov/trade_leads/search?countries=MX,CA,GB

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

#####Example:

    http://api.trade.gov/trade_leads/search?country=BR&size=1&offset=1


