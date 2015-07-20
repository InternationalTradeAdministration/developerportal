---
permalink: "/ita-office-locations.html"
layout: body
title: ITA Offices & Centers API
published: true
---

#ITA Offices & Centers API

{% include offices-tabs %}

##Resource URL

{% include office-centers-query.html %}

##Search Parameters for ITA office locations sources

###keyword

Returns office locations for a match within the **post** or **office name** fields.

    {{ site.webservices_baseurl }}/v2/ita_office_locations/search?api_key={your key}&q={keyword}

**_Example_**

{% include office-centers-query-keyword.html %}

###city

Returns office locations based on city name

    {{ site.webservices_baseurl }}/v2/ita_office_locations/search?api_key={your key}&city={name of city}

**_Example_**

{% include office-centers-query-city.html %}

###countries

Returns office locations for a specific country based on [ISO alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm). This method allows you to search for multiple countries (plural) separated by commas but will only return one country (singular) per office location.

    {{ site.webservices_baseurl }}/v2/ita_office_locations/search?api_key={your key}&countries={country codes}

**_Example_**

{% include office-centers-query-country.html %}

###state

Returns locations for export assistance centers located in a specific  [U.S. State or Dependent Area](https://www.usps.com/send/official-abbreviations.htm).

    {{ site.webservices_baseurl }}/v2/ita_office_locations/search?api_key={your key}&state={state postal code abbreviation>}

**_Example_**

{% include office-centers-query-state.html %}

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

**_Example_**

{% include office-centers-query-size.html %}

###Data Elements

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| id                | Unique identifier for post.                                      |
| post              | Name of the post (Default sort).                                 |
| office_name       | Office Name.                                                     |
| state             | State abbreviation, for domestic offices.                        |
| city              | City.                                                            |
| address           | Street address of office.                                        |
| country           | Country.                                                         |
| email             | Office email address.                                            |
| fax               | Fax number.                                                      |
| mail_instructions | Snail mail instructions.                                         |
| phone             | Office phone number.                                             |
| post_type         | Type of post (domestic or international).                        |

This endpoint and its documentation has been updated to Version 2. Please visit the [API v1 Documentation]({{ site.baseurl }}/v1-ita-office-locations.html) page for the Version 1 documentation.
