---
title: D-MOV1E
name: d-mov1e
publishDate: 2022-06-21 06:54:00
img: /assets/d-mov1e.png
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
description: |
  Desktop Movie App using GTK
tags:
  - C
  - CSS
  - GTK
  - CodeBlocks
---

<div style="display: flex; align-items: start;">
  <a href="https://github.com/putuwaw/d-mov1e" target="_blank" style="margin-right: .5em;">
    <img src="https://img.shields.io/badge/repository-121013?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
  </a>
</div>
<hr>

![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![GTK](https://img.shields.io/badge/GTK-222222.svg?style=for-the-badge&logo=GTK&logoColor=7FE719)
![Forks](https://img.shields.io/github/forks/putuwaw/d-mov1e?style=for-the-badge)
![Contributors](https://img.shields.io/github/contributors/putuwaw/d-mov1e?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/putuwaw/d-mov1e?style=for-the-badge)

D'MOV1E is a GUI-based desktop application that can manage the ticket purchasing process in cinemas.

##### Features 💡

By using D'MOV1E you can:

- [x] Buy ticket
- [x] Choose a seat
- [x] Pay for the ticket
- [x] Save data into text file
- [x] Get information about queues and buyer

##### Technology 👨‍💻

D'MOV1E is created using:

- [GTK](https://www.gtk.org/) - GTK is a widget toolkit that used to serve the GUI.
- [CSS](https://www.w3.org/TR/CSS/#css) - CSS is used as a styling language to decorate elements in GTK.
- [C](https://www.open-std.org/jtc1/sc22/wg14/) - C is the main programming language we use to implement data structures.
- [CodeBlocks](https://www.codeblocks.org/) - CodeBlocks as the IDE used to develop this project.

##### Structure 📂

The image below shows the folder structure of our project.

```
D'MOV1E
├── data
├── doc
├── lib
├── src
│   ├── css
│   ├── font
│   └── image
├── .gitignore
├── D'MOV1E.cbp
├── LICENSE
├── main.c
└── README.md
```

- [data](https://github.com/putuwaw/d-mov1e/tree/main/data/) contains a text file used to store data.
- [doc](https://github.com/putuwaw/d-mov1e/tree/main/doc/) contains documentation about the project.
- [lib](https://github.com/putuwaw/d-mov1e/tree/main/lib/) contains the headers and functions we created in the program.
- [src](https://github.com/putuwaw/d-mov1e/tree/main/src/) contains 3 directories, css, fonts and images used in the project.
- [.gitignore](https://github.com/putuwaw/d-mov1e/tree/main/.gitignore) is a file used to exclude some files such as object files (.o) and executable files (.exe).
- [D'MOV1E.cbp](https://github.com/putuwaw/d-mov1e/tree/main/D'MOV1E.cbp) is CodeBlocks project file that contains information about the project.
- [LICENSE](https://github.com/putuwaw/d-mov1e/tree/main/LICENSE) is a file containing the licenses we use in the project.
- [main.c](https://github.com/putuwaw/d-mov1e/tree/main/main.c) is the main function in the file.
- [README.md](https://github.com/putuwaw/d-mov1e/tree/main/README.md) is the file you are reading now, containing additional information about the project.

##### Requirement 📦

- C17 or later
- CodeBlocks 20.03 or later
- GTK 3.0 or later
- CSS 3 or later

##### Installation 🛠️

- Install [SF Pro Display](https://github.com/putuwaw/d-mov1e/tree/main/src/font) font.
- Install GTK by opening MSYS2 shell and run:

```bash
pacman -S mingw-w64-x86_64-gtk3
```

- Add to other compiler options:

```bash
`pkg config --cflags gtk+-3.0`
```

- Add to other linker options:

```bash
`pkg config --libs gtk+-3.0`
```

- Link libraries:

```bash
ssh
crypto
```

- Add to compiler search directories:

```bash
C:\msys64\mingw64\include
```

- Build and run

##### Preview 💻

Learn more about the project at [documentation](https://github.com/putuwaw/d-mov1e/tree/main/doc).

<p align="center">
 <a href="https://github.com/putuwaw/d-mov1e/blob/main/doc/doc_sign_in.png"><img src="https://github.com/putuwaw/d-mov1e/blob/main/doc/doc_sign_in.png?raw=true" height="360px" width="640px;" alt="Sign In"/>
 <a href="https://github.com/putuwaw/d-mov1e/blob/main/doc/doc_dashboard.png"><img src="https://github.com/putuwaw/d-mov1e/blob/main/doc/doc_dashboard.png?raw=true" height="360px" width="640px;" alt="Dashboard"/>
 <a href="https://github.com/putuwaw/d-mov1e/blob/main/doc/doc_dashboard_pembelian.png"><img src="https://github.com/putuwaw/d-mov1e/blob/main/doc/doc_dashboard_pembelian.png?raw=true" height="360px" width="640px;" alt="Dashboard Pembelian"/>
</p>

##### Contributors✨

<br>
<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/putuwaw"><img src="https://avatars.githubusercontent.com/u/90038606?v=4" width="150px;" alt=""/><br><sub><b>Putu Widyantara</b></sub></td> 
    <td align="center"><a href="https://github.com/putrip3"><img src="https://avatars.githubusercontent.com/u/103046943?v=4" width="150px;" alt=""/><br><sub><b>Putri Pratiwi</b></sub></td> 
    <td align="center"><a href="https://github.com/krisnawandhana"><img src="https://avatars.githubusercontent.com/u/102802614?v=4" width="150px;" alt=""/><br><sub><b>Krisna Wandhana</b></sub></td>
  </tr>
</table>
