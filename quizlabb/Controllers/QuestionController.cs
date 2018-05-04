using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quizlabb.Models;

namespace quizlabb.Controllers
{
    [Produces("application/json")]
    [Route("api/Question")]
    public class QuestionController : Controller
    {
        private readonly UserContext _context;

        public QuestionController(UserContext context)
        {
            _context = context;
        }
    }
}