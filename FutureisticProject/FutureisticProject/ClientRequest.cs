using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;

namespace FutureisticProject
{
    public static class ServerRequest
    {
        public static string SendRequest(string url, string method, string requestContent)
        {
            var webRequest = (HttpWebRequest)WebRequest.Create(url);
            webRequest.Method = method;
            webRequest.ContentType = "application/json";
            webRequest.UserAgent = "Mozilla/5.0 (Windows NT 5.1; rv:28.0) Gecko/20100101 Firefox/28.0";
            if (string.IsNullOrEmpty(requestContent))
                webRequest.ContentLength = 0; // added per comment
            string autorization = "1456" + ":" + "74406d98-d842-4cb9-93d8-f8aa8b7f9e76";
            byte[] binaryAuthorization = Encoding.UTF8.GetBytes(autorization);
            autorization = Convert.ToBase64String(binaryAuthorization);
            autorization = "Basic " + autorization;
            webRequest.Headers.Add("AUTHORIZATION", autorization);
            var webResponse = (HttpWebResponse)webRequest.GetResponse();
            if (webResponse.StatusCode != HttpStatusCode.OK) Console.WriteLine("{0}", webResponse.Headers);
            using (StreamReader reader = new StreamReader(webResponse.GetResponseStream()))
            {
                string s = reader.ReadToEnd();
                Console.WriteLine(s);
                reader.Close();

                return s;
            }
        }
    }
}