# jlxd
### A JupyterLab extension demo:

This repository is an accompaniment to the talk, "[**Why Won't My Favorite Notebook Extension Work in JupyterLab?**](https://cfp.jupytercon.com/2023/talk/97E88S/)," that I gave at [**JupyterCon2023**](https://www.jupytercon.com/).  The code and slides are available here "as is" with no guarantees.

One issue that I will point out: If you follow the steps here, and write the code as shown here, from scratch, building as you go along, it will work, ***but*** if you simply **`git clone`** this repository then it might not work at every step.  The reason, that I suspect but have not yet had time to investigate or fix, is that (I suspect) that the cookiecutter .gitignore is leaving something out that otherwise gets generated when you write, compile, and build the code from scratch.

[The slides for the presentation are here](https://github.com/DanielGoldfarb/jlxd/blob/main/16x9_LabextensionsJupyterCon2023.pdf) in this repository, and there are many useful clickable links within the slide.

---

#### First create a virtual environment: (conda, mamba, python venv)

```bash
conda create -n jlxd --override-channels --strict-channel-priority \
-c conda-forge -c nodefaults \
jupyterlab=3 cookiecutter nodejs jupyter-packaging
```

---

#### Create a cookiecutter labextension:

**`cookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts`**

---

#### Code:

- [`Step 0 :` **`cookiecutter extension`**](https://github.com/DanielGoldfarb/jlxd/blob/18ba182ec17c0012e2334bc54923235b52db54da/src/index.ts)
- [`Step 1 :` **`create a command to do_something`**](https://github.com/DanielGoldfarb/jlxd/compare/STEP0...STEP1)
- [`Step 2 :` **`exec our command from ICommandPalette`**](https://github.com/DanielGoldfarb/jlxd/compare/STEP1...STEP2)
- [`Step 3a:` **`split out activate function`**](https://github.com/DanielGoldfarb/jlxd/compare/STEP2...step3a)
- [`Step 3b:` **`command adds widget to main area`**](https://github.com/DanielGoldfarb/jlxd/compare/step3a...step3b)
- [`Step 4 :` **`style the widget`**](https://github.com/DanielGoldfarb/jlxd/compare/step3b...STEP4)
- [`Step 5 :` **`exec command from ILauncher`**](https://github.com/DanielGoldfarb/jlxd/compare/STEP4...STEP5)
- [`Step 6a:` **`pass args into command and widget`**](https://github.com/DanielGoldfarb/jlxd/compare/STEP5...step6a)
- [`Step 6b:` **`add sidebar widget w/3 buttons`**](https://github.com/DanielGoldfarb/jlxd/compare/step6a...step6b)
- [`Step 6c:` **`style our sidebar widget`**](https://github.com/DanielGoldfarb/jlxd/compare/step6b...step6c)
- [`Step 6d:` **`Add Event Listeners to buttons`**](https://github.com/DanielGoldfarb/jlxd/compare/step6c...step6d)
