---
permalink: "/v1-trade-events.html"
layout: body
title: Trade Events API
published: true
---

#####This is an old version of the API and will be deprecated soon. Please upgrade to the [new version of the API]({{ site.baseurl }}/trade-events.html).

#Trade Events API

{% include events-tabs %}

##Resource URL

[http://api.trade.gov/trade_events/search](http://api.trade.gov/trade_events/search)

##Search Parameters for trade events sources

###keyword

Searches for a match within the event_name and description fields.

    http://api.trade.gov/trade_events/search?q={term}

**_Example_**

[http://api.trade.gov/trade_events/search?q=computer](http://api.trade.gov/trade_events/search?q=computer)

###industry

Searches for specific controlled [industry names]({{ site.baseurl }}/v1-industry-list-trade-events.html)

    http://api.trade.gov/trade_events/search?industry={term}

**_Example_**

[http://api.trade.gov/trade_events/search?industry=Chemical](http://api.trade.gov/trade_events/search?industry=Chemical)

###countries

Returns office locations based on ISO [alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm).

    http://api.trade.gov/trade_events/search?countries={country code}

**_Example_**

[http://api.trade.gov/trade_events/search?countries=MX](http://api.trade.gov/trade_events/search?countries=MX)

###size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The **offset** parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

**_Example_**

[http://api.trade.gov/trade_events/search?country=BR&size=1&offset=1](http://api.trade.gov/trade_events/search?country=BR&size=1&offset=1)


###Return Values

| Field              | Description                             |
| ------------------ | --------------------------------------- |
| id                 | Unique identifier for post              |
| event_name         | name given for the event                |
| event_type         | [The type of the event (controlled value)]({{ site.baseurl }}/v1-event-type-list.html)  |
| start_date         | start date of the event (default sort)  |
| end_date           | end date of the event                   |
| cost               | cost of the event                       |
| registration_link  | URL for registration page               |
| registration_title | title of the registration URL           |
| description        | text describing the event               |
| industry           | industry category assigned to the event |
| url                | URL for the event                       |
| venue              | place where event is held               |
| city               | city where event is held                |
| state              | state where event is held               |
| country            | country where event is held             |
| first_name         | first name of the contact               |
| last_name          | last name of the contact                |
| post               | contact's organization                  |
| person_title       | contact's job title                     |
| phone              | contact's phone number                  |
| email              | contact's email address                 |