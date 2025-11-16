### Kankoor Exam Questions Dataset (Afghanistan)

**Author:** Salim Noor (Taikutsu Lyrz)  
**License:** MIT  
**Date:** 2025  

---

## 1. Project Description

This dataset contains **Kankoor (Afghanistan University Entrance Exam) questions** in structured JSON format.  

Currently includes:  
- **Geology** — 300+ questions  
- **Dari (Language & Literature)** — 300+ questions  

**Purpose:**  
- Educational & research use  
- Building quiz apps, web apps, or AI study assistants  
- Public reference for Afghan students  

---

## 2. Repository Structure

```
kankoor-questions-dataset/
│
├── data/
│   ├── geology/
│   │   └── geology.json
│   ├── dari/
│   │   └── dari.json
│
├── schema.json
├── README.md
└── LICENSE
````

- **data/** — contains subject-specific JSON files  
- **schema.json** — defines question structure and rules  
- **LICENSE** — MIT License  
- **README.md / README.pdf** — project documentation  

---

## 3. JSON Schema Structure

All questions follow this format:

```json
{
  "id": 1,
  "question": "Sample question...",
  "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "correctOption": 1,
  "correctAnswer": "Option 1",
  "subject": "Geology",
  "difficulty": "easy",
  "year": 2025
}
```

**Fields:**

| Field         | Type         | Description                                          |
| ------------- | ------------ | ---------------------------------------------------- |
| id            | integer      | Unique question ID                                   |
| question      | string       | Question text                                        |
| options       | array        | Multiple-choice options                              |
| correctOption | integer      | 1-based index of the correct option                  |
| correctAnswer | string       | Text of the correct answer                           |
| subject       | string       | Subject name (Geology, Dari, etc.)                   |
| difficulty    | string       | easy / medium / hard                                 |
| year          | integer/null | Optional: year the question appeared in Kankoor exam |

---

### 🔹 Notes

* `id` → each question must have a unique number
* `options` → at least 2 choices, usually 4
* `correctOption` → 1-based index of the correct answer
* `year` → optional, can be `null` if unknown
* `additionalProperties: false` → prevents extra fields that don’t follow the schema

---

## 4. Usage

* Load JSON into apps, websites, or scripts
* Example (JavaScript):

```js
import geology from './data/geology/geology.json';
console.log(geology[0].question);
```

* Developers can select specific subjects or use all at once

---

## 5. Contribution

* Add new subjects like Math, Biology, Chemistry
* Follow the `schema.json` structure for consistency
* Pull requests are welcome

---

## 6. Attribution

If you use this dataset in an app, website, or project, a small mention or credit would be appreciated:

```
"Kankoor Questions Dataset by Salim Noor (Taikutsu Lyrz) — [GitHub link]"
```

Optional, but helps support future development.

---

## 7. License
MIT License — see LICENSE file.
You can freely use, copy, modify, and distribute this dataset, with proper credit.


