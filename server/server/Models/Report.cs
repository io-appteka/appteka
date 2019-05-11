using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Report
    {
        public User Author { get; set; }
        public IReportable ReportedStuff { get; set; }

    }
}
