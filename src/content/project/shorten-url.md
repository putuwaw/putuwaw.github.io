---
title: URL Shortener
name: shorten-url
publishDate: 2023-06-09 04:40:00
img: /assets/shorten-url.png
img_alt: URL Shortener
description: |
  URL Shortener using Flask, Tailwind CSS, and MySQL
tags:
  - Flask
  - MySQL
  - TailwindCSS
  - Vercel
---

<div style="display: flex; align-items: start;">
  <a href="https://github.com/putuwaw/shorten-url" target="_blank" style="margin-right: .5em;">
    <img src="https://img.shields.io/badge/repository-121013?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
  </a>
  <a href="https://shrtn-url.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/preview-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Github" />
  </a>
</div>
<hr>

![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

Shorten URL is a free, simple, and open-source URL shortener. It is a web based application that allows you to shorten your long URLs.

##### Features 💡

Using Shorten URL, you can:

- [x] Shorten your long URLs.
- [x] Create custom short URLs.

##### Prerequisites 📋

- Python 3.10 or higher
- MySQL 8.0.32 or higher
- Node.js v18.13.0 or higher

##### Installation 🛠

- Clone the repository:

```bash
git clone https://github.com/putuwaw/shorten-url.git
```

- Install the requirements:

```bash
make init
make install
```

- Create .env file and set the environment variables for database connection:

```bash
make env
```

- Install Tailwind CSS, configure it, and watch for changes:

```bash
make tw-install
make tw-watch
```

- Run the application:

```bash
make run
```

##### Contributing 🤝

Contributions are welcome! Please read the [contributing guidelines](https://github.com/putuwaw/shorten-url/blob/main/CONTRIBUTING.md) first.

##### License 📝

This project is licensed under the MIT License. See the [LICENSE](https://github.com/putuwaw/shorten-url/blob/main/LICENSE) file for details.
