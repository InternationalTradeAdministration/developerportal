---
permalink: "tariff-rates.html"
layout: body
title: Tariff Rates API
published: true
---

#Tariff Rates API

{% include tariffs-tabs %}

##Resource URL

[http://api.trade.gov/tariff_rates/search](http://api.trade.gov/tariff_rates/search)

{% include tariff-rates-query.html %}

##Search Parameters

###keyword

Searches for a match within the **subheading_description**, **tariff_rate_quota_note**, **rule_text**, and **tariff_line** fields.

    http://api.trade.gov/tariff_rates/search?api_key={your key}&q={term}

**_Example_**

[http://api.trade.gov/tariff_rates/search?q=horses](http://api.trade.gov/tariff_rates/search?q=horses)


###sources

Returns tariff rates based on the ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm) of the source country.

	http://api.trade.gov/tariff_rates/search?api_key={your key}&sources={source countries}

**_Example_**

[http://api.trade.gov/tariff_rates/search?sources=GT,AU](http://api.trade.gov/tariff_rates/search?sources=GT,AU)


###final_year

Returns entries based on the final_year field.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY TO YYYY.  Searching on a single year can be done by entering the same value for the start and end of the range.


    http://api.trade.gov/tariff_rates/search?api_key={your key}&final_year={YYYY TO YYYY}

**_Example_**

[http://api.trade.gov/tariff_rates/search?final_year=2005 TO 2006](http://api.trade.gov/tariff_rates/search?final_year=2005 TO 2006)


###partner_start_year

Returns entries based on the partner_start_year field.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY TO YYYY.  Searching on a single year can be done by entering the same value for the start and end of the range.


    http://api.trade.gov/tariff_rates/search?api_key={your key}&partner_start_year={YYYY TO YYYY}

**_Example_**

[http://api.trade.gov/tariff_rates/search?partner_start_year=2005 TO 2006](http://api.trade.gov/tariff_rates/search?partner_start_year=2005 TO 2006)


###reporter_start_year

Returns entries based on the reporter_start_year field.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY TO YYYY.  Searching on a single year can be done by entering the same value for the start and end of the range.


    http://api.trade.gov/tariff_rates/search?api_key={your key}&reporter_start_year={YYYY TO YYYY}

**_Example_**

[http://api.trade.gov/tariff_rates/search?reporter_start_year=2005 TO 2006](http://api.trade.gov/tariff_rates/search?reporter_start_year=2005 TO 2006)


###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

**_Example_**

[http://api.trade.gov/tariff_rates/search?size=1&offset=1](http://api.trade.gov/tariff_rates/search?size=1&offset=1)



##Return Values

| Field                        | Description                             |
| ------------------           | --------------------------------------- |
| source_id                    | Unique identifier            |
| tariff_line         	       |  |
| subheading_description       |   |
| hs_6                         |  |
| base_rate                    |  |
| base_rate_alt                |         |
| final_year                   |       |
| tariff_rate_quota            |       |
| tariff_rate_quota_note       |       |
| tariff_eliminated            |       |
| ag_id                        |       |
| partner_name                 |       |
| reporter_name                |       |
| staging_basket               |       |
| partner_start_year           |       |
| reporter_start_year          |       |
| partner_agreement_name       |       |
| reporter_agreement_name      |       |
| partner_agreement_approved   |       |
| reporter_agreement_approved  |       |
| quota_name                   |       |
| rule_text                    |       |
| link_text                    |       |
| link_url                     |       |
| annual_rates                 |      |
| alt_annual_rates             |       |
| source                       |       |