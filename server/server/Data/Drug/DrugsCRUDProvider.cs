using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Data
{
    public class DrugsCRUDProvider
    {
        private ApptekaDbContext _context;

        public DrugsCRUDProvider(ApptekaDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Drug> GetAll()
        {
            return _context.Drugs;
        }

        public Drug GetDrug(int id)
        {
            return _context.Drugs.FirstOrDefault(d => d.Id == id);
        }

        public void AddDrug(Drug drug)
        {
            _context.Drugs.Add(drug);
            _context.SaveChanges();
        }
    }
}
