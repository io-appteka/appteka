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
        private DrugCRUDProvider _crudProvider;

        public DrugsController(ApptekaDbContext context)
        {
            DbInitializer.Initialize(context);
            _crudProvider = new DrugCRUDProvider(context);
            _context = context;
        }

        [HttpGet("all")]
        public ActionResult<IEnumerable<Drug>> Get()
        {
            var drugs = _crudProvider.GetAll();
            var result = new ActionResult<IEnumerable<Drug>>(drugs);
            return result;
        }

        [HttpGet]
        public ActionResult<Drug> Get([FromQuery] int id)
        {
            var drug = _crudProvider.GetDrug(id);
            return drug;
        }

        [HttpPost]
        public void Post([FromBody] Drug drug)
        {
            _crudProvider.AddDrug(drug);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _crudProvider.DeleteDrug(id);
        }
    }
}
