<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">PROMPTLOGGINGSYSTEM-BACKEND</h1>
</p>
<p align="center">
    <em>Empower Client Interactions with Seamless Proxy APIs!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/samyakmehta28/PromptLoggingSystem-backend?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/samyakmehta28/PromptLoggingSystem-backend?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/samyakmehta28/PromptLoggingSystem-backend?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/samyakmehta28/PromptLoggingSystem-backend?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/ClickHouse-FFCC01.svg?style=flat&logo=ClickHouse&logoColor=black" alt="ClickHouse">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<br>
	<img src="https://img.shields.io/badge/OpenAI-412991.svg?style=flat&logo=OpenAI&logoColor=white" alt="OpenAI">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat&logo=ts-node&logoColor=white" alt="tsnode">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running PromptLoggingSystem-backend](#-running-PromptLoggingSystem-backend)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

The PromptLoggingSystem-backend project orchestrates a logging system through a NestJS backend, enabling users to manage proxy API endpoints, interact with data stored in ClickHouse, and handle incoming HTTP requests efficiently. The system facilitates seamless data exchange between clients and the server, orchestrating API functionality, error handling, and end-to-end testing. By offering a structured architecture with modules like ProxyApi, AppController, and AppService, the project ensures robust functionality for logging, data querying, and API management within a cohesive backend framework.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | Backend project utilizing NestJS framework for RESTful APIs. Follows module-based structure with HTTP controllers, services, and entities. Utilizes TypeScript for type safety and scalability. |
| 🔩 | **Code Quality**  | Codebase maintains consistent coding styles and standards. Utilizes ESLint for static code analysis and Prettier for code formatting. Ensures clean, readable, and well-organized code. |
| 📄 | **Documentation** | Limited documentation. Some code comments present, but lacks detailed explanations and guides for developers. Improvement needed for better understanding and onboarding. |
| 🔌 | **Integrations**  | Integrates with external services like OpenAI and ClickHouse for API calls, data storage, and retrieval. Utilizes Axios for HTTP requests. Supports testing with Jest and Supertest. |
| 🧩 | **Modularity**    | Codebase is modular with separate modules for different functionalities. Encourages code reusability and maintainability. Dependencies are injected using NestJS dependency injection mechanism. |
| 🧪 | **Testing**       | Testing performed using Jest framework with @nestjs/testing utilities for unit and integration testing. Defines test suites and end-to-end tests using Supertest for HTTP assertion. |
| ⚡️  | **Performance**   | Performance optimized through efficient API handling and data processing. Implements clickhouse for data storage and retrieval, ensuring fast query operations. Room for optimization based on load testing. |
| 🛡️ | **Security**      | Security measures include input validation and error handling to prevent injection attacks. Built-in authentication and authorization mechanisms can enhance data protection. Requires further validation and security checks. |
| 📦 | **Dependencies**  | Key dependencies include NestJS, TypeScript, ClickHouse client, Axios, Jest for testing, and various libraries for HTTP requests, logging, and data manipulation. |
| 🚀 | **Scalability**   | Scalable architecture capable of handling increased traffic and load. Utilizes NestJS asynchronous features for non-blocking operations. Ensures scalability by leveraging TypeScript for maintainability and extension. |


---

##  Repository Structure

```sh
└── PromptLoggingSystem-backend/
    ├── README.md
    ├── dist
    │   ├── app.controller.d.ts
    │   ├── app.controller.js
    │   ├── app.controller.js.map
    │   ├── app.module.d.ts
    │   ├── app.module.js
    │   ├── app.module.js.map
    │   ├── app.service.d.ts
    │   ├── app.service.js
    │   ├── app.service.js.map
    │   ├── http-exception.filter.d.ts
    │   ├── http-exception.filter.js
    │   ├── http-exception.filter.js.map
    │   ├── main.d.ts
    │   ├── main.js
    │   ├── main.js.map
    │   ├── proxy-api
    │   │   ├── clickhouse.service.d.ts
    │   │   ├── clickhouse.service.js
    │   │   ├── clickhouse.service.js.map
    │   │   ├── dto
    │   │   │   ├── QueryParams.dto.d.ts
    │   │   │   ├── QueryParams.dto.js
    │   │   │   ├── QueryParams.dto.js.map
    │   │   │   ├── create-proxy-api.dto.d.ts
    │   │   │   ├── create-proxy-api.dto.js
    │   │   │   ├── create-proxy-api.dto.js.map
    │   │   │   ├── update-proxy-api.dto.d.ts
    │   │   │   ├── update-proxy-api.dto.js
    │   │   │   └── update-proxy-api.dto.js.map
    │   │   ├── entities
    │   │   │   ├── proxy-api.entity.d.ts
    │   │   │   ├── proxy-api.entity.js
    │   │   │   └── proxy-api.entity.js.map
    │   │   ├── openaiService.d.ts
    │   │   ├── openaiService.js
    │   │   ├── openaiService.js.map
    │   │   ├── proxy-api.controller.d.ts
    │   │   ├── proxy-api.controller.js
    │   │   ├── proxy-api.controller.js.map
    │   │   ├── proxy-api.module.d.ts
    │   │   ├── proxy-api.module.js
    │   │   ├── proxy-api.module.js.map
    │   │   ├── proxy-api.service.d.ts
    │   │   ├── proxy-api.service.js
    │   │   ├── proxy-api.service.js.map
    │   │   ├── responseAPIUtils.service.d.ts
    │   │   ├── responseAPIUtils.service.js
    │   │   └── responseAPIUtils.service.js.map
    │   └── tsconfig.build.tsbuildinfo
    ├── nest-cli.json
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app.controller.spec.ts
    │   ├── app.controller.ts
    │   ├── app.module.ts
    │   ├── app.service.ts
    │   ├── http-exception.filter.ts
    │   ├── main.ts
    │   └── proxy-api
    │       ├── clickhouse.service.ts
    │       ├── dto
    │       │   ├── QueryParams.dto.ts
    │       │   ├── create-proxy-api.dto.ts
    │       │   └── update-proxy-api.dto.ts
    │       ├── entities
    │       │   └── proxy-api.entity.ts
    │       ├── openaiService.ts
    │       ├── proxy-api.controller.spec.ts
    │       ├── proxy-api.controller.ts
    │       ├── proxy-api.module.ts
    │       ├── proxy-api.service.spec.ts
    │       ├── proxy-api.service.ts
    │       └── responseAPIUtils.service.ts
    ├── test
    │   ├── app.e2e-spec.ts
    │   └── jest-e2e.json
    ├── tsconfig.build.json
    └── tsconfig.json
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                                                | Summary                                                                                                                                                                                                                            |
| ---                                                                                                                 | ---                                                                                                                                                                                                                                |
| [tsconfig.build.json](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/tsconfig.build.json) | Code Summary:** `proxy-api.controller.ts` manages proxy API endpoints' actions within the system, facilitating client interactions and data retrieval. Interface separation ensures clear endpoint implementation.                 |
| [tsconfig.json](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/tsconfig.json)             | Code snippet in `proxy-api` module facilitates data exchange between client and server, handling API requests and responses within the main application structure.                                                                 |
| [package.json](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/package.json)               | Code snippet in `proxy-api.module.ts` manages Proxy API functionality within the backend system. It orchestrates services, controllers, and entities related to proxy APIs, ensuring seamless interaction within the architecture. |
| [nest-cli.json](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/nest-cli.json)             | Code snippet in `proxy-api.controller.ts` handles incoming API requests for the Proxy API module in the backend system. It orchestrates interactions with the data layer and responds with processed API results.                  |
| [package-lock.json](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/package-lock.json)     | Code snippet in `app.controller.js` handles HTTP requests for the logging system. It encapsulates logic to manage incoming requests related to logging functionality within the backend architecture of the repository.            |

</details>

<details closed><summary>test</summary>

| File                                                                                                             | Summary                                                                                                                                                                                                                    |
| ---                                                                                                              | ---                                                                                                                                                                                                                        |
| [app.e2e-spec.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/test/app.e2e-spec.ts) | Code snippet in `test/app.e2e-spec.ts` conducts end-to-end testing for the `AppController` using NestJS. It initializes the app, sends a GET request to root, expecting a 200 status with Hello World! response.           |
| [jest-e2e.json](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/test/jest-e2e.json)     | Code snippet in `test/jest-e2e.json` configures Jest for end-to-end testing in the parent repository's architecture. It defines file extensions, test environment, regex pattern, and transformation for TypeScript files. |

</details>

<details closed><summary>src</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                                           |
| ---                                                                                                                               | ---                                                                                                                                                                                                                                                               |
| [http-exception.filter.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/http-exception.filter.ts) | Code in src/http-exception.filter.ts handles HTTP exceptions in the NestJS backend. It catches and returns status code and message to the client.                                                                                                                 |
| [app.controller.spec.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/app.controller.spec.ts)     | Code Snippet Summary:**Tests the `AppController` component in backend `PromptLoggingSystem` repository using NestJS framework. Ensures the `getHello()` function returns Hello World!.                                                                            |
| [app.module.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/app.module.ts)                       | Summary: The `AppModule` in the repository orchestrates app-level components like controllers and services, utilizing key features such as dependency injection and validation handling. Integrates with `ProxyApiModule` for broader functionality.              |
| [main.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/main.ts)                                   | Summary:** `main.ts` in `PromptLoggingSystem-backend` creates a NestJS app, applies an HTTP exception filter globally, and starts the server on a specified port for error handling.                                                                              |
| [app.controller.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/app.controller.ts)               | Summary:** The code snippet defines a controller using NestJS framework to handle GET requests. It relies on the `AppService` to fetch and return a greeting message. It plays a crucial role in designing the backend structure for the logging system project.  |
| [app.service.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/app.service.ts)                     | Summary:**The file `app.service.ts` in the `PromptLoggingSystem-backend` repository defines an `AppService` class providing a method to retrieve a greeting message. This module supports the application's core functionality in handling service-related tasks. |

</details>

<details closed><summary>src.proxy-api</summary>

| File                                                                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                                                                 | ---                                                                                                                                                                                                                                                                                                                                        |
| [proxy-api.service.spec.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/proxy-api.service.spec.ts)       | Code snippet: Tests the ProxyApiService within the NestJS testing framework to ensure its proper definition.Role: Validates the functionality and integrity of the ProxyApiService in the application architecture.Features: Utilizes NestJS testing utilities to confirm the correct instantiation and definition of the ProxyApiService. |
| [openaiService.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/openaiService.ts)                         | Code Summary:** `OpenAIService` in |src/proxy-api/openaiService.ts| facilitates calls to OpenAI API. Key features include model selection, message formatting, and returning results. Integrates with OpenAI using specified parameters.                                                                                                   |
| [proxy-api.service.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/proxy-api.service.ts)                 | The `ProxyApiService` class in `proxy-api.service.ts` orchestrates API calls, data storage in ClickHouse, and querying datasets in the `PromptLoggingSystem-backend` repository. Key functions: create API calls and store responses, query datasets, and calculate token metrics.                                                         |
| [proxy-api.controller.spec.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/proxy-api.controller.spec.ts) | Summary: Test suite for ProxyApiController ensuring its definition within the NestJS framework. Validates the correct instantiation of ProxyApiController and its associated service.                                                                                                                                                      |
| [proxy-api.module.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/proxy-api.module.ts)                   | ProxyApiModule** facilitates **ProxyAPI** functionality in the **PromptLoggingSystem**. It orchestrates services like ProxyApiService, OpenAIService, ClickHouseService, and ResponseApiService.                                                                                                                                           |
| [proxy-api.controller.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/proxy-api.controller.ts)           | Code snippet: **ProxyApiController** manages proxy API endpoints in NestJS app, utilizing `CreateProxyApiDto` and `QueryParamsDto` for creating, retrieving, and handling metric data with service methods. It includes error handling for bad requests.                                                                                   |
| [clickhouse.service.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/clickhouse.service.ts)               | Code snippet: `ClickHouseService` class in `src/proxy-api/clickhouse.service.ts`Role: Manages storage and retrieval of data from ClickHouse dataset.Features: Stores data with POST req, queries data with GET req based on filters and time period, calculates total input and output tokens.                                             |
| [responseAPIUtils.service.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/responseAPIUtils.service.ts)   | Code Summary**:Handles creation and updates for a ResponseAPI object based on input DTO. Tracks token counts and response status. Implements service functions for successful and failed updates.                                                                                                                                          |

</details>

<details closed><summary>src.proxy-api.entities</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                               |
| ---                                                                                                                                        | ---                                                                                                                                                                                                   |
| [proxy-api.entity.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/entities/proxy-api.entity.ts) | Code: `export class ProxyApi {}`Role: Data model for Proxy API in the backend system.Features: Defines structure for Proxy API entity.Architecture: Corresponds to Proxy API entity model in backend. |

</details>

<details closed><summary>src.proxy-api.dto</summary>

| File                                                                                                                                          | Summary                                                                                                                                                                                             |
| ---                                                                                                                                           | ---                                                                                                                                                                                                 |
| [create-proxy-api.dto.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/dto/create-proxy-api.dto.ts) | Summary:** `create-proxy-api.dto.ts` defines `CreateProxyApiDto` with `prompt` and `metadata` including `user`, `environment`, and `model` for parent repository's API proxy creation architecture. |
| [QueryParams.dto.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/dto/QueryParams.dto.ts)           | Code Summary:** `src/proxy-api/dto/QueryParams.dto.ts` defines `QueryParamsDto` with `FiltersDto` for filtering data based on query parameters in the `PromptLoggingSystem-backend` repository.     |
| [update-proxy-api.dto.ts](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/master/src/proxy-api/dto/update-proxy-api.dto.ts) | Code Summary:**`UpdateProxyApiDto` extends `CreateProxyApiDto` using `PartialType`. Manages partial updates for proxy APIs in the parent repository's architecture.                                 |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **TypeScript**: `version x.y.z`

###  Installation

1. Clone the PromptLoggingSystem-backend repository:

```sh
git clone https://github.com/samyakmehta28/PromptLoggingSystem-backend
```

2. Change to the project directory:

```sh
cd PromptLoggingSystem-backend
```

3. Install the dependencies:

```sh
npm install
```

###  Running PromptLoggingSystem-backend

Use the following command to run PromptLoggingSystem-backend:

```sh
npm run build && node dist/main.js
```

###  Tests

To execute tests, run:

```sh
npm test
```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/samyakmehta28/PromptLoggingSystem-backend/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/samyakmehta28/PromptLoggingSystem-backend/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/samyakmehta28/PromptLoggingSystem-backend/issues)**: Submit bugs found or log feature requests for Promptloggingsystem-backend.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/samyakmehta28/PromptLoggingSystem-backend
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
