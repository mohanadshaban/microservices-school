using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Course.Microservice.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Course.Microservice.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AttendanceController : ControllerBase
    {
        private IApplicationDbContext _context;
        public AttendanceController(IApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> NewAttendance(Entities.Attendance Student)
        {
            _context.Attendances.Add(Student);
            await _context.SaveChangesAsync();
            return Ok(Student.Id);
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var Students = await _context.Attendances.ToListAsync();
            if (Students == null) return NoContent();
            return Ok(Students);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var Student = await _context.Attendances.Where(a => a.Id == id).FirstOrDefaultAsync();
            if (Student == null) return NoContent();
            return Ok(Student);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var Student = await _context.Attendances.Where(a => a.Id == id).FirstOrDefaultAsync();
            if (Student == null) return NoContent();
            _context.Attendances.Remove(Student);
            await _context.SaveChangesAsync();
            return Ok(Student.Id);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Entities.Attendance StudentData)
        {
            var Student = _context.Attendances.Where(a => a.Id == id).FirstOrDefault();

            if (Student == null) return NoContent();
            else
            {
               
                Student.AttendencePercentage = StudentData.AttendencePercentage;
                

                await _context.SaveChangesAsync();
                return Ok(Student.Id);
            }
        }
    }
}