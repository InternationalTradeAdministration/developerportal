---
permalink: "consolidated-screening-list.html"
layout: body
title: Consolidated Screening List API
published: true
---

#Consolidated Screening List API

The Consolidated Screening List API consolidates export screening lists of the Departments of Commerce, State and the Treasury into one spreadsheet as an aide to industry in conducting electronic screens of potential parties to regulated transactions. In the event that a company, entity or person on the list appears to match a party potentially involved in your export transaction, additional due diligence should be conducted before proceeding. There may be a strict export prohibition, requirement for seeking a license application, evaluation of the end-use or user to ensure it does not result in an activity prohibited by any U.S. export regulations, or other restriction.

Prior to taking any further actions, users are to consult the requirements of the specific list on which the company, entity or person is identified by reviewing the webpage of the agency responsible for such list. 

The output format for this API is JSON.  Resource URL and Search Parameters can be found towards the bottom of this page.

##Current Sources

###Department of Commerce 

**Return Values from Entity List**

Parties whose presence in a transaction can trigger a license requirement supplemental to those elsewhere in the Export Administration Regulations (EAR). The list specifies the license requirements and policy that apply to each listed party

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| addresses | Array for address(es) by address, city, state, postal_code, country|
| alt_names | Array of alternative names, each entry with format the same as the "name" field |
| entity_number | Unique listing identifier |
| federal_register_notice | Federal Register Notice code |
| license_requirement | Requirement notations |
| license_policy | License policies | 
| name | Name of the SDN |
| programs |  |
| standard_order | Standard Order | 
| start_date | Start Date |
| end_date | End Date |
| sdn_type | Type of SDN (Aircraft, Entity, Individual, or Vessel) 
| source | Source of list = EL |
| source_list_url | URL for original data source |
| title | Title |

**Denied Persons List**

Individuals and entities that have been denied export privileges. Any dealings with a party on this list that would violate the terms of its denial order are prohibited.

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| addresses | Array for address(es) by address, city, state, postal_code, country|
| end_date | End Date |
| federal_register_notice | Federal Register Notice code |
| name | Name of the SDN |
| standard_order | Standard Order | 
| start_date | Start Date |
| source | Source of list = DPL |
| source_list_url | URL for original data source |

**Unverified List**

End-users who BIS has been unable to verify in prior transactions. The presence of a party on this list in a transaction is a “Red Flag” that should be resolved before proceeding with the transaction.

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| addresses | Array for address(es) by address, city, state, postal_code, country|
| alt_names | Array of alternative names, each entry with format the same as the "name" field |
| federal_register_notice | Federal Register Notice code |
| name | Name of the SDN |
| source | Source of list = UVL |
| source_list_url | URL for original data source |

###Department of State 

**AECA Debarred List**

Entities and individuals prohibited from participating directly or indirectly in the export of defense articles, including technical data and defense services. Pursuant to the Arms Export Control Act (AECA) and the International Traffic in Arms Regulations (ITAR), the AECA Debarred List includes persons convicted in court of violating or conspiring to violate the AECA and subject to "statutory debarment" or persons established to have violated the AECA in an administrative proceeding and subject to "administrative debarment."

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| addresses | Array for address(es) by address, city, state, postal_code, country|
| end_date | End Date |
| federal_register_notice | Federal Register Notice code |
| name | Name of the SDN |
| remarks | Additional comments |
| standard_order | Standard Order | 
| start_date | Start Date |
| source | Source of list = DTC|
| source_list_url | URL for original data source |


**Nonproliferation Sanctions**
    
Parties that have been sanctioned under various statutes. The linked webpage is updated as appropriate, but the Federal Register is the only official and complete listing of nonproliferation sanctions determinations.

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| end_date | End Date |
| federal_register_notice | Federal Register Notice code |
| name | Name of the SDN |
| programs | Program Name for sanction |
| start_date | Start Date |
| source | Source of list = ISN |
| source_list_url | URL for original data source |

###Department of the Treasury – Office of Foreign Assets Control

**Special Designated Nationals List**

Parties who may be prohibited from export transactions based on OFAC’s regulations. The EAR require a license for exports or reexports to any party in any entry on this list that contains any of the suffixes "SDGT", "SDT", "FTO", "IRAQ2" or "NPWMD".”

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| addresses | Array for address(es) of the SDN by address, city, state, postal_code, country|
| alt_names | Array of alternative names, each entry with format the same as the "name" field |
| citizenships | Known citizenships of the SDN |
| dates_of_birth | Date of birth |
| entity_number | Unique listing identifier |
| ids | Array of identifiers for the SDN by country, expiration_date, issue_date, number, type |
| name | Name of the SDN |
| nationalities | Known nationalities of the SDN |
| places_of_birth | Known birthplace of the SDN |
| programs | The sanctions program pursuant to which the person has been blocked, designated, or identified. [SDN List](http://www.treasury.gov/resource-center/sanctions/SDN-List/Pages/program_tags.aspx) |
| remarks | Additional comments |
| sdn_type | Type of SDN (Aircraft, Entity, Individual, or Vessel) 
| source | Source of list = SDN |
| source_list_url | URL for original data source |
| title | Job Title of the SDN |

Return Values from Special Designated Nationals List for Vessels

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| addresses | Array for address(es) of the SDN by address, city, state, postal_code, country|
| alt_names | Array of alternative names, each entry with format the same as the "name" field |
| call_sign | Call sign of Vessel |
| entity_number | Unique listing identifier |
| flag (if sdn_type=vessel) | flag of the vessel
| gross_registered_tonnage (if sdn_type=vessel) | Registered tonnage | 
| gross_tonnage (if sdn_type=vessel) |  Gross tonnage |
| ids | Array of identifiers for the SDN by country, expiration_date, issue_date, number, type |
| name | Name of the SDN |
| owner (if sdn=vessel| Owner of the Vessel |
| programs | The sanctions program pursuant to which the person has been blocked, designated, or identified. [SDN List](http://www.treasury.gov/resource-center/sanctions/SDN-List/Pages/program_tags.aspx) |
| sdn_type | Type of SDN (Aircraft, Entity, Individual, or Vessel) 
| source | Source of list = SDN |
| source_list_url | URL for original data source |
| title | Job Title of the SDN |

**Foreign Sanctions Evaders List**

OFAC publishes a list of foreign individuals and entities determined to have violated, attempted to violate, conspired to violate, or caused a violation of U.S. sanctions on Syria or Iran. It also lists foreign persons who have facilitated deceptive transactions for or on behalf of persons subject to U.S. sanctions. Collectively, such individuals and companies are called “Foreign Sanctions Evaders” or “FSEs.” Transactions by U.S. persons or within the United States involving FSEs are prohibited

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| addresses | Array for address(es) of the FSE by address, city, state, postal_code, country|
| alt_names | Array of alternative names, each entry with format the same as the "name" field |
| citizenships | Known citizenships of the FSE |
| dates_of_birth | Date of birth |
| entity_number | Unique listing identifier |
| ids | Array of identifiers for the FSE by country, expiration_date, issue_date, number, type |
| name | Name of the SDN |
| nationalities | Known nationalities of the FSE |
| places_of_birth | Known birthplace of the FSE |
| programs | The sanctions program pursuant to which the person has been blocked, designated, or identified. [FSE List](http://www.treasury.gov/resource-center/sanctions/SDN-List/Pages/program_tags.aspx) |
| remarks | Additional comments |
| sdn_type | Type of SDN (Aircraft, Entity, Individual, or Vessel) 
| source | Source of list = FSE |
| source_list_url | URL for original data source |
| title | Job Title of the FSE |

##Resource URL

    http://api.trade.gov/consolidated_screening_list/search
    
##Search Parameters for all leads

###keyword

Searches for a match within the title and description fields.

    http://api.trade.gov/consolidated_screening_list/search?q={term}

###sources

    http://api.trade.gov/consolidated_screening_list/search?sources={source}

###sdn_type

    http://api.trade.gov/consolidated_screening_list/search?sources={sdn_type}
   
###countries

Returns location of lead based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).  Note:  This method allows you to search for multiple countries (plural) but will only return one country (singular) per lead.  

    http://api.trade.gov/consolidated_screening_list/search?countries={country code}

###end_date


###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

#####Example:

    http://api.trade.gov/consolidated_screening_list/search?country=BR&size=1&offset=1"

