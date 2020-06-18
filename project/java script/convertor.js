function fn()
{
var ind,ans;
ind=document.getElementById("ind").value;
var convert;
convert=document.getElementById("change").value;
if(convert=="USD")
{
    ans=parseFloat(ind)/75.92;
}
else if(convert=="euro")
{
    ans=parseFloat(ind)/81.81;
}
else if(convert=="aus doller")
{
    ans=parseFloat(ind)/45.08;
}
else if(convert=="pak")
{
    ans=parseFloat(ind)/0.48;
}
else if(convert=="taka")
{
    ans=parseFloat(ind)/0.91;
}
else if(convert=="afgan")
{
    ans=parseFloat(ind)/1.0012;
}
else if(convert=="sri")
{
    ans=parseFloat(ind)/0.40;
}
else if(convert=="sa")
{
    ans=parseFloat(ind)/4.09;
}
document.getElementById("result").value=ans;
}
