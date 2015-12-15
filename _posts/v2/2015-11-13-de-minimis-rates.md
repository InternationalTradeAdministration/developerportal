---
permalink: "/de-minimis.html"
layout: body
title: De Minimis API
published: true
---

#De Minimis API

{% include de-minimis-rates/tabs %}

##Resource URL

_Note: be sure to include the version number (v#) in the URL as specified below._

{% include de-minimis-rates/query.html %}

##Search Parameters

###keyword

Returns de minimis rates for a match in the **country** or **notes** fields.

    {{ site.webservices_baseurl }}/v1/de_minimis/search?api_key={your key}&q={keyword}

**_Example_**

{% include de-minimis-rates/query-keyword.html %}

###countries

Returns de minimis rates for a specific country based on [ISO alpha-2 country codes](http://www.iso.org/iso/country_codes). Enter multiple terms by seperating with a comma.

    {{ site.webservices_baseurl }}/v1/de_minimis/search?api_key={your key}&countries={country code}

**_Example_**

{% include de-minimis-rates/query-country.html %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

    {{ site.webservices_baseurl }}/v1/de_minimis/search?api_key={your key}&size={1 to 100}&offset={1 to n}

**_Example_**

{% include de-minimis-rates/query-size.html %}

##Metadata

###Last Updated and Last Imported

Recency information about each source queried is given in **sources_used** in the following fields:

| Field	| Description |
| ------| -------------|
| source | ITA’s De Minimis list. |
| source_last_updated | The most recent date and time the data changed. |
| last_imported | The most recent date and time the data was imported. |

The *source_last_updated* field reflects the most recent date and time that we have updated the data.

###Search Performed At

The *search_performed_at* field displays the date and time of the current search in UTC.

##Return Values

| Field               | Description                                                     |
| ---------------     | --------------------------------------------------------------- |
| country_name        | Name of the country |
| country             | [ISO-2 country code](http://www.iso.org/iso/country_codes)  |
| de_minimis_value    | De Minimis value for that country |
| de_minimis_currency | [ISO-3 currency code](http://www.iso.org/iso/home/standards/currency_codes.htm) for the country's De Minimis |
| vat_amount          | Value Added Tax amount |
| vat_currency        | [ISO-3 currency code](http://www.iso.org/iso/home/standards/currency_codes.htm) for the country's VAT |
| notes               | Notes for each De Minimis and VAT amount |
