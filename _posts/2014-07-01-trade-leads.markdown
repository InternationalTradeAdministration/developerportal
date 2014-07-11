---
permalink: "trade-leads.html"
layout: body
title: Trade Leads API
published: true
---

#Trade Leads API
The Trade Leads API provides contract opportunities for U.S. businesses interested in selling their products and services overseas.  These leads come a variety of sources, and we will continue to work to expand the number of leads available.

Developers can use this API to keep businesses aware of the latest leads in their industry or location.

The output format for this API is JSON.

##Current Sources

###BIDS (Department of State)

The Department of State aggregates provides leads from its partners, U.S. government sources, and foreign countries included. The data is vetted by the vendors and the government ministries.The Department of State has an [online interface](http://bids.state.gov/) and [open sources](https://github.com/USStateDept/bids) the information.

*Return Values from BIDS*

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| id                | ID of the opportunity |
| source | The original source of the opportunity |
| country | Country of the opportunity |
| specific_location | The location where the work will take place |
| title | Title of the opportunity |
| project_number | Project number of the opportunity |
| industry | Industry category assigned to the opportunity |
| project_size | Monetary value of the lead |
| description | Text describing the opportunity |
| tags | Keywords applied to the lead by the source |
| publish_date | Date lead was posted |
| end_date| Closing date for the lead |
| funding_source | Funding source of the lead |
| borrowing_entity | Agency or organization who borrowed the money |
| procurement_organization | Agency responsible for the contract |
| contact | Point of contact |
| comments | Comments (if any) about the projects |
| submitting_officer | Person responsible for the decision |
| submitting_officer_contact | Submitting officers contact information |
| procurement_organization | Agency responsible for the contract |
| url | url of the opportunity |
| status | Status of the lead (note this API only shows open leads) |

*Licence - BIDS*

State Department's leads are subject to their license located at:

https://github.com/USStateDept/bids#license

###Canadian leads

The [Canadian Government](https://buyandsell.gc.ca/procurement-data/) provides procurement information for their government opportunities.  Leads provided by the Canadian government have the following data model:

*Return Values from Canada*

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| title                | Title of the opportunity |
| reference_number         | Reference number for the opportunity |
| contract_number | Contract Number for the opportunity |
| publish_date | Date lead was posted |
| end_date| Closing date for the lead |
| publish_date_amended | Date of latest change to the original lead |
| status | Status of the lead (note this API only shows open leads) |
| description | Description of the opporunity |
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
| country | Canada |

*Licence - Canada*

Canadian leads are subject to Canadian's license located at:

[http://data.gc.ca/eng/open-government-licence-canada](http://data.gc.ca/eng/open-government-licence-canada)

###UK Government leads

The [UK Government](https://buyandsell.gc.ca/procurement-data/) provides procurement information for their government opportunities. Leads provided by the UK government have the following data model:

*Return Values from the UK*

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| id                | ID of the trade lead |
| reference_number         | Reference number for the opportunity |
| contract_number | Contract Number for the opportunity |
| publish_date | Date lead was posted |
| min_contract_value | Minimum value of the lead (in pounds) |
| max_contract_value | Maximum value of the lead (in pounds) |
| status | Status of the lead (note this API only shows open leads) |
| url | URL that pertain to the bid|
| procurement_organization | Agency responsible for the contract |
| contact | Point of contact |
| title                | Title of the opportunity |
| description | Description of the opporunity |
| industry | Industry category assigned to the event |
| notice_type | Type of contract |
| industry | Industry category assigned to the opportunity |
| region | Location of the opportunity |
| country | GB |

*Licence - UK*

UK leads are subject to their open government license located at:

[http://www.nationalarchives.gov.uk/doc/open-government-licence/](http://www.nationalarchives.gov.uk/doc/open-government-licence/)

##Resource URL

    http://api.trade.gov/trade_leads/search

##Search Parameters

###keyword

Searches for a match within the title and description fields.

    http://api.trade.gov/trade_leads/search?q={term}

#####Example:

    http://api.trade.gov/trade_leads/search?q=electrical

###industries

#####Example:

    http://api.trade.gov/trade_leads/search?industry=Agribusiness
    
Note: will soon search for specific controlled [industry names](/industry-list-trade-events.html)

    http://api.trade.gov/trade_leads/search?industry={term}

###countries

Returns office locations based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/trade_leads/search?countries={term}

#####Example:

    http://api.trade.gov/trade_leads/search?countries=MX,CA,UK

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

#####Example:

    http://api.trade.gov/trade_events/search?country=BR&size=1&offset=1
