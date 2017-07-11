$(document).ready(function () {
    ///////////////////////////////////////// statrup /////////////////
    var currentRegions = {};
   // getHotelsFromServer();

    // api requests
    
    function autocomplete(query) {
        if (query === "") {
            currentRegions = {}
            return;
        }

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Hotels.aspx/Autocomplete",
            data: JSON.stringify({ data: { "query": query, "format": "json", "lang": "en" } }),
            datatype: "json",
            success: function (result) {
                // console.log(result.d);
                clearBindingForCities();
                var regions = JSON.parse(result.d).result.regions;
                bindRegionsToHtml(regions);
                currentRegions = regions;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                currentRegions = {}
                console.log("Error: " + XMLHttpRequest.responseText + "Status: " + textStatus);
                alert("Status: " + textStatus); alert("Error: " + XMLHttpRequest.responseText);
            }
        });
    }

    function findHotelsByRegion(regionId) {
        if (regionId === "")
            return;

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Hotels.aspx/GetHotelsByRegion",
            data: JSON.stringify({ data: { "region_id": regionId, "format": "json" } }),
            datatype: "json",
            success: function (result) {
                //console.log(result.d);
                // console.log(JSON.parse(result.d).result.ids);
                getHotelsDetails(JSON.parse(result.d).result.ids.slice(0, 30));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("Error: " + XMLHttpRequest.responseText + "Status: " + textStatus);
                alert("Status: " + textStatus); alert("Error: " + XMLHttpRequest.responseText);
            }
        });
    };

    function getHotelsDetails(ids) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Hotels.aspx/GetHotelsDetails",
            data: JSON.stringify({ data: { "ids": ids, "format": "json", "lang": "en" } }),
            datatype: "json",
            success: function (result) {
                //console.log(result.d);
                bindHotels(JSON.parse(result.d).result)
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("Error: " + XMLHttpRequest.responseText + "Status: " + textStatus);
                alert("Status: " + textStatus); alert("Error: " + XMLHttpRequest.responseText);
            }
        });
    }

    function getHotelsFromServer() {
        // show loading gif
        $("#loading").show();

        // this attempts to dowalod dumb file with all hotels details, it is large file, over 1.7 GB
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Hotels.aspx/GetAllHotelsGZip",
            data: JSON.stringify({ data: { "format": "json", "lang": "en" } }),
            datatype: "json",
            success: function (result) {
                // hide loading gif
                $("#loading").hide();

                console.log(result.d);
                bindHotels();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // hide loading gif
                $("#loading").hide();

                console.log("Error: " + XMLHttpRequest.responseText + "Status: " + textStatus);
                alert("Status: " + textStatus); alert("Error: " + XMLHttpRequest.responseText);
            }
        });
    };

    // end api requests


    // bindings
    function bindHotels(hotels) {
        $('#tableResults tbody').html('<th>Hotel Name</th><th>Country</th>');

        $(hotels).each(function () {
            $('#tableResults tbody').append('<tr>');
            $('#tableResults tbody').append('<td>' + this.name + '</td><td>' + this.country + '</td>');
            $('#tableResults tbody').append('</tr>');
        });
    };

    function bindRegionsToHtml(regions) {
        $(regions).each(function () {
            $("#cities").append('<option value="' + this.name + '" />');
            console.log(this);
        });
    };

    function clearBindingForCities() {
        $("#cities").html('');
    };

    // end bindings

    // events 

    $("#autocomplete").keyup(function () {
        setTimeout(function () {
            autocomplete($("#autocomplete").val());
        }, 300)
    });

    
    $('#find-hotels-by-query').click(function () {

        // replace this by finding selected item from input details serch box - reminder for Nikola
        if (currentRegions !== {}) {
            $(currentRegions).each(function () {
                if (this.name === $('#autocomplete').val()) {
                    findHotelsByRegion(this.id);
                }
            });
        }
    });

    $('#get-hotels-from-server').click(function () {
        //getHotelsFromServer();
    });

    // end events
});