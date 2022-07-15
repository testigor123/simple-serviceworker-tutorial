// var p = document.createElement('p');
// p.textContent = 'This content was added via JavaScript!';
// document.body.appendChild(p);

chrome.edgePanel.basicPageContext.onUpdated.addListener((basicContext) => {
    console.log("page javascript", basicContext);
    document.getElementsByTagName("h1")[0].innerText = basicContext.title;
    var domain = basicContext.url.split("www.")[1].split("/")[0];
    var coupons = getCoupons(domain);
    document.getElementsByTagName("h2")[0].innerText = `${domain} coupons: ${coupons.map(el=>el.couponCode).join(", ")}`;
});

var getCoupons = (domain) => {
    if (domain == "amazon.com"){
        return apiResponseAmazon.deals.coupons;
    }
    if (domain == "jcpenney.com"){
        return apiResponseJCPenney.deals.coupons;
    }
    return [];
}

var apiResponseJCPenney = {
    "_type": "ItemSearchResponse",
    "deals": {
        "coupons": [{
            "couponCode": "SHOPBTS",
            "attribution": "jcpenney.com",
            "discountPercent": 25,
            "title": "\"back to school kickoff: ex25% off awyp_180x150"
        }, {
            "couponCode": "RMN15",
            "attribution": "RetailMeNot",
            "successRate": 39,
            "discountPercent": 15,
            "title": "15% Off Eddie Bauer home styles with code",
            "offerUrl": "https://api.retailmenot.com/security/public/out/DEJS6MWI7NDXPLS6JJ6MZZ2UFQ?marketingcampaign=DEJS6MWI7NDXPLS6JJ6MZZ2UFQ&marketingmedium=referral&marketingsource=rkb44&distribution_partner=rkb44&auto_show_edge_shopping_flyout=1"
        }, {
            "couponCode": "AFFSHOP1",
            "attribution": "jcpenney.com",
            "isStackable": true,
            "successRate": 38,
            "discountPercent": 15,
            "title": "Extra 15% off - Online only AFFSHOP1",
            "offerUrl": "https://www.kqzyfj.com/click-100162427-13930953-1643046572000?sid=00000000-0000-0000-0000-000000000001&auto_show_edge_shopping_flyout=1"
        }, {
            "couponCode": "HOM",
            "attribution": "jcpenney.com",
            "title": "Save online on jcpenney.com",
            "offerUrl": "https://www.jcpenney.com/m/jcpenney-coupons?auto_show_edge_shopping_flyout=1"
        }, {
            "couponCode": "DORMBED",
            "attribution": "jcpenney.com",
            "title": "save online with code dormbed"
        }, {
            "couponCode": "BUY4YOU",
            "attribution": "jcpenney.com",
            "title": "save online using code {buy4you}"
        }, {
            "couponCode": "ACTNOW4",
            "attribution": "jcpenney.com",
            "title": "save online with code actnow4"
        }, {
            "couponCode": "JULYHOME",
            "attribution": "jcpenney.com",
            "title": "save online with code julyhome"
        }],
        "retailerData": {
            "domainName": "jcpenney.com",
            "checkoutPageUrl": "checkout/shipping,checkout/payment,/cart,/checkout/review",
            "orderConfirmationPageUrl": "jcpenney\\.com\\/dotcom\\/jsp\\/checkout\\/secure\\/orderConfirmation\\.jsp|jcpenney\\.com\\/dotcom\\/jsp\\/checkout\\/secure\\/checkoutsimplified\\/orderConfirmation\\.jsp|jcpenney\\.com\\/checkout\\/oc\\?OrderId=",
            "exclusiveMarket": "en-us",
            "allCheckoutPages": [{
                "inputBoxSelector": "#manual-apply-coupon-input",
                "applyButtonSelector": "#manual-entry-apply-on-cart",
                "removeCouponButtonSelector": ".sticky-inner-wrapper [data-automation-id='at-remove-coupon'],BUTTON[data-automation-id='code-remove']",
                "orderTotalDataElementSelector": "[data-automation-id='at-total-price']",
                "waitBeforeReApplyingNextCoupon": 2000,
                "waitAfterApplyingCurrentCoupon": 2000,
                "checkoutPageUrl": "checkout/shipping,checkout/payment",
                "clickBeforeStartSelector": "DIV.sticky-inner-wrapper BUTTON.applyButton[data-automation-id='at-apply-coupon-link']",
                "edgeEnabled": true,
                "automatedCartExtractionEnabled": true,
                "manualCouponApplyTrackingEnabled": true
            }, {
                "inputBoxSelector": "#manual-apply-coupon-input",
                "applyButtonSelector": "#manual-entry-apply-on-cart",
                "removeCouponButtonSelector": ".sticky-inner-wrapper [data-automation-id='at-remove-coupon']",
                "orderTotalDataElementSelector": "[data-automation-id='at-total-price']",
                "waitBeforeReApplyingNextCoupon": 2000,
                "waitAfterApplyingCurrentCoupon": 2000,
                "checkoutPageUrl": "/cart",
                "clickBeforeStartSelector": "button[data-automation-id='at-apply-coupon-link']",
                "edgeEnabled": true,
                "cartSelectors": {
                    "cartSelector": "[data-automation-id='at-cart-page-items-wrapper']",
                    "productSelector": " [data-automation-id='at-cart-item-wrapper']",
                    "productTitleSelector": "[data-automation-id='at-product-title-link']",
                    "productPriceSelector": "[data-automation-id='at-pricing-actual-price']",
                    "productImageSelector": "[data-automation-id='at-product-image'] img",
                    "productUrlSelector": "[data-automation-id='at-product-title-link']"
                },
                "automatedCartExtractionEnabled": true,
                "backgroundAutoApplyStartTimeout": 5000,
                "backgroundAutoApplyInProgressTimeout": 15000,
                "backgroundAutoApplyCancelTimeout": 10000,
                "suggestedCouponElementSelector": "BUTTON[data-automation-id='at-button-default-id'][type='button']",
                "manualCouponApplyTrackingEnabled": true
            }],
            "orderConfirmationRegex": "W1R0XWhhbmtzW1xXXVtGZl1vcltcV11bWXldb3VyW1xXXVtPb11yZGVyfE9yZGVyIE51bWJlcjp8QSBjb25maXJtYXRpb24gZW1haWwgd2lsbCBiZSBzZW50IHNob3J0bHkgdG86",
            "allFinalCheckoutPages": [{
                "orderTotalDataElementSelector": "[data-automation-id='at-total-price']",
                "checkoutPageUrl": "/checkout/review",
                "finalCheckoutButtonSelector": "[data-automation-id='at-place-order-btn']",
                "cartSelectors": {
                    "cartSelector": "ul[data-automation-id='list']",
                    "productSelector": "[data-automation-id*='list-item']",
                    "productImageSelector": "img"
                }
            }],
            "allProductPages": [{
                "productPageUrl": "/p/",
                "addToCartButtonSelector": "[data-automation-id='addToCart']",
                "backgroundAAEnabled": true,
                "productAddedConfirmationSelector": "[data-automation-id='at-panel-added-item-count-block']"
            }],
            "allProductPageUrls": "/p/",
            "exactCheckoutPageUrl": "https://www.jcpenney.com/cart",
            "isHighTrafficDomain": false
        },
        "errorCode": "OK",
        "impressionId": "0F04B9151C30456A8387F1355CE3133E",
        "cashback": {
            "highestCashbackCategory": {
                "category": "Storewide",
                "commissionType": "%",
                "commissionValue": "3",
                "priority": 0
            },
            "userRebateResponse": {},
            "merchantName": "jcpenney",
            "image": "https://az15297.vo.msecnd.net/images/rewards/membercenter/missions/Rebates/jcpenney.png",
            "merchantId": "15212913",
            "merchantFullName": "JCPenney",
            "merchantUri": "https://www.jcpenney.com/",
            "affiliateNetwork": "CJ",
            "isSignInSupportedDomain": true,
            "personalizedCashback": {}
        },
        "shouldRenderIcon": true,
        "shouldAutoOpenPage": 0,
        "isCouponsSuppressed": true,
        "shouldRenderSustainability": false,
        "aFDMarket": "en-us",
        "market": "en-us"
    },
    "impressionId": "0F04B9151C30456A8387F1355CE3133E"
};

var apiResponseAmazon = {
    "_type": "ItemSearchResponse",
    "deals": {
        "coupons": [{
            "couponCode": "80O4CBFG",
            "attribution": "amazon.com",
            "discountPercent": 80,
            "title": "save 80% on orders over $2.99 with coupon code"
        }, {
            "couponCode": "755NIGSH",
            "attribution": "amazon.com",
            "isLowSuccessRateCoupon": true,
            "discountPercent": 75,
            "title": "75% off with purchase of $5.62"
        }, {
            "couponCode": "75D2VDCZ",
            "attribution": "amazon.com",
            "isLowSuccessRateCoupon": true,
            "discountPercent": 75,
            "title": "75% off orders over $1.42 w/ promo code"
        }, {
            "couponCode": "70OD6OV8",
            "attribution": "amazon.com",
            "isLowSuccessRateCoupon": true,
            "discountPercent": 70,
            "title": "70% off orders over $12.84"
        }, {
            "couponCode": "GIFTWRAP50",
            "attribution": "amazon.com",
            "isLowSuccessRateCoupon": true,
            "discountPercent": 50,
            "title": "50% off gift wrap service",
            "offerUrl": "https://www.amazon.com/gift-voucher/s?k=gift+voucher&auto_show_edge_shopping_flyout=1"
        }, {
            "couponCode": "505KYKSM",
            "attribution": "BusinessInsider Coupons",
            "isLowSuccessRateCoupon": true,
            "discountPercent": 50,
            "title": "50% Off Select Products with This Amazon Coupon",
            "offerUrl": "https://coupons.businessinsider.com/clickout/out/id/772660?clientId=53059ce884028590c4fd4a159879a4b4&clientType=wl&clientCountry=us&vtype=code&page_type=searchengine&rid=207&ds=searchengine_bing"
        }, {
            "couponCode": "9W2HYFAT",
            "attribution": "amazon.com",
            "isLowSuccessRateCoupon": true,
            "discountPercent": 30,
            "title": "extra 30% for amazon orders over $89.99"
        }, {
            "couponCode": "MV96BBGN",
            "attribution": "amazon.com",
            "isLowSuccessRateCoupon": true,
            "discountPercent": 10,
            "title": "apply this coupon code and get 10% off $7.99"
        }, {
            "couponCode": "5OFFUSED",
            "attribution": "amazon.com",
            "isLowSuccessRateCoupon": true,
            "discountPercent": 5,
            "title": "save online using code {5offused}"
        }, {
            "couponCode": "10PRIMENOW",
            "attribution": "amazon.com",
            "isLowSuccessRateCoupon": true,
            "title": "$10 off + free 2-hour delivery | prime now"
        }],
        "retailerData": {
            "domainName": "amazon.com",
            "checkoutPageUrl": "/gp/buy,/cart/view.html,/dp,/gp,/gp/buy/spc/handlers/display.html,/",
            "orderConfirmationPageUrl": "gp/buy/thankyou|\\/gp\\/buy\\/thankyou",
            "exclusiveMarket": "en-us",
            "allCheckoutPages": [{
                "inputBoxSelector": "#spc-gcpromoinput",
                "applyButtonSelector": ".redeem-gc-grid input[type='submit']",
                "orderTotalDataElementSelector": ".grand-total-price",
                "waitBeforeReApplyingNextCoupon": 2000,
                "waitAfterApplyingCurrentCoupon": 4000,
                "checkoutPageUrl": "/gp/buy",
                "manualCouponApplyTrackingEnabled": true
            }, {
                "orderTotalDataElementSelector": "#sc-subtotal-amount-activecart .sc-price",
                "checkoutPageUrl": "/cart/view.html",
                "cartSelectors": {
                    "cartSelector": "[data-name='Active Items']",
                    "productSelector": "[class*='list-item-content']",
                    "productTitleSelector": "[class*='product-title'] [class*='truncate-full']",
                    "productPriceSelector": "[class*='product-price']",
                    "productImageSelector": "[class*='product-image'] img",
                    "productUrlSelector": "[class*='product-link']",
                    "productQuantitySelector": "#a-autoid-4-announce > span.a-dropdown-prompt"
                }
            }, {
                "orderTotalDataElementSelector": "#priceblock_ourprice,#priceblock_saleprice,#priceblock_dealprice,#corePrice_desktop [class*='PriceToPay'] span,.priceToPay > span",
                "checkoutPageUrl": "/dp,/gp",
                "edgeEnabled": true,
                "clippingSelectors": {
                    "clipCouponSelector": "#promoPriceBlockMessage_feature_div span.promoPriceBlockMessage_Sns div.a-checkbox input;#promoPriceBlockMessage_feature_div div.a-checkbox input;#promoPriceBlockMessage_feature_div input[aria-labelledby*='clipButtonpctch'];#promoPriceBlockMessage_feature_div > span.promoPriceBlockMessage_OneTimePurchase span:not(.aok-hidden) > span > input.a-button-input",
                    "signedInSelector": "#navbar > div > div.nav-right >div > a.nav-hidden-aria",
                    "discountSelector": "#promoPriceBlockMessage_feature_div label[id*='couponBadgepctch'];#promoPriceBlockMessage_feature_div span.a-color-success > label;#promoPriceBlockMessage_feature_div > span.promoPriceBlockMessage_OneTimePurchase div > div > div > span.a-text-bold;#promoPriceBlockMessage_feature_div > span.promoPriceBlockMessage_OneTimePurchase span:not(.aok-hidden) > span> span.a-button-text span.a-text-bold;#promoPriceBlockMessage_feature_div span.promoPriceBlockMessage_Sns span.a-color-success > label",
                    "orderTotalDataElementSelector": "span.a-price.priceToPay > span.a-offscreen;span.a-price.apexPriceToPay > span.a-offscreen;#priceblock_ourprice,#priceblock_saleprice,#priceblock_dealprice",
                    "clippedDiscountSelector": "#promoPriceBlockMessage_feature_div > span.promoPriceBlockMessage_Sns span.a-color-success;#promoPriceBlockMessage_feature_div span.promoPriceBlockMessage span.a-color-success;#promoPriceBlockMessage_feature_div > span.promoPriceBlockMessage_OneTimePurchase div > span:not(.a-declarative) > span.a-button-inner span.a-text-bold;#promoPriceBlockMessage_feature_div label[id*='couponBadgepctch'];#promoPriceBlockMessage_feature_div > span.promoPriceBlockMessage_OneTimePurchase div > div > div > span.a-text-bold",
                    "alreadyClippedSelector": "#promoPriceBlockMessage_feature_div > span.promoPriceBlockMessage_Sns span.a-color-success  > i;#promoPriceBlockMessage_feature_div > span.promoPriceBlockMessage span.a-color-success > i;#promoPriceBlockMessage_feature_div div[id*='checkmarkpctch'];#promoPriceBlockMessage_feature_div > span.promoPriceBlockMessage_OneTimePurchase div > span:not(.a-declarative) > span.a-button-inner input"
                },
                "otherSellerSelectors": {
                    "otherSellersOverlayLinkSelector": "[data-action='show-all-offers-display'] a",
                    "otherSellerOfferElementSelector": "#aod-offer",
                    "otherSellerHeadingSelector": "#aod-offer-heading",
                    "otherSellerPriceSelector": ".a-price .a-offscreen",
                    "otherSellerNameSelector": "#aod-offer-soldBy .a-col-right a",
                    "productImageSelector": "#aod-asin-image-id",
                    "otherSellerRatingSelector": "#aod-offer-seller-rating i",
                    "otherSellerDeliverySelector": ".aod-delivery-promise",
                    "otherSellerAddButtonSelector": "[name='submit.addToCart']",
                    "otherSellerAddedConfirmationSelector": "[id*='aod-offer-atc'],[class*='aod-atc-inline-msg']",
                    "jSVersionThreshold": "1.56",
                    "otherSellerLowestPriceSelector": "[data-action='show-all-offers-display'] .a-size-base"
                }
            }, {
                "inputBoxSelector": "Dummy",
                "applyButtonSelector": "Dummy",
                "orderTotalDataElementSelector": "Dummy",
                "waitBeforeReApplyingNextCoupon": 2000,
                "waitAfterApplyingCurrentCoupon": 4000,
                "checkoutPageUrl": "/gp/buy/spc/handlers/display.html",
                "edgeEnabled": true
            }, {
                "checkoutPageUrl": "/",
                "edgeEnabled": true
            }],
            "orderConfirmationRegex": "T3JkZXIgcGxhY2VkfENvbmZpcm1hdGlvbiB3aWxsIGJlIHNlbnQgdG8geW91ciBlbWFpbA==",
            "confirmationPageTelemetry": {
                "transactionIdSelector": "DummyId"
            },
            "allFinalCheckoutPages": [{
                "orderTotalDataElementSelector": "#subtotals-marketplace-table > tbody > tr:nth-child(10) > td.a-color-price.a-size-medium.a-text-right.grand-total-price.aok-nowrap.a-text-bold.a-nowrap,.grand-total-price",
                "checkoutPageUrl": "/gp/buy/spc/handlers/display.html",
                "finalCheckoutButtonSelector": "#submitOrderButtonId input,#bottomSubmitOrderButtonId input,#placeYourOrder > span > input,#placeYourOrderSecondary > span > input",
                "cartSelectors": {
                    "cartSelector": "#spc-orders",
                    "productSelector": "div.shipment > div > div > div:nth-child(3) > div:nth-child(1) > div",
                    "productTitleSelector": "div.a-fixed-left-grid-col.item-details-right-column.a-col-right > div.a-row.breakword > span,div.a-span9.a-span-last > div:nth-child(1) > strong",
                    "productPriceSelector": "div.a-fixed-left-grid-col.item-details-right-column.a-col-right > div:nth-child(2) > span:nth-child(1) > span > span,div.a-span9.a-span-last > div:nth-child(2) > span.a-color-price.a-text-bold",
                    "productImageSelector": "div.a-fixed-left-grid-col.a-col-left > img,div.a-column.a-span3 > img",
                    "productQuantitySelector": "span.quantity-dropdown > span.a-button-inner > span.a-button-text > span.a-dropdown-prompt,div.a-span9.a-span-last > div:nth-child(3) > div > span.quantity-display",
                    "productSellerSelector": "div.a-fixed-left-grid-col.item-details-right-column.a-col-right > div:nth-child(4) > span,div.a-span9.a-span-last > div.a-row.a-color-secondary.a-size-small",
                    "productSellerRegex": "Sold by:"
                },
                "shipmentSelector": "#spc-orders > div > div > div.shipment > div > div > div:nth-child(1) > div > span:nth-child(2),#spc-orders > div > div > div > div > div > div:nth-child(1) > div > span > span:nth-child(6),#spc-orders > div > div > div > div > div > div:nth-child(1) > div > span > span:nth-child(5),#spc-orders > div > div > div > div > div > div:nth-child(1) > div > span > span:nth-child(7)",
                "preTaxSelector": "#subtotals #subtotals-marketplace-table > tbody > tr:nth-child(4) > td.a-text-right,#subtotals-marketplace-table > tbody > tr:nth-child(5) > td.a-text-right",
                "estimatedTaxSelector": "#subtotals #subtotals-marketplace-table > tbody > tr:nth-child(5) > td.a-text-right,#subtotals-marketplace-table > tbody > tr:nth-child(6) > td.a-text-right"
            }],
            "productNameSelector": "#productTitle",
            "isHighTrafficDomain": false
        },
        "errorCode": "OK",
        "impressionId": "86BD05C8400949B4ADD0BAD15CE758FB",
        "cashback": {
            "userRebateResponse": {},
            "isRebatesSupportedDomain": false,
            "personalizedCashback": {}
        },
        "shouldRenderIcon": true,
        "shouldAutoOpenPage": 0,
        "shouldRenderSustainability": false,
        "isPackageTrackingEnabled": true,
        "aFDMarket": "en-us",
        "market": "en-us"
    },
    "impressionId": "86BD05C8400949B4ADD0BAD15CE758FB"
};