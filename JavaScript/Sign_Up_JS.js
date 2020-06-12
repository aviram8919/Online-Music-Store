function validate(form)
{
    fail=validateUserName(form.Username.value)
    fail+=validateEmail(form.Email.value)
    fail+=validateMobileNo(form.MobileNo.value)
    fail+=validatePassword(form.Password.value)
    fail+=confirmPassword(form.ConfirmPassword.value,form.Password.value)
    if(fail=="") return true
    else
    {
       alert(fail)
       return false
    }
}
function validateUserName(field)
{
    if(field.length<5)
        return "Username must be at least 5 characters\n"
    else if(/[^a-zA-Z0-9_]/.test(field))
    return "Only a-z,0-9 and _ is allowed in Usernames.\n"
    return ""
}
function validateEmail(field)
{
    if(!((field.indexOf(".")>0)&&(field.indexOf("@")>0))||/[^a-zA-Z0-9.@_]/.test(field))
        return "Email is invalid\n"
     return ""
}
function validateMobileNo(field)
{
    if(field.length!=10)
        return "Incorrect Mobile Number\n"
    else if(!/[0-9]/.test(field))
        return "Incorrect Mobile Number\n"
    return ""
}
function validatePassword(field)
{
    if(field.length<8)
        return "Password strength must be above 8\n"
     else if(!/[a-z]/.test(field)||!/[0-9]/.test(field))
     return "Password require at least one of a-z,A-z and 0-9\n"
     return ""
}
function confirmPassword(field1,field2)
{
	if(field1!=field2)
        return "Incorrect password\n"
    return ""
}
