angular.module("viewNav")

    .component('ttd', {
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/top_menu/ttd/ttd.html',
        templateUrl: 'resources/common-templates/top_menu/ttd/ttd.html',
       
        controller: ['$scope', 'GetSet', 'viewManager', 'topMenuService', function($scope, GetSet, viewManager, topMenuService){
            var viewWidth = GetSet.getViewWidth();
            lr.setVPw(viewWidth);
            var ttdSelf = this;
                        
            getText = function(regionText){
                    ttdSelf.fill1 = regionText.fill1;
                    ttdSelf.fill2 = regionText.fill2;
                    ttdSelf.fill3 = regionText.fill3;
                    ttdSelf.fill4 = regionText.fill4;
                    ttdSelf.fill5 = regionText.fill5;
                    ttdSelf.fill6 = regionText.fill6;
                    ttdSelf.fill7 = regionText.fill7;
                    ttdSelf.fill8 = regionText.fill8;
            };
            topMenuService.ttdRegionText(getText);
            
            // Response Section 1
            ttdSelf.rs1fontsize1 = lr.w("font-size:em",1170,1.5,320,0.76);
            ttdSelf.rs1fontsize2 = lr.w("font-size:em",1170,3,320,1.69);
            ttdSelf.rs1fontsize3 = lr.w("font-size:em",1170,1.1,320,0.84);
            ttdSelf.rs1left1 = lr.w("left:%",1170,45,320,0);
            ttdSelf.rs1width1 = lr.w("width:%",1170,60,320,100);
            
            ttdSelf.itpLRcss =  ".ITPstyle01{color:blue; " + lr.w('font-size:em',1170,3,360,1.25) + "}" +
                                ".ITPstyle02{display:inline-block; background-color:black; color:white; border-radius:5px; padding:2px 10px; text-align:center;}" +
                                ".ITPstyle03{font-size:1.05em; line-height:150%;}" +
                                ".ITPstyle04{font-size:.85em; text-shadow:initial; color:blue;}"; 
            
            viewManager.topMenuToHighlight(1);    
        }]
    })

    .component('buyprice', {
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/top_menu/buy_price/buy_price.html',
        templateUrl: 'resources/common-templates/top_menu/buy_price/buy_price.html',
       
        controller: ['GetSet', 'viewManager', 'NavMenuFactory', 'compFactory', function(GetSet, viewManager, NavMenuFactory, compFactory){
            var viewWidth = GetSet.getViewWidth();
            lr.setVPw(viewWidth);
            var buyPriceSelf = this;
            
            // The getPRICING function is a callback. It retrieves the pricing data that populates the full price listing and the quick price listing.
            // The pricing data also includes CSS classes that apply to each listing in the full price list.
            function getPRICING(priceData, productDetailsCSS){
              
              /*if(priceData.quickLIST[1].price === "WTF") console.log("WTF !!!!!");*/
              
              buyPriceSelf.pricing = priceData;
              buyPriceSelf.productDetailsCSS = productDetailsCSS;
            }
            NavMenuFactory.getPricing(getPRICING); 
            
            // The tempDisable function is used to temporily un-show the quick menu (to undo a mouseover status) when clicking on a quick menu item. 
            // This to expose the target should the target be underneath the quick menu itself.
            // This so the animation reset can take place and hold the un-show status until a new mouseover event is detected.
            buyPriceSelf.temporaryDisable = 0;
            buyPriceSelf.tempDisable = function(){
                buyPriceSelf.temporaryDisable = 1;
                window.setTimeout(enable,1000);
                function enable(){
                  buyPriceSelf.temporaryDisable = 0;
                }
            }
            
            // The toTop function is a workaround to alternate the target href so it always goes to the top should a scroll down be done and toTop() is clicked again. 
            buyPriceSelf.toTop = function(){compFactory.toTop("buyprice");};
            buyPriceSelf.toTopBtnHtmlSymbol = compFactory.toTopBtnStyle().toTopBtnHtmlSymbol;
            buyPriceSelf.toTopBtnCSS = compFactory.toTopBtnStyle().toTopBtnCSS;

            // 
            buyPriceSelf.top1 = lr.w("top:%",1170,2,320,0.43); 
            
            buyPriceSelf.fontsize1 = lr.w("font-size:em",1170,1,320,0.63);
            buyPriceSelf.fontsize3 = lr.w("font-size:em",1170,1,320,0.67);
            buyPriceSelf.fontsize4 = lr.w("font-size:em",1170,3,320,1.43);
            buyPriceSelf.fontsize5 = lr.w("font-size:em",1170,1.5,320,0.75);
            
            buyPriceSelf.width1 = lr.w("width:%",1170,45,320,96);
            
            // LR to actually center the post animated showing of the quick menu.
            buyPriceSelf.left2 = "left:" + (lr.getLRp().widthUsed - lr.getLRp().widthUsed * lr.w("",1170,45,320,96)/100)/2 + "px";
            
            
            buyPriceSelf.fontweight1 = lr.w("font-weight:",1170,100,360,900);
            buyPriceSelf.padding1 = lr.w("padding:px",1170,10,360,2) + " 10px";
            buyPriceSelf.borderwidth1 = lr.w("border-width:px",1170,2,360,1);
            buyPriceSelf.margin1 = lr.w("margin:px",1170,10,360,5) + " 0px";  
            
            buyPriceSelf.padding1 = lr.w("padding:px",1170,10,360,5) + " 5px";   
            
            buyPriceSelf.itpLRcss = ".ITPstyle01{color:blue; " + lr.w('font-size:em',1170,3,360,1.25) + "}" +
                                    ".ITPstyle02{display:inline-block; background-color:black; color:white; border-radius:5px; padding:2px 10px; text-align:center;}" +
                                    ".ITPstyle03{font-size:1.05em; line-height:150%;}" +
                                    ".ITPstyle04{font-size:.85em; text-shadow:initial; color:blue;}"; 
            
            viewManager.topMenuToHighlight(2);  
        }]
    })
    
    .component('products', {
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/top_menu/products/products.html',
        templateUrl: 'resources/common-templates/top_menu/products/products.html',
       
        controller: ['GetSet', 'viewManager', 'NavMenuFactory', 'compFactory', function(GetSet, viewManager, NavMenuFactory, compFactory){
            var viewWidth = GetSet.getViewWidth();
            lr.setVPw(viewWidth);
            var productsSelf = this;
            
            productsSelf.title1 = "Jumps to a short product overview in the listing below";
            productsSelf.title2 = "Full coverage of the product including detailed discussion, field applications, and specifications";
            productsSelf.title3 = "The quick menu takes you to the product overviews below or to the product application pages.";
            
            // The getPRODUCT function is a callback. It retrieves the pricing data that populates the full price listing and the quick price listing.
            // The pricing data also includes CSS classes that apply to each listing in the full price list.
            function getPRODUCTS(productData, productDetailsCSS){
              productsSelf.products = productData;
              productsSelf.productDetailsCSS = productDetailsCSS;
            }
            NavMenuFactory.getProducts(getPRODUCTS); 
            
            // The toTop function is a workaround to alternate the target href so it always goes to the top should a scroll down be done and toTop() is clicked again. 
            productsSelf.toTop = function(){compFactory.toTop("products");};
            productsSelf.toTopBtnHtmlSymbol = compFactory.toTopBtnStyle().toTopBtnHtmlSymbol;
            productsSelf.toTopBtnCSS = compFactory.toTopBtnStyle().toTopBtnCSS;
            
            productsSelf.assignURL = function(url){
                window.location.assign(url);
            }
            
            productsSelf.temporaryDisable = 0;
            productsSelf.tempDisable = function(){
                productsSelf.temporaryDisable = 1;
                window.setTimeout(enable,1000);
                function enable(){
                  productsSelf.temporaryDisable = 0;
                }
            }
            
            // Response Section
            productsSelf.width1 = lr.w("width:%",1170,45,320,97);
            
            productsSelf.top1 = lr.w("top:%",1170,2,320,0.43); 
            
            productsSelf.fontsize1 = lr.w("font-size:em",1170,1.15,360,0.75,"font-size:em",359,0.75,320,0.65);
            productsSelf.fontsize2 = lr.w("font-size:em",1170,1,320,0.48);
            productsSelf.fontsize3 = lr.w("font-size:em",1170,1,320,0.65);
            productsSelf.fontsize5 = lr.w("font-size:em",1170,1.5,320,0.75);
            
            productsSelf.padding1 = lr.w("padding:px",1170,10,360,5) + " 5px";
            productsSelf.borderwidth1 = lr.w("border-width:px",1170,2,320,1);
            productsSelf.margin1 = lr.w("margin:px",1170,10,360,5) + " 0px";  
            productsSelf.fontweight1 = lr.w("font-weight:",1170,100,360,900);
            
            productsSelf.itpLRcss = ".ITPstyle01{color:blue; " + lr.w('font-size:em',1170,3,360,1.25) + "}" +
                                    ".ITPstyle02{display:inline-block; background-color:black; color:white; border-radius:5px; padding:2px 10px; text-align:center;}" +
                                    ".ITPstyle03{font-size:1.05em; line-height:150%;}" +
                                    ".ITPstyle04{font-size:.85em; text-shadow:initial; color:blue;}"; 
            
            viewManager.topMenuToHighlight(3);  
        }]
    })
    
    .component('reviews', {
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/top_menu/reviews/testimonials.html',
        templateUrl: 'resources/common-templates/top_menu/reviews/testimonials.html',
        
        controller: ['GetSet', 'viewManager', 'NavMenuFactory', function(GetSet, viewManager, NavMenuFactory){
            var viewWidth = GetSet.getViewWidth();
            lr.setVPw(viewWidth);
            var reviewSelf = this;
     
            function getREVIEWS(data, dataCSS){
              reviewSelf.REVIEWS = data;
              reviewSelf.reviewsCSS = dataCSS;
            };
            NavMenuFactory.getReviews(getREVIEWS);
            
            reviewSelf.reviewsLRcss = ".ITPstyle01{color:blue; " + lr.w('font-size:em',1170,1.5,360,1.25) + "}" +
                                      ".ITPstyle02{display:inline-block; background-color:black; color:white; border-radius:5px; padding:2px 10px; text-align:center;}" +
                                      ".ITPstyle03{font-size:1.05em; line-height:150%;}" +
                                      ".ITPstyle04{font-size:0.95em; color:blue; font-weight:bold;}"; 
            
            reviewSelf.fontsize1 = lr.w("font-size:em",1170,1,320,0.58);
            reviewSelf.fontsize2 = lr.w("font-size:em",1170,3,320,1.69);
            reviewSelf.fontsize3 = lr.w("font-size:em",1170,2.5,320,1.69);
            
            viewManager.topMenuToHighlight(4);  
        }]
    })
    
    .component('priceamazon', {
        
        // templateUrl: 'https://www.tarptiedown.com/resources/common-templates/top_menu/price_amazon/price-amazon.html',
        templateUrl: 'resources/common-templates/top_menu/price_amazon/price-amazon.html',
        
        controller: ['$scope', '$location', 'GetSet', 'VnData', function($scope, $location, GetSet, VnData){
            var viewWidth = GetSet.getViewWidth();
            lr.setVPw(viewWidth);
            var priceAmazon = this;
            
            priceAmazon.headerCol2 = lr.html("&nbsp;&nbsp;Price&nbsp;/&nbsp;Device&nbsp;&nbsp;",1170,500,"Price&nbsp;/<br>Device",499,360);
            priceAmazon.lrfontsize1 = lr.w("font-size:em",1170,1.25,360,0.65);
            priceAmazon.lrfontsize2 = lr.w("font-size:em",1170,2.5,360,2.0);


          //*********************************************************************************************************************************************************** 
          // The URL parameter is used as the mySQL database query parameter to extract the appropriate price data for display.
            
            var bestValueIndicatorColor = 'transparent';
            
            var urlParam = $location.search();
            urlParam = urlParam.product;
            
            var priceAmazonData = function(data){
              
              for(i=0; i<data.length; i++){
                data[i] = JSON.parse(data[i]);
                data[i].packPrice = data[i].packPrice.toFixed(2);
                data[i].devicePrice = data[i].devicePrice.toFixed(2);
                
                if(data[i].bestValue){
                  bestValueIndicatorColor = 'orange';
                }
              }
              $scope.$apply(function(){priceAmazon.priceData = data; priceAmazon.bestValueIndicatorColor = bestValueIndicatorColor;});
            };
            if(urlParam != -1)
              VnData.getPriceAmazon(priceAmazonData, urlParam);
        }]
    })
    
    .component('policy', {
        
        templateUrl: 'resources/common-templates/top_menu/policy_tmpl/policy.html',
       
        controller: ['GetSet', function(GetSet){
            var viewWidth = GetSet.getViewWidth();
            
        }]
    });
    
    