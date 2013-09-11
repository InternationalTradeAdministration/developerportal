---
permalink: /docs/2013-08-21-ita-programs.html
layout: template
title: ITA Programs Directory API
---

#ITA Programs Directory API

The ITA Programs for Exporters data provides information about programs sponsored by ITA that provide assistance and services to exporters, including:

* Matchmaking to foreign buyers
* Trade regulations
* International marketing and sales strategies
* Training and mentoring

The output format for this API is JSON.

##Request Methods

The Programs Directory API may be queried using the following URL template:

    http://api.trade.gov/events?q=<query string>

Example:

    http://api.trade.gov/events/q= … 

##Field:  Description
* programTitle -- title of the Program
* abstract -- executive summary
* exportPhase -- topic of the program
* email	-- email
* contactName -- contact name
* officeName -- office name
* phone -- phone
* description -- description
* website -- website URL
