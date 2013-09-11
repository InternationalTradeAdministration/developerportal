---
permalink: /docs/2013-08-21-trade-events.html
layout: template
title: Trade Events API
---

#Trade Events API
This API provides data on events for U.S. businesses interested in selling their products and services overseas.  These events include industry conferences, webinars, lectures and trade missions organized by the U.S. Dept. of Commerce. Developers can use this API to keep businesses aware of the latest events in their industry or location.

The output format for this API is JSON.

##Request Methods
The Trade Events API may be queried using the following URL template:

    http://api.trade.gov/events?q=<query string>

Example:

    http://api.trade.gov/events/q=london


###Field:  Description
    id:  unique ID from the data source
    event_name:  name given for the event - searchable field
    start_date:  start date of the event YYYY-MM-DD - searchable field
    end_date:  end date of the event YYYY-MM-DD - searchable field
    cost:  cost of the event
    registration_link:  URL for registration page
    registration_title:  title of the registration URL
    description:  text describing the event
    industry:  industry category assigned to this event - searchable field
    url:  URL for the event
    venue:  place where event is held
    city:  city where event is held - searchable field
    state:  state where event is held - searchable field
    country:  country where event is held - searchable field
    first_name:  first name of the contact
    last_name:  last name of the contact
    post:  contact's organization
    person_title:  contact's job title
    phone:  contact's phone number
    email:  contact's email address
    

