---
permalink: "/trade-leads.html"
layout: body
title: Trade Leads API
published: true
---

# Trade Leads API

{% include trade-leads/trade-leads-tabs %}

## Resource URL

{% include trade-leads/trade-leads-query.html %}

## Search Parameters for all leads

### keyword

Searches for a match within the **title**, **description**, **topic**, **tags**, and **procurement_organization** fields.

    {{ site.webservices_baseurl }}/trade_leads/search?api_key={your key}&q={term}

**_Example_**

{% include trade-leads/trade-leads-query-keyword.html %}

### industries

Returns trade leads for a specific controlled industry terms. This method allows you to search for multiple industries (plural) separated by commas.

    {{ site.webservices_baseurl }}/trade_leads/search?api_key={your key}&industries={term}

**_Example_**

{% include trade-leads/trade-leads-query-industry.html %}

### countries

Returns trade leads for a specific **country** based on [ISO alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).  This method allows you to search for multiple countries (plural) separated by commas but will only return one country (singular) per lead. 

    {{ site.webservices_baseurl }}/trade_leads/search?api_key={your key}&countries={country code}

**_Example_**

{% include trade-leads/trade-leads-query-country.html %}

### trade_regions

Returns trade leads for a specific Trade Region.  Enter multiple values by separating with a comma.

    {{ site.webservices_baseurl }}/trade_leads/search?api_key={your key}&trade_regions={Region 1,Region 2}

**_Example_**

{% include trade-leads/trade-leads-query-trade-regions.html %}

### world_regions

Returns trade leads for a specific World Region.  Enter multiple values by separating with a comma.

    {{ site.webservices_baseurl }}/trade_leads/search?api_key={your key}&trade_regions={Region 1,Region 2}

**_Example_**

{% include trade-leads/trade-leads-query-world-regions.html %}

### sources

Searches only the leads specified by the **Source** field.

    {{ site.webservices_baseurl }}/trade_leads/search?api_key={your key}&sources={lead source}

Possible values of the source field:  CANADA, FBO, STATE, UK, MCA

**_Example_**

{% include trade-leads/trade-leads-query-source.html %}

### publish_date

Returns leads based on their publish date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/trade_leads/search?api_key={your key}&publish_date={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

{% include trade-leads/trade-leads-query-publishdate.html %}

### end_date

Returns leads based on their end date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/trade_leads/search?api_key={your key}&end_date={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

{% include trade-leads/trade-leads-query-enddate.html %}

### publish_date_amended

Returns leads based on their amended publish date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/trade_leads/search?api_key={your key}&publish_date_amended={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

{% include trade-leads/trade-leads-query-publishdate-amended.html %}

### size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

    {{ site.webservices_baseurl }}/trade_leads/search?api_key={your key}&size={1 to 100}&offset={1 to n}

**_Example_**

{% include trade-leads/trade-leads-query-size.html %}

## Metadata

### Last Updated and Last Imported

Recency information about each source queried is given in **sources_used** in the following fields:

| Field	| Description |
| ------| -------------|
| source | The name of the issuing organization. |
| source_last_updated | The most recent date and time the data changed. |
| last_imported | The most recent date and time the data was imported. |

The *source_last_updated* field reflects the most recent date and time we noticed that the issuing agency had updated the data. We check for updates and import lists at the same time daily.

### Search Performed At

The *search_performed_at* field displays the date and time of the current search in UTC.

## Canadian Leads

The [Canadian Government](https://buyandsell.gc.ca/procurement-data/) provides procurement information for their government opportunities.

**Licence - Canada**

Canadian leads are subject to Canada's license located at:

[http://data.gc.ca/eng/open-government-licence-canada](http://data.gc.ca/eng/open-government-licence-canada)

## Return Values for Canada

| Field	                               | Description  |
| ------                               | -------------|
| country                              | CA (Canada).  |
| title                                | Title of the lead. |
| reference_number                     | The lead's reference number. |
| contract_number                      | Contract number for the opportunity. |
| publish_date                         | Date lead was posted. |
| end_date                             | Closing date for the lead. |
| publish_date_amended                 | Amended publish date for the lead. |
| status                               | Status of the lead (note this API only shows open leads). |
| industry                             | Industry category assigned to the opportunity. | 
| specific_location                    | Location of the opportunity. | 
| notice_type                          | Type of contract. |
| trade_agreement                      | Relevant trade agreement for the contract. | 
| bid_type                             | The criteria for the contract.  |
| competitive_procurement_strategy     | Bidding criteria for respondents. |
| non_competitive_procurement_strategy | States whether it is a competitive procurement. |
| procurement_organization             | Agency responsible for the contract. |
| implementing_entity                  | Agency responsible for the implementation. |
| description                          | Description of the opportunity. |
| contact                              | Point of contact. |
| urls                                 | URLs that pertain to the bid. |
| source                               | CANADA. |
| trade_regions                        | Trade Regions associated with the lead.  |
| world_regions                        | World Regions associated with the lead.  |


##  FedBizOps / FBOpen Leads

[FedBizOps](https://www.fbo.gov/) is an online system provided by the General Services Administration that publishes procurement opportunities on behalf of 132 federal agencies.  The ITA Trade Leads API includes only non-U.S. based  procurements that are available through the [FBOpen endpoint](https://fbopen.gsa.gov/).


## Return Values for FBOpen


| Field	                               | Description  |
| ------                               | -------------|  
| notice_type                          | Type of contract. |
| procurement_organization             | Agency responsible for the contract. |
| procurement_office                   | Office responsible of the contract. |
| procurement_organization_address     | Address of the procurement organization. |
| classification_code			       | Code that classifies the lead. |
| industry                             | Industry tag associated with the lead. |
| procurement_office_address           | Address of the procurement office. |
| title                                | Title of the lead. |
| contract_number                      | Contract number for the opportunity. |
| end_date                             | Closing date for the lead. |
| contact                               | Point of contact. |
| description                          | Description of the opportunity. |
| competitive_procurement_strategy     | Bidding criteria for respondents. |
| url                                  | URL that pertains to the bid. |
| specific_location                    | Location of the opportunity. | 
| specific_address                     | Address of the opportunity's location. | 
| source                               | FBO. |
| trade_regions                        | Trade Regions associated with the lead.  |
| world_regions                        | World Regions associated with the lead.  |


## State Department Description

The [State Department's](http://bids.state.gov/) Business Information Database System (BIDS) is a portal built to help U.S. businesses learn about significant international commercial opportunities.:

**Licence - State Department**

State Department leads are subject to their open government license located at:

[https://github.com/USStateDept/bids-archive](https://github.com/USStateDept/bids-archive)

## Return Values for State Department

| Field	                             | Description  |
| ------                             | -------------|  
| id                                 | ID of the trade lead.|
| lead_source                             | Source of the trade lead, typically an organization.|
| country                            | The country associated with the lead. |
| specific_location                  | Location of the opportunity. | 
| title                              | Title of the lead. |
| project_number                     | Number for the opportunity.|
| industry                           | Industry tag associated with the lead. |
| project_size                       | Budget for project in U.S. dollars. |
| description                        | Description of the opportunity. |
| tags                               | Keywords associated with the opportunity.|
| publish_date                       | Date lead was posted. | 
| end_date                           | Closing date for the lead.|
| funding_source                     | Funding source of the project.|
| borrowing_entity                   | Bank funding the project.|
| procurement_organization 	         | Agency responsible for the contract. |
| contact                            | Point of contact. |
| comments                           | Comments about the project.|
| submitting_officer                 | Contract officer name.|
| submitting_officer_contact         | Contract officer email.|
| url                                  | URL that pertains to the bid. |
| status                             | Status of the lead (note this API only shows open leads). |
| source                             | STATE. |
| trade_regions                        | Trade Regions associated with the lead.  |
| world_regions                        | World Regions associated with the lead.  |

## UK Government Leads

The [UK Government](https://www.contractsfinder.businesslink.gov.uk/) provides procurement information for their government opportunities.

**Licence - UK**

UK leads are subject to their open government license located at:

[http://www.nationalarchives.gov.uk/doc/open-government-licence/](http://www.nationalarchives.gov.uk/doc/open-government-licence/)

## Return Values for UK

| Field	                          | Description  |
| ------                          | -------------|  
| id                              | ID of the trade lead.|
| country                         | GB (Great Britain). |
| reference_number                | Reference number for the opportunity. |
| publish_date                    | Date lead was posted. | 
| min_contract_value              | Minimum value of the lead (in pounds). |
| max_contract_value              | Maximum value of the lead (in pounds). |
| status                          | Status of the lead (note this API only shows open leads). |
| url                             | URL that pertains to the bid. |
| procurement_organization 	      | Agency responsible for the contract. |
| contact                         | Point of contact. |
| title                           | Title of the lead. |
| description                     | Description of the opportunity. |
| notice_type                     | Type of contract. |
| industry                        | Industry tag associated with the lead. |
| specific_location               | Location of the opportunity. | 
| source                          | UK. |
| trade_regions                        | Trade Regions associated with the lead.  |
| world_regions                        | World Regions associated with the lead.  |

## Millennium Challenge Corporation Account (MCA) Leads

The [Millennium Challenge Corporation](https://mcc.gov/) provides procurement information for opportunities that meet their rigorous standards.

## Return Values for MCA

| Field	                          | Description  |
| ------                          | -------------|  
| title                           | Title of the procurement opportunity.|
| publish_date                    | Date the procurement was published. |
| description                	  | Description of the procurement opportunity. |
| url                    		  | Link to the full procurement notice. | 
| country              			  | The country associated with the lead. |
| categories              		  | Categories array. |
| &nbsp;&nbsp;&nbsp;&nbsp; _item 1_                        | Items in the array contain “note” text such as “CPV” number. |
| &nbsp;&nbsp;&nbsp;&nbsp; _item 2_                        | 				|
| &nbsp;&nbsp;&nbsp;&nbsp; … 	      					  |  				|
| &nbsp;&nbsp;&nbsp;&nbsp; _item n_                        | 			    |
| funding_source                  | Millennium Challenge Account (MCA). |
| source                     	  | MCA. |
| trade_regions                        | Trade Regions associated with the lead.  |
| world_regions                        | World Regions associated with the lead.  |

CPV numbers in the categories array refer to the [Common Procurement Vocabulary](http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32008R0213) of the European Union.  Use these to help categorize the leads from the MCA.  For example, CPV/45331110 refers to Boiler installation work.

## Australia Leads

The [Australian Government](https://www.tenders.gov.au/) provides procurement information for their government opportunities.

## Return Values for Australia

| Field                           | Description  |
| ------                          | -------------|  
| agency                          | Agency responsible for the contract. |
| contract_value                  | Value of the lead.  |
| description                     | Description of the opportunity. |
| parent_id                       | Procurement opportunity that this lead is related to. |
| procurement_method              | Describes who may respond to the lead.  |
| publish_date_amended            | Amended publish date for the lead. | 
| status                          | Status of the lead (note this API only shows open leads). |
| industry                        | Industry tag associated with the lead. |
| project_number                  | Unique number assigned to the lead.  |
| publish_date                    | Date lead was posted. |
| start_date                      | Beginning date for the contract period.  |
| end_date                        | Closing date for the contract period.  |
| country                         | The country associated with the lead. | 
| topic                           | Short description of the category that the lead falls under. |
| url                             | URL that pertains to the bid. |
| source                          | AUSTRALIA |
| trade_regions                        | Trade Regions associated with the lead.  |
| world_regions                        | World Regions associated with the lead.  |


## USTDA Leads

## Return Values for USTDA

| Field                           | Description  |
| ------                          | -------------|  
| title                           | Title of the procurement opportunity. |
| description                     | Description of the opportunity. |
| publish_date                    | Date lead was posted. |
| end_date                        | Closing date for the contract period.  |
| url                             | URL that pertains to the bid. |
| source                          | USTDA |
| trade_regions                        | Trade Regions associated with the lead.  |
| world_regions                        | World Regions associated with the lead.  |
