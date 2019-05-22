using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Drug_Tag
    {
        public int DrugId { get; set; }
        public Drug Drug { get; set; }
        public int TagId { get; set; }
        public Tag Tag { get; set; }
    }
}
