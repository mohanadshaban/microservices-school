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
    public class CourseController : ControllerBase
    {
        private IApplicationDbContext _context;
        public CourseController(IApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> Add(Entities.Course Course)
        {
            _context.Courses.Add(Course);
            await _context.SaveChangesAsync();
            return Ok(Course.Id);
        }
        [HttpPost]
        public async Task<IActionResult> RegisterStudnet(Entities.StudentCourse Course)
        {
            _context.StudentCourses.Add(Course);
            await _context.SaveChangesAsync();
            return Ok(Course.Id);
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var Courses = await _context.Courses.ToListAsync();
            if (Courses == null) return NoContent();
            return Ok(Courses);
        }
        [HttpGet]
        public async Task<IActionResult> GetAllStudentsCourses()
        {
            var Courses = await _context.StudentCourses.ToListAsync();
            if (Courses == null) return NoContent();
            return Ok(Courses);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var Course = await _context.Courses.Where(a => a.Id == id).FirstOrDefaultAsync();
            if (Course == null) return NoContent();
            return Ok(Course);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var Course = await _context.Courses.Where(a => a.Id == id).FirstOrDefaultAsync();
            if (Course == null) return NoContent();
            _context.Courses.Remove(Course);
            await _context.SaveChangesAsync();
            return Ok(Course.Id);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Entities.Course CourseData)
        {
            var Course = _context.Courses.Where(a => a.Id == id).FirstOrDefault();

            if (Course == null) return NoContent();
            else
            {
               
                Course.Name = CourseData.Name;
                

                await _context.SaveChangesAsync();
                return Ok(Course.Id);
            }
        }
    }
}