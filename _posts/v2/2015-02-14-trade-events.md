---
permalink: "/trade-events.html"
layout: body
title: Trade Events API
published: true
---

#Trade Events API


{% include events-tabs %}

This endpoint and its documentation has been updated to Version 2. Please visit the [API v1 Documentation]({{ site.baseurl }}/v1/trade-events.html) page for the Version 1 documentation.

##Resource URL
This endpoint will search across all five trade event sources.  To search a subset, see sources below.

[http://api.trade.gov/trade_events/search](http://api.trade.gov/trade_events/search)

##Search Parameters for trade events sources

###keyword

Searches for a match within the **registration_title**, **description**, **event_name**, **industries**, **city**, **venues.city**, **venues.state**, **venues.country**, **contacts.first_name**, **contacts.last_name**, and **contacts.person_title** fields.

    http://api.trade.gov/trade_events/search?q={term}

**_Example_**

[http://api.trade.gov/trade_events/search?q=computer](http://api.trade.gov/trade_events/search?q=computer)

###industry

Searches for specific controlled [industry names]({{ site.baseurl }}/v1/industry-list-trade-events.html)

    http://api.trade.gov/trade_events/search?industry={term}

**_Example_**

[http://api.trade.gov/trade_events/search?industry=Chemical](http://api.trade.gov/trade_events/search?industry=Chemical)

###countries

Returns office locations based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/trade_events/search?countries={country code}

**_Example_**

[http://api.trade.gov/trade_events/search?countries=MX](http://api.trade.gov/trade_events/search?countries=MX)


###sources

Searches only the events specified by the **Source** Abbreviation.

	 http://api.trade.gov/trade_events/search?sources={event source}

**_Example_**

[http://api.trade.gov/trade_events/search?sources=DL,EXIM](http://api.trade.gov/trade_events/search?sources=DL,EXIM)

Source Abbreviations as follows:

* State Department = **DL**
* Export-Import Bank = **EXIM**
* International Trade Administration = **ITA**
* Small Business Administration = **SBA**
* U.S. Trade and Development Agency = **USTDA**

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

**_Example_**

[http://api.trade.gov/trade_events/search?country=BR&size=1&offset=1](http://api.trade.gov/trade_events/search?country=BR&size=1&offset=1)


### The Five Event Sources

Each event source returns a unique set of fields.

#### State Department (DL)

_Example_

[http://api.trade.gov/trade_events/search?sources=DL](http://api.trade.gov/trade_events/search?sources=DL)

| Field              | Description                             |
| ------------------ | --------------------------------------- |
| id                 | Unique identifier for event              |
| event_name         | Name given for the event                |
| description         | Text describing the event |
| url        | Link to the event's web page  |
| source     | State Department (DL)         |


#### Export-Import Bank (EXIM)

_Example_

[http://api.trade.gov/trade_events/search?sources=EXIM](http://api.trade.gov/trade_events/search?sources=EXIM)

| Field              | Description                             |
| ------------------ | --------------------------------------- |
| id                 | Unique identifier for event              |
| event_name         | Name given for the event                |
| start_date         | Start date of the event                 |
| end_date           | The date the event will end             |
| registration_link  | URL for the event's registration page   |
| description         | Text describing the event |
| url                | Link to the event's web page  |
| venues             | The location where the event is held    |
| industries         | Industry categories assigned to the event |
| source             | State Department (DL)                   |   
| address            | street address of the venue location    | 
| city               | city of the venue                       | 
| country            | country of the venue                    | 
| state              | state of the venue                      | 
| venue              | name of the venue                       |  
| first_name         | contact's first name                    |
| last_name          | contact's last name                     |
| post               | contact's location                      |
| person_title       | contact's company title                 |
| phone              | contact's phone number                  | 
| email              | contact's email address                 |          


#### International Trade Administration (ITA)

_Example_

[http://api.trade.gov/trade_events/search?sources=ITA](http://api.trade.gov/trade_events/search?sources=ITA)

| Field              | Description                             |
| ------------------ | --------------------------------------- |
| id                 | Unique identifier for event              |
| event_name         | Name given for the event                |
| event_type         | [The type of the event (controlled value)]({{ site.baseurl }}/v1/event-type-list.html) |
| start_date         | Start date of the event                 |
| end_date           | The date the event will end             |
| cost               | Cost of the event                       |
| registration_link  | URL for the event's registration page   |
| registration_title | Title of the registration URL           |
| description         | Text describing the event |
| url                | Link to the event's web page  |
| venues             | The location where the event is held    |
| industries         | Industry categories assigned to the event |
| contacts           | Contact info for the event              |
| source             | State Department (DL)                   |    
| address            | street address of the venue location    | 
| city               | city of the venue                       | 
| country            | country of the venue                    | 
| state              | state of the venue                      | 
| venue              | name of the venue                       |  
| first_name         | contact's first name                    |
| last_name          | contact's last name                     |
| post               | contact's location                      |
| person_title       | contact's company title                 |
| phone              | contact's phone number                  | 
| email              | contact's email address                 |  


#### Small Business Administration (SBA)

_Example_

[http://api.trade.gov/trade_events/search?sources=SBA](http://api.trade.gov/trade_events/search?sources=SBA)

| Field              | Description                             |
| ------------------ | --------------------------------------- |
| id                 | Unique identifier for event              |
| event_name         | Name given for the event                |
| event_type         | [The type of the event (controlled value)]({{ site.baseurl }}/v1/event-type-list.html) |
| start_date         | Start date of the event                 |
| start_time         | Start time of the event                 |
| end_date           | The date the event will end             |
| end_time           | The time that the event will end        |
| time_zone          | The time zone of the event              |
| cost               | Cost of the event                       |
| registration_link  | URL for the event's registration page   |
| description         | Text describing the event |
| venues             | The location where the event is held    |
| industries         | Industry categories assigned to the event |
| contacts           | Contact info for the event              |
| source             | State Department (DL)                   |  


#### U.S. Trade and Development Agency (USTDA)

_Example_

[http://api.trade.gov/trade_events/search?sources=SBA](http://api.trade.gov/trade_events/search?sources=SBA)

| Field              | Description                             |
| ------------------ | --------------------------------------- |
| id                 | Unique identifier for event              |
| event_name         | Name given for the event                |
| event_type         | [The type of the event (controlled value)]({{ site.baseurl }}/v1/event-type-list.html) |
| start_date         | Start date of the event                 |
| end_date           | The date the event will end             |
| cost               | Cost of the event                       |
| cost_currency      | The currency of the cost value          |
| registration_link  | URL for the event's registration page   |
| registration_title | Title of the registration URL           |
| description         | Text describing the event |
| venues             | The location where the event is held    |
| industries         | Industry categories assigned to the event |
| contacts           | Contact info for the event              |
| source             | State Department (DL)                   | 


