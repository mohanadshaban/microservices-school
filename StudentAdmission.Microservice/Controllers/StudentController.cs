using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Student.Microservice.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Student.Microservice.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private IApplicationDbContext _context;
        public StudentController(IApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> Admission(Entities.Student Student)
        {
            _context.Students.Add(Student);
            await _context.SaveChangesAsync();
            return Ok(Student.Id);
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var Students = await _context.Students.Include(w=>w.Class).ToListAsync();
            if (Students == null) return NoContent();
            return Ok(Students);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var Student = await _context.Students.Include(w => w.Class).Where(a => a.Id == id).FirstOrDefaultAsync();
            if (Student == null) return NoContent();
            return Ok(Student);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var Student = await _context.Students.Include(w => w.Class).Where(a => a.Id == id).FirstOrDefaultAsync();
            if (Student == null) return NoContent();
            _context.Students.Remove(Student);
            await _context.SaveChangesAsync();
            return Ok(Student.Id);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Entities.Student StudentData)
        {
            var Student = _context.Students.Include(w => w.Class).Where(a => a.Id == id).FirstOrDefault();

            if (Student == null) return NoContent();
            else
            {
                Student.City = StudentData.City;
                Student.FullName = StudentData.FullName;
                Student.PhoneNumber = StudentData.PhoneNumber;
                Student.DOB = StudentData.DOB;
                Student.Email = StudentData.Email;
                Student.ClassId = StudentData.ClassId;

                await _context.SaveChangesAsync();
                return Ok(Student.Id);
            }
        }
    }
}