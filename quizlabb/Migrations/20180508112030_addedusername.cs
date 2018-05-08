using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace quizlabb.Migrations
{
    public partial class addedusername : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "HighScores",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "HighScores");
        }
    }
}
