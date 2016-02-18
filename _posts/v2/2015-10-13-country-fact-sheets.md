---
permalink: "/country-fact-sheets.html"
layout: body
title: Country Fact Sheets API
published: false
---

# Country Fact Sheets API

{% include country-fact-sheets-tabs %}

## Resource URL

{% include country-fact-sheets-query.html %}

## Search Parameters for country fact sheets

### keyword

Returns country fact sheets for a match in the **title** or **content_html** fields.

    {{ site.webservices_baseurl }}/country_fact_sheets/search?api_key={your key}&q={keyword}

**_Example_**

{% include country-fact-sheets-query-keyword.html %}

### countries

Returns country fact sheets for a specific country based on [ISO alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm). Enter multiple terms by seperating with a comma.

    {{ site.webservices_baseurl }}/country_fact_sheets/search?api_key={your key}&countries={country code}

**_Example_**

{% include country-fact-sheets-query-keyword-country.html %}

### size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

**_Example_**

{% include country-fact-sheets-query-size.html %}

### Return Values

| Field           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| id              | Unique identifier assigned to the country fact sheet.           |
| title           | Title of the country fact sheet.                                |
| content_html    | Content of the country fact sheet in HTML format.               |
| published_date  | Published date of the country fact sheet.                       |
| country         | Countries relevant to the country fact sheet.                   |
| source          | STATE.                                                          |
| topic           | Foreign Relation.                                               |
