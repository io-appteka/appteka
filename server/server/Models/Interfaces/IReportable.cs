using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public interface IReportable
    {
        int Id { get; set; }
        string GetDetails();
    }
}
