using server.Models;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using server.Data;

namespace server.tests
{
    public class DrugValidatorTests
    {
        [Theory()]
        [InlineData("nowy lek")]
        [InlineData("Jakis tam")]
        [InlineData("Inny")]
        public void IsDrugValid_ShouldSuccess(string name)
        {
            Drug drug = new Drug()
            {
                Name = name
            };

            bool isValid = DrugValidator.IsDrugValid(drug);
            Assert.True(isValid);
        }

        [Theory()]
        [InlineData("")]
        [InlineData(" ")]
        [InlineData("  ")]

        public void IsDrugValid_ShouldFail(string name)
        {
            Drug drug = new Drug()
            {
                Name = name
            };

            bool isValid = DrugValidator.IsDrugValid(drug);
            Assert.False(isValid);
        }
    }
}
