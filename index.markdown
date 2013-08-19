---
layout: default
title: API Documentation Lite
---

# API Documentation Lite

## Overview
The International Trade Administration (ITA) within the Department of Commerce (DOC) offers access to their public data via an Application Program Interface (API).  ITA provides information that is specifically targeted to businesses that are interested in exporting their products and services overseas.  For example, the API includes Trade Events that businesses may be interested in attending and Market Research Reports that provide insight into the current exporting environment.

Developers who work with trade and exporting information will find this information particularly useful as it originates from authoritative, federal government sources.  The API allows developers to create new and innovative applications for the web or mobile devices by enabling them to mash it with other trade-related data.

Use of the ITA APIs and other data is free of charge, but developers must [register with ITA](#registration_page) to receive a development key and agree to the guidelines outlined in the [Developer License Agreement]({{ site.baseurl }}/developer-license-agreement.html) and [Privacy Policy]({{ site.baseurl }}/privacy-policy.html). 

## Summary of Available APIs
ITA currently provides access to seven data sets:

### Dynamic Endpoints

* [Trade Events](#trade_events)
* [Environmental Toolkit](#environmental_toolkit)

### Static Endpoints

* [ITA Office Locations](#office_locations)
* [ITA Programs for Exporters](#programs)
* [Market Research Library Meta Data](#mrl)

### Dynamic Endpoints

#### <span id="trade_events">Trade Events</span>
The Trade Events data provides information about the time, place, cost, and contact information for ITA Trade Events around the world.  These include conferences, webinars, lectures, and trade missions.  Developers can use this information to augment other event information relevant to exporting.

All ITA Trade Events can be accessed from [api.trade.gov/events/q](http://ec2-23-22-114-119.compute-1.amazonaws.com/trade_events/search.json?q=filters&size=100).

The Trade Events data is updated every day at 3pm EST.	

#### <span id="environmental_toolkit">Environmental Toolkit</span>
The Environmental Toolkit data provides information about various U.S. businesses that furnish services for solving environmental challenges.  The data is organized by environmental issues, EPA regulations, solutions, and solution providers.  Developers can use this information to augment their listings of U.S business that provide solutions to foreign governments.

All Environmental Toolkit data can be accessed from [api.trade.gov/toolkit/q](http://ec2-23-22-114-119.compute-1.amazonaws.com/toolkit/search.json?q=filters&size=50).

### Static Endpoints

#### <span id="office_locations">ITA Office Locations</span>
The ITA Office Locations data provides location and contact information for all of ITA’s foreign and domestic exporter assistance centers.  Developers can use this information to augment their listings of offices that provide business counseling.

International locations can be accessed via [Github](/data/ita_international_posts.json).

Domestic locations can be accessed via [Github](/data/ita_domestic_posts.json).

#### <span id="programs">ITA Programs for Exporters</span>
The ITA Programs for Exporters data provides information about various programs sponsored by ITA that provide support for exporters.  Assistance includes information on connecting to foreign buyers, regulations, marketing and sales, as well as training and mentoring.  Developers can use this data to augment their listings of government programs that provide assistance to businesses.

All ITA Programs for Exporters data can be accessed via [Github](/data/ita_programs.json).

#### <span id="mrl">Market Research Library Meta Data</span>
The Market Research Library Meta Data API provides information about the reports contained with ITA’s Market Research Library.  The data does not include the content itself, only meta data about and links to the Market Research Reports, Best Market Reports, and Country Commercial Guides.  These reports are categorized by country and industry.  Developers can use this information to augment their catalog of market research that may be of interest to exporters.

All data for the Market Research Library Meta Data can be accessed via [Github](http://api.trade.gov/MRL/q).

The API output is available in JSON only.  

