# Contributing to Afghanistan‑Kankoor‑Exam‑Dataset

Thank you for your interest in contributing! 🙌  
This is a public dataset of Kankoor exam questions. Help is very welcome.

---

## 🛠️ How to Contribute

### 1. Fork the Repository  
Click the **Fork** button on GitHub to create your own copy of this repo.

### 2. Clone Your Fork  
```bash
git clone https://github.com/your-username/Afghanistan-kankoor-exam-dataset.git
cd Afghanistan-kankoor-exam-dataset
````

### 3. Create a Branch

Make a new branch for your contribution (don't use `main`):

```bash
git checkout -b add-geology-questions
```

### 4. Add / Update Questions

* Open the JSON file in `data/geology/` or `data/dari/`
* Make sure your questions follow the structure in `schema.json`
* Add new questions or fix existing ones

### 5. Validate Your JSON

Ensure your JSON is valid and doesn’t break the schema.
You can use online JSON schema validators or run a script if you build one.

### 6. Commit Your Changes

```bash
git add .
git commit -m "Add 10 geology questions (2025 exam)"
```

### 7. Push to Your Branch

```bash
git push origin add-geology-questions
```

### 8. Make a Pull Request (PR)

* Go to your fork on GitHub
* Click **“New Pull Request”**
* Fill in a descriptive title and summary
* Submit the PR, and I’ll review it

---

## 📚 Guidelines for Questions

* Follow the format in `schema.json`.
* Provide a **unique `id`** for each question.
* Use **1-based indexing** for `correctOption`.
* Keep the `year` field **if you know which exam it’s from**.
* Set `difficulty` to `easy`, `medium`, or `hard`.
* Do not add extra fields — the schema disallows additional ones (`additionalProperties: false`).

---

## 🙏 Attribution

If your contribution is accepted, you will be listed in the **Contributors** section of the repository.

Also, if you make an app or project using this dataset, a small mention/credit is very much appreciated:

> “Kankoor Exam Dataset — by Salim Noor (Taikutsu Lyrz)”

---

## ✅ Code of Conduct

Please follow general respectful behavior and open-source etiquette when interacting.

---

Thanks a ton for wanting to help — together, we can make this dataset more valuable for Afghan students & developers! 🚀

