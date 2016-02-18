---
permalink: "tariff-rates.html"
layout: body
title: Tariff Rates API
published: true
---

# Tariff Rates API

{% include tariffs-tabs %}

## Resource URL

{% include tariff-rates-query.html %}

## Search Parameters

### keyword

Searches for a match within the **subheading_description**, **tariff_rate_quota_note**, **rule_text**, and **tariff_line** fields.

    {{ site.webservices_baseurl }}/tariff_rates/search?api_key={your key}&q={term}

**_Example_**

{% include tariff-rates-query-keyword.html %}

### sources

Returns tariff rates based on the ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm) of the source country.  This method allows you to search for multiple sources (plural) separated by commas, but will only return one source (singular) per tariff rate.

	{{ site.webservices_baseurl }}/tariff_rates/search?api_key={your key}&sources={source countries}

**_Example_**

{% include tariff-rates-query-source.html %}

### final_year

Returns entries based on the final_year field.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY TO YYYY.  Searching on a single year can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/tariff_rates/search?api_key={your key}&final_year={YYYY TO YYYY}

**_Example_**

{% include tariff-rates-query-finalyear.html %}

### partner_start_year

Returns entries based on the partner_start_year field.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY TO YYYY.  Searching on a single year can be done by entering the same value for the start and end of the range.

    {{ site.webservices_baseurl }}/tariff_rates/search?api_key={your key}&partner_start_year={YYYY TO YYYY}

**_Example_**

{% include tariff-rates-query-partner-startyear.html %}

### reporter_start_year

Returns entries based on the reporter_start_year field.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY TO YYYY.  Searching on a single year can be done by entering the same value for the start and end of the range.

	{{ site.webservices_baseurl }}/tariff_rates/search?api_key={your key}&reporter_start_year={YYYY TO YYYY}

**_Example_**

{% include tariff-rates-query-reporter-startyear.html %}

### size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

    {{ site.webservices_baseurl }}/tariff_rates/search?api_key={your key}&size={1 to 100}&offset={1 to n}

**_Example_**

{% include tariff-rates-query-size.html %}

## Metadata

### Last Updated and Last Imported

Recency information about each source queried is given in **sources_used** in the following fields:

| Field	| Description |
| ------| -------------|
| source | The name of the country. |
| source_last_updated | The most recent date and time the data changed. |
| last_imported | The most recent date and time the data was imported. |

The *source_last_updated* field reflects the most recent date and time we noticed that the data for the source country had been updated. We check for updates and import lists at the same time daily.

### Search Performed At

The *search_performed_at* field displays the date and time of the current search in UTC.

## Return Values

| Field                        | Description                             |
| ------------------           | --------------------------------------- |
| source                       |    Two letter code for the “reporter” country with whom the U.S. has the Free Trade Agreement.   |
| source_id                    | Unique identifier.            |
| tariff_line         	       | Product’s Harmonized System (HS) code for the product according to the reporter’s nomenclature. |
| subheading_description       |  English description at the subheading level (6-digit HS code).  |
| hs_6                         | 6-digit HS code for the product. |
| base_rate                    | The numeric tariff rate from which tariff reductions are calculated.  Typically, this is the applied tariff rate at the time the FTA was negotiated. |
| base_rate_alt                |    The non-numeric (specific) tariff rate from which the tariff reductions are calculated.  Typically, this is the applied tariff rate at the time the FTA was negotiated.     |
| final_year                   |   The year the tariff is eliminated under the FTA.    |
| tariff_rate_quota            |   Flag noting tariff treatment for products within quota (2) and out of quota (1).    |
| tariff_rate_quota_note       |   Text note about the tariff-rate quota (TRQ) applicable to the product.    |
| tariff_eliminated            |    Flag noting whether or not the tariff is eventually eliminated.  “False”= not eliminated.    |
| ag_id                        |   Unique identifier for agricultural goods.    |
| partner_name                 |    Exporting country’s code.   |
| reporter_name                |    Importing country’s code.   |
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
| annual_rates                 |  Numeric year-by-year tariff rates under the FTA as the tariff is eliminated.    |
| alt_annual_rates             |    Non-numeric (specific) year-by-year tariff rates under the FTA.    |
