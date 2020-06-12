            function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


            window.setInterval("display()",1000)
            function display()
            {
                 signup = document.getElementById("signup-btn")
                if (getCookie("username")=="Doc_Ren")
                {
                    signup.innerHTML="Logout"
                    signup.href="Login_Page.html"
                    document.getElementById("login-btn").innerHTML="Doc_Ren155"
                    document.getElementById("login-btn").href="#"
                }
             }


            function deleteAllCookies()
            {
                document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            }

