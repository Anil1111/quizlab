using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace quizlabb.Migrations
{
    public partial class ChangedDateTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "DateTime",
                table: "HighScores",
                nullable: true,
                oldClrType: typeof(DateTime));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "DateTime",
                table: "HighScores",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
