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
        connect-src https: wss: data:;
        img-src 'self' data: https:;
        script-src 'self' blob: https://test.pocketnet.app https://pocketnet.app https://player.vimeo.com https://www.youtube.com https://s.ytimg.com https://cdn.rawgit.com https://embed.tawk.to https://cdn.jsdelivr.net 'unsafe-eval' 'unsafe-inline';
        style-src 'self'  https://use.fontawesome.com https://fonts.googleapis.com https://cdn.jsdelivr.net 'unsafe-inline';
        font-src 'self' data: https://fonts.gstatic.com https://static-v.tawk.to https://use.fontawesome.com;
        media-src blob: *">

        <?php 
        
            require_once('php/og.php'); 

            $og = new OG($_GET);

            $og->get();
            $og->echotags();
        ?>

        <link rel="stylesheet" href="css/normalize.css?v=370177672092">
<link rel="stylesheet" href="css/tooltipster.core.min.css?v=863649793014">
<link rel="stylesheet" href="css/tooltipster.bundle.min.css?v=579779039937">
<link rel="stylesheet" href="css/main.css?v=396276494499">
<link rel="stylesheet" href="css/stblack.css?v=294456091941">
<link rel="stylesheet" href="css/plyr.css?v=476084630914">
<link rel="stylesheet" href="css/medium/medium-editor.css?v=674352481094">
<link rel="stylesheet" href="css/medium/medium-editor-insert-plugin.css?v=133528228581">
<link rel="stylesheet" href="js/vendor/DateTimePicker.min.css?v=79825115805">
<link rel="stylesheet" href="css/medium/beagle.css?v=550234643098">


        <link rel="icon" href="./favicon.svg" sizes="any" type="image/svg+xml">
        <link rel="stylesheet" href="css/fontawesome/css/all.css">
        <link rel="stylesheet" href="peertube/video-embed.css">
        <script src="js/vendor/device.min.js?v=136"></script>
        <script src="js/vendor/modernizr-2.8.3.min.js?v=136"></script>


       
       
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


        <div id="matrix" class="matrix"></div>

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
        <script src="chat/matrix-element.min.js"></script>
        <script src="js/widgets.js?v=136"></script>
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

        <script join src="js/vendor/underscore-min.js?v=7"></script>
<script join src="js/vendor/fingerprint2.js?v=7"></script>
<script join src="js/vendor/tooltipster.core.js?v=7"></script>
<script join src="js/vendor/tooltipster.bundle.js?v=7"></script>
<script join src="js/vendor/jquery-ui.min.js?v=7"></script>
<script join src="js/vendor/imagesloaded.pkgd.min.js?v=7"></script>
<script join src="js/vendor/timer.js?v=7"></script>
<script join src="js/vendor/ion.sound/ion.sound.min.js?v=7"></script>
<script join src="js/vendor/aesjs.js?v=7"></script>
<script join src="js/vendor/linkify.min.js?v=7"></script>
<script join src="js/vendor/linkify-html.min.js?v=7"></script>
<script join src="js/lib/pocketnet/btc17.js?v=7"></script>
<script join src="js/lib/pocketnet/htls.js?v=7"></script>
<script join src="js/lib/pocketnet/buffer.js?v=7"></script>
<script join src="js/lib/client/system16.js?v=7"></script>
<script join src="js/lib/client/api.js?v=7"></script>
<script join src="js/vendor/pbkdf2.js?v=7"></script>
<script join src="js/vendor/sha1.js?v=7"></script>
<script join src="js/vendor/jdenticon.js?v=7"></script>
<script join src="js/vendor/paste.js?v=7"></script>
<script join src="js/vendor/jquery.md5.js?v=7"></script>
<script join src="js/vendor/jquery.animate-number.js?v=7"></script>
<script join src="js/vendor/jquery.touchSwipe.js?v=7"></script>
<script join src="js/vendor/emojione.js?v=7"></script>
<script join src="js/vendor/plyr.js?v=7"></script>
<script join src="js/vendor/reconnectingwebsocket.js?v=7"></script>
<script join src="js/vendor/rtc/db.js?v=7"></script>
<script join src="js/vendor/xss.min.js?v=7"></script>
<script join src="js/vendor/jquery.mark.js?v=7"></script>
<script join src="js/vendor/hc-sticky.js?v=7"></script>
<script join src="js/vendor/DateTimePicker.min.js?v=7"></script>
<script join src="js/vendor/moment.min.js?v=7"></script>
<script join src="js/vendor/axios.js?v=7"></script>

        
        <script>window.testpocketnet = true;</script><script>window.design = true;</script><script join src="js/functions.js?v=557341178096"></script>
<script join src="js/user.js?v=853738732726"></script>
<script join src="js/module.js?v=302669060113"></script>
<script join src="js/navn.js?v=691391605437"></script>
<script join src="js/validation.js?v=147022944016"></script>
<script join src="js/_map.js?v=436929104163"></script>
<script join src="js/localization.js?v=165731951632"></script>
<script join src="js/kit.js?v=213478499590"></script>
<script join src="js/satolist.js?v=811701396015"></script>
<script join src="js/messenger2/clientrtc.js?v=357490973041"></script>
<script join src="peertube/video-embed.bundle.js?v=426271316333"></script>
<script join src="js/peertube-master.js?v=24502776973"></script>
<script join src="js/app.js?v=174486312926"></script>
<script join src="js/main.js?v=77196863098"></script>



        <script type="text/javascript">

            topPreloader(100);
            
        </script>

        

       

    </body>
</html>
