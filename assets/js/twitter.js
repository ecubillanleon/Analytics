function loginTwitter()
{
	//in twitter the username could be as the username or a email address
	var user = document.getElementById("username").value;
	var pass = document.getElementById("pass").value;

	console.log("user: ",user,"\npass: ",pass);

	var isUsername;

	isUsername = checkTypeUser(user);

}

//this fucntion checks if the username is email address or actual username
function checkTypeUser(user)
{
	//some regular expression will be here...
}

