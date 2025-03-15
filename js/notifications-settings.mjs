/*! third party licenses: js/vendor.LICENSE.txt */
import{r as Ri,a as ue,V as ki}from"./style-iFpxR6g6.chunk.mjs";import{t as x,n as pe,N as he,l as me,c as fe,v as ve,s as ji,a as yi}from"./_plugin-vue2_normalizer-DrgfANz-.chunk.mjs";import{N as ge,B as Q}from"./BrowserStorage-BVnRCG8F.chunk.mjs";import{N as ke}from"./NcSettingsSection-BYKUjim0-CH6MO8Rk.chunk.mjs";var ye="2.0.3",qi=500,Vi="user-agent",Y="",Fi="?",hi="function",z="undefined",$="object",Li="string",k="browser",A="cpu",N="device",C="engine",S="os",V="result",r="name",e="type",a="vendor",s="version",y="architecture",ci="major",o="model",si="console",l="mobile",f="tablet",g="smarttv",E="wearable",_i="xr",ni="embedded",Z="inapp",zi="brands",P="formFactors",Ui="fullVersionList",F="platform",Bi="platformVersion",fi="bitness",U="sec-ch-ua",_e=U+"-full-version-list",xe=U+"-arch",Se=U+"-"+fi,Ce=U+"-form-factors",Ee=U+"-"+l,Ne=U+"-"+o,ce=U+"-"+F,Te=ce+"-version",de=[zi,Ui,l,o,F,Bi,y,P,fi],bi="Amazon",R="Apple",Yi="ASUS",$i="BlackBerry",B="Google",Wi="Huawei",Gi="Lenovo",Ji="Honor",li="LG",xi="Microsoft",Si="Motorola",Ci="Nvidia",Xi="OnePlus",Ei="OPPO",K="Samsung",Qi="Sharp",ii="Sony",Ni="Xiaomi",Ti="Zebra",Zi="Chrome",Ki="Chromium",L="Chromecast",Ie="Edge",ei="Firefox",ti="Opera",Ii="Facebook",ie="Sogou",j="Mobile ",oi=" Browser",Di="Windows",Ae=typeof window!==z,_=Ae&&window.navigator?window.navigator:void 0,D=_&&_.userAgentData?_.userAgentData:void 0,Me=function(i,c){var d={},p=c;if(!mi(c)){p={};for(var w in c)for(var h in c[w])p[h]=c[w][h].concat(p[h]?p[h]:[])}for(var b in i)d[b]=p[b]&&p[b].length%2===0?p[b].concat(i[b]):i[b];return d},ui=function(i){for(var c={},d=0;d<i.length;d++)c[i[d].toUpperCase()]=i[d];return c},Hi=function(i,c){if(typeof i===$&&i.length>0){for(var d in i)if(M(i[d])==M(c))return!0;return!1}return G(i)?M(c).indexOf(M(i))!==-1:!1},mi=function(i,c){for(var d in i)return/^(browser|cpu|device|engine|os)$/.test(d)||(c?mi(i[d]):!1)},G=function(i){return typeof i===Li},Ai=function(i){if(i){for(var c=[],d=W(/\\?\"/g,i).split(","),p=0;p<d.length;p++)if(d[p].indexOf(";")>-1){var w=di(d[p]).split(";v=");c[p]={brand:w[0],version:w[1]}}else c[p]=di(d[p]);return c}},M=function(i){return G(i)?i.toLowerCase():i},Mi=function(i){return G(i)?W(/[^\d\.]/g,i).split(".")[0]:void 0},O=function(i){for(var c in i){var d=i[c];typeof d==$&&d.length==2?this[d[0]]=d[1]:this[d]=void 0}return this},W=function(i,c){return G(c)?c.replace(i,Y):c},ai=function(i){return W(/\\?\"/g,i)},di=function(i,c){if(G(i))return i=W(/^\s\s*/,i),typeof c===z?i:i.substring(0,qi)},Oi=function(i,c){if(!(!i||!c))for(var d=0,p,w,h,b,m,u;d<c.length&&!m;){var v=c[d],T=c[d+1];for(p=w=0;p<v.length&&!m&&v[p];)if(m=v[p++].exec(i),m)for(h=0;h<T.length;h++)u=m[++w],b=T[h],typeof b===$&&b.length>0?b.length===2?typeof b[1]==hi?this[b[0]]=b[1].call(this,u):this[b[0]]=b[1]:b.length===3?typeof b[1]===hi&&!(b[1].exec&&b[1].test)?this[b[0]]=u?b[1].call(this,u,b[2]):void 0:this[b[0]]=u?u.replace(b[1],b[2]):void 0:b.length===4&&(this[b[0]]=u?b[3].call(this,u.replace(b[1],b[2])):void 0):this[b]=u||void 0;d+=2}},H=function(i,c){for(var d in c)if(typeof c[d]===$&&c[d].length>0){for(var p=0;p<c[d].length;p++)if(Hi(c[d][p],i))return d===Fi?void 0:d}else if(Hi(c[d],i))return d===Fi?void 0:d;return c.hasOwnProperty("*")?c["*"]:i},ee={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},te={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},oe={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[s,[r,j+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[s,[r,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[r,s],[/opios[\/ ]+([\w\.]+)/i],[s,[r,ti+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[s,[r,ti+" GX"]],[/\bopr\/([\w\.]+)/i],[s,[r,ti]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[s,[r,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[s,[r,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,/(heytap|ovi|115|surf)browser\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[r,s],[/quark(?:pc)?\/([-\w\.]+)/i],[s,[r,"Quark"]],[/\bddg\/([\w\.]+)/i],[s,[r,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[s,[r,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[s,[r,"WeChat"]],[/konqueror\/([\w\.]+)/i],[s,[r,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[s,[r,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[s,[r,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[s,[r,"Smart "+Gi+oi]],[/(avast|avg)\/([\w\.]+)/i],[[r,/(.+)/,"$1 Secure"+oi],s],[/\bfocus\/([\w\.]+)/i],[s,[r,ei+" Focus"]],[/\bopt\/([\w\.]+)/i],[s,[r,ti+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[s,[r,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[s,[r,"Dolphin"]],[/coast\/([\w\.]+)/i],[s,[r,ti+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[s,[r,"MIUI"+oi]],[/fxios\/([\w\.-]+)/i],[s,[r,j+ei]],[/\bqihoobrowser\/?([\w\.]*)/i],[s,[r,"360"]],[/\b(qq)\/([\w\.]+)/i],[[r,/(.+)/,"$1Browser"],s],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[r,/(.+)/,"$1"+oi],s],[/samsungbrowser\/([\w\.]+)/i],[s,[r,K+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[s,[r,ie+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[r,ie+" Mobile"],s],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[r,s],[/(lbbrowser|rekonq)/i],[r],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[s,r],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[r,Ii],s,[e,Z]],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(instagram|snapchat)[\/ ]([-\w\.]+)/i],[r,s,[e,Z]],[/\bgsa\/([\w\.]+) .*safari\//i],[s,[r,"GSA"],[e,Z]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[s,[r,"TikTok"],[e,Z]],[/\[(linkedin)app\]/i],[r,[e,Z]],[/(chromium)[\/ ]([-\w\.]+)/i],[r,s],[/headlesschrome(?:\/([\w\.]+)| )/i],[s,[r,Zi+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[r,Zi+" WebView"],s],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[s,[r,"Android"+oi]],[/chrome\/([\w\.]+) mobile/i],[s,[r,j+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[r,s],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[s,[r,j+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[r,j+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[s,r],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[r,[s,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[r,s],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[r,j+ei],s],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[r,"Netscape"],s],[/(wolvic|librewolf)\/([\w\.]+)/i],[r,s],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[s,[r,ei+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[r,[s,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[r,[s,/[^\d\.]+./,Y]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[y,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[y,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[y,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[y,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[y,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[y,/ower/,Y,M]],[/ sun4\w[;\)]/i],[[y,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[y,M]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[o,[a,K],[e,f]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[o,[a,K],[e,l]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[o,[a,R],[e,l]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[o,[a,R],[e,f]],[/(macintosh);/i],[o,[a,R]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[o,[a,Qi],[e,l]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[o,[a,Ji],[e,f]],[/honor([-\w ]+)[;\)]/i],[o,[a,Ji],[e,l]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[o,[a,Wi],[e,f]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[o,[a,Wi],[e,l]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[o,/_/g," "],[a,Ni],[e,f]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[o,/_/g," "],[a,Ni],[e,l]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[o,[a,Ei],[e,l]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[o,[a,H,{OnePlus:["304","403","203"],"*":Ei}],[e,f]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[o,[a,"BLU"],[e,l]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[o,[a,"Vivo"],[e,l]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[o,[a,"Realme"],[e,l]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[o,[a,Si],[e,l]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[o,[a,Si],[e,f]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[o,[a,li],[e,f]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,/\blg-?([\d\w]+) bui/i],[o,[a,li],[e,l]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[o,[a,Gi],[e,f]],[/(nokia) (t[12][01])/i],[a,o,[e,f]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[o,/_/g," "],[e,l],[a,"Nokia"]],[/(pixel (c|tablet))\b/i],[o,[a,B],[e,f]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[o,[a,B],[e,l]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[a,ii],[e,l]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[o,"Xperia Tablet"],[a,ii],[e,f]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[o,[a,Xi],[e,l]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[o,[a,bi],[e,f]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[o,/(.+)/g,"Fire Phone $1"],[a,bi],[e,l]],[/(playbook);[-\w\),; ]+(rim)/i],[o,a,[e,f]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[o,[a,$i],[e,l]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[o,[a,Yi],[e,f]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[o,[a,Yi],[e,l]],[/(nexus 9)/i],[o,[a,"HTC"],[e,f]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[a,[o,/_/g," "],[e,l]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[o,[a,"TCL"],[e,f]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[o,[a,"TCL"],[e,l]],[/(itel) ((\w+))/i],[[a,M],o,[e,H,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[o,[a,"Acer"],[e,f]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[o,[a,"Meizu"],[e,l]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[o,[a,"Ulefone"],[e,l]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[o,[a,"Energizer"],[e,l]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[o,[a,"Cat"],[e,l]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[o,[a,"Smartfren"],[e,l]],[/droid.+; (a(?:015|06[35]|142p?))/i],[o,[a,"Nothing"],[e,l]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[o,[a,"Archos"],[e,f]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[o,[a,"Archos"],[e,l]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[a,o,[e,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[a,o,[e,l]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[a,o,[e,f]],[/(surface duo)/i],[o,[a,xi],[e,f]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[o,[a,"Fairphone"],[e,l]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[o,[a,Ci],[e,f]],[/(sprint) (\w+)/i],[a,o,[e,l]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[a,xi],[e,l]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[o,[a,Ti],[e,f]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[o,[a,Ti],[e,l]],[/smart-tv.+(samsung)/i],[a,[e,g]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[a,K],[e,g]],[/tcast.+(lg)e?. ([-\w]+)/i],[a,o,[e,g]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[a,li],[e,g]],[/(apple) ?tv/i],[a,[o,R+" TV"],[e,g]],[/crkey.*devicetype\/chromecast/i],[[o,L+" Third Generation"],[a,B],[e,g]],[/crkey.*devicetype\/([^/]*)/i],[[o,/^/,"Chromecast "],[a,B],[e,g]],[/fuchsia.*crkey/i],[[o,L+" Nest Hub"],[a,B],[e,g]],[/crkey/i],[[o,L],[a,B],[e,g]],[/(portaltv)/i],[o,[a,Ii],[e,g]],[/droid.+aft(\w+)( bui|\))/i],[o,[a,bi],[e,g]],[/(shield \w+ tv)/i],[o,[a,Ci],[e,g]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[o,[a,Qi],[e,g]],[/(bravia[\w ]+)( bui|\))/i],[o,[a,ii],[e,g]],[/(mi(tv|box)-?\w+) bui/i],[o,[a,Ni],[e,g]],[/Hbbtv.*(technisat) (.*);/i],[a,o,[e,g]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[a,di],[o,di],[e,g]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[o,[e,g]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[e,g]],[/(ouya)/i,/(nintendo) (\w+)/i],[a,o,[e,si]],[/droid.+; (shield)( bui|\))/i],[o,[a,Ci],[e,si]],[/(playstation \w+)/i],[o,[a,ii],[e,si]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[o,[a,xi],[e,si]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[o,[a,K],[e,E]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[a,o,[e,E]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[o,[a,Ei],[e,E]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[o,[a,R],[e,E]],[/(opwwe\d{3})/i],[o,[a,Xi],[e,E]],[/(moto 360)/i],[o,[a,Si],[e,E]],[/(smartwatch 3)/i],[o,[a,ii],[e,E]],[/(g watch r)/i],[o,[a,li],[e,E]],[/droid.+; (wt63?0{2,3})\)/i],[o,[a,Ti],[e,E]],[/droid.+; (glass) \d/i],[o,[a,B],[e,_i]],[/(pico) (4|neo3(?: link|pro)?)/i],[a,o,[e,_i]],[/(quest( \d| pro)?s?).+vr/i],[o,[a,Ii],[e,_i]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[a,[e,ni]],[/(aeobc)\b/i],[o,[a,bi],[e,ni]],[/(homepod).+mac os/i],[o,[a,R],[e,ni]],[/windows iot/i],[[e,ni]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i],[o,[e,H,{mobile:"Mobile",xr:"VR","*":f}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[e,f]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[e,l]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[o,[a,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[s,[r,Ie+"HTML"]],[/(arkweb)\/([\w\.]+)/i],[r,s],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[s,[r,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[r,s],[/ladybird\//i],[[r,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[s,r]],os:[[/microsoft (windows) (vista|xp)/i],[r,s],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[r,[s,H,ee]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[s,H,ee],[r,Di]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[s,/_/g,"."],[r,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[r,"macOS"],[s,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[s,[r,L+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[s,[r,L+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[s,[r,L+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[s,[r,L+" Linux"]],[/crkey\/([\d\.]+)/i],[s,[r,L]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[s,r],[/(ubuntu) ([\w\.]+) like android/i],[[r,/(.+)/,"$1 Touch"],s],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i],[r,s],[/\(bb(10);/i],[s,[r,$i]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[s,[r,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[s,[r,ei+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[s,[r,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[s,[r,"watchOS"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[r,"Chrome OS"],s],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[r,s],[/(sunos) ?([\w\.\d]*)/i],[[r,"Solaris"],s],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[r,s]]},pi=function(){var i={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}};return O.call(i.init,[[k,[r,s,ci,e]],[A,[y]],[N,[e,o,a]],[C,[r,s]],[S,[r,s]]]),O.call(i.isIgnore,[[k,[s,ci]],[C,[s]],[S,[s]]]),O.call(i.isIgnoreRgx,[[k,/ ?browser$/i],[S,/ ?os$/i]]),O.call(i.toString,[[k,[r,s]],[A,[y]],[N,[a,o]],[C,[r,s]],[S,[r,s]]]),i}(),Oe=function(i,c){var d=pi.init[c],p=pi.isIgnore[c]||0,w=pi.isIgnoreRgx[c]||0,h=pi.toString[c]||0;function b(){O.call(this,d)}return b.prototype.getItem=function(){return i},b.prototype.withClientHints=function(){return D?D.getHighEntropyValues(de).then(function(m){return i.setCH(new we(m,!1)).parseCH().get()}):i.parseCH().get()},b.prototype.withFeatureCheck=function(){return i.detectFeature().get()},c!=V&&(b.prototype.is=function(m){var u=!1;for(var v in this)if(this.hasOwnProperty(v)&&!Hi(p,v)&&M(w?W(w,this[v]):this[v])==M(w?W(w,m):m)){if(u=!0,m!=z)break}else if(m==z&&u){u=!u;break}return u},b.prototype.toString=function(){var m=Y;for(var u in h)typeof this[h[u]]!==z&&(m+=(m?" ":Y)+this[h[u]]);return m||z}),D||(b.prototype.then=function(m){var u=this,v=function(){for(var q in u)u.hasOwnProperty(q)&&(this[q]=u[q])};v.prototype={is:b.prototype.is,toString:b.prototype.toString};var T=new v;return m(T),T}),new b};function we(i,c){if(i=i||{},O.call(this,de),c)O.call(this,[[zi,Ai(i[U])],[Ui,Ai(i[_e])],[l,/\?1/.test(i[Ee])],[o,ai(i[Ne])],[F,ai(i[ce])],[Bi,ai(i[Te])],[y,ai(i[xe])],[P,Ai(i[Ce])],[fi,ai(i[Se])]]);else for(var d in i)this.hasOwnProperty(d)&&typeof i[d]!==z&&(this[d]=i[d])}function ae(i,c,d,p){return this.get=function(w){return w?this.data.hasOwnProperty(w)?this.data[w]:void 0:this.data},this.set=function(w,h){return this.data[w]=h,this},this.setCH=function(w){return this.uaCH=w,this},this.detectFeature=function(){if(_&&_.userAgent==this.ua)switch(this.itemType){case k:_.brave&&typeof _.brave.isBrave==hi&&this.set(r,"Brave");break;case N:!this.get(e)&&D&&D[l]&&this.set(e,l),this.get(o)=="Macintosh"&&_&&typeof _.standalone!==z&&_.maxTouchPoints&&_.maxTouchPoints>2&&this.set(o,"iPad").set(e,f);break;case S:!this.get(r)&&D&&D[F]&&this.set(r,D[F]);break;case V:var w=this.data,h=function(b){return w[b].getItem().detectFeature().get()};this.set(k,h(k)).set(A,h(A)).set(N,h(N)).set(C,h(C)).set(S,h(S))}return this},this.parseUA=function(){return this.itemType!=V&&Oi.call(this.data,this.ua,this.rgxMap),this.itemType==k&&this.set(ci,Mi(this.get(s))),this},this.parseCH=function(){var w=this.uaCH,h=this.rgxMap;switch(this.itemType){case k:case C:var b=w[Ui]||w[zi],m;if(b)for(var u in b){var v=b[u].brand||b[u],T=b[u].version;this.itemType==k&&!/not.a.brand/i.test(v)&&(!m||/chrom/i.test(m)&&v!=Ki)&&(v=H(v,{Chrome:"Google Chrome",Edge:"Microsoft Edge","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"}),this.set(r,v).set(s,T).set(ci,Mi(T)),m=v),this.itemType==C&&v==Ki&&this.set(s,T)}break;case A:var q=w[y];q&&(q&&w[fi]=="64"&&(q+="64"),Oi.call(this.data,q+";",h));break;case N:if(w[l]&&this.set(e,l),w[o]&&(this.set(o,w[o]),!this.get(e)||!this.get(a))){var J={};Oi.call(J,"droid 9; "+w[o]+")",h),!this.get(e)&&J.type&&this.set(e,J.type),!this.get(a)&&J.vendor&&this.set(a,J.vendor)}if(w[P]){var wi;if(typeof w[P]!="string")for(var Pi=0;!wi&&Pi<w[P].length;)wi=H(w[P][Pi++],te);else wi=H(w[P],te);this.set(e,wi)}break;case S:var vi=w[F];if(vi){var gi=w[Bi];vi==Di&&(gi=parseInt(Mi(gi),10)>=13?"11":"10"),this.set(r,vi).set(s,gi)}this.get(r)==Di&&w[o]=="Xbox"&&this.set(r,"Xbox").set(s,void 0);break;case V:var be=this.data,X=function(le){return be[le].getItem().setCH(w).parseCH().get()};this.set(k,X(k)).set(A,X(A)).set(N,X(N)).set(C,X(C)).set(S,X(S))}return this},O.call(this,[["itemType",i],["ua",c],["uaCH",p],["rgxMap",d],["data",Oe(this,i)]]),this}function I(i,c,d){if(typeof i===$?(mi(i,!0)?(typeof c===$&&(d=c),c=i):(d=i,c=void 0),i=void 0):typeof i===Li&&!mi(c,!0)&&(d=c,c=void 0),d&&typeof d.append===hi){var p={};d.forEach(function(u,v){p[v]=u}),d=p}if(!(this instanceof I))return new I(i,c,d).getResult();var w=typeof i===Li?i:d&&d[Vi]?d[Vi]:_&&_.userAgent?_.userAgent:Y,h=new we(d,!0),b=c?Me(oe,c):oe,m=function(u){return u==V?function(){return new ae(u,w,b,h).set("ua",w).set(k,this.getBrowser()).set(A,this.getCPU()).set(N,this.getDevice()).set(C,this.getEngine()).set(S,this.getOS()).get()}:function(){return new ae(u,w,b[u],h).parseUA().get()}};return O.call(this,[["getBrowser",m(k)],["getCPU",m(A)],["getDevice",m(N)],["getEngine",m(C)],["getOS",m(S)],["getResult",m(V)],["getUA",function(){return w}],["setUA",function(u){return G(u)&&(w=u.length>qi?di(u,qi):u),this}]]).setUA(w),this}I.VERSION=ye,I.BROWSER=ui([r,s,ci,e]),I.CPU=ui([y]),I.DEVICE=ui([o,a,e,si,l,g,f,E,ni]),I.ENGINE=I.OS=ui([r,s]);const ri={EMAIL_SEND_OFF:0,EMAIL_SEND_HOURLY:1,EMAIL_SEND_3HOURLY:2,EMAIL_SEND_DAILY:3,EMAIL_SEND_WEEKLY:4},qe=[{text:x("notifications","Never"),value:ri.EMAIL_SEND_OFF},{text:x("notifications","1 hour"),value:ri.EMAIL_SEND_HOURLY},{text:x("notifications","3 hours"),value:ri.EMAIL_SEND_3HOURLY},{text:x("notifications","1 day"),value:ri.EMAIL_SEND_DAILY},{text:x("notifications","1 week"),value:ri.EMAIL_SEND_WEEKLY}],re={id:null,label:x("notifications","None")},Le=new I,se=Le.getBrowser(),ne=se.name==="Safari"||se.name==="Mobile Safari",De={name:"UserSettings",components:{NcCheckboxRadioSwitch:he,NcSelect:ge,NcSettingsSection:ke},setup(){const i=Ri(me("notifications","config")),c=Ri({secondary_speaker:Q.getItem("secondary_speaker")==="true",secondary_speaker_device:JSON.parse(Q.getItem("secondary_speaker_device"))??re}),d=ue([]);return{BATCHTIME_OPTIONS:qe,isSafari:ne,config:i,storage:c,devices:d}},methods:{t:x,async updateSettings(){try{const i=new FormData;i.append("batchSetting",this.config.setting_batchtime),i.append("soundNotification",this.config.sound_notification?"yes":"no"),i.append("soundTalk",this.config.sound_talk?"yes":"no"),await fe.post(ve("apps/notifications/api/v2/settings"),i),ji(x("notifications","Your settings have been updated."))}catch(i){yi(x("notifications","An error occurred while updating your settings.")),console.error(i)}},updateLocalSettings(){try{Q.setItem("secondary_speaker",this.storage.secondary_speaker),this.storage.secondary_speaker&&this.storage.secondary_speaker_device.id?Q.setItem("secondary_speaker_device",JSON.stringify(this.storage.secondary_speaker_device)):Q.removeItem("secondary_speaker_device"),ji(x("notifications","Your settings have been updated."))}catch(i){yi(x("notifications","An error occurred while updating your settings.")),console.error(i)}},async initializeDevices(){if(!(!ne&&navigator?.mediaDevices?.getUserMedia&&navigator?.mediaDevices?.enumerateDevices)||this.devices.length>0)return;let i=null;try{i=await navigator.mediaDevices.getUserMedia({audio:!0}),this.devices=(await navigator.mediaDevices.enumerateDevices()??[]).filter(c=>c.kind==="audiooutput").map(c=>({id:c.deviceId,label:c.label?c.label:c.fallbackLabel})).concat([re])}catch(c){yi(x("notifications","An error occurred while updating your settings.")),console.error("Error while requesting or initializing audio devices: ",c)}finally{i&&i.getTracks().forEach(c=>c.stop())}}}};var He=function(){var i=this,c=i._self._c;return c("NcSettingsSection",{attrs:{name:i.t("notifications","Notifications")}},[c("div",{staticClass:"notification-frequency__warning"},[i.config.is_email_set?i._e():c("strong",[i._v(i._s(i.t("notifications","You need to set up your email address before you can receive notification emails.")))])]),c("p",[c("label",{staticClass:"notification-frequency__label",attrs:{for:"notification_reminder_batchtime"}},[i._v(" "+i._s(i.t("notifications","Send email reminders about unhandled notifications after:"))+" ")]),c("select",{directives:[{name:"model",rawName:"v-model",value:i.config.setting_batchtime,expression:"config.setting_batchtime"}],staticClass:"notification-frequency__select",attrs:{id:"notification_reminder_batchtime",name:"notification_reminder_batchtime"},on:{change:[function(d){var p=Array.prototype.filter.call(d.target.options,function(w){return w.selected}).map(function(w){var h="_value"in w?w._value:w.value;return h});i.$set(i.config,"setting_batchtime",d.target.multiple?p:p[0])},function(d){return i.updateSettings()}]}},i._l(i.BATCHTIME_OPTIONS,function(d){return c("option",{key:d.value,domProps:{value:d.value}},[i._v(" "+i._s(d.text)+" ")])}),0)]),c("NcCheckboxRadioSwitch",{attrs:{checked:i.config.sound_notification},on:{"update:checked":[function(d){return i.$set(i.config,"sound_notification",d)},i.updateSettings]}},[i._v(" "+i._s(i.t("notifications","Play sound when a new notification arrives"))+" ")]),c("NcCheckboxRadioSwitch",{attrs:{checked:i.config.sound_talk},on:{"update:checked":[function(d){return i.$set(i.config,"sound_talk",d)},i.updateSettings]}},[i._v(" "+i._s(i.t("notifications","Play sound when a call started (requires Nextcloud Talk)"))+" ")]),i.config.sound_talk?[c("NcCheckboxRadioSwitch",{staticClass:"additional-margin-top",attrs:{checked:i.storage.secondary_speaker,disabled:i.isSafari},on:{"update:checked":[function(d){return i.$set(i.storage,"secondary_speaker",d)},i.updateLocalSettings]}},[i._v(" "+i._s(i.t("notifications","Also repeat sound on a secondary speaker"))+" ")]),i.isSafari?c("div",{staticClass:"notification-frequency__warning"},[c("strong",[i._v(i._s(i.t("notifications","Selection of the speaker device is currently not supported by Safari")))])]):i._e(),!i.isSafari&&i.storage.secondary_speaker?c("NcSelect",{attrs:{"input-id":"device-selector-audio-output",options:i.devices,label:"label","aria-label-combobox":i.t("notifications","Select a device"),clearable:!1,placeholder:i.t("notifications","Select a device")},on:{open:i.initializeDevices,input:i.updateLocalSettings},model:{value:i.storage.secondary_speaker_device,callback:function(d){i.$set(i.storage,"secondary_speaker_device",d)},expression:"storage.secondary_speaker_device"}}):i._e()]:i._e()],2)},ze=[],Ue=pe(De,He,ze,!1,null,"ec4573a7");const Be=Ue.exports;ki.prototype.t=t,ki.prototype.n=n,new ki({el:"#notifications-user-settings",render:i=>i(Be)});
//# sourceMappingURL=notifications-settings.mjs.map
