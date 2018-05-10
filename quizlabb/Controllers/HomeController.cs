using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using quizlabb.Models_;

namespace quizlabb.Controllers
{
    public class HomeController : Controller
    {
        private UserManager<User> userManager;
        public HomeController(UserManager<User> manager)
        {
            userManager = manager;
        }
        public IActionResult Index()
        {
            string name = userManager.GetUserName(HttpContext.User);
            ViewData["name"] = name;
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
