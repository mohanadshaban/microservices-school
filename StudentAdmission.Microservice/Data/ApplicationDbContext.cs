using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Student.Microservice.Data
{
    public class ApplicationDbContext : DbContext,IApplicationDbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Entities.Student> Students{ get; set; }
        public DbSet<Entities.Class> Classes { get; set; }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
             return await base.SaveChangesAsync(cancellationToken);
        }
        public override int SaveChanges()
        {
             return base.SaveChanges();
        }
    }
}
