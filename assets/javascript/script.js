// var terms = "&"
// Built by LucyBot. www.lucybot.com
var search = "q=" + $("#search").val();
var resultNumber = "&fl=" + $("#resultNumber").val();
var beginDate = "&begin_date=" + $("#beginDate").val();
var endDate = "&end_date=" + $("#endDate").val();
var url =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + search + resultNumber + "&api-key=c35b668c9c3b49628890ac0162dee3a0";
$.ajax({
  url: url,
  method: "GET"
})
  .done(function(result) {
    $("#searchButton").on("click", function(){
      
  
    for (let i = 0; i < result.response.docs.length; i++) {
        var articleDiv = $("<div>");
        articleDiv.append(result.response.docs[i]);
        articleDiv.append(result.response.docs[i].headline.main);
        articleDiv.append(result.response.docs[i].snippet);
        articleDiv.append(result.response.docs[i].web_url);

        const element = result.response.docs[i];
        console.log(result.response.docs[i].headline.main);
        console.log(result.response.docs[i].snippet);
        console.log(result.response.docs[i].web_url);
      }
    })
  })

  .fail(function(err) {
    // throw err;
    console.log(err);
  });
