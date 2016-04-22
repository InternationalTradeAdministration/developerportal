---
permalink: "/market-intelligence.html"
layout: body
title: Market Intelligence API
published: true
---

# Market Intelligence API

{% include market-intelligence/tabs.html %}

## Resource URL

This endpoint will search across the five types of Market Intelligence articles.  To search a subset, see sources below.

{% include market-intelligence/query.html %}

## Search Parameters for Market Intelligence

### keyword

Searches for a match within the **atom**, **references**, **summary**, and **title** fields.  Note:  the **atom** field is searchable, but not returned in the JSON results.

    {{ site.webservices_baseurl }}/market_intelligence/search?api_key={your key}&q={term}

**_Example_**

{% include market-intelligence/query-keyword.html %}

### industries

Returns articles for a specific controlled industry term. This method allows you to search for multiple industries (plural) separated by commas.

    {{ site.webservices_baseurl }}/market_intelligence/search?api_key={your key}&industries={terms}

**_Example_**

{% include market-intelligence/query-industries.html %}

### topics

Returns articles for a specific topic term. This method allows you to search for multiple topics (plural) separated by commas.

    {{ site.webservices_baseurl }}/market_intelligence/search?api_key={your key}&topics={terms}

**_Example_**

{% include market-intelligence/query-topics.html %}

### countries

Returns articles for a specific country based on [ISO alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm). This method allows you to search for multiple countries (plural) separated by commas but will only return one country (singular) per event.

    {{ site.webservices_baseurl }}/market_intelligence/search?api_key={your key}&countries={country code}

**_Example_**

{% include market-intelligence/query-countries.html %}

### trade_regions

Returns articles for a specific Trade Region.  Enter multiple values by separating with a comma.

    {{ site.webservices_baseurl }}/market_intelligence/search?api_key={your key}&trade_regions={Region 1,Region 2}

**_Example_**

{% include market-intelligence/query-trade-regions.html %}

### world_regions

Returns articles for a specific World Region.  Enter multiple values by separating with a comma.

    {{ site.webservices_baseurl }}/market_intelligence/search?api_key={your key}&world_regions={Region 1,Region 2}

**_Example_**

{% include market-intelligence/query-world-regions.html %}

### sources

Searches only the articles specified by the **Source**, which corresponds to an article type.

   {{ site.webservices_baseurl }}/market_intelligence/search?api_key={your key}&sources={article source}

#### The Source Types for Market Intelligence Articles:

COUNTRY_COMMERCIAL

{% include market-intelligence/query-country-commercial.html %}

MARKET_INSIGHT

{% include market-intelligence/query-market-insight.html %}


### first_published_date

Returns articles based on their initial publish date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/market_intelligence/search?api_key={your key}&first_published_date={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

{% include market-intelligence/query-first-published.html %}

### last_published_date

Returns articles based on their most recent publish date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/market_intelligence/search?api_key={your key}&last_published_date={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

{% include market-intelligence/query-last-published.html %}

### size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

    {{ site.webservices_baseurl }}/market_intelligence/search?api_key={your key}&size={1 to 100}&offset={1 to n}

**_Example_**

{% include market-intelligence/query-size.html %}

## Metadata

### Last Updated and Last Imported

Recency information about each source queried is given in **sources_used** in the following fields:

| Field | Description |
| ------| -------------|
| source | The source type of the article. |
| source_last_updated | The most recent date and time the data changed. |
| last_imported | The most recent date and time the data was imported. |

The *source_last_updated* field reflects the most recent date and time we noticed that the issuing agency had updated the data. We check for updates and import lists at the same time daily.

### Search Performed At

The *search_performed_at* field displays the date and time of the current search in UTC.


## Return Values


| Field                 | Description                                         | Source             |
| ------------------    | ---------------------------------------             | ------------------ |
| id                    | Unique identifier for the article.                  | ALL   |
| source                | The source type of the article.                     | ALL  |
| title                 | The title of the article.                           | ALL  |
| summary               | A short summary of the article's content.           | ALL |
| first_published_date  | The date that the article of first published.       | ALL  |
| last_published_date   | The article's most recent publish date.             | ALL  |
| url          |          The URL where the published article is located.                                              | ALL  |
| references           |                                                       | ALL  |
| url_name              | A unique URL indentifier for the article.           | ALL  |
| industries            | The ITA industry terms associated with the article. | ALL  |
| topics                | The ITA topic terms associated with the article.    | ALL  |
| countries             | The countries relevant to the article.              | ALL  |
| trade_regions         | The trade regions relevant to the article.           | ALL  |
| world_regions         | The world regions relevant to the article.          | ALL |