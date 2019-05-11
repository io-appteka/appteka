using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class PharmacyChainDrug
    {
        public int Id { get; set; }
        public Drug Drug { get; set; }
        public decimal Price { get; set; }
    }
}
