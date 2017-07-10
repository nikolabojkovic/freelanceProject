$(document).ready(function () {


      $.urlParam = function (name) {
          // return adults
          // used this becuase if the ordering breaks for some reason, then the code wont break
          var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
          if (results == null) {
              return null;
          }
          else {
              return results[1] || 0;
          }
      }

    //decodeURI($.urlParam('hotelId'));


   // var invocation = new XMLHttpRequest();
   // var url = 'https://partner.ostrovok.ru/api/b2b/v2/multicomplete?data={"query":"Mos","format":"json","lang":"en"}';
   // var body = '<?xml version="1.0"?><person><name>Arun</name></person>';

   // function callOtherDomain() {
   //     if (invocation) {
   //         invocation.open('GET', url, true);
   //         invocation.withCredentials = true;
   //         invocation.onreadystatechange = handler;
   //         invocation.send();
   //     }
   //     //invocation.onload = function () {
   //     //    if (invocation.status >= 200 && invocation.status < 400) {
   //     //        // Success!
   //     //        var data = JSON.parse(invocation.responseText);
   //     //        alert(data);
   //     //    } else {
   //     //        // We reached our target server, but it returned an error

   //     //    }
   //     //};
   // }

   // function handler() {
   //     var data = invocation.responseText;
   //     //var jsonResponse = JSON.parse(data);
   //     //   alert(invocation.responseText);
   //     console.log(invocation.status);
   // }


   //// callOtherDomain();



   // function AjaxGetData(url, method, data, successCallback, errorCallback) {
   //     $.ajax({
   //         type: method,
   //         contentType: "application/json; charset=utf-8; ",
   //         beforeSend: function (xhr) {
   //             xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
   //             xhr.setRequestHeader("Authorization", "Basic " + btoa("1456:74406d98-d842-4cb9-93d8-f8aa8b7f9e76"));
   //         },
   //         url: url,
   //        // data: JSON.stringify(data),
   //         processData: false,
   //         datatype: "json",
   //         success: function (result) {
   //             successCallback(result);
   //         },
   //         error: function (error) {
   //             errorCallback(error);
   //         }
   //     });

   //     //$.ajax({

   //     //    // The 'type' property sets the HTTP method.
   //     //    // A value of 'PUT' or 'DELETE' will trigger a preflight request.
   //     //    type: method,

   //     //    // The URL to make the request to.
   //     //    url: url,

   //     //    // The 'contentType' property sets the 'Content-Type' header.
   //     //    // The JQuery default for this property is
   //     //    // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
   //     //    // a preflight. If you set this value to anything other than
   //     //    // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
   //     //    // you will trigger a preflight request.
   //     //    contentType: 'text/plain',

   //     //    xhrFields: {
   //     //        // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
   //     //        // This can be used to set the 'withCredentials' property.
   //     //        // Set the value to 'true' if you'd like to pass cookies to the server.
   //     //        // If this is enabled, your server must respond with the header
   //     //        // 'Access-Control-Allow-Credentials: true'.
   //     //        withCredentials: true,
   //     //        "Authorization": "bearer " + btoa("1456:74406d98-d842-4cb9-93d8-f8aa8b7f9e76")
   //     //    },

   //     //    headers: {
   //     //        // Set any custom headers here.
   //     //        // If you set any non-simple headers, your server must include these
   //     //        // headers in the 'Access-Control-Allow-Headers' response header.
   //     //       // contentType: "application/json; charset=utf-8; "
   //     //    },

   //     //    success: function (result) {
   //     //        // Here's where you handle a successful response.
   //     //        successCallback(result);
   //     //    },

   //     //    error: function (error) {
   //     //        // Here's where you handle an error response.
   //     //        // Note that if the error was due to a CORS issue,
   //     //        // this function will still fire, but there won't be any additional
   //     //        // information about the error.
   //     //        errorCallback(error);
   //     //    }
   //     //});
   // }

   // //AjaxGetData('https://partner.ostrovok.ru/api/b2b/v2/multicomplete?data={"query":"Mos","format":"json","lang":"en"}',
   // //            'GET', '',
   // //            function (data) { alert(JSON.stringify(data)) },
   // //            function (data) { alert(JSON.stringify(data)) }
   // //            );

   // var xhr = new XMLHttpRequest();
   // //xhr.setRequestHeader('Authorization', 'Basic ' + Base64StringOfUserColonPassword);
   // xhr.open("GET", 'https://partner.ostrovok.ru/api/b2b/v2/multicomplete?data={"query":"Mos","format":"json","lang":"en"}');
   // xhr.withCredentials = true;
   // xhr.send();

   // console.log(xhr.status);
   // console.log(xhr.statusText);




    //$.ajax({
    //    type: "POST",
    //    contentType: "application/json; charset=utf-8; ",
    //    beforeSend: function (xhr) {
    //        xhr.setRequestHeader("Authorization", "Basic " + btoa("nikolabojkovic@gmail.com:gaim5867"));
    //    },
    //    url: "https://partner.ostrovok.ru/api/affiliate/v2/hotel/rates",
    //    data: JSON.stringify({
    //        "ids": ["adagio_moscow_paveletskaya"],
    //        "checkin": "2014-12-07",
    //        "checkout": "2014-12-08",
    //        "adults": 2,
    //        "children": [3, 1], "lang": "en"
    //    }),
    //    processData: false,
    //    datatype: "json",
    //    success: function (result) {
    //        alert(result.d);
    //    },
    //    error: function (error) {
    //        alert(JSON.stringify(error));
    //    }
    //});

    //$.ajax({
    //    type: "GET",
    //    contentType: "application/json; charset=utf-8; ",
    //    beforeSend: function (xhr) {
    //        xhr.setRequestHeader("Authorization", "Basic " + btoa("username:password"));
    //    },
    //    url: 'https://partner.ostrovok.ru//api/affiliate/v2/region/list?data={"format":"json","limit":2}',

    //    processData: false,
    //    datatype: "json",
    //    success: function (result) {
    //        alert(result.d);
    //    },
    //    error: function () {
    //        alert("Cannot get data");
    //    }
    //});




});