---
permalink: endpointme.html
layout: body
title: Endpointme
published: true
---

# INTRODUCTION

This section describes what is in this user guide.

### Who is this user guide written for?

This user guide is written for you, someone who uses the Digital Services Platform.

### What do you need to know to use the Digital Services Platform?

To use the Digital Services Platform, you need to be familiar with:

* Basic web concepts
* Basic spreadsheet concepts

You don’t need to know how to program, although this user guide introduces you to some basic programming concepts and terminology as part of showing you how to use the Digital Services Platform.

### What is in this user guide?

This user guide contains information on how to upload information into the Digital Services Platform. It starts by describing the system in general, then it shows you how to upload information step-by- step. You then see how to check your upload and how to access information. There are also sections that provide detailed technical information on the APIs you may use as part of the upload process as well as data on the proper formatting of your spreadsheet prior to uploading it.

### How is this user guide organized?

This user guide is organized as follows:

* This introduction describes who this user guide is for, what you need to know to use the Digital Services Platform, and the types of technical information in the user guide. It also gives you tips on using the user guide and where you can go to find more information.

* Section 1, **Working with Data Sources, APIs, and Endpoints**, shows you how to create, update, and delete endpoints in the Digital Services Platform.

* Section 2, **Understanding the General APIs**, provides information about the general application program interfaces (APIs) used to extract and report data from uploaded spreadsheets. The section starts with a brief introduction to what APIs are, followed by detailed information on each API. (The detailed information is of use primarily to developers, but it may be interesting to analysts who want to find out a little more about the internal workings of the Digital Services Platform.)

### What typographic conventions are used in this user guide?

Information in this user guide is presented in a standard FAQ question-and- answer format. You can use this user guide online or print some or all of it as you prefer.

Headings appear in colored, bold text.

**Bold text** signifies important concept.

<!-- Markdown does not have syntax for underline yet -->
<p><u>Underlined text</u> highlights something (such as the initials of an acronym).</p>

*Italic text* signifies a new term.

**Note:** indicates there is information of interest related to the topic being discussed.

<p><span style="color:#8a6d3b;font-weight:bold;">Caution: </span>indicates that the action being discussed could be difficult or cause some problems that are nevertheless recoverable.</p>

<p><span style="color:#a94442;font-weight:bold;">Warning: </span>indicates that the action being discussed could result in data loss or other severe consequence.</p> 

Links in the document appear as blue, underlined text. You can click them to go to another location within this user guide or outside to another location entirely.

### Where can you go to find out more about the Digital Services Platform?

For more information on the Digital Services Platform, you can click [location here](link-to-location.html) or phone [number here](phone-number.html).

# Section 1: Working with Data Sources, APIs, and Endpoints

This section tells you how to create, update, and delete APIs in the Digital Services Platform. 

### What are data sources, APIs, and endpoints?

There are three terms that are closely related for dealing with data you upload and access: API, endpoint, and data source.

* A *data source* is the content you upload or access, typically a spreadsheet.
* An *API* refers to machine readable data published with defined parameters and options for communicating with the information. 
* An *endpoint* is a name for a specific API. 

For example, when you upload a spreadsheet of information about tariffs, the information in the spreadsheet is the data source. When it is uploaded into the Digital Services Platform, it is an API (because it’s accessible in a machine-readable format). The endpoint is the specific location, such as [www.trade.gov/tariffs](www.trade.gov/tariffs).

In general, when you upload data sources (the content in spreadsheets) to the Digital Services Platform, they become APIs (data published in a machine-readable format). Each individual API is an endpoint. 

###### What are APIs?

APIs (application programming interfaces) are programmed sets of requirements that describe how one application can talk to another application. APIs give you a defined set of parameters and options that let you do things such as provide input to a system, search for information within the system, and extract information meeting specific criteria from the system. 

More importantly, APIs provide you with limited access to a system’s internal features and functions without requiring you to be familiar with all aspects of the system necessary to program things yourself. APIs are very convenient. They save you a lot of time by providing a prepogrammed set of commonly-used options. 

For additional information about how APIs are used, visit the [APIs in Government](https://www.digitalgov.gov/2013/04/30/apis-in-government/) site.

###### What do the ITA’s APIs do? 
The APIs for the ITA’s Data Services Platform provides direct access to authoritative information on U.S. exporting and international trade. 

This data and information is intended specifically for public use and dissemination. In fact, the ITA publishes information that is targeted specifically to U.S. businesses looking to export their products and services overseas. Trade experts from ITA and from Trade Promotion Coordinating Committee (TPCC) agencies produce the wide spectrum of available data.

In addition to information developed by ITA, the APIs also provide related information from other trade organizations such as the Departments of State and Treasury, the Small Business Administration, and the Trade Development Agency. ITA only aggregates this additional information to add further value to ITA’s APIs, but doesn’t alter it. ITA also includes references to the original publisher of the data so you can always refer back to the original source.

Through this developer portal, ITA gives software developers documentation and instructions for accessing [all of the available APIs](api-list.html).

*“Open data from the Commerce Department and other Federal agencies is a positive step toward better use of government information. Moreover, it leverages the private sector to help disseminate information to the public.”* 

-Greg Sandler, ThinkGlobal

###### Do you need to be a programmer to use APIs?

You can use the ITA’s APIs in two ways: as web addresses (URLs), which don’t require you to be a programmer, or you can use them programmatically.

Most of the time, you access information with URLs. For example, you can search for information with the Consolidated_Screening_List API using the following general format: 

	https://api.govwizely.com/consolidated_screening_list/search

You can add parameters and options that specify where to look, the kind of information to look for, and so on. 

However, you can also write simple programs in the language of your choice that call the API and then accept the results into the program for further processing. In addition, many of the ITA’s APIs have what are known as [widgets](search-widgets.html). Widgets are precoded software subroutines that let you add search fields for APIs on a web page of your own. 

###### How do the ITA’s APIs work?

The International Trade Administration (ITA) provides APIs as JSON endpoints for authoritative information on U.S. exporting and international trade. ITA continually updates the APIs, so check this portal often. The The endpoint has appended to it a version number indicating which version of the API is being invoked. Please [provide feedback](contact.html) to help improve the APIs and to recommend new data sets. 

The HTTP POST request contains post data, which itself will be an XML (Extensible Markup Language) document. This XML document contains some standard sections that are present on every API method call and some other sections that are specific to each API method call. The ITA server processes the API call and returns the results as another XML document. Like the request, the response XML document has some sections that are the same for each API method and some sections that are specific for each API method.

All data retrieval is done in the form of a “search.” You specify some criteria to match some number of elements, and the server responds with a list of metadata entities or data that match those criteria. Data creation and updating is done in the form of a bulk upload of data, also submitted via a POST directive.

ITA’s Data Services platform pulls data from the original sources on a nightly basis. ITA always refers to the system of record to make sure we are acquiring the information from the authoritative source. Much of the data comes from ITA’s internal systems, though some comes from external agencies that provide ITA with proprietary data feeds.
Regardless of the source, the Data Services platform normalizes the tags from each data feeds, then aggregates them with similar data types. For example, the Data Services platform imports trade events from various agencies, such as the Small Business Administration and from the Export-Import Bank. Because these two agencies use slightly different terminology to describe their events, we map the industry topics assigned to their events to our [industry list](industry-list-market-research-library.html), then aggregate the events with ITA’s.

Once the Data Services platform has normalized and aggregated the data, we publish one API for that data type. Within the API we do specify what the source of the data is so you can always find the data from just one agency if you need to.

###### What is a JSON file?

Data source information can be accessed in several ways. The usual way is to use an API call, but you can also make programmatic calls to the JSON file. JSON (short for JavaScript Object Notation) is a standardized way of storing information in structured, text-based format that can easily be read by people looking at the file. The data dictionary provides the information on the JSON file is structured. 

You may not need to access JSON files directly, but this gives you some context.

### How do you create and configure an endpoint?

This section describes how to create an endpoint. You need to first upload information from the data source (usually a spreadsheet), then review the data dictionary and make any changes. 

###### How do you prepare a spreadsheet for uploading?

You typically upload data to the Digital Services Platform in a spreadsheet format. This lets the system parse the information correctly and assign the appropriate data types to data elements so that searching for information in the data source works efficiently.

**Note:** You can also upload data to the Digital Services Platform in XML or JSON formats.

A spreadsheet can contain as many columns of data as you like. Each column must start with a header that is the column name. You use these names to identify search parameters later on, so you can’t have two columns both named “Country” in the same spreadsheet. Column names also can’t contain special characters. 

**Note:** While it’s a good idea to start with column names that are clear, descriptive, and unique in the spreadsheet, you can change the column names after the data is uploaded. 

The subsequent rows contain data. As you’re preparing the spreadsheet, you should also use Excel formatting to specify formats such as dates, numbers, and so on: the Digital Services Platform looks at cell formatting to assign data types as part of the upload process. 

Here is a picture of a sample spreadsheet:

![Sample Spreadsheet Structure](images/pix/sample_spreadhseet_structure.jpg)

**Note:** The Digital Services Platform can recognize XLS, CSV, and XML formats. In addition, the system can recognize data in a JSON format, although Excel does not save to JSON format.

###### How do you log in to the Digital Services Platform?
To log in to the Digital Services Platform, do the following:

1.Go to developer.trade.gov.  The main Digital Services Platform screen appears.

**Note:** If you are not already an admin on the Digital Services Platform, you need to be granted admin permission. Email [erik.arnold@trade.gov](mailto:erik.arnold@trade.gov) to request admin permission. 

![Main Screen](images/pix/main_screen.jpg)

2.Enter your email and password in the fields and click Log In. When you have logged in, you see the main screen with the list of dynamic APIs as shown below. 

[insert screen shot of logged-in opening screen (not provided in handoff)]

###### How do you create a new endpoint?

After you have done any necessary preparation for the data source, you’re ready to upload it and create a new endpoint. 
To create a new endpoint, do the following: 

1.After you’re logged in to the Digital Services Platform, the New data source screen appears.

![Upload New Data](images/pix/upload new data sources.jpg)

2.Fill in the fields on the New data source screen as follows: 

**Name:** Enter a name for the new endpoint. This name shows up in the list of uploaded data. Be descriptive so people who want to find this information can do so easily. 

**Description:** Enter a description of the this endpoint. The description appears in the information display for the endpoint. (The description is mostly for internal use but it’s convenient to note any changes or differences in this endpoint versus other endpoints or previous versions of the same endpoint.) 

**API:** Enter a unique name for the API. This name differs from the name field earlier because it is used to access the data source programmatically. Use all lowercase letters in the name and use underscores to connect words (no spaces). For example, if you entered “sales_by_country_july2017” in this field, the Digital Services Platform would use this name to refer to the data source when you are accessing it, like this: https://api.trade.gov/sales_by_country_july2017. 

**Version Number:** This display-only field shows the version number. The version number gives you a way to track changes in the data source. The default entry is 1.

**URL Path:** Enter a URL that links to the endpoint. If you leave this blank, the Digital Services Platform makes an entry for you with the link to the endpoint. (You will probably leave this field blank and let the system take care of this for you in most cases.)

3.Click the Choose File button to choose a file to upload.

4.Click Create. The Digital Services Platform uploads the file and evaluates the data in the spreadsheet as well as the information you entered in the information fields. If there is an error of any kind, the Digital Services Platform displays an error message so you can correct the error. When the data and data source information is clean, the Digital Services Platform creates a new endpoint from the information, then displays a results screen similar to the one shown here: 

(the snit_result2.png image is very poor quality, and needs to be recreated)

<!-- This image is very poor quality, needs to be recreated ![Result2](images/pix/snit_result2.png)-->

5.The data is now uploaded. You’re ready to complete the upload process, after which you can save the new API to the Digital Services Platform. 

###### How do complete the upload process?

After you successfully upload a spreadsheet to the Digital Services Platform, the Digital Services Platform displays the Editing data source screen. This lets you check the file information and the data dictionary prior to publishing the data source as an API for general access. The first part of the Editing data source screen is shown below.

**Note:** The Editing data source screen has two parts: the first part lets you edit basic information about the data source and the second part is focused on the data dictionary.

![Editing Screen Part 1](images/pix/editing_screen_part1.jpg)

1.Review the information in the fields. Make any necessary changes to the field information as follows:

**Name:** Enter a name for the data source. This name shows up in the list of uploaded data. Be descriptive so people who want to find this information can do so easily. 
Description: Enter a description of the data source. The description appears in the information display for the data source.

**API:** Enter a unique name for the API for this data source. This name differs from the name field earlier because it is used to access the data source programmatically. Use all lowercase letters in the name and use underscores to connect words (no spaces). For example, if you entered “sales_by_country_july2017” in this field, the Digital Services Platform would use this name to refer to the data source when you are accessing it.

**Version Number:** This display-only field shows the version number. The version number gives you a way to track changes in the data source. The default entry is 1.

**Published:** Check the box to publish the data source. Publishing the data source makes the information publicly available to everyone who accesses the Digital Services Platform. Uncheck the box to make the data source private: only you and the administrator can see the data source.

**URL Path:** If this field was originally left blank, the Digital Services Platform provides an entry for you with the link to the data source. 

**Choose file:** You can upload a different spreadsheet if necessary. You do this most frequently if you have a spreadsheet with updated information and you want to update the information in the data source. Click this button and select the spreadsheet to upload. 

**Note:** if the spreadsheet has new columns, you’ll need to manually update the data dictionary or else the Digital Services Platform won’t recognize that the data is there.

2.When you’re satisfied with your changes to the information in the first part of the screen, you can configure the data dictionary.

3.When you are satisfied with your entries in the fields and the data dictionary, click Update. The Digital Services Platform makes your changes and displays the updated API information screen with a message saying “Data source was successfully updated and data uploaded.”

4.Click OK. 

###### How do you configure the data dictionary?

As part of the process for completing the upload from the data source, you need to configure the data dictionary. The data dictionary tells the Digital Services Platform how to read and access the information in the data source. 

The first time you upload information from a spreadsheet, the Digital Services Platform looks at the column headings and the cell formatting and makes a guess about what the data is and how to interpret it. It then uses these guesses to create the data dictionary, which describes how the data will be used and accessed from then on. Although the Digital Services Platform is good at analyzing the spreadsheet’s information, there is still room for error, so you need to verify that the settings are correct for each column. 

The data dictionary appears in the second part of the Editing data source screen. A sample appears below. 

**Note:** The data dictionary is written in YAML, a markup language that provides a standard English-language syntax for describing how information is to be exchanged.

		country:
		  source: Country
		  description: Description of Country
		  indexed: true
		  plural: false
		  type: enum
		iso2_code:
		  source: ISO-2 code
		  description: Description of ISO-2 code
		  indexed: true
		  plural: false
		  type: enum
		de_minimis_value:
		  source: de minimis value
		  description: Description of de minimis value
		  indexed: true
		  plural: false
		  type: integer
		de_minimis_currency:
		  source: de minimis currency
		  description: Description of de minimis currency
		  indexed: true
		  plural: false
		  type: enum
		vat_amount:
		  source: VAT amount
		  description: Description of VAT amount
		  indexed: true
		  plural: false
		  type: float
		vat_currency:
		  source: VAT currency
		  description: Description of VAT currency
		  indexed: true
		  plural: false
		  type: enum
		notes:
		  source: Notes
		  description: Description of Notes
		  indexed: true
		  plural: false
		  type: string

As you can see, each column of data in the spreadsheet has a separate block of information in the data dictionary, such as this:

		vat_amount:
		  source: VAT amount
		  description: Description of VAT amount
		  indexed: true
		  plural: false
		  type: float

The blocks have a standard format, as follows: 

* The name of the column is created from the column heading in the spreadsheet. 

* *source* is the actual name of the column heading in the spreadsheet. Don’t modify this field. If you want to change the name of the field used for the API call, change the top level entry for that item. Remember to underscore the top level name (such as vat_amount) and keep it a singular noun.

* *description* is initially set to a default entry that simply has the form “Description of” followed by the source. This field is optional and is just for your own records. You can delete the description line if you don't want to see it.

* *indexed* can be set to either true or false. If it is set to true, you can do a keyword search using this column. If it is set to false, the field is returned in the API results but you can’t search or filter on this field. (Searching for information is discussed in the section on searching for information in a data source. [John: add link here] 

* *plural* can be set to either true or false. If plural is set to false, you can only search for a single entry. If it is set to true, you can filter the information in the field using multiple values that are separated by commas. (For example, if you have a countries column but you just want to find all entries for any of the Pacific coast states, you could search for CA, OR, WA.) Do not pluralize the name of the field. (Searching for information is discussed in the section on searching for information in a data source.

* *type* is the type of data contained in the column. The types of data are: 

	| ------| -------------|
	| integer: | the data is a long integer (such as 0, 1, 2, and so on) |
	| enum: | the data is enumerated, with controlled vocabulary, and is used for case-insensitive exact-match filters. Enumerated data has a selected set of options rather than any random text string. (Having a drop-down list of options for a column tells the Digital Services Platform what the options are and what’s acceptable.) |
	| string: | the data is freeform text. Unlike the enum type, this column can contain any text entry. |
	| date: | the data is an ISO 8601 date (with optional time), and is used for date-range filters |
	| float: | the data is a floating point number rather than an integer (such as currency) |

The settings for each of the columns defines how you can use the column data for filtering or searching. If indexed is set to true, then setting type as string enables a full text search on this field, whereas a type of enum treats every entry in the field as a token. In other words, if you want to do a full search on a field, set indexed to true and type as string. If you want to filter on a field, set indexed to true and type as enum. 

<!-- Markdown does not have syntax for underline yet -->
<p>In addition to identifying how you can filter and search for information, the data dictionary also controls the order in which information is retrieved. The order in which the columns appear in the data dictionary is the order the information appears when you access it, <u>regardless of the order in which they appear in the spreadsheet you uploaded</u>. For example, suppose your spreadsheet has columns of information in this order:</p>

* Country
* Date
* Export
* Gross weight
* Net weight
* Weight unit
* Average export/week
* Total cost
* Average cost/unit

When you upload the information the first time, the fields appear in the data dictionary in the order they appear in the spreadsheet. However, you can edit the order of the fields in the data dictionary so that they appear in a different order, so when you access the information in the data source, the columns are retrieved in the order shown here:

* Date
* Country
* Export
* Total cost
* Average cost/unit
* Weight unit
* Average export/week
* Gross weight
* Net weight

In addition, if you remove field descriptions from the data dictionary, the fields are not accessible even though the information appears in the spreadsheet you uploaded. 

<p><span style="color:#8a6d3b;font-weight:bold;">Caution: </span>When you update the data source, the Digital Services Platform doesn’t change the data dictionary. This means that you have manually add or delete the information for any columns you add or delete.</p>

<p><u>How can you change the date format?</u></p>

You can change the date format on the fly so that the dates are accessible in a standard or preferred format. For example, suppose your date format looks like this: 6-7-2017. This is ambiguous; you cannot tell which number is the month and which is the day.

For example, suppose your data source has columns like this:

		import	date
		Wheat	6/7/2017
		Coal	5/8/2017
		Iron ore	5/23/2017

To change a date format in the data dictionary, do the following:

1.In the data source, format the date column as text rather than date. (This allows the Digital Services Platform to parse the information in the date.) 

2.After importing the data source, make the following changes to the data dictionary for this column: 

		date:   
		source: date   
		description: Description of the date field   
		indexed: true   
		plural: false   
		type: date   
		transformations:   
		- reformat_date: "%m/%d/%Y"

The reformat_date command tells the data dictionary to parse the date field. 

**Note:** If you are a developer, you can get detailed information on the reformat_date transformation uses the same parameters and options as the Ruby strftime command. You can get information about this at [http://ruby-doc.org/core-2.2.0/Time.html#method-i-strftime](http://ruby-doc.org/core-2.2.0/Time.html#method-i-strftime).

3.Check Published and then click Update to update the data dictionary. The date now shows up formatted as you’ve specified.

<p><u>How do you eliminate duplicate rows?</u></p>

Your data source may have entire rows of duplicated information or rows that have information that’s used as a unique identifier that’s been duplicated. 

For example, suppose your data source has columns like this:

		type	id	country_name 
		wheat	1	United Kingdom 
		wheat	2	United States 
		wheat	2	United Kingdom

In this example, the first and third columns, have duplicate entries. If you are using the last two columns as the uniqueness constraint, you need to set this up so that the Digital Services Platform filters out the duplicates.

To eliminate duplicate rows, do the following:

1.After uploading the data source, edit the data dictionary for these two columns as shown here:

		id:   
			source: id   
			description: Description of the id column   
			indexed: true   
			plural: false   
			type: enum   
			use_for_id: true 
		country_name:   
			source: country_name   
			description: Description of the country_name field   
			indexed: true   
			plural: false   
			type: string   
			use_for_id: true

The optional use_for_id option tells the Digital Services Platform to use any column so flagged for uniqueness. In this example, two columns are flagged, so both columns must be unique. 

2.Check Published and then click Update to update the data dictionary. When you display the information in the API, the Digital Services Platform removes the duplicated information and only shows the last entry for any duplicated rows. 

# How do you search an endpoint?

The usual way to search for information is to use the sample APIs in the API screen.

###### How do you look at the first page of data?

Looking at the first page of data in an endpoint gives you a quick check to see if the endpoint has the data you’re looking for. It also shows you the types of information in the columns so you can make informed choices about what to search for.

To look at the first page of data in an endpoint, do the following:

1.Click the API you want to search in the Dynamic APIs list. The API information screen appears. A sample appears below

![Edit](images/pix/starting_an_edit.jpg)

2.Click the “API call showing the first page of available data” link. The Digital Services Platform displays the first page of data in the endpoint, a sample of which is shown below.

			{"total":73,"offset":0,"sources_used":[{"source":"John-demo","source_last_updated":"2016-12-15T14:46:25+00:00","last_imported":"2016-12-15T14:46:25+00:00"}],"search_performed_at":"2017-01-23T17:01:02+00:00","results": [{"id":"ef5bdb1e6b32d5bff2c4a692da2714387317ab48","country":"Andorra","iso2_code":"AD","de_minimis_value":12,"de_minimis_currency":"EUR","vat_amount":null,"vat_currency":null,"notes":null}, {“id”:"cf2b430917c0153f31ebed2dba6b016b5bf685ae","country":"Armenia","iso2_code":"AM","de_minimis_value":150000,"de_minimis_currency":"AMD","vat_amount":null,"vat_currency":null,"notes":null},{"id":"20afca7ca259ee2e250326352e531d46676bb695","country":"Australia","iso2_code":"AU","de_minimis_value":1000,"de_minimis_currency":"AUD","vat_amount":null,"vat_currency":null,"notes":null}, {“id”:"4b161b4b482486fa379592baa126b93cdc0c3a0f","country":"Austria","iso2_code":"AT","de_minimis_value":150,"de_minimis_currency":"EUR","vat_amount":22.0,"vat_currency":"EUR","notes":null}, {“id”:"0edfa827f7a728cd9732d52b5c351a360f597cbe","country":"Azerbaijan","iso2_code
			:"AZ","de_minimis_value":200,"de_minimis_currency":"USD","vat_amount":null,"vat_currency":null,"notes":"Non-commercial shipments not exceeding 1000 USD and 50kg; Postal shipments not exceeding 200 USD and 20kg"}, {“id”:"052a7c03e8bdcef8044ae69bddd2e31feb2665cd","country":"Belarus","iso2_code":"BY","de_minimis_value":10,"de_minimis_currency":"EUR","vat_amount":null,"vat_currency":null,"notes":null}


The first line of the results shows information about the API you’re searching and the search itself. 

* The total is the number of rows of data found.
* The offset is 
* The sources used shows the source of the returned information, when that source was last updated, and when it was last imported (usually the same date and time).
* The search performed at is the date and time this search was performed.
* The results simply identifies that the returned information follows this indicator. 

The remaining lines show the actual information in the endpoint. In this example, the information shown includes a unique id that is used by the Digital Services Platform to identify the specific row in the endpoint, followed by the column names and the data entries in the columns. Seeing the type of data in each column tells you what kinds of data to search or filter for and also shows you at a glance if this endpoint can give you the data you’re interested in.

###### How do you search for information using an API call?

You can search for information with an API call: basically a URL that points to the endpoint and has parameters and options for which data to search for, filter on, and return. 

To search for data using an API call, do the following:

1.Click the API you want to search in the Dynamic APIs list. The API information screen appears. A sample appears below.

![Edit](images/pix/starting_an_edit.jpg)

2.Right-click the “Sample API call” link and select “Copy link address” from the floating menu. 

3.Paste the link into a text editor or word processor so you can edit the parameters. A sample appears below. 

		https://api.govwizely.com/v1/john_demo/search.json?api_key=Hqf1aEa6WW7rCkEsHT-eXnb6&country=VALUE&iso2_code=VALUE&de_minimis_currency=VALUE&vat_currency=VALUE&q=TEXT

The sample API call provides the structure of the information in the endpoint and the expected format, but there are no values (except for your own personal API key). In this example, you would replace VALUE and TEXT with whatever items you want to filter for. Also, while the sample provides all the fields and the type of information to use, you don’t have to use all of them: for example, you could delete all the parameters save for “country” and filter for anything associated with a specific country. Filtering for the entries coded for France using a two-letter country code would look like this:

		https://api.govwizely.com/v1/john_demo/search.json?api_key=Hqf1aEa6WW7rCkEsHT-eXnb6&country=FR

You can also filter on multiple countries. Filtering for the entries coded for France and Germany using a two-letter country code would look like this:

		https://api.govwizely.com/v1/john_demo/search.json?api_key=Hqf1aEa6WW7rCkEsHT-eXnb6&country=FR, DE

**Note:** To filter on a given column, the column must be set as filterable in the data dictionary. (The index value must be set to true.) 

You can also search in the endpoint for any text in any column. Searching for “All Wheat” in the endpoint would look like this: 

		https://api.govwizely.com/v1/john_demo/search.json?api_key=Hqf1aEa6WW7rCkEsHT-eXnb6&q=All+Wheat

You can combine filtering and searching. For example, to filter for France and Germany and then search within those entries for “All Wheat” would look like this:

		https://api.govwizely.com/v1/john_demo/search.json?api_key=Hqf1aEa6WW7rCkEsHT-eXnb6&country=FR, DE&q=All+Wheat

4.When you have made changes to the API call, you can copy it and paste it into your browser. The information is returned in the browser. The columns are returned in the order specified by the data dictionary. [John: add link]

###### What do you need to know about controlled vocabularies?

A controlled vocabulary defines the words, phrases, and abbreviations used in a data source. This makes it easier to search for information in the endpoint. You can control a vocabulary in two ways: you can limit the number of acceptable terms in your data source by creating a list of vocabulary terms and the way in which they can be entered. If you have a potentially large number of words and phrases, you can also create a simple style guide that sets rules for how to enter information, such as the following samples: 

* “All country names shall be spelled out”
* “All state names shall be in standard two-character state codes”
* “Personal names shall be entered with the last name, first name, middle initial with no period, and initial caps on names and initials, with elements separated by a single comma and a space.” 
* “Ampersands shall only appear in trademarked company names. All other ampersands shall be changed to “ and “ in the phrase. 

If you are searching for a character string, the Digital Services Platform finds that specific literal character string and no other. Here are some common search errors:

* Searching for “resume” does not find “resumé” in the endpoint. (The last character is different.) 
* Searching for “healthcare” does not find “health care” in the endpoint. (There is an embedded space.) 
* Searching for “oreilly” does not find “O'reilly” in the endpoint. (There is an apostrophe.)
* Searching for “d.c.” does not find “DC” in the endpoint. (There are periods.)
* Searching for “ham and eggs” does not find “ham & eggs” in the endpoint. (There is an ampersand.)

When you are searching for terms that may appear in several ways in the endpoint, you need to include alternative terms in your search. 

###### How can you use the data?

ITA merely provides the data, but it does not prescribe how you should use it. In fact, ITA hopes you and your developers will create new and innovative ways to integrate ITA’s data with other data and make it more useful for U.S. businesses.

The Developer Portal includes [comprehensive documentation](api-list.html) for each API to help developers get started with the APIs and to learn how to use them. We also provide basic search engines, and the code behind them, so you can easily see what information is provided in the search results. Your developers can use the code as building blocks for creating much more advanced search tools.

You have a wealth of opportunities to turn ITA’s trade information into useful and valuable applications for exporters. Immediate ideas for using the trade information include:

* **Country Pages:** Add ITA’s Trade Event, Trade Leads, Market Research, Consolidated Screening List data, and Trade News & Articles to pages for specific countries.

* **Industry Pages:** Create a widget that aggregates event information from other trade organizations with ITA’s Trade Events for businesses in particular industries. Add a search tool for finding Tariff information for a particular industry.

* **State Resources:** Include ITA’s Offices & Centers in a list of resources for businesses in a particular State.

[Let us know](contact.html) what you are using the data for or what other data you need from ITA.

### What are widgets?

Widgets are precoded software subroutines that let you add search fields for APIs on a web page of your own. ITA has created these widgets to make it as easy as possible to put a search engine for several of our APIs on your web page. Simply follow the instructions below to embed the code, and to change the look and feel to match your site.

There are five widgets. Each widget provides a quick and easy interface the general API of the same name:

* [Consolidated Screening List](consolidated-screening-list.html)
* [Export Assistance Centers](ita-zip-codes.html)
* [International Office Locations](ita-office-locations.html)
* [Trade Events](trade-events.html)
* [Trade Leads](trade-leads.html)

These search widgets deliver results straight from our APIs so your customers get the same results as anyone using the APIs directly. Please [contact us](contact.html) if you have any questions on how to install and use the widgets.

###### How do you add a widget to your web page?

Because widgets are precoded software subroutines, you can drop them into a web page easily. Here’s how you add a widget to your web page:

1. Download the [JavaScript](http://govwizely.github.io/developerportal/widget.js) and [CSS](http://govwizely.github.io/developerportal/widget.js) source files and host them on your site. 

2. Load jQuery with the following command:

		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> 

3. Add the following to your page’s ``<head>`` after jQuery’s ``<script>`` tag: 

		<link rel="stylesheet" type="text/css" href="widget.css"> <script type="text/javascript" src="widget.js"></script> <script> $(document).ready(function ($) { $("#example-widget-container").searchWidget({ apiKey: "Your API key", // get it from http://api.trade.gov/ endpoint: "consolidated_screening_list" // Possible endpoints: "consolidated_screening_list"|"trade_leads" }); }); </script> 

4. Set the endpoint to ``"consolidated_screening_list"`` for the Consolidated Screening List widget, ``"trade_leads"`` for the Trade Leads Widget, or ``"trade_events"`` for the Trade Events widget. 

5. Add ``<div id="example-widget-container"></div>`` to your web page’s HTML code wherever you wish the widget to appear. 

###### Consolidated Screening List Widget

The [Consolidated Screening List](consolidated-screening-list.html) widget searches eleven export screening lists from the Departments of Commerce, State and the Treasury. The widget enables your customers to do a quick screening search for people or companies with whom they are doing business or are party to their overseas transactions.

The widget returns results that are either exact matches and near matches in case your customers don’t have the exact spelling of the name. The closer the match, the higher the name in the results.

![Widget](images/pix/Consolidated_Screen_List_widget.jpg)

###### Export Assistance Centers Widget

The [Export Assistance Centers](http://developer.trade.gov/ita-zip-codes.html) widget provides direct access to the U.S. Export Assistance Centers (USEACs) that have been assigned to all of the 40,000+ zip codes in the United States.

The widget enables your customers to do a quick search for search for both a zip code and a USEAC. Each center has specialists on hand for each particular region.

![Widget](images/pix/Export_Assistance_Centers_widget.jpg)

###### International Office Locations Widget

The [International Office Locations](http://developer.trade.gov/ita-office-locations.html) provides direct access to ITA offices and centers around the world. The widget enables your customers to do a quick search for an office in a particular city or country. Each office has specialists on hand for each particular region.

![Widget](images/pix/Intl_Office_Locations_widget.jpg)

###### Trade Leads Widget

The [Trade Leads](trade-leads.html) widget searches contract opportunities for U.S. businesses selling their products and services overseas. These leads come from a variety of sources including FedBizOps, The United Kingdom, Canada, The Millennium Challenge Corporation, and Australia.

The widget enables your customers to do a quick search for trade leads, procurement opportunities, and contract notifications in a particular country or within all countries. They can also search for all of the leads in a country by leaving the search box blank.

![Widget](images/pix/Trade_Leads_widget.jpg)

###### Trade Events Widget

The [Trade Events](trade-events.html) widget searches for events organized by ITA, the U.S. Trade and Development Agency, the State Department, and the Small Business Administration.

The widget enables your customers to do a quick search for trade events such as industry conferences, webinars, lectures, and trade missions in a particular country or within all countries. They can also search for all of the events in a country by leaving the search box blank.

![Widget](images/pix/Trade_Events_widget.jpg)

### How do you edit an endpoint?

You can edit the information about an existing endpoint to rename it, provide easier access, and to update the data dictionary. 

To edit a data source, do the following:

1. In the Dynamic APIs list, click the name of the API you want to edit. The Digital Services Platform displays an information screen about the API, a sample of which appears below.

![Edit](images/pix/starting_an_edit.jpg)

1. Click Edit at the bottom of the screen. The Editing data source screen appears.

After you have displayed the Editing data source screen, the procedure for editing the data is identical to that for completing the upload [John: add link] and configuring an endpoint.

### How do you delete a data source?

You can delete a data source from the system. 

To delete a data source, do the following: 

1.In the Dynamic APIs list, click the name of the API you want to edit. The Digital Services Platform displays an information screen about the API, a sample of which appears below.

![Edit](images/pix/starting_an_edit.jpg)

2.Click Delete at the bottom of the screen.  The Digital Services Platform asks you to confirm that you want to delete the data source. 

![Dialog Box](images/pix/delete_dialog_box.jpg)

3. Click OK to delete the data source.  The Digital Services Platform removes the data source completely. The name is also removed from the Dynamic APIs list.

**Warning:** Deleting a data source is permanent. All the information is removed from the system. If you’re not sure if you want to delete a data source completely, you may just want to unpublish it so that it’s not generally accessible. For more information on how to unpublish, see the FAQ on how to edit a data source.

# Section 2: Understanding the General APIs

This section describes technical information and details related to the Digital Services Platform general APIs.

###### What kinds of APIs are there?

There are two types of APIs in the Digital Services Platform: general APIs and dynamic APIs. General APIs are APIs that perform general functions, such as listing trade events and providing tariff rates. There are a dozen general APIs. Dynamic APIs are the endpoints created by uploading data sources. These are APIs with information on a specific topic, such as taxes by country, exports by state, and sales data for Q2 2017. You can create these APIs yourself or using APIs that other people have published. Information on creating and using APIs appears in Section 1: Working with Data Sources, APIs, and Endpoints. 

###### What are the general APIs?

The table below is the list of all available APIs that ITA provides. Documentation for each endpoint is published as HTML pages and as JSON endpoints through [Swagger](swagger.io).

ITA has also developed simple search apps designed to help our data customers easily explore the data that’s available at each endpoint. Developers can also use the code for these demo apps as building-blocks for their own search applications. The code uses the Ember JavaScript framework and can be found on [ITA’s GitHub repo](https://github.com/InternationalTradeAdministration/explorer).

| API	                          | Description  |
| ------                          | -------------|  
| Business Services Providers API                              | A directory of U.S. and foreign-based businesses providing services that many small and medium sized exporters require to succeed in foreign markets.|
| Consolidated Screening List API                         | Consolidates eleven export screening lists of the Departments of Commerce, State and the Treasury into a single data feed as an aid to industry in conducting electronic screens of potential parties to regulated transactions. |
| De Minimis API                    | Provides data about the De Minimis amount and the Value Added Tax (VAT) amount that products may be subject to when exported to foreign countries. |
| FAQs on Exporting API                | Includes more than 200 commonly asked questions about exporting. |
| ITA Offices & Centers API                    | Provides contact and address information for all of ITA’s domestic and international export assistance centers. | 
| ITA Taxonomies API              | Gives developers direct access to the exporting, trade, and investment terms that ITA uses to tag the content and data in its other APIs. |
| Market Intelligence API              | [ERIK: STILL NEED DATA ON THIS. WHAT DOES IT DO, PLEASE?] |
| Market Research Library API                          | Provides metadata for country and industry reports that are produced by ITA’s trade experts and are available in ITA’s online market research library. |
| Tariff Rates API                             | Provides data about each country with whom the United States has a Free Trade Agreement (FTA). |
| Trade Events API 	      | Provides data on events for U.S. businesses interested in selling their products and services overseas. |
| Trade Leads API                         | Provides contract opportunities for U.S. businesses selling their products and services overseas. |
| Zip Code to USEAC API                           | Provides direct access to the U.S. Export Assistance Centers (USEACs) that have been assigned to all of the 40,000+ zip codes in the United States. It’s not enough to do a proximity search for a zip code and a USEAC. |


###### What do you do if you need more trade data or help?

ITA definitely wants to hear from you when you are looking for particular trade data that is not available through our Data Services platform. Your request helps give ITA the justification needed to spend time and money opening closed data sets. Please [contact us](contact-us.html) with your request. ITA prioritizes new data sets by the number of requests we get from information users like you.

In addition, if you have trouble with any of the data sets, because the documentation is unclear or because the API itself is not working, please [contact us](contact-us.html) immediately so we can fix this. Your satisfaction with ITA’s Data Services platform is extremely important to ITA.

###### Why does ITA provide these APIs?

A core tenet of ITA’s mission is to educate and inform small and medium-sized businesses about the intricacies of exporting. To support the mission, ITA is committed to making access to ITA’s breadth of knowledge and resources quick and easy.

The Data Services platform is a key component to enabling access to those resources. Data easily flows from ITA and other TPCC agencies, into the Data Services platform, out of the platform as APIs, onto Web sites and mobile apps, and into the hands of U.S. exporters.

The result is a triple win:

* ITA widely shares its exporting knowledge more broadly

* Trade organizations use this valuable knowledge to help their customers (potential exporters)

* More exporters see the information on both ITA Web sites and on other Web sites about exporting.

There are two complementary benefits to opening ITA’s data for public use. First, trade organizations that use ITA’s content reach customers that ITA might never reach. They make the final connection between ITA's exporting resources and an aspiring exporter. Second, ITA learns what exporting information is important to businesses because ITA now has exponentially more feedback channels.

By including ITA’s data in your online service offerings, you help make the final connection between trade export and aspiring exporter.

###### How does ITA comply with open data policies?

The APIs conform to the Open Data policies of President Obama and Secretary Pritzker that advance Government information as an asset. The President’s policy, with support of the Secretary, directs agencies to “Collect or create information in a way that supports downstream information processing and dissemination activities” and has four requirements:

* Use machine-readable and open formats
* Use data standards
* Ensure information stewardship through the use of open licenses
* Use common core and extensible metadata (ways of describing the data in the API) 
* ITA goes beyond these requirements because:
* ITA uses machine-readable and open formats and we also provide additional guidance on how to best use the information.
* ITA follows data standards that promote interoperability and actively open up datasets that are common across many trade organizations.
* ITA places no restrictions on copying, publishing, distributing, transmitting, adapting, or otherwise using the information and encourage developers to do so.
* ITA uses common core metadata to describe our information and also provide crosswalks between our taxonomies and other known taxonomies (words used to describe the content in our APIs).

In addition to publishing a growing number of datasets, ITA is using the datasets to populate its own Web sites. ITA will be publishing new datasets on an ongoing basis to help developers help exporters, and to expand the breadth of information available.

## Business Service Providers API

The Business Service Providers (BSP) API is a directory of U.S. and foreign-based businesses providing services that many small and medium sized exporters require to succeed in foreign markets. Businesses can sign up to be a Service Provider on [export.gov](https://emenuapps.ita.doc.gov/ePublic/bsp-reg).

The output format for this API is JSON. This data set is updated hourly. Test the API using the [demo search app](http://internationaltradeadministration.github.io/explorer/#/business-service-providers). Be sure to [sign up for an API key](https://api.trade.gov/) to get access to the API.

###### Endorsement notice

The BSP directory is intended to provide an additional resource to U.S. exporters. The BSP directory is not comprehensive. Inclusion does not constitute an endorsement or recommendation by the International Trade Administration (ITA). ITA has performed limited due diligence research but strongly recommends that you perform your own due diligence investigation and background research on any company. ITA assumes no responsibility for the professional ability or integrity of the providers listed. ITA reserves the right not to list any particular company.

###### Ideas for using the data

Business Service Providers are particularly helpful for U.S. companies that are just getting started exporting or that are looking to expand into a new market. Integrate the BSP directory into an “Export Resources” page that lets users search the BSP by geographic market or industry.

###### Resource URL

**Note:** Be sure to include the version number (v#) in the URL as specified below.

		https://api.govwizely.com/business_service_providers/search

###### Search parameters

You can use the following search parameters to get more detail when searching.

__keyword__

Returns business service providers for a match in the **company_name**, **company_description**, or **contact_name** fields.

		https://api.govwizely.com/v1/business_service_providers/search?api_key={your key}&q={keyword} 

Example:

		https://api.govwizely.com/business_service_providers/search?q=modernization

__ita_offices__

Returns business service providers based on country. Enter multiple terms by separating with a comma.

		https://api.govwizely.com/v1/business_service_providers/search?api_key={your key}&ita_offices={countries}

Example:

		https://api.govwizely.com/business_service_providers/search?ita_offices=Mexico

__categories__

Returns business service providers for a specific [category](http://developer.trade.gov/business-service-providers-categories.html). Enter multiple terms by separating with a comma.

		https://api.govwizely.com/v1/business_service_providers/search?api_key={your key}&categories={categories} 

Example:

		https://api.govwizely.com/business_service_providers/search?categories=Business%20Consulting

size + offset

The **size** parameter allows you to configure the number of results to be returned up to a maximum of 100. The offset parameter defines the offset from the first result you want to fetch. Unless specified the API returns 10 results at a time.

	https://api.govwizely.com/v1/business_service_providers/search?api_key={your key}&size={1 to 100}&offset={1 to n}

Example:

	https://api.govwizely.com/business_service_providers/search?size=1&offset=1

###### Metadata

__Last Updated and Last Imported__

Recency information about each source queried is given in **sources_used** in the following fields:

| Field	| Description |
| ------| -------------|
| source | The name of the issuing agency. |
| source_last_updated | The most recent date and time the data changed. |
| last_imported | The most recent date and time the data was imported. |

The *source_last_updated* field reflects the most recent date and time we noticed that the issuing agency had updated the data. We check for updates and import lists hourly.

__Search Performed At__

The *search_performed_at* field displays the date and time of the current search in UTC.

###### Return Values

| Field	| Description |
| ------| -------------|
| ita_contact_email | Email for ITA contact. |
| company_name | Name of company providing the service. |
| company_phone | Phone number for company. |
| company_address | Street, city, and country address for company. |
| company_website | URL for company site. |
| company_description | Description of company. |
| company_email | Email for contact at company. |
| ita_office | Name of ITA office that has provided company information. |
| contact_title | Title of contact at company. |
| contact_name | Name of contact at company. |
| category | Category of services that company provides. |

