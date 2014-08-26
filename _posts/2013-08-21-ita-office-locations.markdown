---
permalink: "ita-office-locations.html"
layout: body
title: ITA Offices & Centers API
published: true
---

#<a href="ita-office-locations.html">ITA Offices & Centers API</a>

This API provides contact and address information for all of ITA’s domestic and international export assistance centers. Incorporating these listings into directories of business counseling services is one example of how developers can use this API to assist exporters.

##Resource URL

<a href="http://api.trade.gov/ita_office_locations/search"><pre>http://api.trade.gov/ita_office_locations/search</pre></a>

##Search Parameters

###keyword

Returns office locations for a match within the post or office name fields.

    http://api.trade.gov/ita_office_locations/search?q={keyword}

#####Example:

<a href="http://api.trade.gov/ita_office_locations/search?q=Sao+Paulo"><pre>http://api.trade.gov/ita_office_locations/search?q=Sao+Paulo</pre></a>

###city

Returns office locations based on city name

<a href="http://api.trade.gov/ita_office_locations/search?city=Sao+Paulo"><pre>http://api.trade.gov/ita_office_locations/search?city=Sao+Paulo</pre></a>

###country

Returns office locations based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/ita_office_locations/search?country={country code}
	
#####Example:

<a href="http://api.trade.gov/ita_office_locations/search?country=BR"><pre> http://api.trade.gov/ita_office_locations/search?country=BR</pre></a>

###state

Returns locations for export assistance centers located in a specific  [U.S. State or Dependent Area](https://www.usps.com/send/official-abbreviations.htm).

    http://api.trade.gov/ita_office_locations/search?state
	={state postal code abbreviation>}

#####Example:

<a href="http://api.trade.gov/ita_office_locations/search?state=TN"><pre>http://api.trade.gov/ita_office_locations/search?state=TN</pre></a>

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

#####Example:

<a href="http://api.trade.gov/ita_office_locations/search?country=BR&size=1&offset=1"><pre>http://api.trade.gov/ita_office_locations/search?country=BR&size=1&offset=1</pre></a>


##Data Elements

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| id                | Unique identifier for post                                      |
| post              | Name of the post (Default sort)                                 |
| office_name       | Office Name                                                     |
| state             | State abbreviation, for domestic offices                        |
| city              | City                                                            |
| address           | Street address of office                                        |
| email             | Office email address                                            |
| fax               | Fax number                                                      |
| mail_instructions | Snail mail instructions                                         |
| phone             | Office phone number                                             |
| post_type         | Type of post (domestic or international)                        |
