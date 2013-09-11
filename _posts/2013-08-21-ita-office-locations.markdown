---
permalink: /docs/2013-08-21-ita-office-locations.html
layout: template
title: Offices & Centers API
---

#Offices & Centers API

This API provides contact and address information for all of ITA’s domestic and international export assistance centers. Incorporating these listings into directories of business counseling services is one example of how developers can use this API to assist exporters.

The output format for this API is JSON.

##Request Methods

The Offices & Centers API may be queried using the following URL template:

    http://api.trade.gov/events?q=<query string>

Example:

    http://api.trade.gov/events/q=baltimore


##Field:  Description
* post -- Name of the post
* office_name -- Office name
* country -- Coutntry name
* state -- State abbreviation, for domestic offices
* email -- office email address
* fax	-- FAX number
* phone	office phone number
* post_type -- 	Type of post (domestic or international)
