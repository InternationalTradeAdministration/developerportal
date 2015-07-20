---
permalink: "/ita-zip-codes.html"
layout: body
title: Zip Code to USEAC
published: true
---

#Zip Code to USEAC API

{% include zipcodes-tabs %}

##Resource URL

{% include zipcodes-query.html %}

##Search Parameters for Zip Code to USEAC

###keyword

Returns zip code entries for a match within the **post**, **office_name** or **zip_city** fields.

    {{ site.webservices_baseurl }}/v2/ita_zipcode_to_post/search?api_key={your key}&q={keyword}

**_Example_**

{% include zipcodes-query-keyword.html %}

###zip_codes

Returns zip code entries that match the specified zip codes.  Enter muliple values separated by commas.

    {{ site.webservices_baseurl }}/v2/ita_zipcode_to_post/search?api_key={your key}&zip_codes={value1,value2}

**_Example_**

{% include zipcodes-query-zipcodes.html %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

**_Example_**

{% include zipcodes-query-size.html %}

###Data Elements

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| zip_code          | 5-digit U.S. ZIP Code.                                                     |
| zip_city          | Name of the city corresponding to the ZIP code.             |
| post              | Name of the post (Default sort).                                 |
| office_name       | Office Name.                                                     |
| state             | State abbreviation.                       |
| post_city         | Name of the city corresponding to the office location.           |
| address           | Street address of office.                                        |
| country           | This will always be US since this is a list of ITA offices in the U.S.    |
| email             | Office email address.                                            |
| fax               | Fax number.                                                      |
| mail_instructions | Snail mail instructions.                                         |
| phone             | Office phone number.                                             |

