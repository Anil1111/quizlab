using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
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
        private readonly UserManager<User> _userManager;


        public QuestionController(UserContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
        [Route("api/GetQuestions")]
        public IEnumerable<AnswerOption> GetQuestions()
        {

            var questions = _context.AnswerOptions;

            return questions;
        }


        public JsonResult AddQuestion(AnswerOption newQuestion)
        {
            AnswerOption question = new AnswerOption()
            {
                Question = newQuestion.Question,
                Option1 = newQuestion.Option1,
                Option2 = newQuestion.Option2,
                Option3 = newQuestion.Option3,
                CorrectAnswer = newQuestion.CorrectAnswer

            };

            _context.AnswerOptions.Add(question);
            _context.SaveChanges();

            return Json(newQuestion);
        }


        public IEnumerable<HighScore> GetHighScores()
        {

            var result = _context.HighScores;

            var topScoreByPlayer = _context.HighScores.GroupBy(x => x.UserId)
                 .Select(x => x.OrderByDescending(y => y._HighScore).First())
                 .OrderByDescending(x => x._HighScore).ThenByDescending(d => d.DateTime);
                
            return topScoreByPlayer;
        }





        public string ReceiveScore(int score, string name)
        {
            name = name.Trim();
            var user = _context.User.Where(x => x.Email == name).FirstOrDefault();



            if (user == null)
            {
                throw new ApplicationException($"Unable to load user with name '{name}'.");
            }

            HighScore score1 = new HighScore()
            {
                _HighScore = score,

                User = user,
                UserId = _context.Users.Where(u => u.Email == name).Single().Id,
                UserName = name,
                DateTime = DateTime.Now.ToString()

            };




            _context.HighScores.Add(score1);
            _context.SaveChanges();

            return score.ToString();
        }



    }
}