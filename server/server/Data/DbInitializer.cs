using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.Models;

namespace server.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ApptekaDbContext context)
        {
            context.Database.EnsureCreated();

            if (context.Drugs.Any())
                return;

            var drugs = new Drug[]
            {
                new Drug()
                {
                    Name = "Sanostol",
                    Description = "Bedzie dobrze",
                    Rating = 5
                },
                new Drug()
                {
                    Name = "Ibuprom",
                    Description = "Boli? I juz nie boli.",
                    Rating = 3
                },
                new Drug()
                {
                    Name = "Mozol",
                    Description = "Moze zadziala",
                    Rating = 1
                },
                new Drug()
                {
                    Name = "Sraczkol",
                    Description = "Na przeczyszczenie",
                    Rating = 9
                }
            };

            context.Drugs.AddRange(drugs);
            context.SaveChanges();
        }
    }
}
