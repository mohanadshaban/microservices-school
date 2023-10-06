﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Course.Microservice.Data
{
    public interface IApplicationDbContext
    {
        DbSet<Entities.Attendance> Attendances{ get; set; }
 
         int SaveChanges();
          Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken());

    }
}
