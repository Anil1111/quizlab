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

            if (context.AnswerOptions.Any())
            {
                return;   // DB has been seeded
            }


            var answerOptions = new AnswerOption[]
            {
                new AnswerOption { Question="Which country drinks most coffee? Order doesn't matter", Option1="Finland, Sweden, Norway", Option2 = "Sweden, Colombia, Norway" , Option3="Netherlands, Island, Sweden", CorrectAnswer="Finland, Sweden, Norway"},

                new AnswerOption { Question="Which mammal is the fastest?",Option1="Gnu", Option2 = "Antilop" , Option3="Geopard",CorrectAnswer="Geopard"},

                new AnswerOption { Question="Disneys movie The lion king about lion the cub Simba in Africa. What's Simbas fathers name?",Option1="Scar", Option2 = "Mustafa" , Option3="Mufasa",CorrectAnswer="Mufasa"},

                new AnswerOption { Question="What stands LCHF for?",Option1="Low Cost High Fat", Option2 ="Low Carb High Fat", Option3= "Low Core High Fiber", CorrectAnswer="Low Carb High Fat"},

                new AnswerOption { Question="Marabou is a part of a concern of the world biggest chocolate company. What's the company's name?", Option1="Mondelez International, earlier Kraft foods", Option2 ="Intersnack Group" , Option3="Orkla Snacks", CorrectAnswer="Mondelez International, earlier Kraft foods"}

            };

            foreach (var o in answerOptions)
            {
                context.AnswerOptions.Add(o);
            }

            context.SaveChanges();
        }
    }
}
