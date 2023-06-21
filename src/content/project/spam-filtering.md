---
title: Spam Filtering
name: spam-filtering
publishDate: 2023-05-09 12:04:00
img: /assets/spam-filtering.png
img_alt: Spam Filtering
description: |
  Spam Filtering using Convolutional Neural Network (CNN)
tags:
  - Python
  - Streamlit
  - Keras
  - Tensorflow
---

<div style="display: flex; align-items: start;">
  <a href="https://github.com/putuwaw/spam-filtering" target="_blank" style="margin-right: .5em;">
    <img src="https://img.shields.io/badge/repository-121013?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
  </a>
  <a href="https://spam-filtering.streamlit.app/" target="_blank">
    <img src="https://img.shields.io/badge/preview-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white" alt="Github" />
  </a>
</div>
<hr>

![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=Streamlit&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Tensorflow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=TensorFlow&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)

Spam-filtering is a website based spam classifier that uses Deep Learning algorithm (Convolutional Neural Network) to classify whether a text is a spam or not.

##### Features💡

By using spam-filtering you can:

- [x] Checks whether a text is spam or ham.

##### Technology 👨‍💻

Spam-filtering is created using:

- [Python](https://www.python.org/) - Python as the main programming language.
- [Streamlit](https://streamlit.io/) - Streamlit as the web framework.
- [Keras](https://keras.io/) - Keras as the Deep Learning framework.
- [scikit-learn](https://scikit-learn.org/stable/) - scikit-learn as the Machine Learning framework.
- [Tensorflow](https://www.tensorflow.org/) - Tensorflow as the Deep Learning framework.

##### Structure 📂

```
spam-filtering
├── .github
├── .streamlit
├── docs
├── modules
├── pages
├── .gitignore
├── Dockerfile
├── Home.py
├── LICENSE
├── README.md
└── requirements.txt
```

- [.github](https://github.com/putuwaw/spam-filtering/blob/main/.github/) is a folder that used to place Github related stuff like CI pipeline.
- [.streamlit](https://github.com/putuwaw/spam-filtering/blob/main/.streamlit/) is a folder that contains configuration files for streamlit.
- [docs](https://github.com/putuwaw/spam-filtering/blob/main/docs/) contain documentation of this app.
- [modules](https://github.com/putuwaw/spam-filtering/blob/main/modules/) is a folder that contains modules especially CNN and preprocessing.
- [pages](https://github.com/putuwaw/spam-filtering/blob/main/pages/) is a folder that contains pages of this app.
- [.gitignore](https://github.com/putuwaw/spam-filtering/blob/main/.gitignore) is a file to exclude some folders like venv.
- [Dockerfile](https://github.com/putuwaw/spam-filtering/blob/main/Dockerfile) is a file that contains all the commands to build an image.
- [Home.py](https://github.com/putuwaw/spam-filtering/blob/main/Home.py) is the main file and homepage of this app.
- [LICENSE](https://github.com/putuwaw/spam-filtering/blob/main/LICENSE) is a file that contains the license we use in this app.
- [README.md](https://github.com/putuwaw/spam-filtering/blob/main/README.md) is the file you are reading now.
- [requirements.txt](https://github.com/putuwaw/spam-filtering/blob/main/requirements.txt) is a file that contains a list of dependencies used in this app.

##### Installation 🛠️

- Install Docker.
- Pull the image from [Docker Hub](https://hub.docker.com/r/putuwaw/spam-filtering):

```bash
docker pull putuwaw/spam-filtering
```

- Run the downloaded image:

```bash
docker run -p 8501:8501 putuwaw/spam-filtering
```

- Open web browser and visit:

```bash
0.0.0.0:8501
```

##### Contributors ✨

<br>
<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/putuwaw"><img src="https://github.com/putuwaw.png" width="150px;" alt=""/><br><sub><b>Putu Widyantara</b></sub></td> 
    <td align="center"><a href="https://github.com/Kebelll"><img src="https://github.com/Kebelll.png" width="150px;" alt=""/><br><sub><b>Kenny Belle</b></sub></td> 
    <td align="center"><a href="https://github.com/madya-dev"><img src="https://github.com/madya-dev.png" width="150px" alt=""/><br><sub><b>Madya Santosa</b></sub></td>
    <td align="center"><a href="https://github.com/kamisama27"><img src="https://github.com/kamisama27.png" width="150px;" alt=""/><br><sub><b>Dheva Surya</b></sub></td>
  </tr>
</table>
