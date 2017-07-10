$(document).ready(function () {

    var hotelId = decodeURI($.urlParam('hotelId'));


    // api requests

    function StreamingApiMockUp() {
        //https://partner.ostrovok.ru/api/affiliate/v2/serp/session/create?data={"region_id":597,"checkin":"2016-05-04","checkout":"2016-05-05","adults":2,"lang":"en","format":"json","currency":"default"}

        return {
            "result": [
              {
                  "rates": [
                    {
                        "book_hash": "h-af8f1692-7a0c-58ba-81ab-5b4cc51a795e",
                        "cancellation_info": {
                            "free_cancellation_before": null,
                            "policies": []
                        },
                        "available_rooms": 1,
                        "room_name": "Стандартный двухместный номер (двуспальная или 2 односпальные кровати)",
                        "hotelpage": "https://ostrovok.ru/rooms/khostel_red_kremlin/?cur=RUB&dates=11.09.2016-13.09.2016&guests=2and&lang=ru&partner_slug=your_slug.affiliate.1231sos&request_id=None&room=s-17b6f081-469f-5b6a-b991-1d3a47928d93&utm_campaign=ru-ru&utm_medium=api2&utm_source=vashotelru&scroll=prices",
                        "b2b_recommended_price": null,
                        "value_adds": [],
                        "daily_prices": [
                          "2460.00",
                          "2460.00"
                        ],
                        "availability_hash": "p-ae46bf1d41f22a8ce00e120720acb9ec",
                        "room_group_id": 11,
                        "bed_types": [],
                        "rate_price": "4920.00",
                        "payment_options": {
                            "payment_types": [
                              {
                                  "type": "hotel",
                                  "amount": "74.80",
                                  "currency_code": "USD",
                                  "is_need_credit_card_data": true,
                                  "is_need_cvc": true
                              }
                            ]
                        },
                        "rate_currency": "RUB"
                    }
                  ],
                  "expired": [],
                  "id": "khostel_red_kremlin"
              },
              {
                  "rates": [
                    {
                        "book_hash": "h-7418b043-7672-5e5b-90f0-dec3e571eec1",
                        "cancellation_info": {
                            "free_cancellation_before": "2016-09-11T09:00:00",
                            "policies": []
                        },
                        "available_rooms": null,
                        "room_name": "Стандартный двухместный номер (двуспальная или 2 односпальные кровати)",
                        "hotelpage": "https://ostrovok.ru/rooms/oksana_hotel/?cur=RUB&dates=11.09.2016-13.09.2016&guests=2and&lang=ru&partner_slug=your_slug.affiliate.1231sos&request_id=None&room=s-8b20dc66-6f5f-5319-bf4e-24ea95438939&utm_campaign=ru-ru&utm_medium=api2&utm_source=vashotelru&scroll=prices",
                        "b2b_recommended_price": null,
                        "value_adds": [],
                        "daily_prices": [
                          "4204.50",
                          "4204.50"
                        ],
                        "availability_hash": "p-9b05f5bbf0d56bc4326b5253eac8e0ca",
                        "room_group_id": 11,
                        "bed_types": [],
                        "rate_price": "8409.00",
                        "payment_options": {
                            "payment_types": [
                              {
                                  "type": "hotel",
                                  "amount": "127.84",
                                  "currency_code": "USD",
                                  "is_need_credit_card_data": false,
                                  "is_need_cvc": false
                              }
                            ]
                        },
                        "rate_currency": "RUB"
                    },
                    {
                        "book_hash": "h-76bde6e5-1663-5347-8c93-52fb532bcadf",
                        "cancellation_info": {
                            "free_cancellation_before": "2016-09-07T09:00:00",
                            "policies": []
                        },
                        "available_rooms": null,
                        "room_name": "Студия c 1 спальней ",
                        "hotelpage": "https://ostrovok.ru/rooms/oksana_hotel/?cur=RUB&dates=11.09.2016-13.09.2016&guests=2and&lang=ru&partner_slug=your_slug.affiliate.1231sos&request_id=None&room=s-1dae37f1-bcae-5cc4-b295-5f87ca37f58a&utm_campaign=ru-ru&utm_medium=api2&utm_source=vashotelru&scroll=prices",
                        "b2b_recommended_price": null,
                        "value_adds": [
                          {
                              "code": "has_meal",
                              "title": "Завтрак включен",
                              "description": "Завтрак включен",
                              "uid": 67
                          }
                        ],
                        "daily_prices": [
                          "10095.00",
                          "10095.00"
                        ],
                        "availability_hash": "p-73caa71e81fe1beb6e57d36fde7bf1f4",
                        "room_group_id": 26,
                        "bed_types": [],
                        "rate_price": "20190.00",
                        "payment_options": {
                            "payment_types": [
                              {
                                  "amount": "20190.00",
                                  "currency_code": "RUB",
                                  "is_need_cvc": true,
                                  "type": "now",
                                  "by": "credit_card",
                                  "is_need_credit_card_data": true
                              }
                            ]
                        },
                        "rate_currency": "RUB"
                    },
                    {
                        "book_hash": "h-1c6ce97c-c7fb-5999-9f3d-b168b08999ee",
                        "cancellation_info": {
                            "free_cancellation_before": "2016-09-07T09:00:00",
                            "policies": []
                        },
                        "available_rooms": null,
                        "room_name": "Двухместный номер Комфорт (двуспальная или 2 односпальные кровати)",
                        "hotelpage": "https://ostrovok.ru/rooms/oksana_hotel/?cur=RUB&dates=11.09.2016-13.09.2016&guests=2and&lang=ru&partner_slug=your_slug.affiliate.1231sos&request_id=None&room=s-617e8b3c-9669-5ee1-829f-3ee785f96395&utm_campaign=ru-ru&utm_medium=api2&utm_source=vashotelru&scroll=prices",
                        "b2b_recommended_price": null,
                        "value_adds": [
                          {
                              "code": "has_meal",
                              "title": "Завтрак включен",
                              "description": "Завтрак включен",
                              "uid": 67
                          }
                        ],
                        "daily_prices": [
                          "11795.00",
                          "11795.00"
                        ],
                        "availability_hash": "p-c698a71d972d8ac5018baae4a4e07fd3",
                        "room_group_id": 29,
                        "bed_types": [],
                        "rate_price": "23590.00",
                        "payment_options": {
                            "payment_types": [
                              {
                                  "amount": "23590.00",
                                  "currency_code": "RUB",
                                  "is_need_cvc": true,
                                  "type": "now",
                                  "by": "credit_card",
                                  "is_need_credit_card_data": true
                              }
                            ]
                        },
                        "rate_currency": "RUB"
                    },
                    {
                        "book_hash": "h-6471a2c1-f087-5f81-a724-50e3529704d6",
                        "cancellation_info": {
                            "free_cancellation_before": "2016-09-07T09:00:00",
                            "policies": []
                        },
                        "available_rooms": null,
                        "room_name": "Двухместный номер Комфорт (2 односпальные кровати)",
                        "hotelpage": "https://ostrovok.ru/rooms/oksana_hotel/?cur=RUB&dates=11.09.2016-13.09.2016&guests=2and&lang=ru&partner_slug=your_slug.affiliate.1231sos&request_id=None&room=s-d82b3660-e287-5437-ad62-a2fd18dfa5e7&utm_campaign=ru-ru&utm_medium=api2&utm_source=vashotelru&scroll=prices",
                        "b2b_recommended_price": null,
                        "value_adds": [
                          {
                              "code": "has_meal",
                              "title": "Завтрак включен",
                              "description": "Завтрак включен",
                              "uid": 67
                          }
                        ],
                        "daily_prices": [
                          "11795.00",
                          "11795.00"
                        ],
                        "availability_hash": "p-bd01c272a54c196d700757c1e366dcb4",
                        "room_group_id": 29,
                        "bed_types": [],
                        "rate_price": "23590.00",
                        "payment_options": {
                            "payment_types": [
                              {
                                  "amount": "23590.00",
                                  "currency_code": "RUB",
                                  "is_need_cvc": true,
                                  "type": "now",
                                  "by": "credit_card",
                                  "is_need_credit_card_data": true
                              }
                            ]
                        },
                        "rate_currency": "RUB"
                    }
                  ],
                  "expired": [
                    "h-0f7f9a22-ec6b-5edc-87b6-586ccfc558de",
                    "h-01e2ff29-17ef-5b03-8fbd-3726bed60887",
                    "h-a574c463-81d8-55e6-bc7f-a4271beb5b1d"
                  ],
                  "id": "oksana_hotel"
              }],
            "debug": {
                "contract_slug": "your_slug.affiliate.1231sos",
                "lang": "ru",
                "format": "json",
                "page": 4,
                "session_id": "2193e847-7c67-761d-d4d8-8142b2bc4b01",
                "include": null,
                "exclude": null,
                "status": 200,
                "apiauthkey_id": 10762112
            },
            "error": null
        }
    }


    // end api requests

    function bindTable() {
        findRatesSuccessCalback(StreamingApiMockUp())

    }

    function findRatesSuccessCalback(data) {

        // insert table header
        $("#tableResults > tbody").html("<tr><th>Room Name</th><th></th><th>Rate Price</th><th></th></tr>");

        $(data.result).each(function () {

            if (this.id === hotelId) {
                $(this.rates).each(function () {
                    // insert content into the table 
                    $("#tableResults > tbody").append(
                                                "<tr id = '" + this.book_hash + "'>"
                                                   + "<td data-target='room-name'>" + this.room_name + "</td>"
                                                   + "<td data-target='rate-currency'>" + this.rate_currency + "</td>"
                                                   + "<td data-target='rate-price'>" + this.rate_price + "</td>"
                                                   + "<td><button data-hotel-id='" + this.id
                                                   + "' class='btn btn-danger bookARoomButton'>Book a room</button></td>"
                                               + "</tr>");
                });
            }
        });
    }

    bindTable();

});