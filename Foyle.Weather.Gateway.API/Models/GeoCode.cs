namespace Foyle.Weather.Gateway.API.Models
{
    public class GeoCode
    {
        public string name { get; set; }
        public Dictionary<string,string> local_names { get; set; }
        public double lat { get; set; }
        public double lon { get; set; }
        public string country { get; set; }
    }
}
