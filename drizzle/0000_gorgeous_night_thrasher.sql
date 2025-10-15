-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TYPE "public"."access" AS ENUM('public', 'private');--> statement-breakpoint
CREATE TABLE "items" (
	"id" text PRIMARY KEY DEFAULT '17yy2hlh45a-PmUWUH5JQ' NOT NULL,
	"list_id" text,
	"title" text
);
--> statement-breakpoint
CREATE TABLE "lists" (
	"id" text PRIMARY KEY DEFAULT 'x30A4-0OalYYdaWJCT5-I' NOT NULL,
	"title" text,
	"access" "access" DEFAULT 'private'
);
--> statement-breakpoint
CREATE TABLE "members" (
	"list_id" text NOT NULL,
	"user_id" text NOT NULL,
	CONSTRAINT "members_list_id_user_id_pk" PRIMARY KEY("list_id","user_id")
);
--> statement-breakpoint
ALTER TABLE "items" ADD CONSTRAINT "items_list_id_lists_id_fk" FOREIGN KEY ("list_id") REFERENCES "public"."lists"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "members" ADD CONSTRAINT "members_list_id_lists_id_fk" FOREIGN KEY ("list_id") REFERENCES "public"."lists"("id") ON DELETE no action ON UPDATE no action;
*/