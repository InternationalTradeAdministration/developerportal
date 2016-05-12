---
permalink: "/ita-office-locations.html"
layout: body
title: ITA Offices & Centers API
published: true
---

# ITA Offices & Centers API

{% include ita-offices/offices-tabs %}

## Resource URL

{% include ita-offices/office-centers-query.html %}

## Search Parameters for ITA Office Locations

### keyword

Returns office locations for a match within the **post** or **office name** fields.

    {{ site.webservices_baseurl }}/ita_office_locations/search?api_key={your key}&q={keyword}

**_Example_**

{% include ita-offices/office-centers-query-keyword.html %}

### city

Returns office locations based on city name

    {{ site.webservices_baseurl }}/ita_office_locations/search?api_key={your key}&city={name of city}

**_Example_**

{% include ita-offices/office-centers-query-city.html %}

### countries

Returns office locations for a specific country based on [ISO alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm). This method allows you to search for multiple countries (plural) separated by commas but will only return one country (singular) per office location.

    {{ site.webservices_baseurl }}/ita_office_locations/search?api_key={your key}&countries={country codes}

**_Example_**

{% include ita-offices/office-centers-query-country.html %}

### state

Returns locations for export assistance centers located in a specific  [U.S. State or Dependent Area](https://www.usps.com/send/official-abbreviations.htm).

    {{ site.webservices_baseurl }}/ita_office_locations/search?api_key={your key}&state={state postal code abbreviation>}

**_Example_**

{% include ita-offices/office-centers-query-state.html %}

### size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

    {{ site.webservices_baseurl }}/ita_office_locations/search?api_key={your key}&size={1 to 100}&offset={1 to n}

**_Example_**

{% include ita-offices/office-centers-query-size.html %}

## Metadata

### Last Updated and Last Imported

Recency information about each source queried is given in **sources_used** in the following fields:

| Field	| Description |
| ------| -------------|
| source | The name of the issuing agency. |
| source_last_updated | The most recent date and time the data changed. |
| last_imported | The most recent date and time the data was imported. |

The *source_last_updated* field reflects the most recent date and time we noticed that the issuing agency had updated the data. We check for updates and import lists at the same time weekly.

### Search Performed At

The *search_performed_at* field displays the date and time of the current search in UTC.

## Return Values

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| id                | Unique identifier for post.                                      |
| post              | Name of the post (default sort).                                 |
| office_name       | Office name.                                                     |
| country           | Country.                                                         |
| state             | State abbreviation, for domestic offices.                        |
| city              | City.                                                            |
| address           | Street address of office.                                        |
| email             | Office email address.                                            |
| fax               | Fax number.                                                      |
| mail_instructions | Snail mail instructions.                                         |
| phone             | Office phone number.                                             |
| post_type         | Type of post (domestic or international).                        |
