function gEBI(e){return document.getElementById(e)}function createCookie(e,n,o){if(n=escape(n),o){var r=new Date;r.setTime(r.getTime()+24*o*60*60*1e3);var i="; expires="+r.toGMTString()}else i="";document.cookie=e+"="+n+i+"; path=/"}function throwCookie(e){for(var n=e+"=",o=document.cookie.split(";"),r=0;r<o.length;r++){for(var i=o[r];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(n))return unescape(i.substring(n.length,i.length))}return null}function delCookie(e){createCookie(e,"",-1)}function isset(e){return void 0!==window[e]}_bUa=navigator.userAgent.toLowerCase(),_bOp=-1!=_bUa.indexOf("opera"),_bIe=-1!=_bUa.indexOf("msie")&&!_bOp,_bIe4=!(!_bIe||-1==_bUa.indexOf("msie 2.")&&-1==_bUa.indexOf("msie 3.")&&-1==_bUa.indexOf("msie 4.")||_bOp),isIe=function(){return _bIe},isOldIe=function(){return _bIe4};var olArray=[];function AddOnload(e){isIe()&&isOldIe()?(window.onload=ReadOnload,olArray[olArray.length]=e):window.onload?(window.onload!=ReadOnload&&(olArray[0]=window.onload,window.onload=ReadOnload),olArray[olArray.length]=e):window.onload=e}function ReadOnload(){for(var e=0;e<olArray.length;e++)olArray[e]()}