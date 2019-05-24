using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Drug_Tag
    {
        [Key]
        public int DrugId { get; set; }
        public Drug Drug { get; set; }
        [Key]
        public int TagId { get; set; }
        public Tag Tag { get; set; }
    }
}
