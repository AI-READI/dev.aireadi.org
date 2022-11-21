const path = require('path');
const fs = require('fs');

// Get a list of all the versions
const versions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../website', '.vitepress', 'versions.json'),
    'utf-8',
  ),
);

// Get the command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Please provide a version number');
  process.exit(1);
}

const version = args[0];

// Check if the version already exists
if (versions.includes(version)) {
  console.log(`Version ${version} already exists`);
  process.exit(1);
}

// Add the version to the list
versions.unshift(version);

// Write the new list to the file
fs.writeFileSync(
  path.join(__dirname, '../website', '.vitepress', 'versions.json'),
  JSON.stringify(versions, null, 2),
  'utf-8',
);

// Create the directory for the new version
fs.mkdirSync(path.join(__dirname, '../website', 'versioned_docs', version), {
  recursive: true,
});

// Get the list of files in the docs directory
const folders = fs.readdirSync(path.join(__dirname, '../website'));

// Copy the folders from the docs directory to the new version
folders.forEach((folder) => {
  if (folder !== 'versioned_docs' && folder !== '.vitepress') {
    fs.mkdirSync(
      path.join(__dirname, '../website', 'versioned_docs', version, folder),
      {
        recursive: true,
      },
    );
  }
});

// Get the list of files in the docs directory
const files = fs.readdirSync(path.join(__dirname, '../website'));
console.log(files);

// Copy the files from the docs directory to the new version
files.forEach((file) => {
  fs.copyFileSync(
    path.join(__dirname, '../website', file),
    path.join(__dirname, '../website', 'versioned_docs', version, file),
  );
});
