using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string Value { get; set; }
    }
}
