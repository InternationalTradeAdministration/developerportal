---
permalink: "/trade-leads.html"
layout: body
title: Trade Leads API
published: true
---

#Trade Leads API

{% include trade-leads-tabs %}

##Resource URL

    http://api.trade.gov/v2/trade_leads/search

Sample JSON:    

	{
	id: "DATATABLE.471",
	lead_source: "African Development Bank",
	country: "CF",
	specific_location: "Africa",
	title: "Pan-African University Support Project (PHASE II)",
	project_number: "P-Z1-IAD-018",
	industry: "Educational Services",
	project_size: 50000000,
	description: "Expansion of the thematic networks: support the inclusion of 10 Centers of Excellence by thematic area. Establishing the virtual platform to expand e-learning and m-learning in Africa (based on needs assessment conducted in Phase 1). Strenghtening R&D and Innovation as a major instrument for Africa's economic transformation through inclusive and green growth. Support consolidation of the PAU Governance structure. Currency: UAC",
	tags: "Human Capital Development, Education",
	publish_date: "2016-04-01",
	end_date: "2016-10-16",
	funding_source: "Development Banks",
	borrowing_entity: "Pan African University for Science, Technology and Innovation",
	procurement_organization: "Pan African University for Science, Technology and Innovation",
	contact: "Corbin Michel Casimir Guedegbe - OSHD2, African Development Bank",
	comments: null,
	submitting_officer: "Chuka Asike",
	submitting_officer_contact: "asikec@state.gov",
	url: "http://www.afdb.org/en/projects-and-operations/project-portfolio/project/P-Z1-IAD-018/",
	status: "Pipeline",
	source: "STATE"
	},

##Search Parameters for all leads

###keyword

Searches for a match within the **title**, **description**, **topic**, **tags**, and **procurement_organization** fields.

    http://api.trade.gov/v2/trade_leads/search?api_key={your key}&q={term}

<!---    
**_Example_**

[http://api.trade.gov/v2/trade_leads/search?q=electrical](http://api.trade.gov/v2/trade_leads/search?q=electrical)
-->

###industries

Returns **industry** that the lead relates to.  Note:  This method allows you to search for multiple industries (plural) but will only return one industry (singular) per lead.  Also, this method will soon be updated to limit the search to controlled industry names.

    http://api.trade.gov/v2/trade_leads/search?api_key={your key}&industries={term}

<!---    
**_Example_**
[http://api.trade.gov/v2/trade_leads/search?industries=chemical](http://api.trade.gov/v2/trade_leads/search?industries=chemical)
-->

###countries

Returns **location** of lead based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).  Note:  This method allows you to search for multiple countries (plural) but will only return one country (singular) per lead.  

    http://api.trade.gov/v2/trade_leads/search?api_key={your key}&countries={country code}

<!---        
**_Example_**

[http://api.trade.gov/v2/trade_leads/search?countries=MX,CA,GB](http://api.trade.gov/v2/trade_leads/search?countries=MX,CA,GB)

-->

###sources

Searches only the leads specified by the **Source** field.

    http://api.trade.gov/v2/trade_leads/search?api_key={your key}&sources={lead source}

Possible values of the source field:  CANADA, FBO, STATE, UK (United Kingdom)

<!---        
**_Example_**

[http://api.trade.gov/v2/consolidated_screening_list/search?sources=state,uk](http://api.trade.gov/v2/consolidated_screening_list/search?sources=state,uk)
-->
	
###publish_date

Returns leads based on their publish date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    http://api.trade.gov/v2/trade_leads/search?api_key={your key}&publish_date={YYYY-mm-dd TO YYYY-mm-dd}

<!---        
**_Example_**

[http://api.trade.gov/v2/trade_leads/search?publish_date=2015-03-25 TO 2015-12-31](http://api.trade.gov/v2/trade_leads/search?publish_date=2015-03-25 TO 2015-12-31)
-->


###end_date

Returns leads based on their end date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    http://api.trade.gov/v2/trade_leads/search?api_key={your key}&end_date={YYYY-mm-dd TO YYYY-mm-dd}

<!---        
**_Example_**

[http://api.trade.gov/v2/trade_leads/search?end_date=2015-03-25 TO 2015-12-31](http://api.trade.gov/v2/trade_leads/search?end_date=2015-03-25 TO 2015-12-31)
-->

###publish_date_amended

Returns leads based on their amended publish date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    http://api.trade.gov/v2/trade_leads/search?api_key={your key}&publish_date_amended={YYYY-mm-dd TO YYYY-mm-dd}

<!---        
**_Example_**

[http://api.trade.gov/v2/trade_leads/search?publish_date_amended=2015-03-25 TO 2015-12-31](http://api.trade.gov/v2/trade_leads/search?publish_date_amended=2015-03-25 TO 2015-12-31)
-->

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

<!---        
**_Example_**

[http://api.trade.gov/v2/trade_leads/search?size=1&offset=1](http://api.trade.gov/v2/trade_leads/search?size=1&offset=1)
-->


###Canadian Leads

The [Canadian Government](https://buyandsell.gc.ca/procurement-data/) provides procurement information for their government opportunities.

**Licence - Canada**

Canadian leads are subject to Canada's license located at:

[http://data.gc.ca/eng/open-government-licence-canada](http://data.gc.ca/eng/open-government-licence-canada)

##Return Values for Canada

| Field	                               | Description  |
| ------                               | -------------|
| country                              | CA (Canada)  |
| title                                | Title of the lead |
| reference_number                     | The lead's reference number |
| contract_number                      | Contract number for the opportunity |
| publish_date                         | Date lead was posted |
| end_date                             | Closing date for the lead |
| publish_date_amended                 | Amended publish date for the lead |
| status                               | Status of the lead (note this API only shows open leads) |
| industry                             | Industry category assigned to the opportunity | 
| specific_location                    | Location of the opportunity | 
| notice_type                          | Type of contract |
| trade_agreement                      | Relevant trade agreement for the contract | 
| bid_type                             | The criteria for the contract  |
| competitive_procurement_strategy     | Bidding criteria for respondents |
| non_competitive_procurement_strategy | States whether it is a competitive procurement |
| procurement_organization             | Agency responsible for the contract |
| implementing_entity                  | Agency responsible for the implementation |
| description                          | Description of the opportunity |
| contact                              | Point of contact |
| urls                                 | URLs that pertain to the bid |
| source                               | CANADA |


### FedBizOps / FBOpen Leads

[FedBizOps](https://www.fbo.gov/) is an online system provided by the General Services Administration that publishes procurement opportunities on behalf of 132 federal agencies.  The ITA Trade Leads API includes only non-U.S. based  procurements that are available through the [FBOpen endpoint](https://fbopen.gsa.gov/).


##Return Values for FBOpen

| Field	                               | Description  |
| ------                               | -------------|  
| notice_type                          | Type of contract |
| procurement_organization             | Agency responsible for the contract |
| procurement_office                   | Office responsible of the contract |
| procurement_organization_address     | Address of the procurement organization |
| classification_code			       | Code that classifies the lead |
| industry                             | Industry tag associated with the lead |
| procurement_office_address           | Address of the procurement office |
| title                                | Title of the lead |
| contract_number                      | Contract number for the opportunity |
| end_date                             | Closing date for the lead |
| contact                               | Point of contact |
| description                          | Description of the opportunity |
| competitive_procurement_strategy     | Bidding criteria for respondents |
| url                                  | URL that pertains to the bid |
| specific_location                    | Location of the opportunity | 
| specific_address                     | Address of the opportunity's location | 
| source                               | FBO |


###State Department Description

The [State Department's](http://bids.state.gov/) Business Information Database System (BIDS) is a portal built to help U.S. businesses learn about significant international commercial opportunities.:

**Licence - State Department**

State Department leads are subject to their open government license located at:

[https://github.com/USStateDept/bids](https://github.com/USStateDept/bids)

##Return Values for State Department

| Field	                             | Description  |
| ------                             | -------------|  
| id                                 | ID of the trade lead|
| lead_source                             | Source of the trade lead, typically an organization|
| country                            | The country associated with the lead |
| specific_location                  | Location of the opportunity | 
| title                              | Title of the lead |
| project_number                     | Number for the opportunity|
| industry                           | Industry tag associated with the lead |
| project_size                       | Project size |
| description                        | Description of the opportunity |
| tags                               | Keywords associated with the opportunity|
| publish_date                       | Date lead was posted | 
| end_date                           | Closing date for the lead|
| funding_source                     | Funding source of the project|
| borrowing_entity                   | Bank funding the project|
| procurement_organization 	         | Agency responsible for the contract |
| contact                            | Point of contact |
| comments                           | Comments about the project|
| submitting_officer                 | Contract officer name|
| submitting_officer_contact         | Contract officer email|
| url                                  | URL that pertains to the bid |
| status                             | Status of the lead (note this API only shows open leads) |
| source                             | STATE |

###UK Government Leads

The [UK Government](https://www.contractsfinder.businesslink.gov.uk/) provides procurement information for their government opportunities.

**Licence - UK**

UK leads are subject to their open government license located at:

[http://www.nationalarchives.gov.uk/doc/open-government-licence/](http://www.nationalarchives.gov.uk/doc/open-government-licence/)

##Return Values for UK

| Field	                          | Description  |
| ------                          | -------------|  
| id                              | ID of the trade lead|
| country                         | GB (Great Britain) |
| reference_number                | Reference number for the opportunity |
| publish_date                    | Date lead was posted | 
| min_contract_value              | Minimum value of the lead (in pounds) |
| max_contract_value              | Maximum value of the lead (in pounds) |
| status                          | Status of the lead (note this API only shows open leads) |
| url                             | URL that pertains to the bid |
| procurement_organization 	      | Agency responsible for the contract |
| contact                         | Point of contact |
| title                           | Title of the lead |
| description                     | Description of the opportunity |
| notice_type                     | Type of contract |
| industry                        | Industry tag associated with the lead |
| specific_location               | Location of the opportunity | 
| source                          | UK |

This endpoint and its documentation has been updated to Version 2. Please visit the [API v1 Documentation]({{ site.baseurl }}/v1/trade-leads.html) page for the Version 1 documentation.

