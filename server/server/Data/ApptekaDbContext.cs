using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class ApptekaDbContext : DbContext
    {
        public ApptekaDbContext(DbContextOptions<ApptekaDbContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Drug> Drugs { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<PharmacyChainDrug> PharmacyChainDrugs { get; set; }
        public DbSet<DrugOpinion> DrugOpinions { get; set; }
        public DbSet<PharmacyStoreOpinion> PharmacyStoreOpinions { get; set; }
        public DbSet<PharmacyChain> PharmacyChains { get; set; }
        public DbSet<PharmacyStore> PharmacyStores { get; set; }

        protected override void OnModelCreating(ModelBuilder model)
        {
            model.Entity<User>().ToTable("User");
            model.Entity<Drug>().ToTable("Drug");
            model.Entity<Ingredient>().ToTable("Ingredient");
            model.Entity<PharmacyChainDrug>().ToTable("PharmacyChainDrug");
            model.Entity<DrugOpinion>().ToTable("DrugOpinion");
            model.Entity<PharmacyStoreOpinion>().ToTable("PharmacyStoreOpinion");
            model.Entity<PharmacyChain>().ToTable("PharmacyChain");
            model.Entity<PharmacyStore>().ToTable("PharmacyStore");
        }
    }
}
