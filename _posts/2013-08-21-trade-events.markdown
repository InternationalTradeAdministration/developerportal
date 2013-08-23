---
permalink: /docs/2013-08-21-trade-events.html
layout: default2
title: Trade Events
---

#Trade Events
The Trade Events data provides information about the time, place, cost, and contact information for ITA Trade Events around the world.  These include conferences, webinars, lectures, and trade missions.  Developers can use this information to augment other event information relevant to exporting.

##Request Methods
All ITA Trade Events can be accessed from [api.trade.gov/events/q](http://ec2-23-22-114-119.compute-1.amazonaws.com/trade_events/search.json?q=filters&size=100).

##Response Format
The JSON response consists of an object containing the following properties.

###Field -- Description
* id -- unique ID from the data source
* name -- name given for the event
* startDate -- start date of the event YYYY-MM-DD
* endDate -- end date of the event YYYY-MM-DD
* cost -- cost of the event
* registrationLink -- registration for URL
* eventDescription -- text describing the event
* website_link -- URL for the event
* country -- country name (ISOAlpha-2Code)
