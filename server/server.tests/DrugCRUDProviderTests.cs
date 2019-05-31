using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace server.tests
{
    public class DrugCRUDProviderTests
    {
        [Fact]
        public void GetAllDrugs()
        {
            Tag tag1 = new Tag()
            {
                Id = 1,
                Value = "kaszel"
            };
            Tag tag2 = new Tag()
            {
                Id = 2,
                Value = "grypa"
            };

            var tags = new List<Tag>
            {
                tag1,
                tag2
            };

            var drugs = new List<Drug>()
            {
                new Drug()
                {
                    Id = 1,
                    Name = "Sanostol",
                    Description = "Bedzie dobrze",
                    Rating = 5,
                    Tags = new List<Tag>(){ tag1, tag2 },
                    Drugs_Tags = new List<Drug_Tag>() { new Drug_Tag() { DrugId = 1, TagId = 1 },
                        new Drug_Tag() { DrugId = 1, TagId = 2 }}
                },
                new Drug()
                {
                    Id = 2,
                    Name = "Tantum Verde",
                    Description = "I gardlo nie boli",
                    Rating = 3,
                    Tags = new List<Tag>(){ tag1, tag2 },
                    Drugs_Tags = new List<Drug_Tag>() { new Drug_Tag() { DrugId = 2, TagId = 1 },
                        new Drug_Tag() { DrugId = 2, TagId = 2 }}
                },
                new Drug()
                {
                    Id = 3,
                    Name = "Nazatox",
                    Description = "Czyste zatoki",
                    Rating = 4,
                    Tags = new List<Tag>(){ tag1 },
                    Drugs_Tags = new List<Drug_Tag>() { new Drug_Tag() { DrugId = 3, TagId = 1 } }
                }
            };

            var options = new DbContextOptionsBuilder<ApptekaDbContext>()
               .UseInMemoryDatabase(databaseName: "appteka")
               .Options;

            var context = new ApptekaDbContext(options);

            context.Drugs.AddRange(drugs);
            context.Tags.AddRange(tags);

            var drugCRUDProvider = new DrugCRUDProvider(context);

            var actual = drugCRUDProvider.GetAll();

            Assert.Equal(drugs, actual);
        }
    }
}
