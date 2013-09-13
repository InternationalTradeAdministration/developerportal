---
permalink: /docs/trade-events.html
layout: template
title: Trade Events API
---

#Trade Events API
This API provides data on events for U.S. businesses interested in selling their products and services overseas.  These events include industry conferences, webinars, lectures and trade missions organized by the U.S. Dept. of Commerce. Developers can use this API to keep businesses aware of the latest events in their industry or location.

The output format for this API is JSON.

##Request Methods

The Offices & Centers API may be queried using the following URL templates:

    http://api.trade.gov/trade_events/search.json?&state={term}

Example:

    http://api.trade.gov/trade_events/search.json?&state=NY
    
##Field Descriptions
<table border="1">
<tr>
<th>Field</th>
<th>Description</th>
<th>Searchable Field</th>
</tr>

<tr>
<td>id</td>
<td>unique ID from the data source</td>
<td></td>
</tr>

<tr>
<td>event_name</td>
<td>name given for the event</td>
<td>Yes</td>
</tr>

<tr>
<td>start_date</td>
<td>start date of the event</td>
<td>Yes</td>
</tr>

<tr>
<td>end_date</td>
<td>end date of the event</td>
<td>Yes</td>
</tr>

<tr>
<td>cost</td>
<td>cost of the event</td>
<td></td>
</tr>

<tr>
<td>registration_link</td>
<td>URL for registration page</td>
<td></td>
</tr>

<tr>
<td>registration_title</td>
<td>title of the registration URL</td>
<td></td>
</tr>

<tr>
<td>description</td>
<td>text describing the event</td>
<td></td>
</tr>

<tr>
<td>industry</td>
<td>industry category assigned to this event</td>
<td>Yes</td>
</tr>

<tr>
<td>url</td>
<td>URL, TITLE for the event</td>
<td></td>
</tr>

<tr>
<td>venue</td>
<td>place where event is held</td>
<td></td>
</tr>

<tr>
<td>city</td>
<td>city where event is held</td>
<td>Yes</td>
</tr>

<tr>
<td>state</td>
<td>state where event is held</td>
<td>Yes</td>
</tr>

<tr>
<td>country</td>
<td>country where event is held</td>
<td>Yes</td>
</tr>

<tr>
<td>first_name</td>
<td>first name of the contact</td>
<td></td>
</tr>

<tr>
<td>last_name</td>
<td>last name of the contact</td>
<td></td>
</tr>

<tr>
<td>post</td>
<td>contact's organization</td>
<td></td>
</tr>

<tr>
<td>person_title</td>
<td>contact's job title</td>
<td></td>
</tr>

<tr>
<td>phone</td>
<td>contact's phone number</td>
<td></td>
</tr>

<tr>
<td>email</td>
<td>contact's email address</td>
<td></td>
</tr>

</table>
