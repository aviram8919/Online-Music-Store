function validate(form)
{
    fail=validateEmail(form.email.value)
    fail+=validatePassword(form.password.value)
    fail+=preDefined(form,form.email.value,form.password.value)
    if(fail=="") return true
    else
    {
       alert(fail)
       return false
    }
}


function validateEmail(field)
{
    if(field=="")
        return "Email is Required.\n"
     else if(!((field.indexOf(".")>0)&&(field.indexOf("@")>0))||/[^a-zA-Z0-9.@_-]/.test(field))
             return "Invalid Email!!\n"
     return ""
}
function validatePassword(field)
{
if (field == "")
    return "No Password was entered.\n"
else if (field.length < 6)
    return "Passwords must be at least 6 characters.\n"
else if (!/[a-z]/.test(field) || !/[0-9]/.test(field))
    return "Invalid Password\n"
return ""
}
function preDefined(form,email,password)
{
    if(email=="imaviramtiwary@gmail.com")
    {
        if(password==="12345a")
           {
               form.action="Homepage_user1.htm"
               return ""
           }
    }
    else if(email=="amilmohd155@gmail.com")
    {
        if(password==="angeltek155")
           {
               form.action="Homepage_user2.htm"
               return ""
           }
        else
            return("Incorrect Username and Password combination")
    }
    else if(email=="ksandy7351@gmail.com")
    {
        if(password="7351abc")
            {
                form.action="Homepage_user3.htm"
                return ""
            }
        else
                return("Incorrect Username and Password combination")
    }
    else if(email=="arnavthakur13456@gmail.com")
    {
        if(password=="13456abc")
            {
                form.action="Homepage_user4.htm"
                return ""
            }
         else
                return("Incorrect Username and Password combination")
    }
    else
        alert("Incorrect Username and Password combination")

}


