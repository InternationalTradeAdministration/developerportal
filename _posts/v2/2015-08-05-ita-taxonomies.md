---
permalink: "/ita-taxonomies.html"
layout: body
title: ITA Taxonomies
published: true
---

# ITA Taxonomies API

{% include taxonomies/taxonomies-tabs %}

## Resource URL

{% include taxonomies/taxonomies-query.html %}

## Search Parameters for ITA Taxonomies

### keyword

Returns taxonomy terms for a match within the **label** field.

    {{ site.webservices_baseurl }}/ita_taxonomies/search?api_key={your key}&q={keyword}

**_Example_**

{% include taxonomies/taxonomies-query-keyword.html %}

### types

Returns terms that fall under the given high-level taxonomy types.  Enter multiple values separated by commas.  The possible values are Industries, Trade Topics, Geographic Locations, and U.S. Government.

    {{ site.webservices_baseurl }}/ita_taxonomies/search?api_key={your key}&types={value1,value2}

**_Example_**

{% include taxonomies/taxonomies-query-types.html %}

### labels

Returns terms based on exact matching of the **label** field.  Enter multiple values separated by commas.

    {{ site.webservices_baseurl }}/ita_taxonomies/search?api_key={your key}&labels={value1,value2}

**_Example_**

{% include taxonomies/taxonomies-query-labels.html %}

### size + offset

    {{ site.webservices_baseurl }}/ita_taxonomies/search?api_key={your key}&size={1 to 100}&offset={1 to n}

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

**_Example_**

{% include taxonomies/taxonomies-query-size.html %}

## Metadata

### Last Updated and Last Imported

Recency information about each source queried is given in **sources_used** in the following fields:

| Field	| Description |
| ------| -------------|
| source | The name of the issuing agency. |
| source_last_updated | The most recent date and time the data changed. |
| last_imported | The most recent date and time the data was imported. |

The *source_last_updated* field reflects the most recent date and time we noticed that the issuing agency had updated the data. We check for updates and import lists hourly.

### Search Performed At

The *search_performed_at* field displays the date and time of the current search in UTC.

## Return Values

| Field                | Description                                                     |
| -----------------    | --------------------------------------------------------------- |
| id         		   | The id assigned to the term.                                    |
| label                | The name of the given taxonomy term.                            |
| type                 | The high level taxonomy type under which the given term belongs.  |
| annotations          | A hash containing key/value pairs of annotation properties. Each value contains an array of label strings.  |
| object_properties    | A hash containing key/array pairs of object properties.  Each value contains an array of id/label hashes.  |
