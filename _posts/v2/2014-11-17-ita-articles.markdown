---
published: true
permalink: "ita-trade-articles.html"
title: ITA Trade Articles API
layout: body
---

#Trade News & Articles API

{% include articles-tabs %}

##Resource URL

{% include articles-query.html %}

##Search Parameters

###keyword

Searches for a match within the **title**, **short_title**, **summary**, **content**, and **keyword** fields.

    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&q={term}

{% include articles-query-keyword.html %}

###export_phases

Returns articles based on the [export phase](export-phases-ita-articles.html).  Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&export_phases={terms}

**_Example_**

{% include articles-query-phases.html %}

###industries

Returns articles for a specific [controlled industry terms](industry-list-ita-articles.html). This method allows you to search for multiple industries separated by commas.

    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&industries={terms}

**_Example_**

{% include articles-query-industry.html %}

###countries

Returns articles for a specific country based on [ISO alpha-2 country codes](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm). This method allows you to search for multiple countries separated by commas.

    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&countries={country codes}

**_Example_**

{% include articles-query-country.html %}

###topics

Returns articles based on [topic](topic-list-ita-articles.html).  Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&topics={terms}

**_Example_**

{% include articles-query-topics.html %}

###sub_topics

Returns articles based on [sub-topic](subtopic-list-ita-articles.html).  Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&sub_topics={terms}

**_Example_**

{% include articles-query-subtopics.html %}

###geo_regions

Returns articles based on [geo region](geo-region-list.html).  Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&geo_regions={terms}

**_Example_**

{% include articles-query-georegions.html %}

###geo_subregions

Returns articles based on [geo sub-region](geo-region-list.html).  Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&geo_subregions={terms}

**_Example_**

{% include articles-query-subregions.html %}

###trade_regions

Returns articles based on [trade region](trade-region-list.html).  Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&trade_regions={terms}

**_Example_**

{% include articles-query-regions.html %}

###trade_programs

Returns articles based on [trade program](trade-program-list-ita-articles.html).  Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&trade_programs={terms}

**_Example_**

{% include articles-query-programs.html %}

###trade_initiatives

Returns articles based on [trade initiative](trade-initiative-list-ita-articles.html).  Enter multiple terms by separating with a comma.

    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&trade_initiatives={terms}

**_Example_**

{% include articles-query-initiatives.html %}

###creation_date

Returns articles based on the date they were created.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&creation_date={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

{% include articles-query-creationdate.html %}

###release_date

Returns articles based on their release date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&release_date={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

{% include articles-query-releasedate.html %}

###expiration_date

Returns articles based on their expiration date.  Dates are filtered by comparing them against an inclusive range, which must be entered with the following format:  YYYY-mm-dd TO YYYY-mm-dd.  Searching on a single date can be done by entering the same value for the start and end of the range.


    {{ site.webservices_baseurl }}/v2/trade_articles/search?api_key={your key}&expiration_date={YYYY-mm-dd TO YYYY-mm-dd}

**_Example_**

{% include articles-query-expirationdate.html %}

###size + offset

The size parameter allows you to configure the maximum amount of hits to be returned. The offset parameter defines the offset from the first result you want to fetch.

**_Example_**

{% include articles-query-size.html %}

##Return Values

| Field              | Description                             |
| ------------------ | --------------------------------------- |
| id                 | Unique identifier for the article.             |
| title         	 | The title of the article.|
| short_title             | A shortened title for the article.  |
| summary        | A summary of the article's content.  |
| creation_date           | The date of the article's creation. |
| release_date            | The date of the article's release.          |
| expiration_date             | The date of the article's expiration.     |
| source_agencies            | The article's source agencies.    |
| source_business_units            | The business units for each source agency.    |
| source_offices            | The offices for each source business unit.     |
| evergreen            | Flag to designate “timeless” articles, always topically relevant.     |
| content           | The body of the article.    |
| keyword            | A list of keywords for the article assigned by the author.    |
| export_phases            | The export phases assigned to the article.     |
| industries           | The industries assigned to the article.    |
| countries            | The countries associated with the article.    |
| topics             | The topics assigned to the article.     |
| sub_topics             | The sub-topics assigned to the article for each topic.     |
| geo_regions           | The world regions covered by the article's content.   |
| geo_subregions           | The world sub-regions associated with the article for each geo region.    |
| trade_regions             | The trade regions covered by the article's content.    |
| trade_programs            | The trade programs covered by the article's content.   |
| trade_initiatives            | The trade initiatives covered by the article's content.     |
| seo_metadata_title             | Title metadata for the article.    |
| seo_metadata_description            | Description metadata for the article.    |
| seo_metadata_keyword             | Keyword metadata for the article.   |
| trade_url             | The article's export.gov URL.     |
| file_url             | The URLs for files included in the article.     |
| image_url             | The URLs for images included in the article.    |
| url_html_source             | The URL for the HTML of the article's source.     |
| url_xml_source            | The URL for the XML of the article's source.    |
