# Transformer

The goal of this problem is to evaluate candidates for a recruitment drive run by a tech company. Your program has to assess candidates based on their performance on written test scores and notes written by interviewers during the interview rounds. Sets of analysis and data processing required is highlighted.

## Input

You will be provided with 2 types of CSVs, each containing example data of different sizes.

You can download the example files [here](https://drive.google.com/file/d/1GCj-rxORAbUU6cTCeGspOxCQ_W8RYt47/view?usp=drive_link). Please note that the download is over 200 MB in size, so you should probably queue this for download before you get started on the problem.

### Basic Scores

The first type of CSV is basic scores, for which you will be provided example data of 3 different sizes:

1. basic_scores_small.csv
2. basic_scores_large.csv
3. basic_scores_xlarge.csv

Each of these files have the following schema:

| Name              | Source Data Type                                                                      | Parsed Data Type                        | Description                                                                  |
| ----------------- | ------------------------------------------------------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------- |
| College Name      | String                                                                                | String                                  |                                                                              |
| College ID        | String                                                                                | String                                  |                                                                              |
| USN               | String                                                                                | String                                  | Not nullable Student Identifier                                              |
| Student Name      | String                                                                                | String                                  |                                                                              |
| 10th Percentage   | Float                                                                                 | Float (2 Decimal Places)                | Between 0.0 to 100.0                                                         |
| 12th Percentage   | String (“95 %”, “90”, “91 Perc”)                                                      | Float (2 Decimal Places)                | Between 0.0 to 100.0                                                         |
| College CGPA      | Float                                                                                 | Float (2 Decimal Places)                | Between 1.0-10.0                                                             |
| Course            | String                                                                                | String                                  | CSE, ECE, MECH, CSE-AI, CSE-ML                                               |
| Coding Test Time  | String (Date time in a format with timezone, Candidate has to figure out the format.) | Timestamp in ISO Format in IST Timezone | Format: “YYYY-mm-dd HH:MM:SS+z“ <br>Example:<br><br>2024-05-31T14:07:22+0530 |
| Coding Test Score | Float                                                                                 | Float (2 Decimal Places)                | Between 0-15                                                                 |

Example data:

| College Name                    | College ID | USN     | Student Name | 10th Percentage | 12th Percentage | College CGPA | Course | Coding Test Time         | Coding Test Score |
| ------------------------------- | ---------- | ------- | ------------ | --------------- | --------------- | ------------ | ------ | ------------------------ | ----------------- |
| Silicon Institute of Technology | SIT        | USN0001 | Sujan Pal    | 95              | 95 %            | 7.6          | CSE    | Dec24,2024 15:11:22+0530 | 9.0               |
| Silicon Institute of Technology | SIT        | USN0002 | Anston       | 99              | 79 Perc         | 8.5          | ECE    | Dec24,2024 14:12:44+0400 | 11.0              |
| Silicon Institute of Technology | SIT        | USN0003 | Siddarth     | 88.0            | 90              | 9.2          | MECH   | Dec24,2024 13:54:22+0530 | 12.0              |

For Steps 1-8, `basic_scores_small.csv` is provided to be a simple example. Your solution must work on `basic_scores_large.csv` within a few seconds to be considered correct. If your solution also works on `basic_scores_xlarge.csv` in a reasonable amount of time, you will be given extra credit - the faster your solution runs, the more extra credit you will receive.

### Interviewer Notes

The second type contains both basic scores, and interviewer notes. You are provided one example file for this:

1. basic_scores_and_notes.csv

This file will have all the fields that “Basic Scores” has, along with a few additional fields outlined below.

| Name                           | Source Data Type | Parsed Data Type | Description                |
| ------------------------------ | ---------------- | ---------------- | -------------------------- |
| First-Round Interviewer Name   | String           | String           | A finite set of Names      |
| First-Round Interviewer Notes  | String           | String           | String of max length 1000. |
| Second-Round Interviewer Name  | String           | String           | A finite set of Names      |
| Second-Round Interviewer Notes | String           | String           | String of max length 1000. |

A sample file may look like this:

| College Name                    | College ID | USN     | Student Name | 10th Percentage | 12th Percentage | College CGPA | Course | Coding Test Time         | Coding Test Score | First-Round Interviewer Name | First-Round Interviewer Notes            | Second-Round Interviewer Name | Second-Round Interviewer Notes           |
| ------------------------------- | ---------- | ------- | ------------ | --------------- | --------------- | ------------ | ------ | ------------------------ | ----------------- | ---------------------------- | ---------------------------------------- | ----------------------------- | ---------------------------------------- |
| Silicon Institute of Technology | SIT        | USN0001 | Sujan Pal    | 95              | 95 %            | 7.6          | CSE    | Dec24,2024 15:11:22+0530 | 9.0               | Mayur                        | He was able to show what he worked upon. | Gopal                         | He was able to show what he worked upon. |
| Silicon Institute of Technology | SIT        | USN0002 | Anston       | 99              | 79 Perc         | 8.5          | ECE    | Dec24,2024 14:12:44+0400 | 11.0              | Gopal                        | The interaction went smoothly.           | Sudarshan                     | He was able to show what he worked upon. |
| Silicon Institute of Technology | SIT        | USN0003 | Siddarth     | 88.0            | 90              | 9.2          | MECH   | Dec24,2024 13:54:22+0530 | 12.0              | Mayur                        | He was able to show what he worked upon. | Kunal                         | The candidate was not adept at coding.   |

## Step 1: Read and Clean CSV

Set up the project in the language of your choice. Define the basic structure of the program, and get a working implementation that takes in a CSV in the Basic Scores format, and writes a cleaned CSV at the provided output file path.

Please include documentation (in a file called `SETUP.md`) on any prerequisites we would need to have installed to run your program.

### Expected Outcome

When user runs the following command:

```shell
<program> clean --input <path to input csv file> --output <path to cleaned csv file>
```

Your program should produce a cleaned file that matches the data format requirements highlighted in `Parsed Data Type` column.

The following table shows a sample cleaned data for the input file.

| College Name                    | College ID | USN     | Student Name | 10th Percentage | 12th Percentage | College CGPA | Course | Coding Test Time         | Coding Test Score |
| ------------------------------- | ---------- | ------- | ------------ | --------------- | --------------- | ------------ | ------ | ------------------------ | ----------------- |
| Silicon Institute of Technology | SIT        | USN0001 | Sujan Pal    | 95.00           | 95.00           | 7.60         | CSE    | 2024-12-24T15:11:22+0530 | 9.00              |
| Silicon Institute of Technology | SIT        | USN0002 | Anston       | 99.00           | 79.00           | 8.50         | ECE    | 2024-12-24T15:42:44+0530 | 11.00             |
| Silicon Institute of Technology | SIT        | USN0003 | Siddarth     | 88.00           | 90.00           | 9.20         | MECH   | 2024-12-24T13:54:22+0530 | 12.00             |

Points to note:

- For 12th Percentage column: Source CSV can contain any of the 3 values (“95 %”, “90”, “91 Perc”). The Processed CSV should only contain `95.00`, `90.00`, and `91.00` with 2 decimal places values always present (without the backticks).
- For timestamps: Detect the timestamp format from the original data and store the timestamp in ISO format as specified with the timezone information.
  - If the time format is 12 Mar 2022 14:11:12+0530 the final timestamp value written should be like this: 2022-03-12T14:11:12+0530.
  - If the time zone is not an Indian timezone the timestamp values should be converted to Indian timezones. `2024-12-24T14:12:44+0400` should converted to `2024-12-24T15:42:44+0530`.

For erroneous records (i.e., the data is garbage, and cannot be parsed), write an error to stderr with the line number, and details about the error. Example: the 12th Percentage value is `foo bar` - this cannot be parsed into a number, and is hence an erroneous record. Do not write such records to the cleaned file.

## Step 2: Change Format to Parquet

[Parquet](https://parquet.apache.org/docs/overview/) is an open source, column-oriented data file format designed for efficient data storage and retrieval.

Write a program takes takes a CSV in the Basic Scores format, cleans the file (as specified in the previous step), converts, and writes it to Parquet.

### Expected Outcome

When user runs the following command:

```bash
<program> to_parquet --input <path to input csv file> --output <path to cleaned parquet file>
```

Your program should follow all the same rules outlined in Step 1, but instead of producing a CSV file, it should produce a parquet file.

## Step 3: Normalize Scores

All scores are ranging from different ranges:

- 10th Percentage is between 0.0-100.0
- 12th Percentage is between 0.0-100.0
- College CGPA is between 0.0-10.0
- Coding Test Score is between 0-15

The objective of this step is to normalize these scores to be between a common range of 0.0 to 100.0.

For example, if a candidate scored 5 on the coding test, this will be normalized as follows:

- 5/15 = 0.3333
- 0.3333 \* 100 = 33.33
- Then 33.33 would be the score out of 100.

### Expected Outcome

When user runs the following command:

```bash
<program> normalize_scores --input <path to cleaned input parquet file> --output <path to normalized parquet file>
```

You should add these normalized values as new columns in the file and write a new file with the following additional normalized columns as output:

- 10th Percentage Normalized
- 12th Percentage Normalized
- College CGPA Normalized
- Coding Test Score Normalized

Note that both input and output files should be in Parquet format.

## Step 4: Compute Weighted Net Score

The objective of this step is to compute the net weighted score of each candidate.

Following are the weights assigned to each score:

- 10th Percentage: 10%
- 12th Percentage: 10%
- College CGPA: 30%
- Coding Assessment Score: 50%

For example:

Assume the following normalized score distribution:

| 10th Marks Normalized | 12th Marks Normalized | College CGPA Normalized | Coding Assessment Score Normalized |
| --------------------- | --------------------- | ----------------------- | ---------------------------------- |
| 75                    | 90                    | 91                      | 62                                 |

The weighted net score will be calculated as:

$$
Weighted\ Net\ Score = (75*0.1)+(90*0.1)+(91*0.3)+(62*0.5) = 74.8
$$

### Expected Outcome

When user runs the following command:

```bash
<program> weighted_net_score --input <path to cleaned normalized input parquet file> --output <path to parquet file with weighted net score>
```

You should read the input file in parquet format, and for each row, calculate the weighted net score as described above. Write a new parquet file with an additional column titled `Weighted Net Score`.

### Step 5: Net Average Score By College

The objective of this step is to calculate the net average (aka mean) score for every college.

### Expected Outcome

When user runs the following command:

```bash
<program> net_average_score_by_college --input <path to cleaned normalized input parquet file with weighted net score> --output <path to output csv file>
```

Calculate the aggregate score for all colleges grouped by `College ID` and write a CSV output in this format:

| Column Name                | Data Type | Description                                        |
| -------------------------- | --------- | -------------------------------------------------- |
| College Name               | String    | College Names                                      |
| College ID                 | String    | College IDs                                        |
| Average Weighted Net Score | Float     | The average of weighted net scores for the college |

Here, the `Average Score` is calculating the average `Average Weighted Scores` for students belonging to the same `College ID`.

Example output:

| College Name                    | College ID | Average Score |
| ------------------------------- | ---------- | ------------- |
| Silicon Institute of Technology | SIT        | 85.75         |
| Dayananda Sagar University      | DSU        | 84.16         |

## Step 6: Net Average Score by College and Year

As an extension to the previous step, also calculate the average score for each college by year.

### Expected Outcome

When user runs the following command:

```bash
<program> net_average_score_by_college_and_year --input <path to cleaned normalized input parquet file with weighted net score> --output <path to output csv file>
```

Calculate the aggregate score for all colleges grouped by `College ID` and `Year`, and write a CSV output in this format:

CSV should have the following columns:

| Column Name   | Data Type | Description                                        |
| ------------- | --------- | -------------------------------------------------- |
| College Name  | String    | College Names                                      |
| College ID    | String    | College IDs                                        |
| Year          | Int       | Year to calculate Average for                      |
| Average Score | Float     | The Average of Weighted Net Score for the college. |

Here, the `Average Score` is calculating the average `Average Weighted Scores` for students belonging to the same `College ID`. The year is extracted from the `Coding Test Time` field.

Example Output:

| College Name                    | College ID | Year | Average Score |
| ------------------------------- | ---------- | ---- | ------------- |
| Silicon Institute of Technology | SIT        | 2023 | 85.75         |
| Silicon Institute of Technology | SIT        | 2024 | 84.77         |
| Dayananda Sagar University      | DSU        | 2023 | 84.16         |
| Dayananda Sagar University      | DSU        | 2024 | 85.78         |

## Step 7: Correlation Coefficient

The correlation coefficient is a number that tells us how strongly two things are related to each other. It can range from -1 to 1.

- **1** means that the two things are perfectly positively related. If one thing increases, the other thing always increases in a predictable way.
- **0** means that there is no relationship between the two things. Knowing something about one doesn't tell you anything about the other.
- **-1** means that the two things are perfectly negatively related. If one thing increases, the other thing always decreases in a predictable way.

### Expected Outcome

When user runs the following command:

```bash
<program> correlation_coefficient --input <path to cleaned normalized input parquet file with weighted net score> --output <path to output csv file>
```

Calculate the correlation coefficient between the previously calculated normalized values for the following combinations:

- 10th Percentage Normalized and College CGPA Normalized
- 12th Percentage Normalized and College CGPA Normalized
- College CGPA Normalized and Coding Test Score Normalized

Example output:

| 10th Percentage vs College CGPA | 12th Percentage vs College CGPA | College CGPA vs Coding Test Score |
| ------------------------------- | ------------------------------- | --------------------------------- |
| 0.8                             | 0.7                             | 0.3                               |

## Step 8: College Performance

The objective of this step is to calculate the rating of a college based on the overall score of the students. You can use any reasonable method of your choice to arrive at a performance metric that uses all the data provided, as well as any previous computations. Sort all the list of colleges in the output file in descending order of your rating. Your rating should be in the range of 0 to 100.

### Expected Outcome

When user runs the following command:

```bash
<program> college_performance --input <path to cleaned normalized input parquet file with weighted net score> --output <path to output csv file>
```

Generate a file like this:

| College Name                    | College ID | Score |
| ------------------------------- | ---------- | ----- |
| Silicon Institute of Technology | SIT        | 85.75 |
| Dayananda Sagar University      | DSU        | 84.16 |

## Step 9: Interview Score

As an extension to all previous steps, in addition to all the data and calculations done, feed the additional interviewer notes columns in `basic_scores_and_notes.csv` into an LLM of your choice to generate scores for interview notes: `First-Round Interviewer Score` and `Second-Round Interviewer Score`.

Then, calculate a new weighted total score with the following weight distribution:

| Score                          | Weight |
| ------------------------------ | ------ |
| Weighted Net Score             | 30%    |
| First-Round Interviewer Score  | 30%    |
| Second-Round Interviewer Score | 40%    |

Based on the above weights, calculate the `Final Candidate Score`.

### Expected Outcome

When user runs the following command:

```bash
<program> interview_score --input <path to cleaned normalized input parquet file with weighted net score> --output <path to output csv file>
```

You should produce an output file that looks like this:

| College Name                    | College ID | USN     | Student Name | Weighted Net Score | First-Round Interviewer Score | Second-Round Interviewer Score | Final Candidate Score |
| ------------------------------- | ---------- | ------- | ------------ | ------------------ | ----------------------------- | ------------------------------ | --------------------- |
| Silicon Institute of Technology | SIT        | USN0001 | Sujan Pal    | 88.67              | 81.1                          | 60                             | 74.93                 |
| Silicon Institute of Technology | SIT        | USN0002 | Anston       | 67                 | 82                            | 72                             | 73.50                 |
| Dayananda Sagar University      | DSU        | USN0003 | Siddarth     | 66                 | 99                            | 92                             | 86.30                 |
