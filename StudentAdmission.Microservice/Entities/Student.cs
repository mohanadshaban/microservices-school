using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student.Microservice.Entities
{
    public class Student : BaseEntity
    {
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string City { get; set; }
        public string Email { get; set; }
        public DateTime DOB { get; set; }
        public DateTime DateofRegistration { get; set; }

        public int ClassId { get; set; }
        public Class Class{ get; set; }
    }
    
}
