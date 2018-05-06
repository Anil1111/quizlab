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
        public IEnumerable<AnswerOption> GetQuestions()
        {

            var questions = _context.AnswerOptions;

            return questions;
        }

      
        public string ReceiveScore(int score)
        {
            //var user = _context._Users.Where(v => v.Email==userEmail).FirstOrDefault();

            // user.HighScores.Add(userScore);

            // _context._Users.Add(user);

            HighScore score1 = new HighScore();

            score1._HighScore = score;


            _context.HighScores.Add(score1);
            _context.SaveChanges();

            return score.ToString(); 
        }
    }
}