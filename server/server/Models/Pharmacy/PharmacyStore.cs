using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class PharmacyStore : ISearchable
    {
        public int Id { get; set; }
        public PharmacyChain PharmacyChain { get; set; }
        public EntityType EntityType { get; } = EntityType.PharmacyStore;
    }
}
