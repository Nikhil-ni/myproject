function image1()
{
    document.getElementById("photos").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("vedioContainer").style.display="none"
}
function image2()
{
    document.getElementById("photos1").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("vedioContainer").style.display="none"

}
function image3()
{
    document.getElementById("photos2").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("vedioContainer").style.display="none"


}
function image4()
{
    document.getElementById("photos3").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("vedioContainer").style.display="none"


}
function image5()
{
    document.getElementById("photos4").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("vedioContainer").style.display="none"


}
function image6()
{
    document.getElementById("photos5").style.display="block"
    document.getElementById("orderBut").style.display="block"
    document.getElementById("vedio").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("vedioContainer").style.display="none"
}
function homePage()
{
    location.href="file:///D:/web%20technology%20project/index.html"
}
function addToCard()
{
    var button=document.getElementById("addToCard").value
    if(button=="Add To Card")
    {
        document.getElementById("addToCard").setAttribute("value","Added To Card")
        document.getElementById("messageContainer").style.display="block"
    }
    else if(button=="Added To Card")
    {
       document.getElementById("addToCard").setAttribute("value","Remove From The Card")
       document.getElementById("messageContainer").style.display="none"

    }
    else{
        document.getElementById("addToCard").setAttribute("value","Add To Card")
    }
}
function X()
{
    document.getElementById("messageContainer").style.display="none"
}

function loginPage1()
{
    document.getElementById("loginPage").style.display="block"
    document.getElementById("BrandContainer").style.display="none"
    document.getElementById("vedioContainer").style.display="none"
    document.getElementById("shoeContainer").style.display="none"
    document.getElementById("shoeContainer1").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("textOnVed").style.display="none"
    document.getElementById("signUpPage").style.display="none"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("orderBut").style.display="none"  
}
function okBut()
{
    document.getElementById("loadMessage").style.display="none"
    document.getElementById("signUpPage").style.display="block"
    document.getElementById("photos").style.display="none"
    document.getElementById("photos1").style.display="none"
    document.getElementById("photos2").style.display="none"
    document.getElementById("photos3").style.display="none"
    document.getElementById("photos4").style.display="none"
    document.getElementById("photos5").style.display="none"
    document.getElementById("orderBut").style.display="none"
    document.getElementById("BrandContainer").style.display="none"
}
function cancelBut()
{
    document.getElementById("loadMessage").style.display="none"
}
function signUpPage()
{
    document.getElementById("signUpPage").style.display="block"
    document.getElementById("loginPage").style.display="none"
    
}
var signupname=document.getElementById('signupname').value
var signupmail=document.getElementById('signupmail').value
function backToLoginPage()
{
    
    var signuppass=document.getElementById('signuppassword').value
    var signupconpass=document.getElementById('signupconfirmpass').value
    
     if(signuppass==signupconpass)
    {
        document.getElementById("loginPage").style.display="block"
        document.getElementById("signUpPage").style.display="none"
    }
else{
        document.getElementById("errorText").style.display="block"
    }
}
function BackToHomePage()
{
    var loginemail=document.getElementById('loginemail').value
    var loginpass=document.getElementById('loginpass').value
    var signupconpass=document.getElementById('signupconfirmpass').value
    var changeconpass=document.getElementById('changeconpass').value
    if(loginemail==signupmail && loginpass==signupconpass || changeconpass==loginpass)
    {
      document.getElementById("shippingContainer").style.display="block"
      document.getElementById("loginPage").style.display="none"
      document.getElementById("continueBut").style.display="block"

    }
    else{
        document.getElementById("loginMessage").style.display="block"
    }
}
function changePassPage()
{
    document.getElementById("changePassContainer").style.display="block"
    document.getElementById("loginPage").style.display="none"
}
function changeForgotPass()
{
    var changepass=document.getElementById('changepass').value
    var changeconpass=document.getElementById('changeconpass').value
    if(changepass==changeconpass)
    {
        document.getElementById("loginPage").style.display="block"
        document.getElementById("changePassContainer").style.display="none"
    }
    else{
        document.getElementById("changePassText").style.display="block"
    }
}
function otp()
{
    var getotp=(Math.floor(Math.random()*10000))
    window.alert(getotp)
    
}
function otpinput()
{
    var getotp=(Math.floor(Math.random()*10000))

    var enterotp=document.getElementById('getotp').value
    if(enterotp==getotp)
    {
        document.getElementById('correctotp').style.display='block'
    }
    else{
        document.getElementById('incorrect').style.display='block'
    }
}
function buyOrder()
{
    document.getElementById("loadMessage").style.display="block"
}
 function paymentDetails()
 {
    var Ename1=allInput[26].value
    var MNumber=allInput[27].value
    var addressM=allInput[28].value
    var addressD=allInput[29].value
    localStorage.setItem("newPass",Ename1)
    localStorage.setItem("mobileNumber",MNumber)
    document.getElementById("paymentContainer").style.display="block"
    document.getElementById("shippingContainer").style.display="none"

 }
 function paymentSuccess()
 {
    alert("your payment can be successfull and order can be deliver to your shipping address")
    location.href="file:///D:/web%20technology%20project/index.html"
 }