<?php

declare(strict_types=1);

use Symfony\Component\Dotenv\Dotenv;

if (!isset($_SERVER['APP_ENV']) && !class_exists(Dotenv::class)) {
    throw new RuntimeException('APP_ENV environment variable is not defined. You need to define environment variables for configuration or add "symfony/dotenv" as a Composer dependency to load variables from a .env file.');
}

(new Dotenv())->loadEnv(path: __DIR__ . '/../../.env', envKey: 'behat', overrideExistingVars: true);
