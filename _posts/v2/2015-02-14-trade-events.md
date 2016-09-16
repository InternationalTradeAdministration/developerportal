---
permalink: "/trade-events.html"
layout: body
title: Trade Events API
published: true
---

# Trade Events API

{% include trade-events/events-tabs %}

## Resource URL

This endpoint will search across all four trade event sources.  To search a subset, see sources below.

{% include trade-events/trade-events-query.html %}

## Search Parameters for Trade Events Sources

### keyword

Searches for a match within the **registration_title**, **description**, **event_name**, **industries**, **city**, **venues.city**, **venues.state**, **venues.country**, **contacts.first_name**, **contacts.last_name**, and **contacts.person_title** fields.

    {{ site.webservices_baseurl }}/v1/trade_events/search?api_key={your key}&q={term}

**_Example_**

{% include trade-events/trade-events-query-keyword.html %}

### industries

Returns trade events for specific [controlled industry names]({{ site.baseurl }}/industry-list-trade-events.html). This method allows you to search for multiple industries (plural) separated by commas.

    {{ site.webservices_baseurl }}/v1/trade_events/search?api_key={your key}&industries={terms}

**_Example_**

{% include trade-events/trade-events-query-industry.html %}

### countries

Returns trade events for a specific country based on [ISO alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm). This method allows you to search for multiple countries (plural) separated by commas but will only return one country (singular) per event.

    {{ site.webservices_baseurl }}/v1/trade_events/search?api_key={your key}&countries={country code}

**_Example_**

{% include trade-events/trade-events-query-country.html %}

### sources

Searches only the events specified by the **Source** Abbreviation.

	 {{ site.webservices_baseurl }}/trade_events/search?api_key={your key}&sources={event source}

**_Example_**

{% include trade-events/trade-events-query-source.html %}

Source Abbreviations are as follows:

* State Department's Direct Line = **DL**
* International Trade Administration = **ITA**
* Small Business Administration = **SBA**
* U.S. Trade and Development Agency = **USTDA**


### start_date

Returns events based on their start date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/v1/trade_events/search?api_key={your key}&start_date={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

{% include trade-events/trade-events-query-startdate.html %}

### end_date

Returns events based on their end date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/v1/trade_events/search?api_key={your key}&end_date={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

{% include trade-events/trade-events-query-enddate.html %}

### size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

    {{ site.webservices_baseurl }}/v1/trade_events/search?api_key={your key}&size={1 to 100}&offset={1 to n}

**_Example_**

{% include trade-events/trade-events-query-size.html %}

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

## Four Sources for Trade Events

State Department (DL) 

{% include trade-events/trade-events-query-dl.html %}

International Trade Administration (ITA) 

{% include trade-events/trade-events-query-ita.html %}

Small Business Administration (SBA) 

{% include trade-events/trade-events-query-sba.html %}

U.S. Trade and Development Agency (USTDA) 

{% include trade-events/trade-events-query-ustda.html %}

## Return Values

Each event source returns a unique set of fields.  Not every source provides all fields.

| Field              | Description                             | Source             |
| ------------------ | --------------------------------------- | ------------------ |
| id                 | Unique identifier for event.             | DL, ITA, SBA, USTDA					|
| event_name         | Name given for the event.                | DL, ITA, SBA, USTDA 					|
| event_type         | The type of the event ([ITA Values]({{ site.baseurl }}/v1-event-type-list.html)). | ITA, SBA, USTDA  |
| start_date         | Start date of the event.              | ITA, SBA, USTDA              |
| start_time         | The start time of the event.         | SBA, USTDA  |
| end_date           | The date the event will end.        | ITA, SBA, USTDA              |
| end_time         | The end time of the event.         | SBA, USTDA  |
| time_zone         | The time zone of the event's location.        | SBA  |
| cost               | Cost of the event.                       | ITA, SBA, USTDA   |
| cost_currency      | The currency of the cost value.          | USTDA                   |
| registration_link  | URL for the event's registration page.   | ITA, SBA, USTDA           |
| registration_title | Title of the registration URL.           | ITA, USTDA                  |
| description        | Text describing the event. 			   | DL, ITA, SBA, USTDA 					|
| industries         | Industry categories assigned to the event.    | ITA, SBA, USTDA			|
| ita_industries         | The ITA industries associated with the assigned industries.    | ITA, SBA, USTDA      |
| url            | Link to the event's web page.       | DL, ITA, USTDA              |

| venues             | Venues array. Fields in italics.    | ITA, SBA, USTDA						|
| &nbsp;&nbsp;&nbsp;&nbsp; _address_            | Street address of the venue.     		   | ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _city_               | City of the venue.                       | ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _country_            | Country of the venue.                    | ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _state_              | State of the venue.                      | ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _venue_              | Name of the venue.                       | ITA, SBA, USTDA 						| 
| contacts           | Contacts array. Fields in italics.              | ITA, SBA							|
| &nbsp;&nbsp;&nbsp;&nbsp; _email_              | Contact's email address.                 | ITA, SBA			| 
| &nbsp;&nbsp;&nbsp;&nbsp; _first_name_         | Contact's first name.                    | ITA, SBA			|
| &nbsp;&nbsp;&nbsp;&nbsp; _last_name_          | Contact's last name.                     | ITA, SBA			|
| &nbsp;&nbsp;&nbsp;&nbsp; _person_title_       | Contact's company title.                 | ITA, SBA			|
| &nbsp;&nbsp;&nbsp;&nbsp; _phone_              | Contact's phone number.                  | ITA, SBA			|
| &nbsp;&nbsp;&nbsp;&nbsp; _post_               | Contact's location.                      | ITA, SBA		|
| first_name   |   The event contact's first name. |  USTDA  |
| last_name    |   The event contact's last name.  |  USTDA  |
| post         |   The event contact's location.   |  USTDA  |
| person_title |   The event contact's title.  |  USTDA  |
| phone        |  The event contact's phone number.   |  USTDA  |
| email        |  The event contact's email address.    |  USTDA  |
| source        	 | Agency providing the event information. 			   	   | DL, ITA, SBA								|
