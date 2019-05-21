using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public abstract class Opinion : ISearchable
    {
        public int Id { get; set; }
        public User Author { get; set; }
        public string Text { get; set; }
        public int Rating { get; set; }
        public EntityType EntityType { get; set; }
        //public IReportable ReportedEntity { get; set; }
    }
}
