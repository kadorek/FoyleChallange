using System.Reflection.Metadata.Ecma335;

namespace Foyle.Weather.Gateway.API.Models
{
    public class Weather
    {
        public Dictionary<string,double> main { get; set; }
        public Dictionary<string,double> wind { get; set; }
        public string name { get; set; }
    }
}
