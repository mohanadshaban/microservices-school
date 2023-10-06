using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Student.Microservice.Data
{
    public interface IApplicationDbContext
    {
        DbSet<Entities.Student> Students{ get; set; }
        DbSet<Entities.Class> Classes { get; set; }

         int SaveChanges();
          Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken());

    }
}
