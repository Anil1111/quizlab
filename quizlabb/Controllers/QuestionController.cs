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
        public IEnumerable<HighScore> GetHighScores()
        {

            var result = _context.HighScores;

         


            return result;
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



        public string ReceiveScore(int score, string id)
        {
            id = id.Trim();
            var user = _context.User.Where(x => x.Id == id).FirstOrDefault();



            if (user == null)
            {
                throw new ApplicationException($"Unable to load user with ID '{id}'.");
            }

            HighScore score1 = new HighScore()
            {
                _HighScore = score,

                User = user,
                UserId = id
                
            };




            _context.HighScores.Add(score1);
            _context.SaveChanges();

            return score.ToString();
        }



    }
}