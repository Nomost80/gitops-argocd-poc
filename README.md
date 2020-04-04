![Main](https://github.com/Nomost80/gitops-argocd-poc/workflows/Main/badge.svg) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/6030ec098dce4363bfb9c969044cd4de)](https://www.codacy.com/manual/Nomost80/gitops-argocd-poc?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Nomost80/gitops-argocd-poc&amp;utm_campaign=Badge_Grade) [![codecov](https://codecov.io/gh/Nomost80/gitops-argocd-poc/branch/master/graph/badge.svg)](https://codecov.io/gh/Nomost80/gitops-argocd-poc)

# What?
This project is a gitops proof of concept with multiple environments by using [ArgoCD](https://github.com/argoproj/argo-cd). 
By the way, I wanted to test Github Actions and some tools like trivy, snyk, codecov, chart-testing...

Below is the deployment architecture diagram:
![Architecture](./resources/gitops-poc.png)

# Todo
- [ ] Add automatic canary release
- [ ] Improve chart

# GitHub Actions
Give attention to these future hypothetic features which would make GA more attractive to my eyes:
* YAML anchors
* Private github actions
* Reusable workflows/jobs ?
* Working directory at job level
* Custom labels on self hosted runners
* CI skip
* Repository dispatch not only on master