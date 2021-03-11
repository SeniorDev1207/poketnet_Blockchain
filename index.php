<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Cache-Control" content="no-cache">
        <meta http-equiv='expires' content='0'>

      

        <title>POCKETNET</title>
        <meta name="description" content="A Revolutionary anti-censorship decentralized publishing and social platform. Based on the blockchain technology, it runs on a set of computers around the world, not controlled by any single entity. Self-policed by users with good reputation where nobody records your keystrokes, viewing habits or searches. ">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <meta name="fragment" content="!">
        <meta name="keywords" content="Blockchain, Decentralized, Delete Facebook, Alternative Social Media, Social Network, Social Platform, No Censorship, Online Social Network, Facebook Alternative, Reddit Alternative, Twitter Alternative, Social Sharing Platform, Decentralized Social Network, Blockchain Social Network " />

        <meta http-equiv="Content-Security-Policy" content="
        default-src https: 'self'; 
        connect-src https: wss:;
        img-src 'self' data: https:;
        script-src 'self' https://pocketnet.app https://player.vimeo.com https://www.youtube.com https://s.ytimg.com https://cdn.rawgit.com https://embed.tawk.to https://cdn.jsdelivr.net 'unsafe-eval' 'unsafe-inline';
        style-src 'self'  https://use.fontawesome.com https://fonts.googleapis.com https://cdn.jsdelivr.net 'unsafe-inline';
        font-src 'self' https://fonts.gstatic.com https://static-v.tawk.to https://use.fontawesome.com;
        media-src *">

        <?php 
        
            require_once('php/og.php'); 

            $og = new OG($_GET);

            $og->get();
            $og->echotags();
        ?>

        <link rel="stylesheet" href="css/normalize.css?v=351441541498">
<link rel="stylesheet" href="css/tooltipster.core.min.css?v=900150716765">
<link rel="stylesheet" href="css/tooltipster.bundle.min.css?v=634317412002">
<link rel="stylesheet" href="css/main.css?v=815525481864">
<link rel="stylesheet" href="css/stblack.css?v=590048062458">
<link rel="stylesheet" href="css/plyr.css?v=484170703322">
<link rel="stylesheet" href="css/jquery-ui.min.css?v=951794162085">
<link rel="stylesheet" href="css/medium/medium-editor.css?v=612869629984">
<link rel="stylesheet" href="css/medium/medium-editor-insert-plugin.css?v=801020340183">
<link rel="stylesheet" href="css/medium/beagle.css?v=98661337360">

        
           
        <link rel="stylesheet" href="css/fontawesome/css/all.css">

        <script src="js/vendor/device.min.js?v=136"></script>
        <script src="js/vendor/modernizr-2.8.3.min.js?v=136"></script>
        <script src="https://pocketnet.app/js/widgets.js?v=136"></script>
        
       
    </head>
    <body id="application" class="menu-hide">

        <div id="headerWrapper">
        </div>

        <div id="menuWrapper">
        </div> 

        <div id="panelWrapper">
        </div> 

        <div id="navigationWrapper">
        </div> 

        <div class="contentWrapper"> 
            <div id="content">                
            </div>
        </div>

        <div id="footerWrapper">
            
        </div>

        <div class="bodyshadow">
        </div>     

        <div class="topPreloader" id="_topPreloader">
        </div>

        <div class="chats">
        </div>

        <div id="globalpreloader">
            <div class="table">
                <div>
                    <div class="icon">
                        <i class="fas fa-spinner fa-spin"></i>
                    </div>
                </div>
               
            </div>
        </div>


        <!-- <script src="cordova.js"></script>-->
                
        
        <script src="js/vendor/jquery-1.11.3.min.js?v=12"></script>
        <script src="js/vendor/sanitize-html.min.js"></script>


        <script type="text/javascript">

            _Node = false;
            
            topPreloader = function(percent){
                var el = $('#_topPreloader');


                var div = $("<div>");
                    el.removeClass('complete');
                    el.append(div);

                    var inip = el.attr('percent') || 0;

                    el.attr('percent', percent); 

                    div.width((percent - inip) + "%")

                if(percent <= 0 || percent >= 100){


                    el.addClass('complete');
                    el.attr('percent', 0); 

                    setTimeout(function(){

                        el.fadeOut(300);

                        setTimeout(function(){


                            el.html('');

                        },300)

                    },500)
                    
                }
                else{
                    el.fadeIn(1);
                }
                
            }

            topPreloader(15)
            
        </script>

        <script join src="js/vendor/underscore-min.js?v=5"></script>
<script join src="js/vendor/fingerprint2.js?v=5"></script>
<script join src="js/vendor/tooltipster.core.js?v=5"></script>
<script join src="js/vendor/tooltipster.bundle.js?v=5"></script>
<script join src="js/vendor/jquery-ui.min.js?v=5"></script>
<script join src="js/vendor/imagesloaded.pkgd.min.js?v=5"></script>
<script join src="js/vendor/timer.js?v=5"></script>
<script join src="js/vendor/ion.sound/ion.sound.min.js?v=5"></script>
<script join src="js/vendor/aesjs.js?v=5"></script>
<script join src="js/vendor/linkify.min.js?v=5"></script>
<script join src="js/vendor/linkify-html.min.js?v=5"></script>
<script join src="js/lib/pocketnet/btc17.js?v=5"></script>
<script join src="js/lib/pocketnet/buffer.js?v=5"></script>
<script join src="js/lib/client/system16.js?v=5"></script>
<script join src="js/lib/client/api.js?v=5"></script>
<script join src="js/vendor/pbkdf2.js?v=5"></script>
<script join src="js/vendor/sha1.js?v=5"></script>
<script join src="js/vendor/jdenticon.js?v=5"></script>
<script join src="js/vendor/paste.js?v=5"></script>
<script join src="js/vendor/jquery.md5.js?v=5"></script>
<script join src="js/vendor/jquery.animate-number.js?v=5"></script>
<script join src="js/vendor/jquery.touchSwipe.js?v=5"></script>
<script join src="js/vendor/emojione.js?v=5"></script>
<script join src="js/vendor/plyr.js?v=5"></script>
<script join src="js/vendor/reconnectingwebsocket.js?v=5"></script>
<script join src="js/vendor/rtc/db.js?v=5"></script>
<script join src="js/vendor/xss.min.js?v=5"></script>
<script join src="js/vendor/jquery.mark.js?v=5"></script>
<script join src="js/vendor/hc-sticky.js?v=5"></script>
<script join src="js/vendor/axios.js"></script>

        
        <script>window.design = true;</script><script join src="js/functions.js?v=765516666905"></script>
<script join src="js/user.js?v=765548257891"></script>
<script join src="js/module.js?v=724804010968"></script>
<script join src="js/navn.js?v=237029943084"></script>
<script join src="js/validation.js?v=72109173672"></script>
<script join src="js/_map.js?v=638006872287"></script>
<script join src="js/localization.js?v=240327662162"></script>
<script join src="js/kit.js?v=352303477417"></script>
<script join src="js/satolist.js?v=155647307835"></script>
<script join src="js/messenger2/clientrtc.js?v=536411995407"></script>
<script join src="js/peertube-master.js?v=128971881959"></script>
<script join src="js/app.js?v=207344366825"></script>
<script join src="js/main.js?v=247873088062"></script>



        <script type="text/javascript">

            topPreloader(100);
            
        </script>

        

       

    </body>
</html>
