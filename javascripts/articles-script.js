(function() {

	if(typeof jQuery=='undefined') {
	    var headTag = document.getElementsByTagName("head")[0];
	    var jqTag = document.createElement('script');
	    jqTag.type = 'text/javascript';
	    jqTag.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
	    jqTag.onload = main;
	    headTag.appendChild(jqTag);
	}
	else {
	  main();
	}
	
	function stopSpinner(spinner){
		$('#articles-button').removeClass('search-button-clear');
		spinner.stop();	
	}

	var articleArray = new Array();
	function getArticles(spinner) {
		var keyword = document.getElementById("articles-keyword").value;
		var url = "http://api.trade.gov/trade_articles/search.json?q=";	
		if (keyword.length > 0){
			url += keyword;
		}
		else {
			alert("No article keyword entered");
			document.getElementById("articles-results").innerHTML = "";
			stopSpinner(spinner);
			return;
		}
		url += "&callback=?";
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(feed){
				var results = feed.results;
				if (results.length == 0){
					list = "<p>No articles were found, please try another keyword.<p>"
				}
				else {
					var list = "<p class='results-title'></p>";
					articleArray = [];
					$('#articles-results').addClass('results-container');
					for (var i=0; i<=results.length-1; i++){
						var article = results[i];
						var title = article.title;
						var update_date = article.update_date;
						var content = article.content;
						var id = article.id;
						var articleObject={title:title, content:content, id:id};
						articleArray.push(articleObject);
						list += "<p><a class='results-link' href='#' id='article-title' data-id= " + id + ">" + title + "</a>" + "</br>" + update_date + "</p>"
					}
				}
				document.getElementById("articles-results").innerHTML = list;
				stopSpinner(spinner);
			},
			error: function(error) {
				stopSpinner(spinner);
				alert("Error retriving events, please try again");
			},
			timeout:3000
		});
	}


	function main() { 
    $(document).ready(function($) {
    
			if (!$("link[href='http://developer.trade.gov/stylesheets/trade-widgets.css']").length){
				$('<script src="http://developer.trade.gov/javascripts/spin.js" type="text/javascript"></script>').appendTo("head");
				$('<script src="http://developer.trade.gov/javascripts/trade-widget-vars.js" type="text/javascript"></script>').appendTo("head");
				$('<link href="http://developer.trade.gov/stylesheets/trade-widgets.css" rel="stylesheet">').appendTo("head");
			}
			var container = "";
			container += ('<p class="widget-title">Trade Articles</p>');
			container += ('<div id="articles-results" class="results-container"></div>');
			container += ('<div id="articles-form" class="form-container"></div>');
			document.getElementById('articles-container').innerHTML = container;
			$('#articles-container').addClass('widget-container');
			var form = "";				
      
			form += ('<div class="search-combo"><input class="search-input" type="text" id="articles-keyword" placeholder="search by keyword" size="30">');
			form += ('<button class="search-button" id="articles-button"></button></div>');
			document.getElementById('articles-form').innerHTML = form;
			$('#articles-button').on('click', function(){
				$(this).addClass('search-button-clear');
				var spinner = new Spinner(spinnerVars).spin(this);
				getArticles(spinner);
				});
			$('#articles-keyword').keypress(function (e){
			    if(e.which == 13){
						$('#articles-button').addClass('search-button-clear');
						target = document.getElementById('articles-button');
						var spinner = new Spinner(spinnerVars).spin(target);
						getArticles(spinner);
			    }
			});
			$(document).on('click', '#article-title', function(){
				var id = $(this).data('id');
				for (i=0; i<articleArray.length; i++){
					var articleObject = articleArray[i];
					if (articleObject.id == id) {
					  var w = window.open();
					   $(w.document.body).text(articleObject.content);
						return;
					}
				}
			
			});
    });
	}

})();