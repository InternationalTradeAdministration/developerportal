---
permalink: "/v1/ita-office-locations.html"
layout: body
title: ITA Offices & Centers API
published: true
---

#ITA Offices & Centers API

{% include offices-tabs %}


##Resource URL

[http://api.trade.gov/ita_office_locations/search](http://api.trade.gov/ita_office_locations/search)

##Search Parameters for ITA office locations sources

###keyword

Returns office locations for a match within the **post** or **office name** fields.

    http://api.trade.gov/ita_office_locations/search?q={keyword}

**_Example_**

[http://api.trade.gov/ita_office_locations/search?q=Sao+Paulo](http://api.trade.gov/ita_office_locations/search?q=Sao+Paulo)

###city

Returns office locations based on city name

[http://api.trade.gov/ita_office_locations/search?city=Sao+Paulo](http://api.trade.gov/ita_office_locations/search?city=Sao+Paulo)

###country

Returns office locations based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/ita_office_locations/search?country={country code}
	
**_Example_**

[http://api.trade.gov/ita_office_locations/search?country=BR](http://api.trade.gov/ita_office_locations/search?country=BR)

###state

Returns locations for export assistance centers located in a specific  [U.S. State or Dependent Area](https://www.usps.com/send/official-abbreviations.htm).

    http://api.trade.gov/ita_office_locations/search?state
	={state postal code abbreviation>}

**_Example_**

[http://api.trade.gov/ita_office_locations/search?state=TN](http://api.trade.gov/ita_office_locations/search?state=TN)

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

**_Example_**

<div><a href="http://api.trade.gov/ita_office_locations/search?country=BR&size=1&offset=1"><pre>http://api.trade.gov/ita_office_locations/search?country=BR&size=1&offset=1</pre></a></div>


###Data Elements

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| id                | Unique identifier for post                                      |
| post              | Name of the post (Default sort)                                 |
| office_name       | Office Name                                                     |
| state             | State abbreviation, for domestic offices                        |
| city              | City                                                            |
| address           | Street address of office                                        |
| country           | Country                                                         |
| email             | Office email address                                            |
| fax               | Fax number                                                      |
| mail_instructions | Snail mail instructions                                         |
| phone             | Office phone number                                             |
| post_type         | Type of post (domestic or international)                        |