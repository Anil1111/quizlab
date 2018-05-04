using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using quizlabb.Models_;

namespace quizlabb.Models
{
    public class UserContext : IdentityDbContext
    {
        public UserContext (DbContextOptions<UserContext> options)
            : base(options)
        {
        }

        public DbSet<Question> Questions { get; set; }
        public DbSet<HighScore> HighScores { get; set; }
        public DbSet<AnswerOption> AnswerOptions { get; set; }

    }
}
