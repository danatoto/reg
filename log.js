var key = window.location.href.split("open/")[1].replace("/","")
var urls={
 'daftar':"https://danatoto176.com/link.php?member=signup",
 'login':"https://danatoto176.com/link.php?member=signup",
}
if(key){
 if(urls[key]){
 window.location.href=urls[key]
 }else{
 document.write("'"+key+"' not found :(");
 }
}
