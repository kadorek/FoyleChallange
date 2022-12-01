using Foyle.Weather.Gateway.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace Foyle.Weather.Gateway.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GatewayController : ControllerBase
    {


        private readonly string locationApiUrl = "http://api.openweathermap.org/geo/1.0/direct";
        private readonly string weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather";
        private readonly string apiKey = "dd01bd8dd24d00a1d2b9dfe9fb51c638";

        [HttpGet]
        [Route("/GetCurrentWeatherByLocation")]
        [Authorize]
        public Models.Weather GetCurrentWeatherByLocation(string location)
        {

            var  locationData = GetLocationData(location)[0];
            var weatherData = GetWeatherData(locationData);


            return weatherData;
        }


       


        private List<GeoCode> GetLocationData(string loc) {
            
            var reqUrl = $"{locationApiUrl}?q={loc}&limit=5&appid={apiKey}";
            var req = (HttpWebRequest)WebRequest.Create(reqUrl);
            req.Method = "GET";
            req.ContentType = "application/json";

            var response = req.GetResponse();

            return JsonSerializer.Deserialize<List<GeoCode>>(response.GetResponseStream());

        }

        private  Models.Weather GetWeatherData(GeoCode gc)
        {
            var reqUrl = $"{weatherApiUrl}?lat={gc.lat}&lon={gc.lon}&units=metric&appid={apiKey}";
            var req = (HttpWebRequest)WebRequest.Create(reqUrl);
            req.Method = "GET";
            req.ContentType = "application/json";

            var response = req.GetResponse();
            return JsonSerializer.Deserialize<Models.Weather>(response.GetResponseStream());

        }

    }
}
