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

        public async Task<IActionResult> GetLoggedInUser()
        {
            var user = await _userManager.GetUserAsync(User);
            var model = new User();

            if (user == null)
            {
                model.Id = "";
            }
            else
            {
                model.Id = user.Id;
            }


            return Redirect("~/quiz");
        }


        public string ReceiveScore(int score)
        {
            

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