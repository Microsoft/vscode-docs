Development Containers in Education: A Guide for Instructors
Context
We’ve heard from many educators that the first days or weeks of the semester can be lost to downloading and configuring various toolsets. Students may still end up without a correct environment, resulting in a lower-quality development experience or insufficient grading of their assignments:

<Quote 1>

<Quote 2>

Development containers are a fantastic tool in education to ensure students have a consistent coding environment. They take care of setup so that students and instructors alike can quickly move past configuration and instead focus on what’s truly important: learning and coding something great!

Development containers
So, what are development containers? Containers are pieces of software that package code and all the dependencies that code needs to run, including the runtime, tools, libraries, and settings. Containers were initially a way to deploy and manage apps in a consistent environment and make more efficient use of hardware. They later evolved to help in other areas, such as providing a consistent build environment, and more recently, development environment. That’s where the name dev container comes from.

When you create a container, its initial contents come from what’s known as an “image.” This can be thought of as a mini-disk drive with things like the operating system, tools, and more pre-installed. You describe what goes into the image using a Dockerfile, and once you run the image, it becomes a container.

Dev containers provide a separate coding environment from your computer. If you download a specific version of a dependency, that version will be unique to the container and completely separate from your computer. In the diagram below, notice how the container includes the app and its necessary dependencies, keeping the computer (Host OS and Infrastructure) free and clean of any dependencies:



As an instructor, you can create an image that is specific for an assignment. Then, each student gets the same exact same version of dependencies, such as the same version of Python or a C++ compiler, regardless of their operating system or any other files already installed on their computer.

Remote – Containers in VS Code

The Visual Studio Code Remote - Containers extension lets you use a container as your main coding environment. In the classroom, an instructor can take an exisiting dev container configuration or create their own and share it with the class. Each student can open the container in VS Code and automatically have the tools and runtimes they need to develop their applications. Students will also have access to VS Code’s full feature set, including IntelliSense and debugging, while developing their code.

The Remote – Containers extension works solely with Linux-based containers, so although students may have different operating systems on their computers, the coding environment will be consistent across all of them.
We’ve already seen instructors using Remote – Containers in their classrooms with success. You can check out Using DevContainers to Standardize Student Development Environments: An Experience Report to learn more about the experiences of three researchers who used dev containers in a semester-long course at UC San Diego.

This post will serve as a guide to instructors looking to implement development containers in the classroom to create a smoother, more consistent environment for their students.

Guide for Instructors
Scenario
Students can run into a wide variety of issues while setting up their environment, caused by a plethora of reasons: subtle differences in their unique OS, basic configuration, where project files are stored on their system, or small differences in version in every runtime or tool installed. Instructors need to be well-versed in all these subtleties to help students as they encounter them.
A common issue is managing different versions of a tool. Let’s take Python as an example: there’s Python 2 and Python 3, along with different minor versions as well. Having multiple versions of Python, and then multiple accompanying tools like linters, can be confusing and lead to errors.
To save tremendous time and confusion, we can use dev containers to create a standardized Python development environment across our class.
If we select a development container with one version of Python, we can keep our own computer’s environment intact as we don’t have to install any new versions of Python or uninstall any old ones, and we can ensure anyone else who runs our container and source code will also be able to run our application just as easily with the exact same results.
Prerequisites
•	Install Visual Studio Code.
•	Install Docker Desktop.
o	Docker is the industry standard for building and sharing containers. We recommend Docker Desktop Stable 2.3.0.3 as it is the most recent and performant version of Docker Desktop.
o	There is newly introduced Docker Desktop support on Windows Home. It requires Windows 10, version 2004 and enabling the Windows Subsystem for Linux 2 (WSL 2) backend. Enable WSL 2 by following the WSL 2 installation guide.
o	For students who would prefer to not configure the WSL 2 backend, Docker Desktop for Windows can alternatively be used on Windows 10 Pro, Enterprise, or Education (Build 16299 or later), and Hyper-V and Containers Windows features must be enabled.
Let’s start off by launching VS Code, which we can do by typing `code .` in the command prompt (or just by selecting VS Code on your computer):

Once VS Code launches, ensure you’ve installed the Remote - Containers extension:

When we install any of the Remote extensions, we’ll see the green Remote indicator on the bottom left of the Status bar:
 You can click on it to open the Command Palette and verify the Remote-Containers commands are listed:

Accessing a container for your class
Let’s walk through an example dev container to help students get a consistent coding environment. In our classroom, we could create a single GitHub repository to store exercises that share the same tech stack. For instance, all the Python assignments can use the same container and be stored in the same repo.
We have an example vscode-course-sample GitHub repo with a Python dev container and two Python intro assignments. Let’s open it in VS Code.
You can select the Remote indicator in the bottom left, or use the Command Palette, to bring up the Remote-Containers commands.
Let’s start off by calling, “Open Repository in Container...”

We need to enter the URL to the GitHub repo where our container is stored, which in our case is https://github.com/microsoft/vscode-course-sample:

You can “Create a unique volume.” A volume is where files will be stored in our container:

Now that we’ve chosen our container repo, VS Code reloads to build the image and start the container:


Once the container is built and running, we can see our files and starting coding within our Python environment!
Click on sort.py in the Explorer to open it, and press “F5” (or the green Run icon in the top right) to run it:


You can see our Python code ran successfully without ever having to set up Python on our local computer.

We can leverage the full benefits of VS Code, such as setting breakpoints to pause our program and help us debug. Let’s set a breakpoint when we sort our list of words.



We can run with “F5.” Notice the program stops once it hits the breakpoint:



Creating a container for your class
Now that we’ve seen a fantastic example of a container, let’s set up our first container ourselves using the Remote – Containers extension. I’m starting off in a basic “Hello World” Python application:

I’ll select Remote-Containers: Add Development Container Configuration Files… to begin setting up the files necessary for a development container:

Container configuration files are what’s needed to create and customize a development container. The list of container definitions that appears are filtered based on the contents of your application, which in our case is a Python file. Let’s select Python 3:

The Remote - Containers extension automatically adds a .devcontainer folder and two configuration files within it: devcontainer.json and a Dockerfile.

The Dockerfile defines what should be inside the container, while devcontainer.json describes how VS Code should start it, and what to do after it connects. Let’s take a closer look at both files.

devcontainer.json
`devcontainer.json` describes how VS Code should start our container and what to do after it connects. This file can be located under .devcontainer/devcontainer.json or stored directly as .devcontainer.json in the root of a project.

Here is a simple example of a devcontainer.json. It pulls a preconfigured Node image, automatically sets up port forwarding for port 3000, and will install the eslint extension when the container is created:

Here is an example of what a slightly more elaborate devcontainer.json looks like for our Python project. Note that it references a Dockerfile rather than an image directly using the `dockerfile` property, it installs the Python extension automatically, and it also establishes a set of container-specific settings once the container is created, such as linting:


 devcontainer.json is a great opportunity to create a customized coding environment to fit the specific needs of your students. You can specify a few variables to create a unique environment for each class or assignment.

Variables we’d recommend starting off with in a devcontainer.json for education are:




Setting up a handful of variables in this file will save your class time in the long run. For example, instead of having to provide an extensive list of extensions to install, or specifying an exact extension name and hoping all students grab the right one, you can use the `extensions` variable to ensure all your students automatically get the same set of extensions installed. Setting paths can also be challenging or lead to issues on students’ computers, but by specifying path information via the `settings` variable, you’ll save your class time and ensure they’re computers’ path variables aren’t harmed in the process.

We have a reference table here of all available properties you can include in this configuration file.

Dockerfile
Docker can build images automatically by reading the instructions from your Dockerfile. This file will at the very least have a base image specified using “FROM,” and it can include command-line instructions as well.
Here’s what the Dockerfile looks like in our Python app:

We technically didn’t need to use the Remote – Containers: Add Development Container Configuration Files… command- we could have created a .devcontainer folder and added a .devcontainer.json and Dockerfile to it. The great part of the Remote – Containers extension is that it has configuration files setup for us so that we can simply call a command and save even more time.
Editing Components
It’s a smooth process to make changes and customize your container configuration files.
You add the necessary configuration files (i.e. devcontainer.json), edit or customize them if you want, reopen your source code in the container, and that’s it!
This process, including error-handling, is expressed by the chart below:

Opening the container
Once our container configuration files were added, we got a notification from the extension indicating that our folder now contains a devcontainer.json file. Let’s select “Reopen in Container.” We can also select this option from the Command Palette (F1 > “Reopen in Container”):

A new instance of VS Code launches, and we can see our image is being built and our app is starting in our dev container:

Once our container is built, we can see we have all the same files present, but now the bottom left corner indicator reads, “Dev Container: Python 3,” signifying we’re inside our container:

We can select the green run button to run our code with ease, regardless of which version of Python we have installed on our local machine:

Creating and sharing assignments
Now that you have an application with a dev container, you can upload this to a repository in which your students can access it, such as GitHub. You could include assignment instructions in a README, any base or template code needed for the application, and then a .devcontainer. This can all be uploaded as a single project or repo.
Make sure you have Git installed. You can initialize a new Git repository from your container project in VS Code. Alternatively, you can use `git init` from your project’s directory in the command line.
Following the guide here, the next step is to connect your local repository to a new repo from the GitHub desktop client:

GitHub gives us some tips about how to add code to our newly created repo:

Let’s connect our local Git repo (the container project on our computer) to the remote repo (the GitHub repo we created in the browser):

You may be prompted to log into GitHub:

Once you log in, your files can be added to your remote Git repository:

Now when I refresh GitHub in the browser, I can see my files!

Accessing assignments
To see how students can access the dev container from GitHub and begin programming with ease, check out our quick 5 minute video <link to video>.
Feedback & further resources
To help set up VS Code with containers, we have detailed articles on the VS Code Remote Development documentation. If you have any questions or feedback for our team, please feel free to open an issue on the VS Code Remote Development GitHub Repository or Tweet us @code.
Happy Coding!