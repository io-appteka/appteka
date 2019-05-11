using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace server.Models
{
    public class Drug
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Rating { get; set; }

        public List<Ingredient> Ingredients { get; set; }
        public List<Opinion> Opinions { get; set; }
    }
}
