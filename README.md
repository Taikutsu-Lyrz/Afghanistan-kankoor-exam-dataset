### Kankoor Exam Questions Dataset (Afghanistan)

**Author:** Salim Noor (Taikutsu Lyrz)  
**License:** MIT  
**Date:** 2025  

![Total Questions](https://img.shields.io/badge/Total%20Questions-0-blue)

---


## 1. Project Description

This dataset contains **Kankoor (Afghanistan University Entrance Exam) questions** in structured JSON format.  
<br>


## 📚 Available Subjects

The dataset currently includes multiple subjects from the Afghanistan Kankoor (university entrance) exam.  
Each subject has its own JSON folder containing the file inside the `dataset/` directory.

### Current Subjects
- **Geology**
- **Dari**
- **Chemistry** 
- **Physics** ← *Newly added*
  
More subjects will be added continuously (Math, Chemistry, Biology, etc).


**Purpose:**  
- Educational & research use  
- Building quiz apps, web apps, or AI study assistants  
- Public reference for Afghan students  

---

## 2. Repository Structure

```
Afghanistan-kankoor-questions-dataset/
├── dataset/
│   └── data/
│       ├── geology/
│       │   └── geology.json
│       ├── dari/
│       │   └── dari.json
│       ├── chemistry/
│       │   └── general_chemistry.json
│       ├── physics/
│       │   └── physics_mechanics_simple.json
│       └── schema.json
├── README.md
├── LICENSE
└── CONTRIBUTING.md

```

- **data/** — contains subject-specific folder with JSON files  
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

---

### 🔹 Notes

* `id` → each question must have a unique number
* `options` → at least 2 choices, usually 4
* `correctOption` → 1-based index of the correct answer
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

"Kankoor Questions Dataset by Salim Noor (Taikutsu Lyrz) — https://github.com/Taikutsu-Lyrz/Afghanistan-kankoor-exam-dataset"

Optional, but helps support future development.

---

## 7. License
MIT License — see LICENSE file.
You can freely use, copy, modify, and distribute this dataset, with proper credit.

















