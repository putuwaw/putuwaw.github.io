---
title: Brilliant
name: brilliant
publishDate: 2022-06-22 11:14:00
img: /assets/brilliant.png
img_alt: Brilliant
description: |
  Book Management System using CSFML
tags:
  - C
  - CSFML
  - CodeBlocks
---

<div style="display: flex; align-items: start;">
  <a href="https://github.com/putuwaw/brilliant" target="_blank" style="margin-right: .5em;">
    <img src="https://img.shields.io/badge/repository-121013?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
  </a>
</div>
<hr>

![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)
![Forks](https://img.shields.io/github/forks/putuwaw/brilliant?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/putuwaw/brilliant?style=for-the-badge)
![Contributors](https://img.shields.io/github/contributors/putuwaw/brilliant?style=for-the-badge)
![Issue PR Closed](https://img.shields.io/github/issues-pr-closed/putuwaw/brilliant?style=for-the-badge)

Brilliant is a console-based application with GUI features that can manage book data.

##### Introducing 👥

In this modern age, everything went digital. From your ordinary newspaper, advertisements, and even food delivery is now online. You can get everything done just with a touch of your finger. Including books! Brilliant makes it easier for you to access the database full of books.

##### Features 💡

By using brilliant, you can:

- [x] Create or add a book and save it into the database.
- [x] Read or view the book data in GUI.
- [x] Update the book that you have saved.
- [x] Delete the book data.

##### Technologies 👨‍💻

Brilliant is created using:

- [C](https://www.open-std.org/jtc1/sc22/wg14/) - C as the programming language that we use to make modulation in our project.
- [CodeBlocks](https://www.codeblocks.org/) - CodeBlocks as an IDE to develop this project.
- [CSFML](https://www.sfml-dev.org/download/csfml/) - CSFML is the official binding of SFML for the C language as library to serve the GUI.

##### Structure 📂

The image below shows the folder structure of our project.

```
Brilliant
├── assets
│   ├── font
│   └── image
├── data
├── doc
├── lib
├── .gitignore
├── Brilliant.cbp
├── LICENSE
├── README.md
└── main.c
```

- [assets](https://github.com/putuwaw/brilliant/blob/main/assets/) contains 2 directories, fonts and images used in the project.
- [data](https://github.com/putuwaw/brilliant/blob/main/data/) contains a text file which is used to store book data.
- [doc](https://github.com/putuwaw/brilliant/blob/main/doc/) contains documentation about the project.
- [lib](https://github.com/putuwaw/brilliant/blob/main/lib/) directory containing the headers we created in the program.
- [.gitignore](https://github.com/putuwaw/brilliant/blob/main/.gitignore) is a file used to exclude some files such as object files (.o) and executable files (.exe).
- [Brilliant.cbp](https://github.com/putuwaw/brilliant/blob/main/Brilliant.cbp) is CodeBlocks project file that contains information about the project.
- [LICENSE](https://github.com/putuwaw/brilliant/blob/main/LICENSE) is a file containing the licenses we use in the project.
- [README.md](https://github.com/putuwaw/brilliant/blob/main/README.md) is the file you are reading now, containing additional information about the project.
- [main.c](https://github.com/putuwaw/brilliant/blob/main/main.c) is the main function in the file.

##### Requirements 📦

- CodeBlocks 20.03 or later
- CSFML 2.5.1 or later
- C17 or later

##### Installation 🛠️

- Move CSFML folder to:

```bash
C:\Program Files\CodeBlocks\csfml
```

- Link libraries in CodeBlocks:

```bash
csfml-graphics-2
csmfl-window-2
```

- Add compiler search directories:

```bash
C:\Program Files\CodeBlocks\csfml\include
```

- Build and run.

##### Preview 💻

Let's take some sneak peek about our project.

<div align="center">
  <img src="https://github.com/putuwaw/brilliant/blob/main/doc/doc_main.png?raw=true" width="640" height="360">
  <img src="https://github.com/putuwaw/brilliant/blob/main/doc/doc_about.png?raw=true" width="640" height="360">
  <img src="https://github.com/putuwaw/brilliant/blob/main/doc/doc_view.png?raw=true" width="640" height="360">
</div>

##### Contributors ✨

<br>
<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/putuwaw"><img src="https://avatars.githubusercontent.com/u/90038606?v=4" width="150px;" alt=""/><br><sub><b>Putu Widyantara</b></sub></td>
    <td align="center"><a href="https://github.com/sugunjenk"><img src="https://avatars.githubusercontent.com/u/102678449?v=4" width="150px;" alt=""/><br><sub><b>Suma Gunawan</b></sub></td>
    <td align="center"><a href="https://github.com/RaindraP"><img src="https://avatars.githubusercontent.com/u/94416844?v=4" width="150px;" alt=""/><br><sub><b>Raindra Pramathana</b></sub></td>
    <td align="center"><a href="https://github.com/IseKey"><img src="https://avatars.githubusercontent.com/u/102424627?v=4" width="150px;" alt=""/><br><sub><b>Rafly Shaquille</b></sub></td>
  </tr>
</table>
