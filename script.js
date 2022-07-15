var p = document.createElement('p');
p.textContent = 'This content was added via JavaScript!';
document.body.appendChild(p);

chrome.edgePanel.basicPageContext.onUpdated.addListener((basicContext) => {
    console.log("page javascript", basicContext);
    document.getElementsByTagName("h1")[0].innerText = basicContext.title;
    var domain = basicContext.url.split("www.")[1].split("/")[0];
    getCoupons(domain);
});

getCoupons = async (domain) => {
    var url = "https://www.bing.com/api/shopping/v1/item/search?appid=67220BD2169C2EA709984467C21494086DF8CA85&features=persnlcashback&sf=cashback1";
    var requestBody = { "IsBingSignedInUser": false, "IsMSASignedIn": false, "IsSSOEnabled": false, "LdClickData": "", "MsClickId": "", "ReturnedToCashbackActivatedDomain": false, "clientContext": { "appname": "Edge", "buildversion": "105.0.1322.0", "enabledfeatures": [{ "name": "msWebAssistQuery", "params": [] }, { "name": "msEdgeShoppingPriceHistory", "params": [] }, { "name": "msEdgeShoppingExpressCheckout", "params": [] }, { "name": "msEdgeShoppingGuestDomainCoupons", "params": [] }, { "name": "msEdgeShoppingRewards", "params": [] }, { "name": "msEdgeShoppingExpressCheckoutFillDetails", "params": [] }, { "name": "msEdgeShoppingAutoShowControlForFeature", "params": [] }, { "name": "msEdgeShoppingOtherSeller", "params": [] }, { "name": "msEdgeShoppingWalmartOtherSeller", "params": [] }, { "name": "msEdgePwiloItemDeletion", "params": [] }, { "name": "msEdgeShoppingServerNotifications", "params": [] }, { "name": "msEdgeShoppingPersistentStorage", "params": [] }, { "name": "msShoppingCheckoutMultiMessage", "params": [] }], "extractedpagelocale": "en", "ismobile": false, "osname": "Windows NT", "osversion": "10.0.22000" }, "item": { "seller": { "IsEdgeRebatesFlow": false, "domain": domain, "path": "/signup" } }, "sourceTypes": ["deals"] };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
    .then(response => response.json())
    .then(json => console.log(json))
}