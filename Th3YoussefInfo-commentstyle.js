var jsCommentPages = function(){
  var $activePage,
		$activeTab,
		init = function(){	
			$(".comments-tab").each(function(){
				var $tab = $(this);
				$tab.click(selectPage)
					.addClass("js-inactive-tab");
				switch ($tab.attr("id")){
					case "blogger-comments": 
						$tab.prepend("<img src='https://lh3.googleusercontent.com/-pSHML6SboUU/Vh6p48CvpUI/AAAAAAAABZ0/dPdFmh4ULHM/h120/blogger-white-B.png'>");
						break;
					case "disqus-comments":
						$tab.prepend("<img src='https://lh3.googleusercontent.com/-BjZVuqoTVso/Vh6p5YOsD7I/AAAAAAAABaA/fM1jhJJbY8Y/h120/white-disqus-D.png'>");
						break;
					case "fb-comments":
						$tab.prepend("<img src='https://lh3.googleusercontent.com/-1ar0JkRkl6E/Vh6p44EUZgI/AAAAAAAABZ8/Pkn7a1PGnBs/h120/white-Facebook-F.png'>");
						break;
					case "get-this":
						$tab.prepend("<img src='http://3.bp.blogspot.com/-9dSC4V-ERMs/UclFdUjqV_I/AAAAAAAAEKQ/R0F5B-uHzwM/s1600/Get-this.png'>");
						break;
					case "gplus-comments":
						$tab.prepend("<img src='https://lh3.googleusercontent.com/-1ScUL61EJXE/Vh6p42HLphI/AAAAAAAABZ4/bU20f_5YBGI/h120/white-Google-Plus.png'>");
						break;
						
				}
				$tab = null;
			});
						
			getTweetCounts();
			
			var $default = $(".js-default-tab:first"),
				strDefault = "#blogger-comments";
			if($default.length > 0){
				strDefault = "#" + $default.attr("id");
			}
			//Set default tab and page Active
			$activeTab = $(strDefault);
			$activeTab.removeClass("js-inactive-tab");
			
			$activePage = $(strDefault + "-page");			
			$activePage.show();
		},
		getTweetCounts = function(){
		  	$(".js-page-tweet-count").each(
				function(){
					var $count = $(this);
					$.getJSON("http://urls.api.twitter.com/1/urls/count.json?callback=?",
		      	{url: $count.attr("href")},
		         function(json){$count.text(json.count);$count = null;});					   	
				}
			);		   
 	 	},
		selectPage = function() {
			//Set old tab inactive, then set clicked tab active
		  	$activeTab.addClass("js-inactive-tab");
			$activeTab = $(this);
		  	$activeTab.removeClass("js-inactive-tab");
			
			//hide active page, then switch to page associated to clicked tab
		  	$activePage.hide();
		  	$activePage = $("#" + $activeTab.attr("id") + "-page");
		  	$activePage.show();
		};
	$("head").append("<link id='js-comments-pages-styles' rel='stylesheet' type='text/css' href='https://raw.githubusercontent.com/youssefisgeek/Comment/master/th3scrollingrecentposts.css'/>");
  	$("document").ready(init);
}();
