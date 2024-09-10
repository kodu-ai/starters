# starters
Repository containing starters templates to be used within Kodu

## Specifications
All of these directories contain a ".kodu" file containing additional instructions for the llm to follow. The ".kodu" file is a JSON file that contains the following fields:
- `name`: The name of the starter
- `description`: A brief description of the starter
- `preflight`: The command to check if the starter can be run
- `author`: The author of the starter
- `version`: The version of the starter
- `run`: The command to run the starter
- `install`: The command to install dependencies