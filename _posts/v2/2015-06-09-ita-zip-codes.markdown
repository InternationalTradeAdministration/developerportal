---
permalink: "/ita-zip-codes.html"
layout: body
title: Zip Code to USEAC
published: true
---

# Zip Code to USEAC API

{% include zip-codes/zipcodes-tabs %}

## Resource URL

{% include zip-codes/zipcodes-query.html %}

## Search Parameters for Zip Code to USEAC

### keyword

Returns zip code entries for a match within the **post**, **office_name** or **zip_city** fields.

    {{ site.webservices_baseurl }}/ita_zipcode_to_post/search?api_key={your key}&q={keyword}

**_Example_**

{% include zip-codes/zipcodes-query-keyword.html %}

### zip_codes

Returns zip code entries that match the specified zip codes.  Enter muliple values separated by commas.

    {{ site.webservices_baseurl }}/ita_zipcode_to_post/search?api_key={your key}&zip_codes={value1,value2}

**_Example_**

{% include zip-codes/zipcodes-query-zipcodes.html %}

### size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

    {{ site.webservices_baseurl }}/ita_zipcode_to_post/search?api_key={your key}&size={1 to 100}&offset={1 to n}

**_Example_**

{% include zip-codes/zipcodes-query-size.html %}

## Metadata

### Last Updated and Last Imported

Recency information about each source queried is given in **sources_used** in the following fields:

| Field	| Description |
| ------| -------------|
| source | The name of the issuing agency. |
| source_last_updated | The most recent date and time the data changed. |
| last_imported | The most recent date and time the data was imported. |

The *source_last_updated* field reflects the most recent date and time we noticed that the issuing agency had updated the data. We check for updates and import lists at the same time daily.

### Search Performed At

The *search_performed_at* field displays the date and time of the current search in UTC.

## Return Values

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| zip_code          | 5-digit U.S. ZIP Code.                                                     |
| zip_city          | Name of the city corresponding to the ZIP code.             |
| post              | Name of the post (default sort).                                 |
| office_name       | Office name.                                                     |
| country           | This will always be US since this is a list of ITA offices in the U.S.    |
| state             | State abbreviation.                       |
| post_city         | Name of the city corresponding to the office location.           |
| address           | Street address of office.                                        |
| email             | Office email address.                                            |
| fax               | Fax number.                                                      |
| mail_instructions | Snail mail instructions.                                         |
| phone             | Office phone number.                                             |

