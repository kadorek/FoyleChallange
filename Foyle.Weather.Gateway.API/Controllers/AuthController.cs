using Foyle.Weather.Gateway.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Foyle.Weather.Gateway.API.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost,Route("Login")]
        public IActionResult Login([FromBody]User user) {
            if (user==null)
            {
                return BadRequest("Invalid request by client");
            }

            if (user.UserName=="MyNewUser" && user.Password=="MyNewPass")
            {
                var sKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("SampleJWTkey@123"));
                var signinCred = new SigningCredentials(sKey,SecurityAlgorithms.HmacSha256);

                var optToken = new JwtSecurityToken(
                    issuer: "https://localhost:4200/",
                    audience: "https://localhost:4200/",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials:signinCred
                    ) ;

                var strToken = new JwtSecurityTokenHandler().WriteToken(optToken);
                return Ok(new { token=strToken });
            }
            return Unauthorized();        
        }
    }
}
