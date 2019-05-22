using server.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class DrugCRUDProvider
    {
        private ApptekaDbContext _context;

        public DrugCRUDProvider(ApptekaDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Drug> GetAll()
        {
            return _context.Drugs;
        }

        public Drug GetDrug(int id)
        {
            Drug drug = _context
                        .Drugs
                        .FirstOrDefault(d => d.Id == id);

            return drug;
        }

        public void AddDrug(Drug drug)
        {
            _context.Drugs.Add(drug);
            _context.SaveChanges();
        }


    }
}
