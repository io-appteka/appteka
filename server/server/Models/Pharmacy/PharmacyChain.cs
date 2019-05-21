using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class PharmacyChain
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Drug> DrugTypes { get; set; }
        public List<PharmacyStore> PharmacyStores { get; set; }
        public Address Address { get; set; }
        public List<Drug> Drugs { get; set; }
    }
}
