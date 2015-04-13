---
permalink: "tariff-rates.html"
layout: body
title: Tariff Rates API
published: true
---

#Tariff Rates API

{% include tariffs-tabs %}

##Resource URL

{% include tariff-rates-query.html %}

##Search Parameters

###keyword

Searches for a match within the **subheading_description**, **tariff_rate_quota_note**, **rule_text**, and **tariff_line** fields.

    http://api.trade.gov/v2/tariff_rates/search?api_key={your key}&q={term}

**_Example_**

{% include tariff-rates-query-keyword.html %}

<!---    
**_Example_**

[http://api.trade.gov/v2/tariff_rates/search?q=horses](http://api.trade.gov/v2/tariff_rates/search?q=horses)
-->

###sources

Returns tariff rates based on the ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm) of the source country.  This method allows you to search for multiple sources (plural) separated by commas, but will only return one source (singular) per tariff rate.

	http://api.trade.gov/v2/tariff_rates/search?api_key={your key}&sources={source countries}

**_Example_**

{% include tariff-rates-query-source.html %}

<!---    
**_Example_**

[http://api.trade.gov/v2/tariff_rates/search?sources=GT,AU](http://api.trade.gov/v2/tariff_rates/search?sources=GT,AU)
-->

###final_year

Returns entries based on the final_year field.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY TO YYYY.  Searching on a single year can be done by entering the same value for the start and end of the range.


    http://api.trade.gov/v2/tariff_rates/search?api_key={your key}&final_year={YYYY TO YYYY}

**_Example_**

{% include tariff-rates-query-finalyear.html %}

<!---    
**_Example_**

[http://api.trade.gov/v2/tariff_rates/search?final_year=2005 TO 2006](http://api.trade.gov/v2/tariff_rates/search?final_year=2005 TO 2006)
-->

###partner_start_year

Returns entries based on the partner_start_year field.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY TO YYYY.  Searching on a single year can be done by entering the same value for the start and end of the range.

    http://api.trade.gov/v2/tariff_rates/search?api_key={your key}&partner_start_year={YYYY TO YYYY}

**_Example_**

{% include tariff-rates-query-partner-startyear.html %}

<!---    
**_Example_**

[http://api.trade.gov/v2/tariff_rates/search?partner_start_year=2005 TO 2006](http://api.trade.gov/v2/tariff_rates/search?partner_start_year=2005 TO 2006)
-->

###reporter_start_year

Returns entries based on the reporter_start_year field.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY TO YYYY.  Searching on a single year can be done by entering the same value for the start and end of the range.

	http://api.trade.gov/v2/tariff_rates/search?api_key={your key}&reporter_start_year={YYYY TO YYYY}

**_Example_**

{% include tariff-rates-query-reporter-startyear.html %}

<!---    
**_Example_**

[http://api.trade.gov/v2/tariff_rates/search?reporter_start_year=2005 TO 2006](http://api.trade.gov/v2/tariff_rates/search?reporter_start_year=2005 TO 2006)
-->

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

**_Example_**

{% include tariff-rates-query-size.html %}

<!---    
**_Example_**

[http://api.trade.gov/v2/tariff_rates/search?size=1&offset=1](http://api.trade.gov/v2/tariff_rates/search?size=1&offset=1)
-->

##Return Values

| Field                        | Description                             |
| ------------------           | --------------------------------------- |
| source                       |    Two letter code for the “reporter” country with whom the U.S. has the Free Trade Agreement.   |
| source_id                    | Unique identifier            |
| tariff_line         	       | Product’s Harmonized System (HS) code for the product according to the reporter’s nomenclature |
| subheading_description       |  English description at the subheading level (6-digit HS code)  |
| hs_6                         | 6-digit HS code for the product |
| base_rate                    | The numeric tariff rate from which tariff reductions are calculated.  Typically, this is the applied tariff rate at the time the FTA was negotiated. |
| base_rate_alt                |    The non-numeric (specific) tariff rate from which the tariff reductions are calculated.  Typically, this is the applied tariff rate at the time the FTA was negotiated.     |
| final_year                   |   The year the tariff is eliminated under the FTA.    |
| tariff_rate_quota            |   Flag noting tariff treatment for products within quota (2) and out of quota (1).    |
| tariff_rate_quota_note       |   Text note about the tariff-rate quota (TRQ) applicable to the product.    |
| tariff_eliminated            |    Flag noting whether or not the tariff is eventually eliminated.  “False”= not eliminated    |
| ag_id                        |   Unique identifier for agricultural goods    |
| partner_name                 |    Exporting country’s code   |
| reporter_name                |    Importing country’s code   |
| staging_basket               |     The agreed tariff phase-out period for the product under the FTA.   |
| partner_start_year           |    Year the agreement entered into force for the partner.  (The first year of tariff cuts).    |
| reporter_start_year          |   Year the agreement entered into force for the reporter.  (The first year of tariff cuts).    |
| partner_agreement_name       |   Agreement name for the partner country.    |
| reporter_agreement_name      |   Agreement name for the reporter country.    |
| partner_agreement_approved   |   Flag describing if partner has approved the agreement (true=approved; false=pending).    |
| reporter_agreement_approved  |    Flag describing if reporter has approved the agreement (true=approved; false=pending).    |
| quota_name                   |   Description for products subject to tariff-rate quotas.  (Describes in-quota and out-of-quota tariff lines).    |
| rule_text                    |   Text describing the applicable rule of origin for the product.    |
| link_text                    |   Text describing URL to more detailed rule of origin information.    |
| link_url                     |    URL to more detailed rule of origin information.   |
| annual_rates                 |  Numeric year-by-year tariff rates under the FTA as the tariff is eliminated    |
| alt_annual_rates             |    Non-numeric (specific) year-by-year tariff rates under the FTA.    |
