using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quizlabb.Models;
using quizlabb.Models_;
using quizlabb.Models_.ViewModels;

namespace quizlabb.Controllers
{
    [Produces("application/json")]
    public class QuestionController : Controller
    {
        private readonly UserContext _context;

        public QuestionController(UserContext context)
        {
            _context = context;
        }
        [Route("api/GetQuestions")]
        public AnswerViewModel GetQuestions()
        {

            var question = _context.AnswerOptions.Last();

            AnswerViewModel viewModel = new AnswerViewModel()
            {
                Option1 = question.Option1
            };

            return viewModel;
        }
    }
}