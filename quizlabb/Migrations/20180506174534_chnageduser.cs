using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace quizlabb.Migrations
{
    public partial class chnageduser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_HighScores_HighScoreId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_HighScoreId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "HighScoreId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "HighScores",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_HighScores_UserId",
                table: "HighScores",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_HighScores_AspNetUsers_UserId",
                table: "HighScores",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HighScores_AspNetUsers_UserId",
                table: "HighScores");

            migrationBuilder.DropIndex(
                name: "IX_HighScores_UserId",
                table: "HighScores");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "HighScores");

            migrationBuilder.AddColumn<int>(
                name: "HighScoreId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_HighScoreId",
                table: "AspNetUsers",
                column: "HighScoreId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_HighScores_HighScoreId",
                table: "AspNetUsers",
                column: "HighScoreId",
                principalTable: "HighScores",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
