using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace server.Models
{
    public class Distance
    {
        public int DistanceValue { get; set; }
        public string DistanceString { get; set; }
        public int DurationValue { get; set; }
        public string DurationString { get; set; }

        public static Distance GetDistance(Address origin, Address destination)
        {
            Distance Ret = new Distance();
            string OriginString = origin.City + " " + origin.Street + " " + origin.HouseNumber;
            string DestinationString = destination.City + " " + destination.Street + " " + destination.HouseNumber;
            string Request = "https://maps.googleapis.com/maps/api/distancematrix/json?units=si&origins=" + OriginString + "&destinations=" + DestinationString + "&language=pl-PL&key=AIzaSyBmozbFhWKBEyaRXOW2Pwdqbeh6u7nUVK0";
            var request = (HttpWebRequest)WebRequest.Create(Request);
            var response = (HttpWebResponse)request.GetResponse();
            var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();
            JObject RetJSON = JObject.Parse(responseString);
            Ret.DistanceValue = (int)RetJSON["rows"][0]["elements"][0]["distance"]["value"];
            Ret.DistanceString = (string)RetJSON["rows"][0]["elements"][0]["distance"]["text"];
            Ret.DurationValue = (int)RetJSON["rows"][0]["elements"][0]["duration"]["value"];
            Ret.DurationString = (string)RetJSON["rows"][0]["elements"][0]["duration"]["text"];
            return Ret;
        }
    }
}
