using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quizlabb.Models_
{
    public class HighScore
    {
        public int Id { get; set; }
        public int _HighScore { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
    }
}
