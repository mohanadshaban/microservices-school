using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Course.Microservice.Entities
{
    public class StudentCourse : BaseEntity
    {
        public int StudentId { get; set; }

        public int CourseId { get; set; }

        public Course Course{ get; set; }
  

    }

}
