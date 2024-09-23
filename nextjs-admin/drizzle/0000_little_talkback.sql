CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`image_url` text NOT NULL,
	`name` text NOT NULL,
	`status` text NOT NULL,
	`price` real NOT NULL,
	`stock` integer NOT NULL,
	`available_at` text NOT NULL
);
