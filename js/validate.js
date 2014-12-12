<script type="text/javascript">
function validation()
{
var name = document.form.name.value;
var email = document.form.email.value;
var password = document.form.password.value;
var confirmpassword = document.form.confirmpassword.value;

if(name=="")
{
alert("Please Enter Name");
document.form.name.focus();
return false;
}
if(email =="")
{
alert("Please Enter Email");
document.form.email.focus();
return false;
}
if (echeck(email)==false){
    document.form.email.focus();
    return false;
}
if(password =="")
{
alert("Please Enter Password");
document.form.password.focus();
return false;
}
if(confirmpassword =="")
{
alert("Please Enter Confirm Password");
document.form.confirmpassword.focus();
return false;
}
if(password!=confirmpassword)
{
alert("Confirm Password not match");
document.form.confirmpassword.focus();
return false;

}


function echeck(str) {

		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alert("Invalid E-mail ID")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Invalid E-mail ID")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Invalid E-mail ID")
		    return false
		 }

 		 return true					
	}
}