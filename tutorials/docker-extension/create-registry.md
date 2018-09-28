---
Order: 2
Area: docker
TOCTitle: Create a registry
PageTitle: Create a container registry
MetaDescription: Create a container registry for deploying Docker containers to Azure App Services with Visual Studio Code
DateApproved: 09/27/2018
---
# Create an Azure container registry

A *registry* is an online repository for container images that allows a cloud service, like Azure App Service, to acquire the image whenever it needs to start a container instance. Because the registry manages images separate from container instances, the same image in a registry can be used to start any number of concurrent instances, as happens when scaling out a web app to handle increased loads.

Registry options include the following:

- The [Azure Container Registry (ACR)](https://azure.microsoft.com/services/container-registry/), a private, secure, hosted registry for your images.
- [Docker Hub](https://hub.docker.com/), Docker's own hosted registry that provides a free way to share images.
- A private registry running on your own server, ad described on [Docker registry](https://docs.docker.com/registry/) in the Docker documentation.

To deploy a container to App Service involves the intermediate step of pushing that image to a registry. Because creating a registry is a one-time affair, you can do that step now before creating your first image.

To create an  Azure Container Registry, as shown in this tutorial, do the following:

1. Follow the first part of [Quickstart: Create a container registry using the Azure portal](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal) through the "Log in to ACR" section. You don't need to complete the sections "Push image to ACR" and later because you do those steps within VS Code as part of this tutorial.

1. Make sure that the registry endpoint you created is visible under **Registries** in the **Docker** explorer of VS Code:

    ![Docker explorer in VS Code showing registries](../images/docker-extension/registries.png)

----

<a class="tutorial-next-btn" href="/tutorials/docker-extension/containerize-app">I've created a registry</a>
<a class="tutorial-feedback-btn" onclick="reportIssue('docker-extension', 'getting-started')" href="javascript:void(0)">I ran into an issue</a>
