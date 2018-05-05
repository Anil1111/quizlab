using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace quizlabb.Migrations
{
    public partial class changes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AnswerOptions_Questions_QuestionId",
                table: "AnswerOptions");

            migrationBuilder.DropIndex(
                name: "IX_AnswerOptions_QuestionId",
                table: "AnswerOptions");

            migrationBuilder.DropColumn(
                name: "QuestionId",
                table: "AnswerOptions");

            migrationBuilder.AddColumn<string>(
                name: "CorrectAnswer",
                table: "AnswerOptions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Question",
                table: "AnswerOptions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CorrectAnswer",
                table: "AnswerOptions");

            migrationBuilder.DropColumn(
                name: "Question",
                table: "AnswerOptions");

            migrationBuilder.AddColumn<int>(
                name: "QuestionId",
                table: "AnswerOptions",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AnswerOptions_QuestionId",
                table: "AnswerOptions",
                column: "QuestionId");

            migrationBuilder.AddForeignKey(
                name: "FK_AnswerOptions_Questions_QuestionId",
                table: "AnswerOptions",
                column: "QuestionId",
                principalTable: "Questions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
