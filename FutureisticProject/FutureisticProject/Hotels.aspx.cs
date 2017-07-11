using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FutureisticProject
{
    public partial class Hotels : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string Autocomplete(object data)
        {
            var javaScriptSerializer = new JavaScriptSerializer();
            string jsonData = javaScriptSerializer.Serialize(data);
            string url = "https://partner.ostrovok.ru/api/b2b/v2/multicomplete?data=" + jsonData;
            return ServerRequest.SendRequest(url, "GET", string.Empty);
        }

        [WebMethod]
        public static string GetAllHotelsGZip(object data)
        {
            var javaScriptSerializer = new JavaScriptSerializer();
            string jsonData = javaScriptSerializer.Serialize(data);

            string url = "https://partner.ostrovok.ru/api/b2b/v2/dump?data=" + jsonData;
            return ServerRequest.GetGZip(url, "GET");
        }

        [WebMethod]
        public static string GetHotelsByRegion(object data)
        {
            string jsonObject = serializeObjectToJson(data);
            string url = "https://partner.ostrovok.ru/api/b2b/v2/region/hotel/list?data=" + jsonObject;
            return ServerRequest.SendRequest(url, "GET", string.Empty);
        }

        [WebMethod]
        public static string GetHotelsDetails(object data)
        {
            string jsonObject = serializeObjectToJson(data);
            string url = "https://partner.ostrovok.ru/api/b2b/v2/hotel/list?data=" + jsonObject;
            return ServerRequest.SendRequest(url, "GET", string.Empty);
        }

        private static string serializeObjectToJson(object data)
        {
            var javaScriptSerializer = new JavaScriptSerializer();
            return javaScriptSerializer.Serialize(data);
        }
    }
}