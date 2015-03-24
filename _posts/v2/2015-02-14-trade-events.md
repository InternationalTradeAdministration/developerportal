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

* State Department's Direct Line = **DL**
* Export-Import Bank = **EXIM**
* International Trade Administration = **ITA**
* Small Business Administration = **SBA**
* U.S. Trade and Development Agency = **USTDA**

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

**_Example_**

[http://api.trade.gov/trade_events/search?country=BR&size=1&offset=1](http://api.trade.gov/trade_events/search?country=BR&size=1&offset=1)


### Examples of the Five Event Sources: 

State Department (DL) [http://api.trade.gov/trade_events/search?sources=DL](http://api.trade.gov/trade_events/search?sources=DL)


Export-Import Bank (EXIM) [http://api.trade.gov/trade_events/search?sources=EXIM](http://api.trade.gov/trade_events/search?sources=EXIM)    


International Trade Administration (ITA) [http://api.trade.gov/trade_events/search?sources=ITA](http://api.trade.gov/trade_events/search?sources=ITA)


Small Business Administration (SBA) [http://api.trade.gov/trade_events/search?sources=SBA](http://api.trade.gov/trade_events/search?sources=SBA)


U.S. Trade and Development Agency (USTDA)  [http://api.trade.gov/trade_events/search?sources=SBA](http://api.trade.gov/trade_events/search?sources=SBA)

Each event source returns a unique set of fields.

| Field              | Description                             | Source             |
| ------------------ | --------------------------------------- | ------------------ |
| id                 | Unique identifier for event             | DL, EXIM, ITA, SBA, USTDA					|
| event_name         | Name given for the event                | DL, EXIM, ITA, SBA, USTDA 					|
| description        | Text describing the event 			   | DL, EXIM, ITA, SBA, USTDA 					|
| registration_link  | URL for the event's registration page   | DL, EXIM, ITA, SBA, USTDA 					|
| start_date         | Start date of the event 			       | EXIM, ITA, SBA, USTDA 					    |
| end_date           | The date the event will end  		   | EXIM, ITA, SBA, USTDA 					    |
| industries         | Industry categories assigned to the event    | EXIM, ITA, SBA, USTDA						|
| venues             | Venues array. Fields in italics.    | EXIM, ITA, SBA, USTDA						|
| &nbsp;&nbsp;&nbsp;&nbsp; _address_            | street address of the venue     		   | EXIM, ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _city_               | city of the venue                       | EXIM, ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _country_            | country of the venue                    | EXIM, ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _state_              | state of the venue                      | EXIM, ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _venue_              | name of the venue                       | EXIM, ITA, SBA, USTDA 						| 
| contacts           | Contacts array. Fields in italics.              | EXIM, ITA, SBA, USTDA 							|
| &nbsp;&nbsp;&nbsp;&nbsp; _email_              | contact's email address                 | EXIM, ITA, SBA, USTDA 						| 
| &nbsp;&nbsp;&nbsp;&nbsp; _first_name_         | contact's first name                    | EXIM, ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _last_name_          | contact's last name                     | EXIM, ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _person_title_       | contact's company title                 | EXIM, ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _phone_              | contact's phone number                  | EXIM, ITA, SBA, USTDA 						|
| &nbsp;&nbsp;&nbsp;&nbsp; _post_               | contact's location                      | EXIM, ITA, SBA, USTDA 						|
| event_type         | The type of the event ([ITA Values]({{ site.baseurl }}/v1/event-type-list.html)) | ITA, SBA, USTDA 					    |
| cost               | Cost of the event                       | ITA, SBA, USTDA							|
| registration_link  | URL for the event's registration page   | ITA, SBA, USTDA							|
| url        		 | Link to the event's web page 		   | DL, EXIM, ITA 								|
| source        	 | State Department (DL) 			   	   | DL, EXIM, ITA								|
| registration_title | Title of the registration URL           | ITA, USTDA									|
| cost_currency      | The currency of the cost value          | USTDA										|




