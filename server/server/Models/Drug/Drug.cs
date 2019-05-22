using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;


namespace server.Models
{
    public class Drug : ISearchable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Rating { get; set; }
        public EntityType EntityType { get; } = EntityType.Drug;

        public List<Ingredient> Ingredients { get; set; }
        public List<Opinion> Opinions { get; set; }
        public List<Tag> Tags { get; set; }
    }
}
