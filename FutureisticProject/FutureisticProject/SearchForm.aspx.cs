using System;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace FutureisticProject
{
    public partial class SearchForm : System.Web.UI.Page
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
    }
}