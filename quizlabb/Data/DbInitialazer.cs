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
               new Question { _Question = "Vilka länder konsumerar mest kaffe? Ordningen spelar ingen roll", CorrectAnswer= "Finland, Sverige, Norge"},

               new Question {_Question = "Vilket är världens snabbaste däggdjur?", CorrectAnswer="Geopard"},

               new Question {_Question ="Disneys storfilm Lejonkungen handlar om lejonungen Simba i Afrika. Vad heter Simbas far?", CorrectAnswer="Mufasa"},

               new Question {_Question = "Vad står LCHF för?", CorrectAnswer="Low Carb High Fat."},  

               new Question {_Question = "Marabou är en del av en koncern som är världens största chokladföretag. Vad heter koncernen?", CorrectAnswer="Mondelez International, tidigare Kraft foods"},

            };

            var answerOptions = new AnswerOption[]
            {
                new AnswerOption { Question=questions[0], Option1=questions[0].CorrectAnswer, Option2 = "Sverige, Colombia, Norge" , Option3="Nederländerna, Island, Sverige"},

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
