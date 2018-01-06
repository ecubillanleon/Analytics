function loginYoutube()
{
	console.log('entrare a youtube');
	var username = document.getElementById('username').value;

	document.getElementById('userLogin').style.visibility = "hidden";
	document.getElementById('loginYT').style.visibility = "hidden";

	var iframe = '<iframe id="ifram" src="youtube.html" width="320" height="240">';
	iframe.user = username;
	$('#loginYT').append(iframe);
	//i comented the iframe for testing purposes but still it "reloadS"
}

function getChannelData(channel) {
    var account = channel;
    console.log("El canal es....", channel);

	var id = styleIt(channel.id);
    var title = styleIt('<b>'+channel.snippet.title+'</b>');	
    var createDate = styleIt('<b>Fecha de Creacion: </b>'+channel.snippet.publishedAt);
    var desc = styleIt('<b>Descripcion:</b><br>'+channel.snippet.description);
    var commentCount = styleIt('<b>Cantidad de comentarios : </b>'+channel.statistics.commentCount);
    var subscribers = styleIt('<b>Subscritos al canal : </b>'+channel.statistics.subscriberCount+' personas');
    var numberOfVideos = styleIt('<b>Num. de videos subidos : </b>'+channel.statistics.videoCount);
    var numberViews = styleIt('<b>Num. de vistas : </b>'+channel.statistics.viewCount);
    
    var urlThumbnail = channel.snippet.thumbnails.high.url;
    urlThumbnail = '<img src=' + urlThumbnail + 'alt="Profile Picture" width="200" height="200" style="display:block">';

    //$(urlThumbnail).appendTo('#stats_zone');
    $('#stats_zone').append(urlThumbnail);
    $('#stats_zone').append(title);
    $('#stats_zone').append(createDate);
    $('#stats_zone').append(desc);
    $('#stats_zone').append('<p><b>Algunos stats:</b> <br></p>');
    $('#stats_zone').append(commentCount);
    $('#stats_zone').append(subscribers);
    $('#stats_zone').append(numberOfVideos);
    $('#stats_zone').append(numberViews);




    $('#stats_zone').show();
}

function styleIt(htmlElement) {
	htmlElement = '<p>' + htmlElement + '</p>';
	return htmlElement;
}

function getUsername() {
	return document.getElementById('username').value;
}




