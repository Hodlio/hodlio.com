module.exports = function getWelcomeEmail(emailAddress) {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black" /><meta name="format-detection" content="telephone=no" /><title>Welcome to Hodlio!</title><style type="text/css">
        /* Resets */
        .ReadMsgBody { width: 100%; background-color: #ebebeb;}
        .ExternalClass {width: 100%; background-color: #ebebeb;}
        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height:100%;}
        a[x-apple-data-detectors]{
            color:inherit !important;
            text-decoration:none !important;
            font-size:inherit !important;
            font-family:inherit !important;
            font-weight:inherit !important;
            line-height:inherit !important;
        }        
        body {-webkit-text-size-adjust:none; -ms-text-size-adjust:none;}
        body {margin:0; padding:0;}
        .yshortcuts a {border-bottom: none !important;}
        .rnb-del-min-width{ min-width: 0 !important; }

        /* Add new outlook css start */
        .templateContainer{
            max-width:590px !important;
            width:auto !important;
        }
        /* Add new outlook css end */

        /* Image width by default for 3 columns */
        img[class="rnb-col-3-img"] {
        max-width:170px;
        }

        /* Image width by default for 2 columns */
        img[class="rnb-col-2-img"] {
        max-width:264px;
        }

        /* Image width by default for 2 columns aside small size */
        img[class="rnb-col-2-img-side-xs"] {
        max-width:180px;
        }

        /* Image width by default for 2 columns aside big size */
        img[class="rnb-col-2-img-side-xl"] {
        max-width:350px;
        }

        /* Image width by default for 1 column */
        img[class="rnb-col-1-img"] {
        max-width:550px;
        }

        /* Image width by default for header */
        img[class="rnb-header-img"] {
        max-width:590px;
        }

        /* Ckeditor line-height spacing */
        .rnb-force-col p, ul, ol{margin:0px!important;}
        .rnb-del-min-width p, ul, ol{margin:0px!important;}

        /* tmpl-2 preview */
        .rnb-tmpl-width{ width:100%!important;}

        /* tmpl-11 preview */
        .rnb-social-width{padding-right:15px!important;}

        /* tmpl-11 preview */
        .rnb-social-align{float:right!important;}

        @media only screen and (min-width:590px){
        /* mac fix width */
        .templateContainer{width:590px !important;}
        }

        @media screen and (max-width: 360px){
        /* yahoo app fix width "tmpl-2 tmpl-10 tmpl-13" in android devices */
        .rnb-yahoo-width{ width:360px!important;}
        }

        @media screen and (max-width: 380px){
        /* fix width and font size "tmpl-4 tmpl-6" in mobile preview */
        .element-img-text{ font-size:24px!important;}
        .element-img-text2{ width:230px!important;}
        .content-img-text-tmpl-6{ font-size:24px!important;}
        .content-img-text2-tmpl-6{ width:220px!important;}
        }

        @media screen and (max-width: 480px) {
        td[class="rnb-container-padding"] {
        padding-left: 10px !important;
        padding-right: 10px !important;
        }

        /* force container nav to (horizontal) blocks */
        td[class="rnb-force-nav"] {
        display: block;
        }
        }

        @media only screen and (max-width : 600px) {

        /* center the address &amp; social icons */
        .rnb-text-center {text-align:center !important;}

        /* force container columns to (horizontal) blocks */
        td[class~="rnb-force-col"] {
        display: block;
        padding-right: 0 !important;
        padding-left: 0 !important;
        width:100%;
        }

        table[class~="rnb-container"] {
         width: 100% !important;
        }

        table[class="rnb-btn-col-content"] {
        width: 100% !important;
        }
        table[class="rnb-col-3"] {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;

        /* change left/right padding and margins to top/bottom ones */
        margin-bottom: 10px;
        padding-bottom: 10px;
        /*border-bottom: 1px solid #eee;*/
        }

        table[class="rnb-last-col-3"] {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
        }

        table[class~="rnb-col-2"] {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;

        /* change left/right padding and margins to top/bottom ones */
        margin-bottom: 10px;
        padding-bottom: 10px;
        /*border-bottom: 1px solid #eee;*/
        }

        table[class="rnb-col-2-noborder-onright"] {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;

        /* change left/right padding and margins to top/bottom ones */
        margin-bottom: 10px;
        padding-bottom: 10px;
        }

        table[class="rnb-col-2-noborder-onleft"] {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;

        /* change left/right padding and margins to top/bottom ones */
        margin-top: 10px;
        padding-top: 10px;
        }

        table[class="rnb-last-col-2"] {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
        }

        table[class="rnb-col-1"] {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
        }

        img[class="rnb-col-3-img"] {
        /**max-width:none !important;**/
        width:100% !important;
        }

        img[class="rnb-col-2-img"] {
        /**max-width:none !important;**/
        width:100% !important;
        }

        img[class="rnb-col-2-img-side-xs"] {
        /**max-width:none !important;**/
        width:100% !important;
        }

        img[class="rnb-col-2-img-side-xl"] {
        /**max-width:none !important;**/
        width:100% !important;
        }

        img[class="rnb-col-1-img"] {
        /**max-width:none !important;**/
        width:100% !important;
        }

        img[class="rnb-header-img"] {
        /**max-width:none !important;**/
        width:100% !important;
        margin:0 auto;
        }

        img[class="rnb-logo-img"] {
        /**max-width:none !important;**/
        width:100% !important;
        }

        td[class="rnb-mbl-float-none"] {
        float:inherit !important;
        }

        .img-block-center{text-align:center!important;}

        .logo-img-center
        {
            float:inherit!important;
        }

        /* tmpl-11 preview */
        .rnb-social-align{margin:0 auto!important; float:inherit!important;}

        /* tmpl-11 preview */
        .rnb-social-center{display:inline-block;}

        /* tmpl-11 preview */
        .social-text-spacing{margin-bottom:0px!important; padding-bottom:0px!important;}

        /* tmpl-11 preview */
        .social-text-spacing2{padding-top:15px!important;}

    }</style><!--[if gte mso 11]><style type="text/css">table{border-spacing: 0; }table td {border-collapse: separate;}</style><![endif]--><!--[if !mso]><!--><style type="text/css">table{border-spacing: 0;} table td {border-collapse: collapse;}</style> <!--<![endif]--><!--[if gte mso 15]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--></head><body>

<table border="0" align="center" width="100%" cellpadding="0" cellspacing="0" class="main-template" bgcolor="#f9fafc" style="background-color:#f9fafc;">

    <tbody><tr style="display:none !important; font-size:1px; mso-hide: all;"><td></td><td></td></tr>
    <tr>
        <td align="center" valign="top">
        <!--[if gte mso 9]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="590" style="width:590px;">
                        <tr>
                        <td align="center" valign="top" width="590" style="width:590px;">
                        <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="max-width:590px!important; width: 590px;">
        <tbody><tr>

        <td align="center" valign="top" bgcolor="#f9fafc" style="background-color:#f9fafc;">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px; background-color:#f9fafc;" name="Layout_0" id="Layout_0">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" bgcolor="#f9fafc" style="min-width:590px; background-color:#f9fafc;">
                        <table width="100%" cellpadding="0" border="0" height="30" cellspacing="0" bgcolor="#f9fafc" style="background-color:#f9fafc;">
                            <tbody><tr>
                                <td valign="top" height="30">
                                    <img width="20" height="30" style="display:block; max-height:30px; max-width:20px;" alt="" src="http://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top" bgcolor="#f9fafc" style="background-color:#f9fafc;">

            <div>
                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#f9fafc" style="min-width:590px; background-color:#f9fafc;" name="Layout_1" id="Layout_1">
                <tbody><tr>
                    <td class="rnb-del-min-width" align="center" valign="top" bgcolor="#f9fafc" style="min-width:590px; background-color: #f9fafc;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#ffffff" style="background-color: rgb(255, 255, 255); border-radius: 0px; padding-left: 20px; padding-right: 20px; border-collapse: separate;">
                            <tbody><tr>
                                <td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr>
                            <tr>
                                <td valign="top" class="rnb-container-padding" bgcolor="#ffffff" style="background-color: #ffffff;" align="left">
                                    <table width="100%" cellpadding="0" border="0" align="center" cellspacing="0">
                                        <tbody><tr>
                                            <td valign="top" align="center">
                                                <table cellpadding="0" border="0" align="center" cellspacing="0" class="logo-img-center"> 
                                                    <tbody><tr>
                                                        <td valign="middle" align="center">
                                                            <div style="border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block; " cellspacing="0" cellpadding="0" border="0"><div><img width="550" vspace="0" hspace="0" border="0" alt="Hodlio" style="float: left;max-width:550px;display:block;" class="rnb-logo-img" src="http://img.mailinblue.com/1850043/images/rnb/original/5a2c75c4e694aa1495510e68.png"></div></div></td>
                                                    </tr>
                                                </tbody></table>
                                                </td>
                                        </tr>
                                    </tbody></table></td>
                            </tr>
                            <tr>
                                <td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            <!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
        </div></td>
    </tr><tr>

        <td align="center" valign="top" bgcolor="#f9fafc" style="background-color:#f9fafc;">

            <div>

                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            
            <table width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#f9fafc" style="background-color:#f9fafc;" name="Layout_" id="Layout_"><tbody><tr>
                    <td align="center" valign="top" bgcolor="#f9fafc" style="background-color: #f9fafc;"><table border="0" width="100%" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#ffffff" style="height: 0px; background-color: rgb(255, 255, 255); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;"><tbody><tr>
                                <td class="rnb-container-padding" bgcolor="#ffffff" style="background-color: #ffffff; font-size: px;font-family: ; color: ;">

                                    <table border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container" align="center" style="margin:auto;">
                                        <tbody><tr>

                                            <td class="rnb-force-col" align="center">

                                                <table border="0" cellspacing="0" cellpadding="0" align="center" class="rnb-col-1">

                                                    <tbody><tr>
                                                        <td height="10"></td>
                                                    </tr>

                                                    <tr>
                                                        <td style="font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:center;">

                                                            <span style="color:#3c4858;"><strong><span style="font-size:24px;">Thanks for signing up!</span></strong></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="10"></td>
                                                    </tr>
                                                    </tbody></table>
                                                </td></tr>
                                    </tbody></table></td>
                            </tr>

                        </tbody></table>

                    </td>
                </tr>

            </tbody></table><!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
        </div></td>
    </tr><tr>

        <td align="center" valign="top" bgcolor="#f9fafc" style="background-color:#f9fafc;">

            <div>
                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#f9fafc" style="min-width:100%; background-color:#f9fafc;" name="Layout_2" id="Layout_2">
                <tbody><tr>
                    <td class="rnb-del-min-width" align="center" valign="top" bgcolor="#f9fafc" style="background-color: #f9fafc;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#ffffff" style="max-width: 100%; min-width: 100%; table-layout: fixed; background-color: rgb(255, 255, 255); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;">
                            <tbody><tr>
                                <td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr>
                            <tr>
                                <td valign="top" class="rnb-container-padding" bgcolor="#ffffff" style="background-color: #ffffff;" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container">
                                        <tbody><tr>
                                            <td class="rnb-force-col" width="550" valign="top" style="padding-right: 0px;">
                                                <table border="0" valign="top" cellspacing="0" cellpadding="0" align="left" class="rnb-col-1" width="550">
                                                    <tbody><tr>
                                                        <td style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858; line-height: 21px;">
                                                            <div>
                                                            <div>Hi,<br><br>We founded Hodlio with the goal of being the best cryptocurrency portfolio management platform on the internet. <br><br>If you'd like to offer your suggestions or would just like to say hello then please drop us an email at <a style="text-decoration: underline; color: rgb(52, 153, 219);" href="mailto:team@hodlio.com">team@hodlio.com</a>.<br><br></div>
                                                            <div>The best way to get started with Hodlio is to add some stuff to your portfolio. You'll now be able to log in using the button below or at <a href="https://www.hodlio.com/login" style="text-decoration: underline; color: rgb(52, 153, 219);">https://www.hodlio.com/login</a> with your email address <a href="mailto:{EMAIL}" style="text-decoration: underline; color: rgb(102, 102, 102);">{EMAIL}</a> and the password you created during the signup process.</div></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="10" class="col_td_gap" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr>
                                                        <td valign="top">
                                                            <table cellpadding="0" border="0" align="left" cellspacing="0" class="rnb-btn-col-content" style="border-collapse: separate;margin:0 auto;">
                                                                <tbody><tr>
                                                                    <td width="auto" valign="middle" bgcolor="#3499db" align="left" height="32" style="font-size:14px; font-family:Arial,Helvetica,sans-serif; text-align:center; color:#ffffff; font-weight:normal; padding-left:18px; padding-right:18px; background-color:#3499db; border-radius:4px;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;">
                                                                        <span style="color:#ffffff; font-weight:normal;">
                                                                            <a style="text-decoration:none; color:#ffffff; font-weight:normal;" target="_blank" href="https://www.hodlio.com/login">Login</a>
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                        </td>
                                                    </tr></tbody></table>

                                                </td></tr>
                                    </tbody></table></td>
                            </tr>
                            <tr>
                                <td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr>
                        </tbody></table>

                    </td>
                </tr>
            </tbody></table><!--[if mso]>
                </td>
                <![endif]-->
                
                <!--[if mso]>
                </tr>
                </table>
                <![endif]-->
            </div></td>
    </tr><tr>

        <td align="center" valign="top" bgcolor="#f9fafc" style="background-color:#f9fafc;">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px; background-color:#f9fafc;" name="Layout_" id="Layout_">
                <tbody><tr>
                    <td class="rnb-del-min-width" valign="top" align="center" bgcolor="#f9fafc" style="min-width:590px; background-color:#f9fafc;">
                        <table width="100%" cellpadding="0" border="0" height="30" cellspacing="0" bgcolor="#f9fafc" style="background-color:#f9fafc;">
                            <tbody><tr>
                                <td valign="top" height="30">
                                    <img width="20" height="30" style="display:block; max-height:30px; max-width:20px;" alt="" src="http://img.mailinblue.com/new_images/rnb/rnb_space.gif">
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top" bgcolor="#f9fafc" style="background-color:#f9fafc;">

            <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#f9fafc" style="min-width:590px; background-color:#f9fafc;" name="Layout_" id="Layout_">
                <tbody><tr>
                    <td class="rnb-del-min-width" align="center" valign="top" bgcolor="#f9fafc" style="min-width:590px; background-color: #f9fafc;">
                        <table width="590" class="rnb-container" cellpadding="0" border="0" align="center" cellspacing="0">
                            <tbody><tr>
                                <td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr>
                            <tr>
                                <td valign="top" class="rnb-container-padding" style="font-size: 14px; font-family: Arial,Helvetica,sans-serif; color: #888888;" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container">
                                        <tbody><tr>
                                            <td class="rnb-force-col" style="padding-right:20px; padding-left:20px; mso-padding-alt: 0 0 0 20px;" valign="top">

                                                <table border="0" valign="top" cellspacing="0" cellpadding="0" width="264" align="left" class="rnb-col-2" style="border-bottom:0;">

                                                    <tbody><tr>
                                                        <td valign="top">
                                                            <table cellpadding="0" border="0" align="left" cellspacing="0" class="rnb-btn-col-content">
                                                                <tbody><tr>
                                                                    <td valign="middle" align="left" style="font-size:14px; font-family:Arial,Helvetica,sans-serif; color:#888888;" class="rnb-text-center">
                                                                        <div>Hodlio<br>35, Wigan Lower Road<br>Wigan, UK<br><a href="mailto:team@hodlio.com" style="text-decoration: underline; color: rgb(102, 102, 102);">team@hodlio.com</a></div>
                                                                    </td></tr>
                                                            </tbody></table>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                                </td><td ng-if="item.text.align=='left'" class="rnb-force-col rnb-social-width" valign="top" style="mso-padding-alt: 0 20px 0 0; padding-right: 15px;">

                                                <table border="0" valign="top" cellspacing="0" cellpadding="0" width="246" align="right" class="rnb-last-col-2">

                                                    <tbody><tr>
                                                        <td valign="top">
                                                            <table cellpadding="0" border="0" cellspacing="0" class="rnb-social-align" style="float: right;" align="right">
                                                                <tbody><tr>
                                                                    <td valign="middle" class="rnb-text-center" ng-init="width=setSocialIconsBlockWidth(item)" width="246" align="right">
                                                                        <div class="rnb-social-center"></div>
                                                                        <div class="rnb-social-center"></div>
                                                                        <div class="rnb-social-center">
                                                                            <table align="right" style="float:right; display: inline-block; mso-table-lspace:0pt; mso-table-rspace:0pt;" border="0" cellpadding="0" cellspacing="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="right">
                                                                                            <a style="color:#ffffff; font-weight:normal;" href="https://www.facebook.com/Hodlio-665812843807358">
                                                                                                <img alt="Facebook" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="http://img.mailinblue.com/new_images/rnb/theme1/rnb_ico_fb.png">
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>

                                                                        <div class="rnb-social-center">
                                                                            <table align="right" style="float:right; display: inline-block; mso-table-lspace:0pt; mso-table-rspace:0pt;" border="0" cellpadding="0" cellspacing="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="right">
                                                                                            <span style="color:#ffffff; font-weight:normal;">
                                                                                                <img alt="Twitter" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="http://img.mailinblue.com/new_images/rnb/theme1/rnb_ico_tw.png">
                                                                                            </span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                                </td></tr>
                                    </tbody></table></td>
                            </tr>
                            <tr>
                                <td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr>
                        </tbody></table>

                    </td>
                </tr></tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top" bgcolor="#f9fafc" style="background-color:#f9fafc;">

            <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#f9fafc" style="min-width:590px; background-color:#f9fafc;" name="Layout_3" id="Layout_3">
                <tbody><tr>
                    <td class="rnb-del-min-width" align="center" valign="top" bgcolor="#f9fafc" style="min-width:590px; background-color: #f9fafc;">
                        <table width="590" class="rnb-container" cellpadding="0" border="0" align="center" cellspacing="0" style="padding-right:20px; padding-left:20px;">
                            <tbody><tr>
                                <td height="10" style="font-size:1px; line-height:1px;"> </td>
                            </tr>
                            <tr>
                                <td>
                                    <div style="font-size:14px; color:#888888; font-weight:normal; text-align:center; font-family:Arial,Helvetica,sans-serif;">This email was sent to {EMAIL}<div>You received this email because you are registered with Hodlio</div><div> </div></div>
                                </td></tr>
                            <tr>
                                <td height="10" style="font-size:1px; line-height:1px;"> </td>
                            </tr>
                            <tr>
                                <td>
                                    <div style="text-align:center;">
                                        <div style="font-family:Arial, Helvetica, sans-serif;color:#888888;opacity:0.8">Sent by</div><a href="https://www.sendinblue.com/?utm_source=logo_mailin&utm_campaign=14c9c680b61b8aa0f591a51367eabf9b&utm_medium=email" target="_blank"><img border="0" hspace="0" vspace="0" width="121" height="33" alt="SendinBlue" style="margin:auto;" src="http://img.mailinblue.com/new_images/rnb/logo_nb_en.png"></a>
                                    </div></td>
                            </tr><tr>
                                <td height="10" style="font-size:1px; line-height:1px;"> </td>
                            </tr></tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr><tr>

        <td align="center" valign="top" bgcolor="#f9fafc" style="background-color:#f9fafc;">

            <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#f9fafc" style="min-width:590px; background-color:#f9fafc;" name="Layout_4" id="Layout_4">
                <tbody><tr>
                    <td class="rnb-del-min-width" align="center" valign="top" bgcolor="#f9fafc" style="min-width:590px; background-color: #f9fafc;">
                        <table width="590" class="rnb-container rnb-yahoo-width" cellpadding="0" border="0" align="center" cellspacing="0" style="padding-right:20px; padding-left:20px;">
                            <tbody><tr>
                                <td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr>
                            <tr>
                                <td style="font-size:14px; color:#888888; font-weight:normal; text-align:center; font-family:Arial,Helvetica,sans-serif;">
                                    <div>© 2017 Hodlio</div>
                                </td></tr>
                            <tr>
                                <td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
            </td>
    </tr></tbody></table>
            <!--[if gte mso 9]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        </td>
        </tr>
        </tbody></table>

</body></html>        
    `.replace('{EMAIL}', emailAddress);
};