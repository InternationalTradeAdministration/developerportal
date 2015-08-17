---
published: true
permalink: "/market-research-library.html"
title: Market Research Library API
layout: body
---

#Market Research Library API 

{% include mrl-tabs %}

##Resource URL

{% include mrl-query.html %}

##Search Parameters for market research library sources

###keyword

Returns market research reports for a match in the **description** or **title** fields.

    {{ site.webservices_baseurl }}/v2/market_research_library/search?api_key={your key}&q={keyword}

**_Example_**

{% include mrl-query-keyword.html %}

###countries

Returns market research reports for a specific country based on [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm). Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/market_research_library/search?api_key={your key}&countries={country code}

**_Example_**

{% include mrl-query-keyword-country.html %}

###industries

Returns market research reports for a specific [controlled industry term]({{ site.baseurl }}/industry-list-market-research-library.html). Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/market_research_library/search?api_key={your key}&industries={industry names}

**_Example_**

{% include mrl-query-keyword-industry.html %}

###expiration_date

Returns entries based on their expiration date. Dates are filtered by comparing them against an inclusive range, which must be entered with the following format: YYYY-mm-dd TO YYYY-mm-dd. Searching on a single date can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/v2/market_research_library/search?api_key={your key}&expiration_date={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

{% include mrl-query-keyword-date.html %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.  **Note:**  To download the entire Market Research Library in one call set ```size=-1```

**_Example_**

{% include mrl-query-size.html %}

##Last Updated and Last Imported

Recency information about each source queried is given in **sources_used** in the following fields:

| Field	| Description |
| ------| -------------|
| source | The name of the issuing agency. |
| source_last_updated | The most recent date and time the data changed. |
| last_imported | The most recent date and time the data was imported. |

The *source_last_updated* field reflects the most recent date and time we noticed that the issuing agency had updated the data. We check for updates and import lists at the same time daily.

###Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| id              | Unique identifier assigned to the report.                         |
| countries       | Country category(ies) assigned to the report.                    |
| description     | Abstract of the report’s content.                                |
| expiration_date | Date when the report is no longer valid.                         |
| industries        | Industry categories assigned to the report.                        |
| report_type     | The report type can either be CCG, Best Market Report, or Market Research Report.|
| title           | Report title  (default sort).                                    |
| url             | URL for the report.                                              |
