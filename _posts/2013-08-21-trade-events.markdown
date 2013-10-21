---
permalink: "trade-events.html"
layout: template
title: Trade Events API
published: true
---

#Trade Events API
The Trade Events API provides data on events for U.S. businesses interested in selling their products and services overseas.  These events include industry conferences, webinars, lectures and trade missions organized by the U.S. Dept. of Commerce. Developers can use this API to keep businesses aware of the latest events in their industry or location.

The output format for this API is JSON.

##Resource URL

    http://api.trade.gov/trade_events/search

##Search Parameters

###keyword

Searches for a match within the event_name and description fields.

    http://api.trade.gov/trade_events/search?q={term}

#####Example:

    http://api.trade.gov/trade_events/search?q=computer

###industry

Searches for specific controlled [industry names](/industry-list-trade-events.html)

    http://api.trade.gov/trade_events/search?industry={term}

#####Example:

    http://api.trade.gov/trade_events/search?industry=Agribusiness

###country

Returns office locations based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/trade_events/search?country={term}

#####Example:

    http://api.trade.gov/trade_events/search?country=MX

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

#####Example:

    http://api.trade.gov/trade_events/search?country=BR&size=1&offset=1

    
##Return Values

| Field             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| id                | Unique identifier for post                                      |
| event_name         | name given for the event |
| start_date | start date of the event (default sort) |
| end_date | end date of the event |
| cost| cost of the event |
| registration_link | URL for registration page |
| registration_title | title of the registration URL | 
| description | text describing the event |
| industry | industry category assigned to the event |
| url | URL for the event |
| venue | place where event is held |
| city | city where event is held |
| state | state where event is held |
| country | country where event is held | 
| first_name | first name of the contact |
| last_name | last name of the contact |
| post | contact's organization</td>
|person_title  | contact's job title |
| phone | contact's phone number |
| email | contact's email address |