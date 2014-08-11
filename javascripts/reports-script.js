(function() {

	if(typeof jQuery=='undefined') {
	    var headTag = document.getElementsByTagName("head")[0];
	    var jqTag = document.createElement('script');
	    jqTag.type = 'text/javascript';
	    jqTag.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
	    jqTag.onload = main;
	    headTag.appendChild(jqTag);
	} else {
	     main();
	}



	function stopSpinner(spinner){
		$('#reports-button').removeClass('search-button-clear');
		spinner.stop();	
	}

	function getReports(spinner) {
		var keyword = document.getElementById("reports-keyword").value;
		var url = "http://api.trade.gov/market_research_library/search.json?q=";
		if (keyword.length > 0){
			url += keyword;
		}
		else {
			alert("No report keyword entered");
			document.getElementById("reports-results").innerHTML = "";
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
					list = "<p>No reports were found, please try another keyword<p>"
				}
				else {
					$('#reports-results').addClass('results-container');
					var list = "<p class='results-title'></p>";
					for (var i=0; i<=results.length-1; i++){
						var report = results[i];
						var title = report.title;
						var url = report.url;
						list += "<p class='results-legend'>" + title + "<br>";
						list += "<a class='results-link' href=" + url + " target='_blank'>" + url + "</a></p>";
					}
				}
				document.getElementById("reports-results").innerHTML = list;
				stopSpinner(spinner);
			},
			error: function(error) {
				stopSpinner(spinner);
				alert("Error retriving reports, please try again");
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
				container += ('<p class="widget-title">Market Research Reports</p>');
				container += ('<div id="reports-results" class="results-container"></div>');
				container += ('<div id="reports-form" class="form-container"></div>');
				document.getElementById('reports-container').innerHTML = container;
				$('#reports-container').addClass('widget-container');
				var form = "";				
				form += ('<div><input class="search-input" type="text" id="reports-keyword" placeholder="search by keyword" size="30">');
				form += ('<button class="search-button" id="reports-button"></button></div>');
				document.getElementById('reports-form').innerHTML = form;
				$('#reports-button').on('click', function(){
					$(this).addClass('search-button-clear');
					var spinner = new Spinner(spinnerVars).spin(this);
					getReports(spinner);
					});
				$('#reports-keyword').keypress(function (e){
				    if(e.which == 13){
							$('#reports-button').addClass('search-button-clear');
							target = document.getElementById('reports-button');
							var spinner = new Spinner(spinnerVars).spin(target);
							getReports(spinner);
				    }
				});
	    });
	}

})();