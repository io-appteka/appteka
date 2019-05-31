using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

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
        [JsonIgnore]
        public List<Drug_Tag> Drugs_Tags { get; set; }
        [NotMapped]
        public List<Tag> Tags
        {
            get {
                var toReturn = Drugs_Tags.Select(dt => dt.Tag)?.ToList();
                if (toReturn != null)
                    return toReturn;
                return new List<Tag>();
            }
            set { }
        }
    }
}
