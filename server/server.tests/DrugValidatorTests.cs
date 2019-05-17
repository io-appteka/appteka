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
        public void IsDrugValid_ShouldSuccessValidName(string name)
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
        [InlineData(" sadaw")]

        public void IsDrugValid_ShouldFailInvalidName(string name)
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
