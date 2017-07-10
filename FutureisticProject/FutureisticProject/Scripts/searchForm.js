$(document).ready(function () {
    
    var ajaxInProgress = false;
    var xhr;
    // api requests

    function autocomplete(query) {
        if (query === "")
            return;
        
        if (ajaxInProgress) {
            ajaxInProgress = false;
            xhr.abort();
        }

        ajaxInProgress = true;

    xhr = $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "SearchForm.aspx/Autocomplete",
            data: JSON.stringify({ data: { "query": query, "format": "json", "lang": "en" } }),
            datatype: "json",
            success: function (result) {
               // console.log(result.d);
                clearBindingForCities();
                bindRegionsToHtml(JSON.parse(result.d));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // hide loading gif
                console.log("Error: " + XMLHttpRequest.responseText + "Status: " + textStatus);
                // alert("Status: " + textStatus); alert("Error: " + XMLHttpRequest.responseText);
            }
        });
    }

    function getAllRegions() {
        //get - api/affiliate/v2/region/list?data={"format":"json","limit":2}

        //response
        return {
            "debug": {
                "status": 200
            },
            "error": null,
            "result": [
                {
                    "center": {
                        "longitude": "37.6187042",
                        "latitude": "55.7516335"
                    },
                    "id": 2395,
                    "country_code": "RU",
                    "country_en": "Russia",
                    "name_ru": "Москва",
                    "category": "Moscow",
                    "image": null,
                    "type": "City",
                    "parent": 153,
                    "is_searchable": true,
                    "name_en": "Moscow",
                    "country_ru": "Россия",
                    "hotels_count": 911,
                    "categories": [
                      "ALL CIS",
                      "All Russia",
                      "Moscow"
                    ]
                },
                {
                    "center": {
                        "longitude": "4.6673888",
                        "latitude": "52.3028148"
                    },
                    "id": 4429,
                    "country_code": "NL",
                    "country_en": "Netherlands",
                    "name_ru": "Хофддорп",
                    "category": "Rest of Europe",
                    "image": null,
                    "type": "City",
                    "parent": 178229,
                    "is_searchable": true,
                    "name_en": "Hoofddorp",
                    "country_ru": "Нидерланды",
                    "hotels_count": 17,
                    "categories": [
                      "WORLD (w\\o ALL CIS)",
                      "Europe (w\\o ALL CIS)",
                      "Rest of Europe"
                    ]
                },
            ]
        }
    }

    function getAvailableHotelsMockUp() {
        // GET /api/affiliate/v2/hotel/rates?data={"ids":["test_hotel"],"checkin":"2014-08-01","checkout":"2014-08-08","adults":2,"children":[3,1],"lang":"en","format":"json","currency":"default"}

        // GET /api/affiliate/v2/hotel/rates?data={"region_id":2395,"checkin":"2014-08-01","checkout":"2014-08-08","adults":2,"children":[3,1],"lang":"en","format":"json","currency":"default"}

        // response
        return {
            "debug": {
                "lang": "en",
                "children": [],
                "adults": 2,
                "apiauthkey_id": 242,
                "page": 1,
                "checkout": "2016-05-21",
                "contract_slug": "testaffiliateru.affiliate.bff6",
                "checkin": "2016-05-20",
                "region_id": null,
                "format": "json",
                "include": null,
                "limit": 100,
                "currency": "default",
                "ids": [
                  "test_hotel"
                ],
                "status": 200,
                "exclude": null,
                "market": null
            },
            "result": {
                "hotels": [
                  {
                      "rate_name_min": null,
                      "id": "test_hotel",
                      "rates": [
                        {
                            "book_hash": null,
                            "value_adds": [],
                            "room_type_id": "#any-residents #economy #room #shared-bathroom #single #window",
                            "room_name": "Economy Single Room (shared bathroom)",
                            "bed_places": {
                                "child_cot_count": 0,
                                "main_count": 2,
                                "shared_with_children_count": 0,
                                "extra_count": 0
                            },
                            "cancellation_info": {
                                "free_cancellation_before": "2016-05-18T03:00:00",
                                "policies": []
                            },
                            "serp_filters": [],
                            "non_refundable": false,
                            "b2b_recommended_price": null,
                            "availability_hash": "s-c01b2226-1c68-5522-9c3e-d97c13fec0ec",
                            "available_rooms": 5,
                            "room_amenities": [],
                            "smoking_policies": null,
                            "room_group_id": 9,
                            "payment_options": {
                                "payment_types": [
                                  {
                                      "amount": "164.63",
                                      "is_need_cvc": true,
                                      "by": "credit_card",
                                      "currency_code": "RUB",
                                      "is_need_credit_card_data": true,
                                      "type": "now",
                                      "vat_included": true
                                  }
                                ]
                            },
                            "images": [],
                            "taxes": [],
                            "rate_currency": "RUB",
                            "room_size": "12",
                            "rate_price": "164.64",
                            "bed_types": [],
                            "hotelpage": "https://ostrovok.ru/rooms/test_hotel/?cur=RUB&dates=20.05.2016-21.05.2016&guests=2and&lang=en&partner_slug=testaffiliateru.affiliate.bff6&request_id=f41df11a-77a0-45f6-80dc-650296d41b06&room=s-c01b2226-1c68-5522-9c3e-d97c13fec0ec&utm_campaign=en-en&utm_medium=api2&utm_source=testaffiliateru&scroll=prices",
                            "room_description": "",
                            "daily_prices": [
                              "164.64"
                            ]
                        },
                        {
                            "book_hash": null,
                            "value_adds": [],
                            "room_type_id": "#any-residents #economy #room #shared-bathroom #single #window",
                            "room_name": "Economy Single Room (shared bathroom)",
                            "bed_places": {
                                "child_cot_count": 0,
                                "main_count": 2,
                                "shared_with_children_count": 0,
                                "extra_count": 0
                            },
                            "cancellation_info": {
                                "free_cancellation_before": "2016-05-20T14:59:00",
                                "policies": []
                            },
                            "serp_filters": [],
                            "non_refundable": false,
                            "b2b_recommended_price": null,
                            "availability_hash": "s-f04c7319-0008-5a36-8337-0cacc5c6a500",
                            "available_rooms": 5,
                            "room_amenities": [],
                            "smoking_policies": null,
                            "room_group_id": 9,
                            "payment_options": {
                                "payment_types": [
                                  {
                                      "currency_code": "RUB",
                                      "is_need_credit_card_data": false,
                                      "amount": "170.00",
                                      "type": "hotel",
                                      "is_need_cvc": false,
                                      "vat_included": true
                                  }
                                ]
                            },
                            "images": [],
                            "taxes": [],
                            "rate_currency": "RUB",
                            "room_size": "12",
                            "rate_price": "170.00",
                            "bed_types": [],
                            "hotelpage": "https://ostrovok.ru/rooms/test_hotel/?cur=RUB&dates=20.05.2016-21.05.2016&guests=2and&lang=en&partner_slug=testaffiliateru.affiliate.bff6&request_id=f41df11a-77a0-45f6-80dc-650296d41b06&room=s-f04c7319-0008-5a36-8337-0cacc5c6a500&utm_campaign=en-en&utm_medium=api2&utm_source=testaffiliateru&scroll=prices",
                            "room_description": "",
                            "daily_prices": [
                              "170.00"
                            ]
                        },
                        {
                            "book_hash": null,
                            "value_adds": [],
                            "room_type_id": "#any-residents #house #private-bathroom #window",
                            "room_name": "Villa",
                            "bed_places": {
                                "child_cot_count": 0,
                                "main_count": 2,
                                "shared_with_children_count": 0,
                                "extra_count": 0
                            },
                            "cancellation_info": {
                                "free_cancellation_before": "2016-05-18T03:00:00",
                                "policies": []
                            },
                            "serp_filters": [
                              "has_bathroom"
                            ],
                            "non_refundable": false,
                            "b2b_recommended_price": null,
                            "availability_hash": "s-a50b3812-eef6-5fa6-8ae3-f5eef2de9a6a",
                            "available_rooms": 1,
                            "room_amenities": [],
                            "smoking_policies": null,
                            "room_group_id": 22,
                            "payment_options": {
                                "payment_types": [
                                  {
                                      "amount": "726.33",
                                      "is_need_cvc": true,
                                      "by": "credit_card",
                                      "currency_code": "RUB",
                                      "is_need_credit_card_data": true,
                                      "type": "now",
                                      "vat_included": true
                                  }
                                ]
                            },
                            "images": [],
                            "taxes": [],
                            "rate_currency": "RUB",
                            "room_size": "10",
                            "rate_price": "726.33",
                            "bed_types": [],
                            "hotelpage": "https://ostrovok.ru/rooms/test_hotel/?cur=RUB&dates=20.05.2016-21.05.2016&guests=2and&lang=en&partner_slug=testaffiliateru.affiliate.bff6&request_id=f41df11a-77a0-45f6-80dc-650296d41b06&room=s-a50b3812-eef6-5fa6-8ae3-f5eef2de9a6a&utm_campaign=en-en&utm_medium=api2&utm_source=testaffiliateru&scroll=prices",
                            "room_description": "",
                            "daily_prices": [
                              "726.33"
                            ]
                        },
                        {
                            "book_hash": null,
                            "value_adds": [],
                            "room_type_id": "#any-residents #house #private-bathroom #window",
                            "room_name": "Villa",
                            "bed_places": {
                                "child_cot_count": 0,
                                "main_count": 2,
                                "shared_with_children_count": 0,
                                "extra_count": 0
                            },
                            "cancellation_info": {
                                "free_cancellation_before": null,
                                "policies": []
                            },
                            "serp_filters": [
                              "has_bathroom"
                            ],
                            "non_refundable": false,
                            "b2b_recommended_price": null,
                            "availability_hash": "s-a50b3812-eef6-5fa6-8ae3-f5eef2de9a6a",
                            "available_rooms": 1,
                            "room_amenities": [],
                            "smoking_policies": null,
                            "room_group_id": 22,
                            "payment_options": {
                                "payment_types": [
                                  {
                                      "amount": "726.33",
                                      "is_need_cvc": true,
                                      "by": "credit_card",
                                      "currency_code": "RUB",
                                      "is_need_credit_card_data": true,
                                      "type": "now",
                                      "vat_included": true
                                  }
                                ]
                            },
                            "images": [],
                            "taxes": [],
                            "rate_currency": "RUB",
                            "room_size": "10",
                            "rate_price": "726.33",
                            "bed_types": [],
                            "hotelpage": "https://ostrovok.ru/rooms/test_hotel/?cur=RUB&dates=20.05.2016-21.05.2016&guests=2and&lang=en&partner_slug=testaffiliateru.affiliate.bff6&request_id=f41df11a-77a0-45f6-80dc-650296d41b06&room=s-a50b3812-eef6-5fa6-8ae3-f5eef2de9a6a&utm_campaign=en-en&utm_medium=api2&utm_source=testaffiliateru&scroll=prices",
                            "room_description": "",
                            "daily_prices": [
                              "726.33"
                            ]
                        },
                        {
                            "book_hash": null,
                            "value_adds": [],
                            "room_type_id": "#any-residents #house #private-bathroom #window",
                            "room_name": "Villa",
                            "bed_places": {
                                "child_cot_count": 0,
                                "main_count": 2,
                                "shared_with_children_count": 0,
                                "extra_count": 0
                            },
                            "cancellation_info": {
                                "free_cancellation_before": "2016-05-20T14:59:00",
                                "policies": []
                            },
                            "serp_filters": [
                              "has_bathroom"
                            ],
                            "non_refundable": false,
                            "b2b_recommended_price": null,
                            "availability_hash": "s-81d5b42a-c89f-582c-a39a-0aecaadf00d5",
                            "available_rooms": 1,
                            "room_amenities": [],
                            "smoking_policies": null,
                            "room_group_id": 22,
                            "payment_options": {
                                "payment_types": [
                                  {
                                      "currency_code": "RUB",
                                      "is_need_credit_card_data": false,
                                      "amount": "750.00",
                                      "type": "hotel",
                                      "is_need_cvc": false,
                                      "vat_included": true
                                  }
                                ]
                            },
                            "images": [],
                            "taxes": [],
                            "rate_currency": "RUB",
                            "room_size": "10",
                            "rate_price": "750.00",
                            "bed_types": [],
                            "hotelpage": "https://ostrovok.ru/rooms/test_hotel/?cur=RUB&dates=20.05.2016-21.05.2016&guests=2and&lang=en&partner_slug=testaffiliateru.affiliate.bff6&request_id=f41df11a-77a0-45f6-80dc-650296d41b06&room=s-81d5b42a-c89f-582c-a39a-0aecaadf00d5&utm_campaign=en-en&utm_medium=api2&utm_source=testaffiliateru&scroll=prices",
                            "room_description": "",
                            "daily_prices": [
                              "750.00"
                            ]
                        }
                      ],
                      "available_rates": null,
                      "rate_price_min": null
                  }
                ],
                "total_hotels": 1,
                "next_page": false,
                "total_pages": 1
            },
            "error": null
        }
    }

    function GetHotelsMockUp() {
        //GET /api/affiliate/v2/hotel/list?data={"ids":["adagio_moscow_paveletskaya"],"lang":"en"}
        //or
        //https://partner.ostrovok.ru/api/affiliate/v2/hotel/list?ids=adagio_moscow_paveletskaya
        // beg hotel by id or region_id

        return {
            "debug": {
                "status": 200
            },
            "result": [
              {
                  "id": "adagio_moscow_paveletskaya",
                  "city": "Moscow",
                  "check_in_time": "14:00",
                  "rating": {
                      "our_published_reviews_count": 0,
                      "total_verbose": "Great",
                      "exists": true,
                      "other_reviews_count": 221,
                      "total": 8.9,
                      "reviews_count": 227,
                      "count": 227,
                      "our_reviews_count": 6,
                      "detailed": {
                          "services": 8.6,
                          "comfort": 9.125,
                          "personnel": 8.6,
                          "price": 8.75,
                          "cleanness": 9.125,
                          "location": 8.95
                      }
                  },
                  "address": "Bakhrushina Street 11, BLD. 3",
                  "phone": "7-495-7205301",
                  "policy_description": "<h4>Know Before You Go</h4>\n\n<p>If you require a visa to enter the country, your hotel may be able to help with the supporting documents needed to obtain one. To learn more, you can reach out to the hotel via the contact details included on your booking confirmation. The hotel may charge for this assistance, even if you end up cancelling your reservation. All arrangements are solely between the hotel and yourself.<br />This property offers transfers from the airport (surcharges may apply). Guests must contact the property with arrival details before travel, using the contact information on the booking confirmation.<br />Up to 3 children 12 years old and younger stay free when occupying the parent or guardian's room, using existing bedding.<br />Only registered guests are allowed in the guestrooms.<br />Guests can arrange to bring pets by contacting the property directly, using the contact information on the booking confirmation.</p>\n\n<h4>Fees</h4>\n\n<p>The following fees and deposits are charged by the property at time of service, check-in, or check-out.<br />Fee for full breakfast: RUB 1200.00 per person (approximately)<br />Self parking fee: RUB 150 Per hour<br />A late check-out fee will be charged<br />The above list may not be comprehensive. Fees and deposits may not include tax and are subject to change.</p>\n",
                  "check_out_time": "12:00",
                  "email": " h8223@accor.com",
                  "serp_filters": [
                    "has_internet",
                    "has_parking",
                    "has_fitness",
                    "has_airport_transfer",
                    "has_spa",
                    "has_meal"
                  ],
                  "latitude": 55.7360916745749,
                  "country_code": "RU",
                  "matching": {
                      "Booking": 741135,
                      "Carsolize": 4640261,
                      "Ostrovok": 3379835,
                      "HotelsPro": 1409684,
                      "Expedia": 446797
                  },
                  "provider_engines": [
                    1,
                    4
                  ],
                  "hotelpage": "https://ostrovok.ru/rooms/adagio_moscow_paveletskaya",
                  "longitude": 37.6356142759323,
                  "star_rating": 40,
                  "name": "Aparthotel Adagio Moscow Paveletskaya",
                  "synonyms": null,
                  "images": [
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/95/6f/956f704ea6e3107f46247b06bfbd4696dbf40755.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/95/6f/956f704ea6e3107f46247b06bfbd4696dbf40755.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/9e/c0/9ec0da790cee417778d98831f37fc5cd0fd4e055.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/9e/c0/9ec0da790cee417778d98831f37fc5cd0fd4e055.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/8a/2b/8a2b175dd69ca2a565f7bdb53a4511f7baeabcc9.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/8a/2b/8a2b175dd69ca2a565f7bdb53a4511f7baeabcc9.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/second/26/08/260867dac6eee48f8556f5675cc229f5756d56b4.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/second/26/08/260867dac6eee48f8556f5675cc229f5756d56b4.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/2d/68/2d6880bafbe98355376879c06beac9efe705b3ed.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/2d/68/2d6880bafbe98355376879c06beac9efe705b3ed.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/65/a7/65a7bd50c094186bd921f6b5815537da3d42a2e9.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/65/a7/65a7bd50c094186bd921f6b5815537da3d42a2e9.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/f9/a0/f9a08fb95977712fed4d94bff8e8db27e5dd7397.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/f9/a0/f9a08fb95977712fed4d94bff8e8db27e5dd7397.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/5a/1f/5a1fe10ee7b8c52448c32e92541bc0585f767c3c.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/5a/1f/5a1fe10ee7b8c52448c32e92541bc0585f767c3c.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/90/42/9042bf5a301ae3a121dbd7be43ebf5496e7c1537.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/90/42/9042bf5a301ae3a121dbd7be43ebf5496e7c1537.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/mec/hotels/8000000/7220000/7213100/7213099/7213099_26_b.jpg",
                        "url": "https://cdn.ostrovok.ru/t/x220/mec/hotels/8000000/7220000/7213100/7213099/7213099_26_b.jpg",
                        "orig_width": 1000,
                        "width": 331,
                        "orig_height": 665,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/51/3b/513b3ce1bbf0dd440f60ddbbb6fc73bdbfb15248.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/51/3b/513b3ce1bbf0dd440f60ddbbb6fc73bdbfb15248.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/second/fd/86/fd86efd8549befb59a7213e781bd8f9a99a03ef2.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/second/fd/86/fd86efd8549befb59a7213e781bd8f9a99a03ef2.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/mec/hotels/8000000/7220000/7213100/7213099/7213099_24_b.jpg",
                        "url": "https://cdn.ostrovok.ru/t/x220/mec/hotels/8000000/7220000/7213100/7213099/7213099_24_b.jpg",
                        "orig_width": 1000,
                        "width": 330,
                        "orig_height": 667,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/mec/hotels/8000000/7220000/7213100/7213099/7213099_27_b.jpg",
                        "url": "https://cdn.ostrovok.ru/t/x220/mec/hotels/8000000/7220000/7213100/7213099/7213099_27_b.jpg",
                        "orig_width": 1000,
                        "width": 315,
                        "orig_height": 698,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/mec/hotels/8000000/7220000/7213100/7213099/7213099_25_b.jpg",
                        "url": "https://cdn.ostrovok.ru/t/x220/mec/hotels/8000000/7220000/7213100/7213099/7213099_25_b.jpg",
                        "orig_width": 1000,
                        "width": 336,
                        "orig_height": 654,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/second/e4/21/e421b0661677864e034113b072226ba57c2bfc6b.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/second/e4/21/e421b0661677864e034113b072226ba57c2bfc6b.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/second/85/40/8540cf375b7e03c674b021eb995b8a8214c57d8e.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/second/85/40/8540cf375b7e03c674b021eb995b8a8214c57d8e.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/second/c0/5f/c05f03a6642b46b42fd515b80a4eaffafa7f50c3.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/second/c0/5f/c05f03a6642b46b42fd515b80a4eaffafa7f50c3.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/second/55/42/554213f63c3461b133b10340646fded97a33fe93.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/second/55/42/554213f63c3461b133b10340646fded97a33fe93.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    },
                    {
                        "orig_url": "https://cdn.ostrovok.ru/t/orig/second/be/23/be23af3e777e730eb8157faa9a9dd64ccac4f516.jpeg",
                        "url": "https://cdn.ostrovok.ru/t/x220/second/be/23/be23af3e777e730eb8157faa9a9dd64ccac4f516.jpeg",
                        "orig_width": 840,
                        "width": 402,
                        "orig_height": 460,
                        "height": 220
                    }
                  ],
                  "low_rate": 3652,
                  "region_category": "World (w\\o Europe, w\\o ALL CIS)",
                  "region_id": 2395,
                  "country": "Russia",
                  "description_short": "####Property Location \nWith a stay at Aparthotel Adagio Moscow Paveletskaya, you'll be centrally located in Moscow, convenient to Luna Theatre and St. Basil's ...",
                  "amenities": [
                    {
                        "amenities": [
                          "Express check-out",
                          "ATM",
                          "Laundry",
                          "Smoke-free property",
                          "Newspapers ",
                          "Luggage storage",
                          "24-hour reception",
                          "Elevator/lift",
                          "Express check-in"
                        ],
                        "group_slug": "has_common_info",
                        "group_name": "General"
                    },
                    {
                        "amenities": [
                          "Free Wi-Fi"
                        ],
                        "group_slug": "has_internet",
                        "group_name": "Internet"
                    },
                    {
                        "amenities": [
                          "Bar",
                          "Restaurant"
                        ],
                        "group_slug": "has_meal",
                        "group_name": "Meals"
                    },
                    {
                        "amenities": [
                          "Parking (surcharge)"
                        ],
                        "group_slug": "has_parking",
                        "group_name": "Parking"
                    },
                    {
                        "amenities": [
                          "Fitness facilities"
                        ],
                        "group_slug": "has_fitness",
                        "group_name": "Sports"
                    },
                    {
                        "amenities": [
                          "Sauna",
                          "Hammam"
                        ],
                        "group_slug": "has_barber_shop",
                        "group_name": "Beauty and wellness"
                    },
                    {
                        "amenities": [
                          "Television in lobby"
                        ],
                        "group_slug": "has_entertainment",
                        "group_name": "Recreation"
                    },
                    {
                        "amenities": [
                          "Airport transportation (surcharge)"
                        ],
                        "group_slug": "has_tours",
                        "group_name": "Tourist services"
                    },
                    {
                        "amenities": [
                          "Room service"
                        ],
                        "group_slug": "has_extra_service",
                        "group_name": "Rooms"
                    },
                    {
                        "amenities": [
                          "Business center"
                        ],
                        "group_slug": "has_busyness",
                        "group_name": "Business "
                    }
                  ],
                  "description": "<h4>Property Location</h4>\n\n<p>With a stay at Aparthotel Adagio Moscow Paveletskaya, you'll be centrally located in Moscow, convenient to Luna Theatre and St. Basil's Cathedral.  This 4-star aparthotel is close to Red Square and Moscow Kremlin.</p>\n\n<h4>Rooms</h4>\n\n<p>Make yourself at home in one of the 94 air-conditioned rooms featuring kitchens with refrigerators and stovetops. Complimentary wireless Internet access keeps you connected, and LCD televisions are provided for your entertainment. Conveniences include phones, as well as safes and desks.</p>\n\n<h4>Rec, Spa, Premium Amenities</h4>\n\n<p>Be sure to enjoy recreational amenities including a sauna and a fitness center. Additional amenities include complimentary wireless Internet access and a television in the lobby.</p>\n\n<h4>Dining</h4>\n\n<p>Grab a bite at one of the aparthotel's 2 restaurants, or stay in and take advantage of 24-hour room service. Quench your thirst with your favorite drink at a bar/lounge.</p>\n\n<h4>Business, Other Amenities</h4>\n\n<p>Featured amenities include a business center, express check-in, and express check-out. Event facilities at this aparthotel consist of a conference center and meeting rooms. A roundtrip airport shuttle is provided for a surcharge (available on request), and self parking (subject to charges) is available onsite.</p>",
                  "kind": "Apartment",
                  "is_bookable_in_api": true,
                  "thumbnail": "https://cdn.ostrovok.ru/t/100x100/ostrovok/95/6f/956f704ea6e3107f46247b06bfbd4696dbf40755.jpeg",
                  "room_groups": [
                    {
                        "amenities": {},
                        "name": "Other",
                        "room_group_id": 0,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Economy Rooms",
                        "room_group_id": 1,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Standard Rooms",
                        "room_group_id": 2,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Suites",
                        "room_group_id": 3,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Standalone Rooms",
                        "room_group_id": 4,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Beds in Dormitory",
                        "room_group_id": 5,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Beds in Dormitory",
                        "room_group_id": 6,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Beds in Male Dormitory",
                        "room_group_id": 7,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Beds in Female Dormitory",
                        "room_group_id": 8,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Rooms with Shared Bathroom",
                        "room_group_id": 9,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Economy Rooms",
                        "room_group_id": 10,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Standard Rooms",
                        "room_group_id": 11,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Superior Rooms",
                        "room_group_id": 12,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Premium Rooms",
                        "room_group_id": 13,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "description": "2 twin and 1 sofa bed or 2 double and 1 sofa bed\n699 sq feet (65 sq meters)\n\nLayout - Separate living room\nEntertainment - Free WiFi, LCD TV \nFood & Drink - Kitchen with refrigerator, stovetop, and microwave\nBathroom - Private bathroom and bathtub or shower\nPractical - Safe, double sofa bed, and free weekday newspaper; cribs/infant beds available on request\nComfort - Air conditioning\nNeed to Know - Weekly housekeeping\nNon-Smoking\nRoom/bed type depends on availability at check-in",
                        "name": "Apartments",
                        "room_group_id": 14,
                        "thumbnail_tmpl": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/be87370575a4a5c779ac1d9cfb2f7c1f.jpg",
                        "size": "65.0",
                        "image_list_tmpl": [
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/be87370575a4a5c779ac1d9cfb2f7c1f.jpg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/be87370575a4a5c779ac1d9cfb2f7c1f.jpg",
                              "width": 500,
                              "height": 332
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/020b2e670cac07180802bff1c78be72c.jpg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/020b2e670cac07180802bff1c78be72c.jpg",
                              "width": 500,
                              "height": 333
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/c8d6bd437a8cd02d5d467bdda8e5f2e7.jpg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/c8d6bd437a8cd02d5d467bdda8e5f2e7.jpg",
                              "width": 500,
                              "height": 328
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/76ec7befe6f6e99132d2203f4e9b6b4d.jpg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/76ec7befe6f6e99132d2203f4e9b6b4d.jpg",
                              "width": 500,
                              "height": 333
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/d0cb90c8ff1b9b2887036716f831c8bf.jpg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/d0cb90c8ff1b9b2887036716f831c8bf.jpg",
                              "width": 500,
                              "height": 333
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/52ab8c387f95c5675a388717b622f262.jpg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/52ab8c387f95c5675a388717b622f262.jpg",
                              "width": 333,
                              "height": 500
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/d28753729e71c7e36962042ad7676a65.jpg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/d28753729e71c7e36962042ad7676a65.jpg",
                              "width": 500,
                              "height": 336
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/db/53/db53934798f90fdc3722856ff0eb97e36413d6e0.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/db/53/db53934798f90fdc3722856ff0eb97e36413d6e0.jpeg",
                              "width": 1024,
                              "height": 695
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/4e/8b/4e8b40dfde08250b01fb2eba9a9fc2fbeea0a798.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/4e/8b/4e8b40dfde08250b01fb2eba9a9fc2fbeea0a798.jpeg",
                              "width": 1024,
                              "height": 683
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/0a/00/0a00220b21af640373f0b5c413e6685506a27db9.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/0a/00/0a00220b21af640373f0b5c413e6685506a27db9.jpeg",
                              "width": 1024,
                              "height": 683
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/49/10/49100d6a4ee625d42fdc38de3d3c47df0947bc3a.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/49/10/49100d6a4ee625d42fdc38de3d3c47df0947bc3a.jpeg",
                              "width": 1024,
                              "height": 683
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/df/c5/dfc5914653725759af5c4c4f7fcd4577e956dc20.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/df/c5/dfc5914653725759af5c4c4f7fcd4577e956dc20.jpeg",
                              "width": 1024,
                              "height": 683
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/b0/82/b0824dd89fb2d4e3bcb605a79f93f7151d94cc2b.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/b0/82/b0824dd89fb2d4e3bcb605a79f93f7151d94cc2b.jpeg",
                              "width": 1024,
                              "height": 683
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/79/3c/793c4be1777023a7d4f21a50384183aa8b5c7ceb.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/79/3c/793c4be1777023a7d4f21a50384183aa8b5c7ceb.jpeg",
                              "width": 1024,
                              "height": 682
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/01/04/01040e0efa6dcbb8c1290799616ea345d35e9d4a.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/01/04/01040e0efa6dcbb8c1290799616ea345d35e9d4a.jpeg",
                              "width": 1024,
                              "height": 683
                          }
                        ]
                    },
                    {
                        "amenities": {},
                        "name": "Superior Apartments",
                        "room_group_id": 15,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Premium Apartments",
                        "room_group_id": 16,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Cottages",
                        "room_group_id": 17,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Caravans",
                        "room_group_id": 18,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Tents",
                        "room_group_id": 19,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Capsules",
                        "room_group_id": 20,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Bungalows",
                        "room_group_id": 21,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Villas",
                        "room_group_id": 22,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Superior Villas",
                        "room_group_id": 23,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Deluxe Villas",
                        "room_group_id": 24,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Premium Villas",
                        "room_group_id": 25,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "description": "1 queen bed\n 280 sq feet (26 sq meters)\n\nEntertainment - Free WiFi, LCD TV \nFood & Drink - Kitchen with refrigerator, stovetop, and microwave\nBathroom - Private bathroom and bathtub or shower\nPractical - Safe, double sofa bed, and free weekday newspaper; cribs/infant beds available on request\nComfort - Air conditioning\nNeed to Know - Weekly housekeeping\nNon-Smoking\nRoom/bed type depends on availability at check-in",
                        "name": "Studios",
                        "room_group_id": 26,
                        "thumbnail_tmpl": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/c8d6bd437a8cd02d5d467bdda8e5f2e7.jpg",
                        "size": "24.0",
                        "image_list_tmpl": [
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/c8d6bd437a8cd02d5d467bdda8e5f2e7.jpg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/c8d6bd437a8cd02d5d467bdda8e5f2e7.jpg",
                              "width": 500,
                              "height": 328
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/5c3180947f2f8e65ff0ea15b375246e5.jpg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/5c3180947f2f8e65ff0ea15b375246e5.jpg",
                              "width": 500,
                              "height": 325
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/0d/9e/0d9e266f1f7b85d79768eba8dc975d0958098d70.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/0d/9e/0d9e266f1f7b85d79768eba8dc975d0958098d70.jpeg",
                              "width": 1024,
                              "height": 683
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/30/7b/307baa7b538493c356e9511ef587640d3afddb50.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/30/7b/307baa7b538493c356e9511ef587640d3afddb50.jpeg",
                              "width": 1024,
                              "height": 679
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/9a/d3/9ad3cb9f76e60a35564c67e825af399657587ca5.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/9a/d3/9ad3cb9f76e60a35564c67e825af399657587ca5.jpeg",
                              "width": 1024,
                              "height": 636
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/57/3d/573d876fa4f97221190ba9e18732a2bf9899519d.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/57/3d/573d876fa4f97221190ba9e18732a2bf9899519d.jpeg",
                              "width": 1024,
                              "height": 683
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/4e/8b/4e8b40dfde08250b01fb2eba9a9fc2fbeea0a798.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/4e/8b/4e8b40dfde08250b01fb2eba9a9fc2fbeea0a798.jpeg",
                              "width": 1024,
                              "height": 683
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/4a/3c/4a3c75e303842f2fb8488400459f1d0e86a352a1.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/4a/3c/4a3c75e303842f2fb8488400459f1d0e86a352a1.jpeg",
                              "width": 1024,
                              "height": 677
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/f2/d1/f2d1dabaf3931e91bc20ea04c088537a7ad58a27.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/f2/d1/f2d1dabaf3931e91bc20ea04c088537a7ad58a27.jpeg",
                              "width": 512,
                              "height": 768
                          },
                          {
                              "src": "https://cdn.ostrovok.ru/t/{size}/second/01/04/01040e0efa6dcbb8c1290799616ea345d35e9d4a.jpeg",
                              "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/01/04/01040e0efa6dcbb8c1290799616ea345d35e9d4a.jpeg",
                              "width": 1024,
                              "height": 683
                          }
                        ]
                    },
                    {
                        "amenities": {},
                        "name": "Executive Rooms",
                        "room_group_id": 27,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Deluxe Rooms",
                        "room_group_id": 28,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Comfort Rooms",
                        "room_group_id": 29,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Club Rooms",
                        "room_group_id": 30,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Business Rooms",
                        "room_group_id": 31,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Suites",
                        "room_group_id": 32,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Junior Suites",
                        "room_group_id": 33,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Special Offers",
                        "room_group_id": 34,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Family Rooms",
                        "room_group_id": 35,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Standard Suites",
                        "room_group_id": 36,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Superior Suites",
                        "room_group_id": 37,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Premium Suites",
                        "room_group_id": 38,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Economy Studios",
                        "room_group_id": 39,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Standard Studios",
                        "room_group_id": 40,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Superior Studios",
                        "room_group_id": 41,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Deluxe Studios",
                        "room_group_id": 42,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Economy Apartments",
                        "room_group_id": 43,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Standard Apartments",
                        "room_group_id": 44,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Economy Villas",
                        "room_group_id": 45,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Standard Villas",
                        "room_group_id": 46,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Business Rooms",
                        "room_group_id": 47,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Capsules in Male Dorm",
                        "room_group_id": 49,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Capsules in Female Dorm",
                        "room_group_id": 50,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Economy Cottages",
                        "room_group_id": 51,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Superior Cottages",
                        "room_group_id": 52,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Premium Cottages",
                        "room_group_id": 53,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Economy Bungalows",
                        "room_group_id": 54,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Superior Bungalows",
                        "room_group_id": 55,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Premium Bungalows",
                        "room_group_id": 56,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Economy Chalets",
                        "room_group_id": 57,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Chalets",
                        "room_group_id": 58,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Superior Chalets",
                        "room_group_id": 59,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Premium Chalets",
                        "room_group_id": 60,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Superior Capsules",
                        "room_group_id": 61,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Superior Capsules in Male Dorm",
                        "room_group_id": 62,
                        "image_list_tmpl": []
                    },
                    {
                        "amenities": {},
                        "name": "Superior Capsules in Female Dorm",
                        "room_group_id": 63,
                        "image_list_tmpl": []
                    }
                  ],
                  "clean_address": "Bakhrushina Street 11, BLD. 3"
              },
            {
                "id": "adagio_moscow_paveletskaya",
                "city": "Moscow",
                "check_in_time": "14:00",
                "rating": {
                    "our_published_reviews_count": 0,
                    "total_verbose": "Great",
                    "exists": true,
                    "other_reviews_count": 221,
                    "total": 8.9,
                    "reviews_count": 227,
                    "count": 227,
                    "our_reviews_count": 6,
                    "detailed": {
                        "services": 8.6,
                        "comfort": 9.125,
                        "personnel": 8.6,
                        "price": 8.75,
                        "cleanness": 9.125,
                        "location": 8.95
                    }
                },
                "address": "Bakhrushina Street 11, BLD. 3",
                "phone": "7-495-7205301",
                "policy_description": "<h4>Know Before You Go</h4>\n\n<p>If you require a visa to enter the country, your hotel may be able to help with the supporting documents needed to obtain one. To learn more, you can reach out to the hotel via the contact details included on your booking confirmation. The hotel may charge for this assistance, even if you end up cancelling your reservation. All arrangements are solely between the hotel and yourself.<br />This property offers transfers from the airport (surcharges may apply). Guests must contact the property with arrival details before travel, using the contact information on the booking confirmation.<br />Up to 3 children 12 years old and younger stay free when occupying the parent or guardian's room, using existing bedding.<br />Only registered guests are allowed in the guestrooms.<br />Guests can arrange to bring pets by contacting the property directly, using the contact information on the booking confirmation.</p>\n\n<h4>Fees</h4>\n\n<p>The following fees and deposits are charged by the property at time of service, check-in, or check-out.<br />Fee for full breakfast: RUB 1200.00 per person (approximately)<br />Self parking fee: RUB 150 Per hour<br />A late check-out fee will be charged<br />The above list may not be comprehensive. Fees and deposits may not include tax and are subject to change.</p>\n",
                "check_out_time": "12:00",
                "email": " h8223@accor.com",
                "serp_filters": [
                  "has_internet",
                  "has_parking",
                  "has_fitness",
                  "has_airport_transfer",
                  "has_spa",
                  "has_meal"
                ],
                "latitude": 55.7360916745749,
                "country_code": "RU",
                "matching": {
                    "Booking": 741135,
                    "Carsolize": 4640261,
                    "Ostrovok": 3379835,
                    "HotelsPro": 1409684,
                    "Expedia": 446797
                },
                "provider_engines": [
                  1,
                  4
                ],
                "hotelpage": "https://ostrovok.ru/rooms/adagio_moscow_paveletskaya",
                "longitude": 37.6356142759323,
                "star_rating": 40,
                "name": "Aparthotel Adagio Moscow Paveletskaya",
                "synonyms": null,
                "images": [
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/95/6f/956f704ea6e3107f46247b06bfbd4696dbf40755.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/95/6f/956f704ea6e3107f46247b06bfbd4696dbf40755.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/9e/c0/9ec0da790cee417778d98831f37fc5cd0fd4e055.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/9e/c0/9ec0da790cee417778d98831f37fc5cd0fd4e055.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/8a/2b/8a2b175dd69ca2a565f7bdb53a4511f7baeabcc9.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/8a/2b/8a2b175dd69ca2a565f7bdb53a4511f7baeabcc9.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/second/26/08/260867dac6eee48f8556f5675cc229f5756d56b4.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/second/26/08/260867dac6eee48f8556f5675cc229f5756d56b4.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/2d/68/2d6880bafbe98355376879c06beac9efe705b3ed.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/2d/68/2d6880bafbe98355376879c06beac9efe705b3ed.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/65/a7/65a7bd50c094186bd921f6b5815537da3d42a2e9.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/65/a7/65a7bd50c094186bd921f6b5815537da3d42a2e9.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/f9/a0/f9a08fb95977712fed4d94bff8e8db27e5dd7397.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/f9/a0/f9a08fb95977712fed4d94bff8e8db27e5dd7397.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/5a/1f/5a1fe10ee7b8c52448c32e92541bc0585f767c3c.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/5a/1f/5a1fe10ee7b8c52448c32e92541bc0585f767c3c.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/90/42/9042bf5a301ae3a121dbd7be43ebf5496e7c1537.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/90/42/9042bf5a301ae3a121dbd7be43ebf5496e7c1537.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/mec/hotels/8000000/7220000/7213100/7213099/7213099_26_b.jpg",
                      "url": "https://cdn.ostrovok.ru/t/x220/mec/hotels/8000000/7220000/7213100/7213099/7213099_26_b.jpg",
                      "orig_width": 1000,
                      "width": 331,
                      "orig_height": 665,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/ostrovok/51/3b/513b3ce1bbf0dd440f60ddbbb6fc73bdbfb15248.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/ostrovok/51/3b/513b3ce1bbf0dd440f60ddbbb6fc73bdbfb15248.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/second/fd/86/fd86efd8549befb59a7213e781bd8f9a99a03ef2.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/second/fd/86/fd86efd8549befb59a7213e781bd8f9a99a03ef2.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/mec/hotels/8000000/7220000/7213100/7213099/7213099_24_b.jpg",
                      "url": "https://cdn.ostrovok.ru/t/x220/mec/hotels/8000000/7220000/7213100/7213099/7213099_24_b.jpg",
                      "orig_width": 1000,
                      "width": 330,
                      "orig_height": 667,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/mec/hotels/8000000/7220000/7213100/7213099/7213099_27_b.jpg",
                      "url": "https://cdn.ostrovok.ru/t/x220/mec/hotels/8000000/7220000/7213100/7213099/7213099_27_b.jpg",
                      "orig_width": 1000,
                      "width": 315,
                      "orig_height": 698,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/mec/hotels/8000000/7220000/7213100/7213099/7213099_25_b.jpg",
                      "url": "https://cdn.ostrovok.ru/t/x220/mec/hotels/8000000/7220000/7213100/7213099/7213099_25_b.jpg",
                      "orig_width": 1000,
                      "width": 336,
                      "orig_height": 654,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/second/e4/21/e421b0661677864e034113b072226ba57c2bfc6b.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/second/e4/21/e421b0661677864e034113b072226ba57c2bfc6b.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/second/85/40/8540cf375b7e03c674b021eb995b8a8214c57d8e.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/second/85/40/8540cf375b7e03c674b021eb995b8a8214c57d8e.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/second/c0/5f/c05f03a6642b46b42fd515b80a4eaffafa7f50c3.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/second/c0/5f/c05f03a6642b46b42fd515b80a4eaffafa7f50c3.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/second/55/42/554213f63c3461b133b10340646fded97a33fe93.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/second/55/42/554213f63c3461b133b10340646fded97a33fe93.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  },
                  {
                      "orig_url": "https://cdn.ostrovok.ru/t/orig/second/be/23/be23af3e777e730eb8157faa9a9dd64ccac4f516.jpeg",
                      "url": "https://cdn.ostrovok.ru/t/x220/second/be/23/be23af3e777e730eb8157faa9a9dd64ccac4f516.jpeg",
                      "orig_width": 840,
                      "width": 402,
                      "orig_height": 460,
                      "height": 220
                  }
                ],
                "low_rate": 3652,
                "region_category": "World (w\\o Europe, w\\o ALL CIS)",
                "region_id": 2395,
                "country": "Russia",
                "description_short": "####Property Location \nWith a stay at Aparthotel Adagio Moscow Paveletskaya, you'll be centrally located in Moscow, convenient to Luna Theatre and St. Basil's ...",
                "amenities": [
                  {
                      "amenities": [
                        "Express check-out",
                        "ATM",
                        "Laundry",
                        "Smoke-free property",
                        "Newspapers ",
                        "Luggage storage",
                        "24-hour reception",
                        "Elevator/lift",
                        "Express check-in"
                      ],
                      "group_slug": "has_common_info",
                      "group_name": "General"
                  },
                  {
                      "amenities": [
                        "Free Wi-Fi"
                      ],
                      "group_slug": "has_internet",
                      "group_name": "Internet"
                  },
                  {
                      "amenities": [
                        "Bar",
                        "Restaurant"
                      ],
                      "group_slug": "has_meal",
                      "group_name": "Meals"
                  },
                  {
                      "amenities": [
                        "Parking (surcharge)"
                      ],
                      "group_slug": "has_parking",
                      "group_name": "Parking"
                  },
                  {
                      "amenities": [
                        "Fitness facilities"
                      ],
                      "group_slug": "has_fitness",
                      "group_name": "Sports"
                  },
                  {
                      "amenities": [
                        "Sauna",
                        "Hammam"
                      ],
                      "group_slug": "has_barber_shop",
                      "group_name": "Beauty and wellness"
                  },
                  {
                      "amenities": [
                        "Television in lobby"
                      ],
                      "group_slug": "has_entertainment",
                      "group_name": "Recreation"
                  },
                  {
                      "amenities": [
                        "Airport transportation (surcharge)"
                      ],
                      "group_slug": "has_tours",
                      "group_name": "Tourist services"
                  },
                  {
                      "amenities": [
                        "Room service"
                      ],
                      "group_slug": "has_extra_service",
                      "group_name": "Rooms"
                  },
                  {
                      "amenities": [
                        "Business center"
                      ],
                      "group_slug": "has_busyness",
                      "group_name": "Business "
                  }
                ],
                "description": "<h4>Property Location</h4>\n\n<p>With a stay at Aparthotel Adagio Moscow Paveletskaya, you'll be centrally located in Moscow, convenient to Luna Theatre and St. Basil's Cathedral.  This 4-star aparthotel is close to Red Square and Moscow Kremlin.</p>\n\n<h4>Rooms</h4>\n\n<p>Make yourself at home in one of the 94 air-conditioned rooms featuring kitchens with refrigerators and stovetops. Complimentary wireless Internet access keeps you connected, and LCD televisions are provided for your entertainment. Conveniences include phones, as well as safes and desks.</p>\n\n<h4>Rec, Spa, Premium Amenities</h4>\n\n<p>Be sure to enjoy recreational amenities including a sauna and a fitness center. Additional amenities include complimentary wireless Internet access and a television in the lobby.</p>\n\n<h4>Dining</h4>\n\n<p>Grab a bite at one of the aparthotel's 2 restaurants, or stay in and take advantage of 24-hour room service. Quench your thirst with your favorite drink at a bar/lounge.</p>\n\n<h4>Business, Other Amenities</h4>\n\n<p>Featured amenities include a business center, express check-in, and express check-out. Event facilities at this aparthotel consist of a conference center and meeting rooms. A roundtrip airport shuttle is provided for a surcharge (available on request), and self parking (subject to charges) is available onsite.</p>",
                "kind": "Apartment",
                "is_bookable_in_api": true,
                "thumbnail": "https://cdn.ostrovok.ru/t/100x100/ostrovok/95/6f/956f704ea6e3107f46247b06bfbd4696dbf40755.jpeg",
                "room_groups": [
                  {
                      "amenities": {},
                      "name": "Other",
                      "room_group_id": 0,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Economy Rooms",
                      "room_group_id": 1,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Standard Rooms",
                      "room_group_id": 2,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Suites",
                      "room_group_id": 3,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Standalone Rooms",
                      "room_group_id": 4,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Beds in Dormitory",
                      "room_group_id": 5,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Beds in Dormitory",
                      "room_group_id": 6,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Beds in Male Dormitory",
                      "room_group_id": 7,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Beds in Female Dormitory",
                      "room_group_id": 8,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Rooms with Shared Bathroom",
                      "room_group_id": 9,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Economy Rooms",
                      "room_group_id": 10,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Standard Rooms",
                      "room_group_id": 11,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Superior Rooms",
                      "room_group_id": 12,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Premium Rooms",
                      "room_group_id": 13,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "description": "2 twin and 1 sofa bed or 2 double and 1 sofa bed\n699 sq feet (65 sq meters)\n\nLayout - Separate living room\nEntertainment - Free WiFi, LCD TV \nFood & Drink - Kitchen with refrigerator, stovetop, and microwave\nBathroom - Private bathroom and bathtub or shower\nPractical - Safe, double sofa bed, and free weekday newspaper; cribs/infant beds available on request\nComfort - Air conditioning\nNeed to Know - Weekly housekeeping\nNon-Smoking\nRoom/bed type depends on availability at check-in",
                      "name": "Apartments",
                      "room_group_id": 14,
                      "thumbnail_tmpl": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/be87370575a4a5c779ac1d9cfb2f7c1f.jpg",
                      "size": "65.0",
                      "image_list_tmpl": [
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/be87370575a4a5c779ac1d9cfb2f7c1f.jpg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/be87370575a4a5c779ac1d9cfb2f7c1f.jpg",
                            "width": 500,
                            "height": 332
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/020b2e670cac07180802bff1c78be72c.jpg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/020b2e670cac07180802bff1c78be72c.jpg",
                            "width": 500,
                            "height": 333
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/c8d6bd437a8cd02d5d467bdda8e5f2e7.jpg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/c8d6bd437a8cd02d5d467bdda8e5f2e7.jpg",
                            "width": 500,
                            "height": 328
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/76ec7befe6f6e99132d2203f4e9b6b4d.jpg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/76ec7befe6f6e99132d2203f4e9b6b4d.jpg",
                            "width": 500,
                            "height": 333
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/d0cb90c8ff1b9b2887036716f831c8bf.jpg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/d0cb90c8ff1b9b2887036716f831c8bf.jpg",
                            "width": 500,
                            "height": 333
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/52ab8c387f95c5675a388717b622f262.jpg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/52ab8c387f95c5675a388717b622f262.jpg",
                            "width": 333,
                            "height": 500
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/d28753729e71c7e36962042ad7676a65.jpg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/d28753729e71c7e36962042ad7676a65.jpg",
                            "width": 500,
                            "height": 336
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/db/53/db53934798f90fdc3722856ff0eb97e36413d6e0.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/db/53/db53934798f90fdc3722856ff0eb97e36413d6e0.jpeg",
                            "width": 1024,
                            "height": 695
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/4e/8b/4e8b40dfde08250b01fb2eba9a9fc2fbeea0a798.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/4e/8b/4e8b40dfde08250b01fb2eba9a9fc2fbeea0a798.jpeg",
                            "width": 1024,
                            "height": 683
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/0a/00/0a00220b21af640373f0b5c413e6685506a27db9.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/0a/00/0a00220b21af640373f0b5c413e6685506a27db9.jpeg",
                            "width": 1024,
                            "height": 683
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/49/10/49100d6a4ee625d42fdc38de3d3c47df0947bc3a.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/49/10/49100d6a4ee625d42fdc38de3d3c47df0947bc3a.jpeg",
                            "width": 1024,
                            "height": 683
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/df/c5/dfc5914653725759af5c4c4f7fcd4577e956dc20.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/df/c5/dfc5914653725759af5c4c4f7fcd4577e956dc20.jpeg",
                            "width": 1024,
                            "height": 683
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/b0/82/b0824dd89fb2d4e3bcb605a79f93f7151d94cc2b.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/b0/82/b0824dd89fb2d4e3bcb605a79f93f7151d94cc2b.jpeg",
                            "width": 1024,
                            "height": 683
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/79/3c/793c4be1777023a7d4f21a50384183aa8b5c7ceb.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/79/3c/793c4be1777023a7d4f21a50384183aa8b5c7ceb.jpeg",
                            "width": 1024,
                            "height": 682
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/01/04/01040e0efa6dcbb8c1290799616ea345d35e9d4a.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/01/04/01040e0efa6dcbb8c1290799616ea345d35e9d4a.jpeg",
                            "width": 1024,
                            "height": 683
                        }
                      ]
                  },
                  {
                      "amenities": {},
                      "name": "Superior Apartments",
                      "room_group_id": 15,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Premium Apartments",
                      "room_group_id": 16,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Cottages",
                      "room_group_id": 17,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Caravans",
                      "room_group_id": 18,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Tents",
                      "room_group_id": 19,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Capsules",
                      "room_group_id": 20,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Bungalows",
                      "room_group_id": 21,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Villas",
                      "room_group_id": 22,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Superior Villas",
                      "room_group_id": 23,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Deluxe Villas",
                      "room_group_id": 24,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Premium Villas",
                      "room_group_id": 25,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "description": "1 queen bed\n 280 sq feet (26 sq meters)\n\nEntertainment - Free WiFi, LCD TV \nFood & Drink - Kitchen with refrigerator, stovetop, and microwave\nBathroom - Private bathroom and bathtub or shower\nPractical - Safe, double sofa bed, and free weekday newspaper; cribs/infant beds available on request\nComfort - Air conditioning\nNeed to Know - Weekly housekeeping\nNon-Smoking\nRoom/bed type depends on availability at check-in",
                      "name": "Studios",
                      "room_group_id": 26,
                      "thumbnail_tmpl": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/c8d6bd437a8cd02d5d467bdda8e5f2e7.jpg",
                      "size": "24.0",
                      "image_list_tmpl": [
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/c8d6bd437a8cd02d5d467bdda8e5f2e7.jpg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/c8d6bd437a8cd02d5d467bdda8e5f2e7.jpg",
                            "width": 500,
                            "height": 328
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/5c3180947f2f8e65ff0ea15b375246e5.jpg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/1392071690/5c3180947f2f8e65ff0ea15b375246e5.jpg",
                            "width": 500,
                            "height": 325
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/0d/9e/0d9e266f1f7b85d79768eba8dc975d0958098d70.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/0d/9e/0d9e266f1f7b85d79768eba8dc975d0958098d70.jpeg",
                            "width": 1024,
                            "height": 683
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/30/7b/307baa7b538493c356e9511ef587640d3afddb50.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/30/7b/307baa7b538493c356e9511ef587640d3afddb50.jpeg",
                            "width": 1024,
                            "height": 679
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/9a/d3/9ad3cb9f76e60a35564c67e825af399657587ca5.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/9a/d3/9ad3cb9f76e60a35564c67e825af399657587ca5.jpeg",
                            "width": 1024,
                            "height": 636
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/57/3d/573d876fa4f97221190ba9e18732a2bf9899519d.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/57/3d/573d876fa4f97221190ba9e18732a2bf9899519d.jpeg",
                            "width": 1024,
                            "height": 683
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/4e/8b/4e8b40dfde08250b01fb2eba9a9fc2fbeea0a798.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/4e/8b/4e8b40dfde08250b01fb2eba9a9fc2fbeea0a798.jpeg",
                            "width": 1024,
                            "height": 683
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/4a/3c/4a3c75e303842f2fb8488400459f1d0e86a352a1.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/4a/3c/4a3c75e303842f2fb8488400459f1d0e86a352a1.jpeg",
                            "width": 1024,
                            "height": 677
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/f2/d1/f2d1dabaf3931e91bc20ea04c088537a7ad58a27.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/f2/d1/f2d1dabaf3931e91bc20ea04c088537a7ad58a27.jpeg",
                            "width": 512,
                            "height": 768
                        },
                        {
                            "src": "https://cdn.ostrovok.ru/t/{size}/second/01/04/01040e0efa6dcbb8c1290799616ea345d35e9d4a.jpeg",
                            "src_secure": "https://cdn.ostrovok.ru/t/{size}/second/01/04/01040e0efa6dcbb8c1290799616ea345d35e9d4a.jpeg",
                            "width": 1024,
                            "height": 683
                        }
                      ]
                  },
                  {
                      "amenities": {},
                      "name": "Executive Rooms",
                      "room_group_id": 27,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Deluxe Rooms",
                      "room_group_id": 28,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Comfort Rooms",
                      "room_group_id": 29,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Club Rooms",
                      "room_group_id": 30,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Business Rooms",
                      "room_group_id": 31,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Suites",
                      "room_group_id": 32,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Junior Suites",
                      "room_group_id": 33,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Special Offers",
                      "room_group_id": 34,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Family Rooms",
                      "room_group_id": 35,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Standard Suites",
                      "room_group_id": 36,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Superior Suites",
                      "room_group_id": 37,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Premium Suites",
                      "room_group_id": 38,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Economy Studios",
                      "room_group_id": 39,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Standard Studios",
                      "room_group_id": 40,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Superior Studios",
                      "room_group_id": 41,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Deluxe Studios",
                      "room_group_id": 42,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Economy Apartments",
                      "room_group_id": 43,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Standard Apartments",
                      "room_group_id": 44,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Economy Villas",
                      "room_group_id": 45,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Standard Villas",
                      "room_group_id": 46,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Business Rooms",
                      "room_group_id": 47,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Capsules in Male Dorm",
                      "room_group_id": 49,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Capsules in Female Dorm",
                      "room_group_id": 50,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Economy Cottages",
                      "room_group_id": 51,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Superior Cottages",
                      "room_group_id": 52,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Premium Cottages",
                      "room_group_id": 53,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Economy Bungalows",
                      "room_group_id": 54,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Superior Bungalows",
                      "room_group_id": 55,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Premium Bungalows",
                      "room_group_id": 56,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Economy Chalets",
                      "room_group_id": 57,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Chalets",
                      "room_group_id": 58,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Superior Chalets",
                      "room_group_id": 59,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Premium Chalets",
                      "room_group_id": 60,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Superior Capsules",
                      "room_group_id": 61,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Superior Capsules in Male Dorm",
                      "room_group_id": 62,
                      "image_list_tmpl": []
                  },
                  {
                      "amenities": {},
                      "name": "Superior Capsules in Female Dorm",
                      "room_group_id": 63,
                      "image_list_tmpl": []
                  }
                ],
                "clean_address": "Bakhrushina Street 11, BLD. 3"
            }
            ],
            "error": null
        }
    }
    // end api requests

    // bindings
    function bindRegionsToHtml(data) {
        $(data.result.regions).each(function () {
            $("#cities").append('<option value="' + this.name + '" />');
        });
    };

    function clearBindingForCities() {
        $("#cities").html('');
    };

    function bindRegions(country) {
        var regions = getAllRegions();
        $("#city").html('<option value="0" selected="selected">Select City</option>');

        $(regions.result).each(function () {
            if (country === this.country_en)
                $("#city").append('<option value="' + this.id + '">' +
                                    this.name_en + '</option>');
        });
    }

    function bindCounties() {
        var regions = getAllRegions();
        $(regions.result).each(function () {
            $("#country").append('<option value="' + this.parent + '">' +
                        this.country_en + '</option>');
        });
    }

    function bindStaticElemnts() {
        bindCounties();
    }

    // end binding

    // events
    $("#autocomplete").keyup(function () {
        autocomplete($("#autocomplete").val());
    });

    // bind cities for selected country
    $(document).on('change', '#country', function () {
        bindRegions($("#country option:selected").text());
    });

    // search event
    $("#Search").click(function () {

        if (!validateRequiredFileds())
            return;

        // show loading gif
        $("#loading").show();
        var parameters = getParameters();

        setTimeout(function () { $("#loading").hide() }, 2000);

        // reset table content
        $("#tableResults > tbody").html("");

        findHotelsSuccessCalback(GetHotelsMockUp());
    });

    // go to booking
    $(document).on('click', '.bookARoomButton', function () {
        var hotelId = $(this).attr("data-hotel-id");

        var adults = getParameters().adults;
        var children = getParameters().children
        var rooms = getParameters().rooms;

        hotelId = "oksana_hotel"; // just for testing

        window.location.href = "HotelRates.aspx?hotelId=" + hotelId;
    });

    // end event

    function findHotelsSuccessCalback(data) {

        // insert table header
        $("#tableResults > tbody").html("<tr><th>Hotel Name</th><th>Stars</th><th>Description</th><th>Address</th><th>Phone</th><th></th></tr>");

        $(data.result).each(function () {
            // insert content into the table 
            $("#tableResults > tbody").append(
                                        "<tr id = '" + this.id + "'>"
                                           + "<td data-target='hotelName'>" + this.name + "</td>"
                                           + "<td data-target='hotelStars'>" + this.star_rating + "</td>"
                                           + "<td data-target='description_short'>" + this.description_short + "</td>"
                                           + "<td data-target='address'>" + this.address + "</td>"
                                           + "<td data-target='phone'>" + this.phone + "</td>"
                                           + "<td><button data-hotel-id='" + this.id
                                           + "' class='btn btn-danger bookARoomButton'>View Details</button></td>"
                                       + "</tr>");
        });
    }

    var validateRequiredFileds = function () {
        var parameters = {
            regionId: Number($('#country option:selected').attr('value')),
            destionationId: Number($('#city option:selected').attr('value')),
            // nationalityId: Number($('#nationality option:selected').attr('value')),
            children: Number($('#children').val()),
            childAge: Number($('#childAge').val())
        };

        if (parameters.regionId === 0) {
            alert("Value for Country is required. Please select a country");
            return false;
        }

        if (parameters.destionationId === 0) {
            alert("Value for City is required. Please select a city");
            return false;
        }

        if (parameters.nationalityId === 0) {
            //alert("Value for Nationality is required. Please select a nationality");
            // return false
        }

        if (parameters.children !== 0 && parameters.childAge == 0) {
            alert("Value for Child Age is required. Please enter child age");
            return false
        }

        return true;
    }

    // get parameters for search
    var getParameters = function () {
        return {
            nights: nights = $("#nights").val(),
            rooms: $('#rooms').val(),
            adults: $('#adults').val(),
            children: $('#children').val(),
            childAge: $('#childAge').val(),
            arrivalDate: $('#arrivalDate').val(),
            nationality: $('#nationality').val(),
            regionId: $('#city').val(),
            hotelName: $('#hotelName').val(),
            minStars: $('#minStars').val(),
            minPrice: $('#minPrice').val(),
            maxPrice: $('#maxPrice').val(),
            availabilityStatus: $('#availabilityStatus').val()
        };
    }

    // start up
    bindStaticElemnts();
});