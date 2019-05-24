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

            context.Tags.Add(new Tag {Value = "Kaszel" });
            context.Tags.Add(new Tag {Value = "Przeziebienie" });
            context.Drugs.Add(new Drug()
            {
                Name = "Sanostol",
                Description = "Bedzie dobrze",
                Rating = 5,
            });

            context.SaveChanges();

            List<Tag> tags = context.Tags.ToList();

            Drug_Tag dt = new Drug_Tag()
            {
                DrugId = context.Drugs.ToList()[0].Id,
                Drug = context.Drugs.ToList()[0],
                TagId = context.Tags.ToList()[0].Id,
                Tag = context.Tags.ToList()[0]
            };
            context.Drugs_Tags.Add(dt);

            context.Drugs.ToList()[0].Drugs_Tags.Add(dt);
            context.Tags.ToList()[0].Drugs_Tags.Add(dt);

            context.SaveChanges();


            //var drugs = new Drug[]
            //{
            //    new Drug()
            //    {
            //        Name = "Ibuprom",
            //        Description = "Boli? I juz nie boli.",
            //        Rating = 3
            //    },
            //    new Drug()
            //    {
            //        Name = "Mozol",
            //        Description = "Moze zadziala",
            //        Rating = 1
            //    },
            //    new Drug()
            //    {
            //        Name = "Sraczkol",
            //        Description = "Na przeczyszczenie",
            //        Rating = 9
            //    }
            //};

            context.SaveChanges();
        }
    }
}
