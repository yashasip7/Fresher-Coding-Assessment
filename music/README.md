# Music Library Manager

The goal of this problem is to create a Music Library Manager in a step-by-step process, incrementally adding features. You will need to build a CLI (Command Line Interface).

TODO: Provide example folders with relevant music files.

## Step 1: List Files

Set up the project in the language of your choice. Define the basic structure of the program, and get a working implementation of taking a directory as an input, and list down all the music files present in that folder recursively.

Please include documentation (in a file called `SETUP.md`) on any prerequisites we would need to have installed to run your program.

### Expected Outcome

When user runs the following command:

```shell
<program> --input <path to music folder> --list-files
```

The output should be something like this:

```text
Thriller.mp3
Shake It Off.mp3
Billie Jean.mp3
Bad Blood.mp3
Smooth Criminal.mp3
Anti-Hero.mp3
```

## Step 2: Show Metadata

The next step is to read and show the metadata of the files you listed in Step 1.

For example, an MP3 file contains information regarding the name of the Song (Billie Jean), name of the Artist (Michael Jackson), Album (Thriller), and other such information. See [this](https://en.wikipedia.org/wiki/ID3) for a reference.

You can use a library available for your language of choice to parse the metadata for a music file. If you cannot find an appropriate library, CLI tools like [ffmpeg](https://ffmpeg.org) can be used instead.

### Expected Outcome

When user runs the following command:

```shell
<program> --input Music/ --show-metadata
```

The output should be like this:

```text
____________________
File: Music/Thriller.mp3
Song: Thriller
Artist: Michael Jackson
Album: Thriller
____________________
File: Music/Shake It Off.mp3
Song: Shake It Off
Artist: Taylor Swift
Album: 1989
____________________
```

## Step 3: Grouping

Once you are able to read metadata, it’s time to organize the files accordingly. Allow the user to organize their library based on the following parameters:

- Artist
- Album
- Artist + Album

### Expected Outcome

Suppose that, in a particular music library, the user has the following songs:

```text
Music
├── Anti-Hero.mp3
├── Bad Blood.mp3
├── Billie Jean.mp3
├── Shake It Off.mp3
├── Smooth Criminal.mp3
└── Thriller.mp3
```

The user should be able to organize it in the following way:

#### By Artist

When user runs the following command:

```shell
<program> --input Music/ --group-by ARTIST
```

The output should be like this:

```text
Music
├── Michael Jackson
│   ├── Billie Jean.mp3
│   ├── Smooth Criminal.mp3
│   └── Thriller.mp3
└── Taylor Swift
    ├── Anti-Hero.mp3
    ├── Bad Blood.mp3
    └── Shake It Off.mp3
```

#### By Album

When user runs the following command:

```shell
<program> --input Music/ --group-by ALBUM
```

The output should be like this:

```text
Music
├── 1989
│   ├── Bad Blood.mp3
│   └── Shake It Off.mp3
├── Bad
│   └── Smooth Criminal.mp3
├── Midnights
│   └── Anti-Hero.mp3
└── Thriller
    ├── Billie Jean.mp3
    └── Thriller.mp3
```

#### By Artist and Album

When user runs the following command:

```shell
<program> --input Music/ --group-by ARTIST_ALBUM
```

The output should be like this:

```text
Music
├── Michael Jackson
│   ├── Bad
│   │   └── Smooth Criminal.mp3
│   └── Thriller
│       ├── Billie Jean.mp3
│       └── Thriller.mp3
└── Taylor Swift
    ├── 1989
    │   ├── Bad Blood.mp3
    │   └── Shake It Off.mp3
    └── Midnights
        └── Anti-Hero.mp3
```

Files that do not have an album should be put in a `Singles` folder. Files with incomplete metadata should be put in a separate folder called `Incomplete Metadata`.

## Step 4: Reorganize Files - Dry Run

The intention here is to enable users to reorganize their files in the file system based on file metadata. This command should specify what changes will be made on the file system based on the criteria to reorganize by.

Note that no actual file reorganization should happen as part of this step - only the list of changes should be printed to stdout.

### Expected Output

#### By Artist

When user runs the following command:

```shell
<program> --input Music/ --reorganize-by ARTIST --dry-run
```

The output should be like this:

```shell
The following changes will be made to your library:

Music/Thriller.mp3 --->  Music/Michael Jackson/Thriller.mp3
Music/Shake It Off.mp3 --->  Music/Taylor Swift/Shake It Off.mp3
Music/Billie Jean.mp3 --->  Music/Michael Jackson/Billie Jean.mp3
Music/Smooth Criminal.mp3 --->  Music/Michael Jackson/Smooth Criminal.mp3
Music/Bad Blood.mp3 --->  Music/Taylor Swift/Bad Blood.mp3
Music/Anti-Hero.mp3 --->  Music/Taylor Swift/Anti-Hero.mp3
```

#### By Album

This is the similar to By Artist, but for albums.

#### By Artist & Album

This is the similar to By Artist, but for both artist and album. See the output of Step 3 for an example.

## Step 5: Reorganize Files

This is an extension to the previous step. In this step, the files should be reorganized on the file system by moving and renaming them as necessary.

### Expected Output

#### By Artist

When user runs the following command:

```shell
<program> --input Music/ --reorganize-by ARTIST
```

The output should be like this:

```shell
Moved Music/Thriller.mp3 --->  Music/Michael Jackson/Thriller.mp3
Moved Music/Shake It Off.mp3 --->  Music/Taylor Swift/Shake It Off.mp3
Moved Music/Billie Jean.mp3 --->  Music/Michael Jackson/Billie Jean.mp3
Moved Music/Smooth Criminal.mp3 --->  Music/Michael Jackson/Smooth Criminal.mp3
Moved Music/Bad Blood.mp3 --->  Music/Taylor Swift/Bad Blood.mp3
Moved Music/Anti-Hero.mp3 --->  Music/Taylor Swift/Anti-Hero.mp3
```

In addition, the files should actually move and be renamed as necessary.

#### By Album

This is the similar to By Artist, but for albums.

#### By Artist & Album

This is the similar to By Artist, but for both artist and album.

## Step 6: Fetch Metadata from the Internet

For files that do not have proper metadata tags, APIs can be used that would fetch the metadata from the internet. We can make an API call to search for any songs present with the name similar to file’s name. This will return a list of matching songs, out of which the user can select which metadata suits the best, and change the metadata of that file accordingly.

Potentially useful APIs:

- [https://musicbrainz.org/](https://musicbrainz.org/)
- Music services like Spotify, Apple Music, Shazam also provide APIs

Please be wary of the fact that these services often have rate limits and exceeding may prevent your ability to solve this part of the problem.

### Expected Outcome

When user runs the following command:

```shell
<program> --input Music/ --suggest-metadata-fixes
```

The output should be like this:

```text
File: Music/Thriller.mp3
Top 3 matches:
1. Song: Thriller
   Album: The Thriller
   Artist: Dharan Kumar & Ishaan Dev
2. Song: Thriller
   Album: The Power of Classic Rock
   Artist: London Symphone Orchestra
3. Song: Thriller
   Album: Thriller
   Artist: Michael Jackson
---
File: Music/Smooth Criminal.mp3
Top 3 matches:
1. Song: Smooth Criminal
   Album: Bad
   Artist: Michael Jackson
2. Song: Unsmooth Criminal
   Album: Gang Units
   Artist: Joshua Klein
3. Song: Criminal
   Album: Tidal
   Artist: Fiona Apple
```

## Step 7: Fix Metadata from the Internet

This is an extension to Step 6. In addition to fetching metadata from the internet, this command should allow a user to fix the metadata in files that are missing metadata.

### Expected Outcome

When user runs the following command:

```shell
<program> --input Music/ --fix-metadata
```

The output should be like this:

```text
File is missing metadata: Music/Thriller.mp3
Top 3 matches:
1. Song: Thriller
   Album: The Thriller
   Artist: Dharan Kumar & Ishaan Dev
2. Song: Thriller
   Album: The Power of Classic Rock
   Artist: London Symphone Orchestra
3. Song: Thriller
   Album: Thriller
   Artist: Michael Jackson
Do you wish to fix (Y/N)?
Y
Select correct choice (1, 2, 3):
2
Metadata fixed.
---
File is missing metadata: Music/Smooth Criminal.mp3
Top 3 matches:
1. Song: Smooth Criminal
   Album: Bad
   Artist: Michael Jackson
2. Song: Unsmooth Criminal
   Album: Gang Units
   Artist: Joshua Klein
3. Song: Criminal
   Album: Tidal
   Artist: Fiona Apple
Do you wish to fix (Y/N)?
N
```
