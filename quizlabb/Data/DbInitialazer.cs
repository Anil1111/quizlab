using quizlabb.Models;
using quizlabb.Models_;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quizlabb.Data
{
    public static class DbInitialazer
    {
        public static void Initialize(UserContext context)
        {
            context.Database.EnsureCreated();

            if (context.Questions.Any())
            {
                return;   // DB has been seeded
            }

            var questions = new Question[]
            {
               new Question { _Question = "Which country drinks most coffee? Order doesn't matter", CorrectAnswer= "Finland, Sweden, Norway"},

               new Question {_Question = "Which mammal is the fastest?", CorrectAnswer="Geopard"},

               new Question {_Question ="Disneys movie The lion king about lion the cub Simba in Africa. What's Simbas fathers name?", CorrectAnswer="Mufasa"},

               new Question {_Question = "What stands LCHF for?", CorrectAnswer="Low Carb High Fat."},  

               new Question {_Question = "Marabou is a part of a concern of the world biggest chocolate company. What's the company's name?", CorrectAnswer="Mondelez International, earlier Kraft foods"},

            };

            var answerOptions = new AnswerOption[]
            {
                new AnswerOption { Question=questions[0], Option1=questions[0].CorrectAnswer, Option2 = "Sweden, Colombia, Norway" , Option3="Netherlands, Island, Sweden"},

                new AnswerOption { Question=questions[1],Option1="Gnu", Option2 = "Antilop" , Option3=questions[1].CorrectAnswer},

                new AnswerOption { Question=questions[2],Option1="Scar", Option2 = "Mustafa" , Option3=questions[2].CorrectAnswer},

                new AnswerOption { Question=questions[3],Option1="Low Cost High Fat", Option2 = "Low Core High Fiber" , Option3=questions[3].CorrectAnswer},

                new AnswerOption { Question=questions[4], Option1="Intersnack Group", Option2 = "Orkla Snacks" , Option3=questions[4].CorrectAnswer}

            };

            foreach (var q in questions)
            {
                context.Questions.Add(q);
            }
            foreach (var o in answerOptions)
            {
                context.AnswerOptions.Add(o);
            }

            context.SaveChanges();
        }
    }
}
