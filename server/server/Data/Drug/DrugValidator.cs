using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Data
{
    public class DrugValidator
    {
        public static bool IsDrugValid(Drug drug)
        {
            bool isValid = true;
            bool checkName = CheckName(drug);

            return checkName;
        }

        private static bool CheckName(Drug drug)
        {
            if (string.IsNullOrWhiteSpace(drug.Name))
                return false;
            if (string.IsNullOrWhiteSpace(drug.Name[0].ToString()))
                return false;
            return true;
        }
    }
}
