using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DrugsController : ControllerBase
    {
        private ApptekaDbContext _context;

        public DrugsController(ApptekaDbContext context)
        {
            DbInitializer.Initialize(context);
            _context = context;
        }

        [HttpGet("all")]
        public ActionResult<IEnumerable<Drug>> Get()
        {
            return _context.Drugs;
        }

        [HttpGet("")]
        public ActionResult<Drug> GetById([FromQuery] int id)
        {
            
        }

        [HttpPost]
        public void Create([FromBody] string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
