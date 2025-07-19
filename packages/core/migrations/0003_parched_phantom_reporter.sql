CREATE TABLE "material_file_entries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"material_id" uuid NOT NULL,
	"title" text NOT NULL,
	"file_name" text NOT NULL,
	"file_url" text NOT NULL,
	"file_size" text NOT NULL,
	"file_type" text NOT NULL,
	"date_added" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "material_file_entries" ADD CONSTRAINT "material_file_entries_material_id_materials_id_fk" FOREIGN KEY ("material_id") REFERENCES "public"."materials"("id") ON DELETE cascade ON UPDATE no action;