using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course.Microservice.Entities
{
    public class Attendance : BaseEntity
    {
        public string FullName { get; set; }
        public double AttendencePercentage { get; set; }
        public DateTime AttendenceDate { get; set; }

    }

}
