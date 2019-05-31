using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Moq;
using server.Data;
using server.Models;
using Xunit;

namespace server.tests
{
    public class DrugTests
    {
        [Fact]
        public void ApptekaDbContextGetDrugs_ShouldPass()
        {
            var options = new DbContextOptionsBuilder<ApptekaDbContext>()
                .UseInMemoryDatabase(databaseName: "appteka")
                .Options;

            var context = new ApptekaDbContext(options);
            context.Tags.AddRange(new List<Tag>()
            {
                new Tag()
                {
                    Id = 1,
                    Value = "kaszel"
                },
                new Tag()
                {
                    Id = 2,
                    Value = "grypa"
                }
            });

            context.Drugs.AddRange(new List<Drug>(GetSampleDrugs()));
            context.SaveChanges();

            var expected = new List<Drug>(GetSampleDrugs());
            var actual =  context.Drugs;

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void ApptekaDbContextGetDrugs_ShouldFailAddedElement()
        {
            var expected = new List<Drug>(GetSampleDrugs());
            ApptekaDbContext context = CreateSampleDataBase(new List<Drug>(expected));

            context.Drugs.Add(new Drug() { Id = 50, Name = "Zly", Description = "Fail" });
            context.SaveChanges();
            var actual = context.Drugs;

            Assert.NotEqual(expected, actual);
        }

        [Fact]
        public void ApptekaDbContextGetDrugs_ShouldPassAddedElement()
        {
            var expected = new List<Drug>(GetSampleDrugs());
            ApptekaDbContext context = CreateSampleDataBase(new List<Drug>(expected));

            context.Drugs.Add(new Drug() { Id = 50, Name = "Zly", Description = "Fail" });
            context.SaveChanges();
            var actual = context.Drugs;

            Assert.Equal(expected, actual);
        }

        private List<Drug> GetSampleDrugs()
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

            var drugs = new List<Drug>()
            {
                new Drug()
                {
                    Id = 1,
                    Name = "Sanostol",
                    Description = "Bedzie dobrze",
                    Rating = 5,
                    Tags = new List<Tag>(){ tag1, tag2 }
                },
                new Drug()
                {
                    Id = 2,
                    Name = "Tantum Verde",
                    Description = "I gardlo nie boli",
                    Rating = 3,
                    Tags = new List<Tag>(){ tag1, tag2 }
                },
                new Drug()
                {
                    Id = 3,
                    Name = "Nazatox",
                    Description = "Czyste zatoki",
                    Rating = 4,
                    Tags = new List<Tag>(){ tag1 }
                }
            };

            return drugs;
        }

        private ApptekaDbContext CreateSampleDataBase(IList<Drug> drugs)
        {
            var options = new DbContextOptionsBuilder<ApptekaDbContext>()
                .UseInMemoryDatabase(databaseName: "appteka")
                .Options;


            var context = new ApptekaDbContext(options);
            
            context.AddRange(new List<Drug>(drugs));
            context.SaveChanges();

            return context;
            
        }
    }
}
