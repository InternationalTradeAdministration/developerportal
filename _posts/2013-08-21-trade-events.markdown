---
permalink: "trade-events.html"
layout: template
title: Trade Events API
published: true
---

#Trade Events API
The Trade Events API provides data on events for U.S. businesses interested in selling their products and services overseas.  These events include industry conferences, webinars, lectures and trade missions organized by the U.S. Dept. of Commerce. Developers can use this API to keep businesses aware of the latest events in their industry or location.

The output format for this API is JSON.

##Request Methods

You may do a full text search of the Trade Events API using the following URL template:
###Full Text Search

    http://api.trade.gov/trade_events/search.json?q={term}

Example:

    http://api.trade.gov/trade_events/search.json?q=mission
    
You may query individual fields using the following URL templates:
###event_name

    http://api.trade.gov/trade_events/search.json?event_name={term}

Example:

    http://api.trade.gov/trade_events/search.json?event_name=Nanomaterials
###start_date

    http://api.trade.gov/trade_events/search.json?start_date={term}

Example:

    http://api.trade.gov/trade_events/search.json?start_date=2013-09-18
###end_date

    http://api.trade.gov/trade_events/search.json?end_date={term}

Example:

    http://api.trade.gov/trade_events/search.json?end_date=2013-09-18
###industry

    http://api.trade.gov/trade_events/search.json?industry={term}

Example:

    http://api.trade.gov/trade_events/search.json?industry=Agribusiness
###city

    http://api.trade.gov/trade_events/search.json?city={term}

Example:

    http://api.trade.gov/trade_events/search.json?city=Chicago
###state

    http://api.trade.gov/trade_events/search.json?state={term}

Example:

    http://api.trade.gov/trade_events/search.json?state=NY
###country

    http://api.trade.gov/trade_events/search.json?country={term}

Example:

    http://api.trade.gov/trade_events/search.json?country=Mexico
    
##Field Descriptions
<table border="0">
<tr>
<th>Field</th>
<th>Description</th>
</tr>

<tr>
<td>id</td>
<td>unique ID from the data source</td>
</tr>

<tr>
<td>event_name</td>
<td>name given for the event</td>
</tr>

<tr>
<td>start_date</td>
<td>start date of the event</td>
</tr>

<tr>
<td>end_date</td>
<td>end date of the event</td>
</tr>

<tr>
<td>cost</td>
<td>cost of the event</td>
</tr>

<tr>
<td>registration_link</td>
<td>URL for registration page</td>
</tr>

<tr>
<td>registration_title</td>
<td>title of the registration URL</td>
</tr>

<tr>
<td>description</td>
<td>text describing the event</td>
</tr>

<tr>
<td>industry</td>
<td>industry category assigned to this event</td>
</tr>

<tr>
<td>url</td>
<td>URL, TITLE for the event</td>
</tr>

<tr>
<td>venue</td>
<td>place where event is held</td>
</tr>

<tr>
<td>city</td>
<td>city where event is held</td>
</tr>

<tr>
<td>state</td>
<td>state where event is held</td>
</tr>

<tr>
<td>country</td>
<td>country where event is held</td>
</tr>

<tr>
<td>first_name</td>
<td>first name of the contact</td>
</tr>

<tr>
<td>last_name</td>
<td>last name of the contact</td>
</tr>

<tr>
<td>post</td>
<td>contact's organization</td>
</tr>

<tr>
<td>person_title</td>
<td>contact's job title</td>
</tr>

<tr>
<td>phone</td>
<td>contact's phone number</td>
</tr>

<tr>
<td>email</td>
<td>contact's email address</td>
</tr>

</table>