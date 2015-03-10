---
permalink: "tariff-rates.html"
layout: body
title: Tariff Rates API
published: true
---

#Tariff Rates API

{% include tariffs-tabs %}

##Resource URL

<div><a href="http://api.trade.gov/tariff_rates/search"><pre>http://api.trade.gov/tariff_rates/search</pre></a></div>


##Search Parameters

###keyword

Searches for a match within the **subheading_description**, **tariff_rate_quota_note**, **rule_text**, and **tariff_line** fields.

    http://api.trade.gov/tariff_rates/search?q={term}

#####Example:

<div><a href="http://api.trade.gov/tariff_rates/search?q=horses"><pre>http://api.trade.gov/tariff_rates/search?q=horses</pre></a></div>

###countries

Returns tariff rates based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/tariff_rates/search?countries={country codes}

#####Example:

<div><a href="http://api.trade.gov/tariff_rates/search?countries=kr,gt"><pre>http://api.trade.gov/tariff_rates/search?countries=kr,gt</pre></a></div>

###sources

Returns tariff rates based on the source country.

	http://api.trade.gov/tariff_rates/search?sources={source countries}

#####Example:

<div><a href="http://api.trade.gov/tariff_rates/search?sources=guatemala,australia"><pre>http://api.trade.gov/tariff_rates/search?countries=guatemala,australia</pre></a></div>

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

#####Example:

<div><a href="http://api.trade.gov/tariff_rates/search?countries=KR&size=1&offset=1"><pre>http://api.trade.gov/tariff_rates/search?countries=KR&size=1&offset=1</pre></a></div>



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
| annual_rates                 | Rates for the last ten years (contains y2006-y2015)      |
| alt_annual_rates             |       |
| countries                    |       |
| source                       |       |