(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{424:function(t,e,i){function s(t,e){for(var i=0,s=t.length-1;s>=0;s--){var o=t[s];"."===o?t.splice(s,1):".."===o?(t.splice(s,1),i++):i&&(t.splice(s,1),i--)}if(e)for(;i--;i)t.unshift("..");return t}function o(t,e){if(t.filter)return t.filter(e);for(var i=[],s=0;s<t.length;s++)e(t[s],s,t)&&i.push(t[s]);return i}i(126),i(23),i(15),i(89),i(12),i(125),i(36),i(178),i(64),i(34),i(4),e.resolve=function(){for(var t="",e=!1,i=arguments.length-1;i>=-1&&!e;i--){var a=i>=0?arguments[i]:process.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,e="/"===a.charAt(0))}return(e?"/":"")+(t=s(o(t.split("/"),(function(t){return!!t})),!e).join("/"))||"."},e.normalize=function(t){var i=e.isAbsolute(t),r="/"===a(t,-1);return(t=s(o(t.split("/"),(function(t){return!!t})),!i).join("/"))||i||(t="."),t&&r&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,i){function s(t){for(var e=0;e<t.length&&""===t[e];e++);for(var i=t.length-1;i>=0&&""===t[i];i--);return e>i?[]:t.slice(e,i-e+1)}t=e.resolve(t).substr(1),i=e.resolve(i).substr(1);for(var o=s(t.split("/")),a=s(i.split("/")),r=Math.min(o.length,a.length),n=r,l=0;l<r;l++)if(o[l]!==a[l]){n=l;break}var u=[];for(l=n;l<o.length;l++)u.push("..");return(u=u.concat(a.slice(n))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),i=47===e,s=-1,o=!0,a=t.length-1;a>=1;--a)if(47===(e=t.charCodeAt(a))){if(!o){s=a;break}}else o=!1;return-1===s?i?"/":".":i&&1===s?"/":t.slice(0,s)},e.basename=function(t,e){var i=function(t){"string"!=typeof t&&(t+="");var e,i=0,s=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){i=e+1;break}}else-1===s&&(o=!1,s=e+1);return-1===s?"":t.slice(i,s)}(t);return e&&i.substr(-1*e.length)===e&&(i=i.substr(0,i.length-e.length)),i},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,i=0,s=-1,o=!0,a=0,r=t.length-1;r>=0;--r){var n=t.charCodeAt(r);if(47!==n)-1===s&&(o=!1,s=r+1),46===n?-1===e?e=r:1!==a&&(a=1):-1!==e&&(a=-1);else if(!o){i=r+1;break}}return-1===e||-1===s||0===a||1===a&&e===s-1&&e===i+1?"":t.slice(e,s)};var a="b"==="ab".substr(-1)?function(t,e,i){return t.substr(e,i)}:function(t,e,i){return e<0&&(e=t.length+e),t.substr(e,i)}},458:function(t,e){t.exports=[{text:"Introduction to SYTWS",items:[{text:"Apartados",link:"/temas/"},{text:"Intro a SYTWS",link:"/temas/introduccion-a-sytws/guia-docente.html"}]},{text:"Fundamentos",items:[{text:"Apartados",link:"/temas/introduccion-a-javascript/"},{text:"GitHub Cli",link:"/temas/introduccion-a-javascript/github-cli/"}]},{text:"Asynchronous JS",items:[{text:"Apartados",link:"/temas/async/"},{text:"The Event Loop",link:"/temas/async/event-lopp/"},{text:"Event Emitters",link:"/temas/async/event-emitter"},{text:"Web Workers",link:"/temas/async/web-workers"}]},{text:"Servicios y Aplicaciones Web",items:[{text:"Jekyll",link:"/temas/web/jekyll.html"},{text:"GitHub REST API Examples",link:"/temas/introduccion-a-javascript/github-cli/gh-api"},{text:"GitHub GraphQL API Examples",link:"/temas/introduccion-a-javascript/github-cli/gh-api-graphql"},{text:"jq Introduction",link:"/temas/web/jq-introduction"},{text:"Introduction to OAuth",link:"/temas/web/netlify-github-oauth.html"},{text:"Introduction to Serverless",link:"/temas/web/serverless.html"},{text:"Authenticate users with Netlify Identity",link:"/temas/web/netlify/authenticate-users-with-netlify-identity"},{text:"Introduction to Next.js",link:"/temas/web/nextjs/"},{text:"Payment Platforms: Stripe",link:"/temas/web/stripe.html"},{text:"Introduction to Firebase",link:"/temas/web/firebase.html"},{text:"Tailwind CSS",link:"/temas/web/tailwind/"}]}]},560:function(t,e,i){var s={networks:["telegram","whatsapp","email","twitter"],locale:"en-US",title:"SYTWS",title_separator:"-",name:"Sistemas y Tecnologías Web en el Servidor",description:"Itinerario de Computación. 2º cuatrimestre",url:null,baseurl:"",repository:"ULL-MII-SYTWS/ull-mii-sytws.github.io",teaser:null,logoLightBackground:"/images/escuela-politecnica-ingenieria-original.png",logoDarkBackground:"/images/escuela-politecnica-ingenieria-positivo.png",logo:"/images/escuela-politecnica-ingenieria-positivo.png",author:{name:" Casiano Rodríguez León",avatar:"/images/bio-photo.jpg",home:"https://crguezl.github.io",bio:null,location:"San Cristóbal de La Laguna",email:null,links:[{label:"Email",icon:"fas fa-fw fa-envelope-square"},{label:"Website",icon:"fas fa-fw fa-link",url:"https://crguezl.github.io"},{label:"Twitter",icon:"fab fa-fw fa-twitter-square"},{label:"Facebook",icon:"fab fa-fw fa-facebook-square"},{label:"GitHub",icon:"fab fa-fw fa-github"},{label:"Instagram",icon:"fab fa-fw fa-instagram"}]},nav:[{text:"Clases",link:"/clases/index.html"},{text:"Labs",link:"/practicas/index.html"},{text:"Temas",items:i(458)},{text:"Teams",link:"/teams/index.html"},{text:"Context",items:[{text:"Recursos",items:[{text:"ULL",link:"/recursos/index.html/#recursos-ull"},{text:"GitHub",link:"/recursos/index.html/#recursos-github"}]},{text:"Horarios",items:[{text:"Google Cal, Cal Acad y Exámenes",link:"/horarios/index.html"},{text:"Horarios del Master",link:"https://www.ull.es/masteres/ingenieria-informatica/informacion-academica/horarios-y-calendario-examenes/"}]},{text:"Referencias",link:"/referencias/index.html"}]},{text:"GitHub",items:[{text:"ULL-MII-SYTWS-2223",items:[{text:"Organization",link:"https://github.com/ULL-MII-SYTWS-2223"},{text:"Teams",link:"/teams/"},{text:"Projects",link:"https://github.com/orgs/ULL-MII-SYTWS-2223/projects"},{text:"Classroom",link:"https://classroom.github.com/classrooms/108465218-ull-mii-sytws-2223"},{text:"Template Org",link:"https://github.com/ULL-MII-SYTWS"}]},{text:"Apuntes Repo",items:[{text:"Deploy at GH",link:"https://ull-mii-sytws.github.io"},{text:"Deploy at netlify",link:"https://sytws.netlify.app/"},{text:"Source",link:"https://github.com/ULL-MII-SYTWS/vuepress-apuntes"},{text:"Generated repo",link:"https://github.com/ULL-MII-SYTWS/ull-mii-sytws.github.io"}]},{text:"Teacher",items:[{text:"ULL-MFP-TFM-Y-PCE-2223",link:"https://github.com/ULL-MFP-TFM-Y-PCE-2223/private"},{text:"Global Campus Teachers",link:"https://github.com/GitHub-Global-Campus/Global-Campus-Teachers/discussions"}]}]},{text:"Campus Virtual",items:[{text:"SYTWS en el Campus Virtual",link:"https://campusdoctoradoyposgrado2223.ull.es/course/view.php?id=2223110630"},{text:"Guía Docente",items:[{text:"Guía",link:"https://www.ull.es/apps/guias/guias/view_guide_course/2223/835941105/"},{text:"Casiano",link:"https://www.ull.es/apps/guias/guias/view_teacher_niu/798/crguezl/"},{text:"Horario de Tutorías",link:"https://www.ull.es/apps/guias/guias/view_guide_course/2223/835941105/3/"}]},{text:"Campus",items:[{text:"Participantes",link:"https://campusdoctoradoyposgrado2223.ull.es/user/index.php?id=2223110630"},{text:"Calificador",link:"https://campusdoctoradoyposgrado2223.ull.es/grade/report/user/index.php?id=2223110630"},{text:"Tareas",link:"https://campusdoctoradoyposgrado2223.ull.es/mod/assign/index.php?id=2223110630"},{text:"Foros",link:"https://campusdoctoradoyposgrado2223.ull.es/mod/forum/index.php?id=2223110630"},{text:"Banco de Preguntas",link:"https://campusdoctoradoyposgrado2223.ull.es/question/edit.php?courseid=2223110630"},{text:"Introducción a SYTWS",link:"https://campusdoctoradoyposgrado2223.ull.es/course/view.php?id=2223110630#section-12"}]},{text:"ULL",items:[{text:"Calendario Académico",link:"https://www.ull.es/estudios-docencia/calendario-academico/"},{text:"Portafirmas",link:"https://sede.ull.es/ecivilis-signature-inbox-application/inbox.html"},{text:"Editor cvn",link:"https://cvn.fecyt.es/editor/"}]},{text:"TFG",link:"https://campusdoctoradoyposgrado2223.ull.es/grade/report/user/index.php?id=2223090070&userid=254"},{text:"Campus de Masters",link:"https://campusdoctoradoyposgrado2223.ull.es/"},{text:"Campus de ESIT",link:"https://campusingenieriaytecnologia2223.ull.es/"},{text:"DMSI",link:"https://campusingenieriaytecnologia2223.ull.es/course/view.php?id=2223090033"},{text:"AET",link:"https://campusdoctoradoyposgrado2223.ull.es/course/view.php?id=2223110052"},{text:"SYTWS 2122",link:"https://ull-mii-sytws-2122.github.io/"}]},{text:"Google",items:[{text:"Meet",link:"https://meet.google.com/bhv-togn-ynm"},{text:"Chat",link:"https://mail.google.com/chat/u/1/#chat/welcome"},{text:"Spreadsheets",link:"https://docs.google.com/spreadsheets/d/1aSoJX0QO9gTsGmK_TUXbiNTlBj8Ka4IEJQwJYkY6x5s/edit#gid=1724628448"},{text:"Community",link:"https://currents.google.com/u/1/communities/104629784252354892324"},{text:"Vídeos",items:[{text:"Curso 21/22",link:"https://youtube.com/playlist?list=PLuPGCp-dfrUQbbnbT_8qHK1WQYurYwBEY"},{text:"Curso 20/21",link:"https://www.youtube.com/playlist?list=PLuPGCp-dfrUTzN_o2beArY1QoFUTGH-yd"},{text:"Curso 19/20",link:"https://youtube.com/playlist?list=PLuPGCp-dfrUTByhC5b9vInei9OzdYSBs7"}]}]}],encoding:"utf-8",singular:{practicas:"Práctica",temas:"Tema",clases:"Clase"},lsi:!1,excerpt_separator:"\n\n",incremental:!1,calendario_academico:"https://www.ull.es/estudios-docencia/calendario-academico/",horarios_master:"https://www.ull.es/masteres/ingenieria-informatica/informacion-academica/horarios-y-calendario-examenes/",horarios_tutorias:"https://www.ull.es/apps/guias/guias/view_guide/24127/",cita_previa:"https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUd1YlJSLURtcE5JfGRlZmF1bHR8ZmNiMWNmMTE4MjNjNzk1MWQwZGQyYTI4ZjZjYjZjY2E",google_plus:"https://currents.google.com/u/1/communities/104629784252354892324",organization:{url:"https://github.com/ULL-MII-SYTWS-2223",name:"ULL-MII-SYTWS-2223",main:"https://github.com/ULL-MII-SYTWS/ull-mii-sytws.github.io/tree/main/"},apuntes_repo:"https://github.com/ULL-MII-SYTWS/ull-mii-sytws.github.io",campus_virtual:"https://campusdoctoradoyposgrado2223.ull.es/course/view.php?id=2223110630",calificador:"https://campusdoctoradoyposgrado2223.ull.es/grade/report/user/index.php?id=2223110630",participantes:"https://campusdoctoradoyposgrado2223.ull.es/user/index.php?id=2223110630",tareas:"https://campusdoctoradoyposgrado2223.ull.es/mod/assign/index.php?id=2223110630",foros:"https://campusdoctoradoyposgrado2223.ull.es/mod/forum/index.php?id=2223110630",profesor:"https://www.ull.es/apps/guias/guias/view_teacher_niu/745/(%3FPcrguezl.*)/",teacher_profile_edit:"https://www.ull.es/apps/guias/teachers/view_profile/",alu_github:"https://campusdoctoradoyposgrado2223.ull.es/mod/assign/view.php?id=21205",udv:"https://udv.ull.es/portal/",profesor_github:"crguezl",chat:"https://chat.google.com/u/1/room/AAAANx1edCg",bull_puntoq:"https://www.ull.es/servicios/biblioteca/servicios/puntoq/",bull_permanente:"https://puntoq.ull.es/permalink/f",covid_ull:"https://campusvirtual.ull.es/doctoradoyposgrado/course/view.php?id=201913946",turnitin:"https://docs.google.com/forms/d/e/1FAIpQLSfEyKnNYAXH5lH9eTh6de6qu5dP-lp33ul4QE8PrFLqeXT66A/viewform",dsi:{apuntes:"https://ull-mii-dsi-1819.github.io/dsi-1819/"},sytws:{url:"https://ull-mii-sytws-1920.github.io/"},disqus:{url:"https://procesadores-de-lenguajes.disqus.com/embed.js",comments:!0},classroom:{url:"https://classroom.github.com/classrooms/108465218-ull-mii-sytws-2223",name:"ULL-MII-SYTWS-2223"}};t.exports=s},669:function(t,e,i){"use strict";i.r(e);i(64),i(39),i(424);var s=i(560),o=i.n(s),a={computed:{campus:function(){return this.$frontmatter.campus},repos:function(){return"https://github.com/orgs/".concat(o.a.organization.name,"/repositories?q=").concat(this.$frontmatter.key)}}},r=i(9),n=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",[e("li",[e("a",{attrs:{href:this.repos,target:"_blank",rel:"noopener noreferrer"}},[this._v("Repos")])])]),this._v(" "),e("div",{staticClass:"language-js",staticStyle:{color:"white"}})])}),[],!1,null,null,null);e.default=n.exports}}]);