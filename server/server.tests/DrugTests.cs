using System;
using System.Collections.Generic;
using System.Text;
using Moq;
using server.Models;
using Xunit;

namespace server.tests
{
    public class DrugTests
    {
        [Fact]
        public void TestDrugIngredients()
        {
            Mock<Drug> mock = new Mock<Drug>();
            mock.Setup(m => m.Ingredients).Returns(new List<Ingredient>()
            {
                new Ingredient()
                {
                    Id = 1,
                    Name = "Kakao"
                },
                new Ingredient()
                {
                    Id = 2,
                    Name = "Mleko"
                }
            });
            Console.WriteLine(mock.Object.Ingredients.Count);
            Assert.Equal(2, mock.Object.Ingredients.Count);
        }
    }
}
